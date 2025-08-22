import { web3, Program, AnchorProvider, Wallet } from '@coral-xyz/anchor';
import { PublicKey } from '@solana/web3.js';
import Decimal from 'decimal.js';
import RatexContractsIDLFile from './ratex.v2.idl.json';
import { SourceStreamFactory } from '.';
import { RPCClient } from '../../../rpc';
import { RatexContracts } from './ratex.v2.idl';
import { RestakingProgram } from '@fragmetric-labs/sdk';

const D2_64 = new Decimal(2).pow(64);

export const ratexV2YieldTrading: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);

  const market = new web3.PublicKey(opts.args[0]);
  const inputToken = new web3.PublicKey(opts.args[1]);

  const marketAccountInfo = await rpc.v1.getAccountInfo(market);
  if (!marketAccountInfo) {
    throw new Error('failed to find yield market account info');
  }

  RatexContractsIDLFile.address = marketAccountInfo.owner.toBase58();
  const rateXProgram = new Program(
    RatexContractsIDLFile as RatexContracts,
    new AnchorProvider(rpc.v1, new Wallet(new web3.Keypair())),
  );

  const restaking = RestakingProgram.connect({
    cluster: rpc.cluster,
    rpc: rpc.v2 as any,
    rpcSubscriptions: null as any,
  });
  let receiptToken = restaking.fragSOL;
  switch (inputToken.toString()) {
    case 'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U':
      receiptToken = restaking.fragSOL;
      break;
    case 'WFRGJnQt5pK8Dv4cDAbrSsgPcmboysrmX3RYhmRRyTR':
      receiptToken = restaking.fragJTO;
      break;
    case 'WFRGB49tP8CdKubqCdt5Spo2BdGS4BpgoinNER5TYUm':
      receiptToken = restaking.fragBTC;
      break;
  }
  if ((await receiptToken.wrappedTokenMint.resolveAddress()) != inputToken.toString()) {
    throw new Error('failed to find matched fragmetric receipt token from given input token');
  }

  await receiptToken.resolveAccount();
  const inputTokenDecimals = receiptToken.account!.data.decimals;

  // oracle
  const yieldMarket = await (rateXProgram.account as any).yieldMarket.fetch(market);
  const oraclePubkey: PublicKey = new web3.PublicKey(yieldMarket.oracle);
  const oracle = await (rateXProgram.account as any).oracle.fetch(oraclePubkey);
  const oracleRate = new Decimal(oracle.rate.toString());

  const lps = await getLpsTokens({ rateXProgram, market, marketData: yieldMarket, oracleRate });
  const traders = await getTradersTokens({ rateXProgram, market, marketData: yieldMarket });
  const baseTokenBalances = await calcBaseTokenBalances({
    oracleRate,
    inputTokenDecimals,
    lps,
    traders,
  });

  process.nextTick(async () => {
    try {
      for (const baseTokenBalance of baseTokenBalances) {
        opts.produceSnapshot({
          owner: baseTokenBalance.owner,
          baseTokenBalance: Number(baseTokenBalance.baseTokenBalance),
        });
      }
    } catch (err) {
      opts.close(err as Error);
      return;
    }
    opts.close();
  });
};

/** Compute token amounts from concentrated-liquidity formula */
function getTokenAmountsFromLiquidity(opts: {
  liquidity: Decimal; // L
  currentSqrtPrice: Decimal; // Pc (no 2^64 scale)
  lowerSqrtPrice: Decimal; // Pl
  upperSqrtPrice: Decimal; // Pu
  roundUp?: boolean;
}): [Decimal, Decimal] /* [tokenA, tokenB] */ {
  const {
    liquidity: L,
    currentSqrtPrice: Pc,
    lowerSqrtPrice: Pl,
    upperSqrtPrice: Pu,
    roundUp,
  } = opts;
  let tokenA = new Decimal(0),
    tokenB = new Decimal(0);
  if (Pc < Pl) {
    tokenA = L.mul(Pu.sub(Pl)).div(Pl.mul(Pu));
  } else if (Pc < Pu) {
    tokenA = L.mul(Pu.sub(Pc)).div(Pc.mul(Pu));
    tokenB = L.mul(Pc.sub(Pl));
  } else {
    tokenB = L.mul(Pu.sub(Pl));
  }
  return [roundUp ? tokenA.ceil() : tokenA, roundUp ? tokenB.ceil() : tokenB];
}

export async function getLpsTokens({
  rateXProgram,
  market,
  marketData,
  oracleRate,
}: {
  rateXProgram: Program<RatexContracts>;
  market: PublicKey;
  marketData: any;
  oracleRate: Decimal;
}): Promise<{ owner: string; lp_yt_amount: bigint; lp_st_amount: bigint }[]> {
  const results = [];

  // fetch lp account
  const lps = await (rateXProgram.account as any).lp.all();
  for (const lpAccount of lps) {
    const lp = lpAccount.account;
    const yieldMarketPubkey: PublicKey = new web3.PublicKey(lp.ammpool);
    if (yieldMarketPubkey.toString() !== market.toString()) continue;

    // unified position (ratio / settled amounts) — mirrors your Python
    const unifiedPositionPubkey: PublicKey = new web3.PublicKey(lp.position);
    const unifiedPosition = await (rateXProgram.account as any).unifiedPosition.fetch(
      unifiedPositionPubkey,
    );

    // last snapshot & reserves on LP
    const lastRate = new Decimal(lp.lastRate.toString());
    const lastLiquidity = new Decimal(lp.lastLiquidity.toString()); // u128
    const lastRatio = new Decimal(lp.lastRatio.toString()); // u64
    const reserveQuoteAmount = new Decimal(lp.reserveQuoteAmount.toString()); // i64
    const reserveBaseAmount = new Decimal(lp.reserveBaseAmount.toString()); // i64

    const ratio = new Decimal(unifiedPosition.ratio.toString());
    const settledBaseAmount = new Decimal(unifiedPosition.settledBaseAmount.toString());
    const settledQuoteAmount = new Decimal(unifiedPosition.settledQuoteAmount.toString());

    // yield market + pool state
    const liquidity = new Decimal(marketData.pool.liquidity.toString());
    const sqrtPriceU128 = new Decimal(marketData.pool.sqrtPrice.toString());

    // ===== math (ported 1:1 from Python) =====
    const curLpLiquidity = lastLiquidity.mul(ratio).div(lastRatio).floor();

    const reserveBaseEquivalent = reserveBaseAmount.add(
      curLpLiquidity.mul(settledBaseAmount).div(liquidity).floor(),
    );

    // rebase ~ int(((rq*or/lr - rq) + (rb*or/lr - rb)) * 0.95)
    const rebasedQuote = reserveQuoteAmount
      .mul(oracleRate.div(lastRate).sub(1))
      .add(reserveBaseAmount.mul(oracleRate.div(lastRate).sub(1)))
      .mul(0.95)
      .floor();

    const reserveQuoteEquivalent = reserveQuoteAmount
      .add(rebasedQuote)
      .add(curLpLiquidity.mul(settledQuoteAmount).div(liquidity).floor());

    // price math
    const tickLowerIndex = Number(unifiedPosition.tickLowerIndex);
    const tickUpperIndex = Number(unifiedPosition.tickUpperIndex);
    const lowerSqrtPrice = new Decimal(1.0001).pow(tickLowerIndex / 2);
    const upperSqrtPrice = new Decimal(1.0001).pow(tickUpperIndex / 2);
    const currentSqrtPrice = sqrtPriceU128.div(D2_64);

    const [tokenA, tokenB] = getTokenAmountsFromLiquidity({
      liquidity: curLpLiquidity,
      currentSqrtPrice,
      lowerSqrtPrice,
      upperSqrtPrice,
      roundUp: true,
    });

    const lpYtAmount = reserveBaseEquivalent.add(tokenA).round();
    const lpStAmount = reserveQuoteEquivalent.add(tokenB).round();

    results.push({
      owner: lp.authority.toBase58(),
      lp_yt_amount: BigInt(lpYtAmount.toFixed(0)),
      lp_st_amount: BigInt(lpStAmount.toFixed(0)),
    });
  }

  return results;
}

export async function getTradersTokens({
  rateXProgram,
  market,
  marketData,
}: {
  rateXProgram: Program<RatexContracts>;
  market: PublicKey;
  marketData: any;
}): Promise<{ owner: string; trader_yt_amount: bigint; trader_st_amount: bigint }[]> {
  const results = [];

  const users = await (rateXProgram.account as any).user.all();
  const allYieldMarkets = await (rateXProgram.account as any).yieldMarket.all();
  for (const userAccount of users) {
    const user = userAccount.account;
    const pos = (user.yieldPositions as Array<any>).find(
      (yp) => yp.marketIndex === marketData.marketIndex,
    );
    if (!pos) {
      results.push({
        owner: user.authority.toBase58(),
        trader_yt_amount: 0n,
        trader_st_amount: 0n,
      });
      continue;
    }

    const baseAssetAmount = new Decimal(pos.baseAssetAmount.toString());
    const quoteAssetAmount = new Decimal(pos.quoteAssetAmount.toString());
    const lastRate = new Decimal(pos.lastRate.toString());
    const posMarketIndex: number = Number(pos.marketIndex);

    // find the yield market by marketIndex
    const ym = allYieldMarkets.find((x: any) => x.account.marketIndex === posMarketIndex);
    if (!ym) throw new Error(`YieldMarket not found for index=${posMarketIndex}`);
    if (ym.publicKey.toString() !== market.toString()) continue;

    const oracle = await (rateXProgram.account as any).oracle.fetch(ym.account.oracle);
    const oracleRate = new Decimal(oracle.rate.toString());

    const traderYt = baseAssetAmount;
    const traderSt = quoteAssetAmount
      .add(baseAssetAmount.add(quoteAssetAmount).mul(oracleRate.div(lastRate).sub(1)).mul(0.95))
      .round();

    results.push({
      owner: user.authority.toBase58(),
      trader_yt_amount: BigInt(traderYt.toFixed(0)),
      trader_st_amount: BigInt(traderSt.toFixed(0)),
    });
  }

  return results;
}

export async function calcBaseTokenBalances({
  oracleRate,
  inputTokenDecimals,
  lps,
  traders,
}: {
  oracleRate: Decimal;
  inputTokenDecimals: number;
  lps: { owner: string; lp_yt_amount: bigint; lp_st_amount: bigint }[];
  traders: { owner: string; trader_yt_amount: bigint; trader_st_amount: bigint }[];
}): Promise<{ owner: string; baseTokenBalance: bigint }[]> {
  const balancesByOwner = new Map<string, bigint>();

  for (const lp of lps) {
    const lpBalance =
      ((lp.lp_yt_amount + lp.lp_st_amount) * BigInt(10 ** inputTokenDecimals)) /
      BigInt(oracleRate.toString());
    const currentBalance = balancesByOwner.get(lp.owner) ?? 0n;
    balancesByOwner.set(lp.owner, currentBalance + lpBalance);
  }

  for (const trader of traders) {
    const traderBalance =
      ((trader.trader_yt_amount + trader.trader_st_amount) * BigInt(10 ** inputTokenDecimals)) /
      BigInt(oracleRate.toString());
    const currentBalance = balancesByOwner.get(trader.owner) ?? 0n;
    balancesByOwner.set(trader.owner, currentBalance + traderBalance);
  }

  return Array.from(balancesByOwner.entries()).map(([owner, baseTokenBalance]) => ({
    owner,
    baseTokenBalance,
  }));
}
