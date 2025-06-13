import * as web3 from '@solana/web3.js';
import { AnchorProvider, Program, Wallet, BN } from '@coral-xyz/anchor';
import { SourceStreamFactory } from './index';
import { RPCClient } from '../../../rpc';
import { ExponentCore } from './exponent.idl';
import ExponentCoreIDLFile from './exponent.idl.json';
import { RestakingProgram } from '@fragmetric-labs/sdk';
import Decimal from 'decimal.js';
import AmmImpl from '@meteora-ag/dynamic-amm-sdk';

const EXPONENT_METEORA_MARKET_ADDRS = [
  'GZ5ZaP3D9qSQ4R4ob2NPP7TXEnjZmYgN916NGvr8gg16', // Exponent MLP wfragSOL-JitoSOL DAMM pool
  '5dzopBMvCi6U3CpC9SdjE88A2gQT4ZgKPrjRZnaoPRV2', // Exponent MLP wfragJTO-JTO DAMM pool
];
const METEORA_DAMM_POOL_ADDR: Record<string, string> = {
  WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U: 'iMTNY8mkASoED5kmGFrmbJXmV4GpWuhn92JRYGEMUuV', // wfragSOL : Meteora wfragSOL-JitoSOL DAMM pool
  WFRGJnQt5pK8Dv4cDAbrSsgPcmboysrmX3RYhmRRyTR: 'AZnMR3v5VvAFtVTLQGwEcgAZxim1E8wYmDunDp9FyKRd', // wfragJTO : Meteora wfragJTO-JTO DAMM pool
};

// args: exponent yield market address, input token mint
export const exponentYieldTrading: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);

  const market = new web3.PublicKey(opts.args[0]);
  const inputToken = new web3.PublicKey(opts.args[1]);

  const exponentCoreProgram = new Program(
    ExponentCoreIDLFile as ExponentCore,
    new AnchorProvider(rpc.v1, new Wallet(web3.Keypair.generate())),
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
  await receiptToken.resolve();

  const receiptTokenOneTokenAsSOL = new Decimal(
    receiptToken.fund.account!.data.oneReceiptTokenAsSol.toString(),
  );
  const baseSupportedTokenOneTokenAsSOL =
    receiptToken == restaking.fragSOL
      ? Decimal.pow(10, 9)
      : new Decimal(receiptToken.fund.account!.data.supportedTokens[0].oneTokenAsSol.toString());
  const balances = await getBalancesForVault(exponentCoreProgram, market);

  process.nextTick(async () => {
    try {
      const syProportionsMap: { [owner: string]: Decimal } = {}; // owner -> amount map
      for (const balance of balances.syProportions) {
        syProportionsMap[balance.owner] = new Decimal(balance.amount);
      }

      if (!isMeteoraMarket({ market })) {
        for (const yt of balances.ytBalances) {
          const ytAmount = new Decimal(yt.amount);

          // how to map YT value to receipt token value?
          // 1. if the receipt token is fragSOL, assume yt value is based on SOL.
          // 2. otherwise, assume yt value is based on first supported token: JTO for fragJTO, zBTC(~=BTC) for fragBTC.
          const ytValue = ytAmount
            .mul(baseSupportedTokenOneTokenAsSOL)
            .div(receiptTokenOneTokenAsSOL)
            .floor();

          const syValue = syProportionsMap[yt.owner] ?? new Decimal(0);
          delete syProportionsMap[yt.owner];

          opts.produceSnapshot({
            owner: yt.owner.toString(),
            baseTokenBalance: ytValue.plus(syValue).round().toNumber(),
          });
        }
      } else {
        // then it would be meteora's
        const dammPoolAddr = new web3.PublicKey(METEORA_DAMM_POOL_ADDR[inputToken.toString()]);
        // @ts-ignore
        const dammPool = await AmmImpl.create(rpc.v1, dammPoolAddr);

        const tokenA = dammPool.tokenAMint;
        const tokenB = dammPool.tokenBMint;

        for (const yt of balances.ytBalances) {
          const ytAmount = new Decimal(yt.amount);
          const ytValue = ytAmount.div(dammPool.poolInfo.virtualPrice).floor();

          const syValue = syProportionsMap[yt.owner] ?? new Decimal(0);
          delete syProportionsMap[yt.owner];

          const mlpAmount = ytValue.plus(syValue).round().toNumber();

          // MLP -> wfrag token amount
          const withdrawQuoteBothTokens = dammPool.getWithdrawQuote(new BN(mlpAmount), 0);

          if (tokenA.address.toString() == inputToken.toString()) {
            const supportedAsset = receiptToken.fund.account!.data.supportedTokens.find(
              (token) => token.mint == tokenB.address.toString(),
            );
            if (!supportedAsset) {
              throw new Error('failed to find matched fragmetric supported token from given token');
            }

            const tokenBOneTokenAsSol = new Decimal(supportedAsset.oneTokenAsSol.toString());

            opts.produceSnapshot({
              owner: yt.owner.toString(),
              // tokenB -> tokenA
              baseTokenBalance: new Decimal(withdrawQuoteBothTokens.tokenAOutAmount.toString())
                .add(
                  new Decimal(withdrawQuoteBothTokens.tokenBOutAmount.toString())
                    .mul(tokenBOneTokenAsSol.div(receiptTokenOneTokenAsSOL))
                    .floor(),
                )
                .toNumber(),
            });
          } else if (tokenB.address.toString() == inputToken.toString()) {
            const supportedAsset = receiptToken.fund.account!.data.supportedTokens.find(
              (token) => token.mint == tokenA.address.toString(),
            );
            if (!supportedAsset) {
              throw new Error('failed to find matched fragmetric supported token from given token');
            }

            const tokenAOneTokenAsSol = new Decimal(supportedAsset.oneTokenAsSol.toString());

            opts.produceSnapshot({
              owner: yt.owner.toString(),
              // tokenA -> tokenB
              baseTokenBalance: new Decimal(withdrawQuoteBothTokens.tokenBOutAmount.toString())
                .add(
                  new Decimal(withdrawQuoteBothTokens.tokenAOutAmount.toString())
                    .mul(tokenAOneTokenAsSol.div(receiptTokenOneTokenAsSOL))
                    .floor(),
                )
                .toNumber(),
            });
          } else {
            throw new Error('invalid meteora pool');
          }
        }
      }

      for (const [syOwner, syAmount] of Object.entries(syProportionsMap)) {
        opts.produceSnapshot({
          owner: syOwner,
          baseTokenBalance: syAmount.round().toNumber(),
        });
      }
    } catch (error) {
      opts.close(error as Error);
      return;
    }
    opts.close();
  });
};

function isMeteoraMarket({ market }: { market: web3.PublicKey }) {
  return EXPONENT_METEORA_MARKET_ADDRS.includes(market.toString());
}

interface YtAccount {
  owner: web3.PublicKey;
  ytBalance: bigint;
}

async function getYtAccounts({
  exponentCoreProgram,
  vaultAddress,
  expirationTs,
}: {
  exponentCoreProgram: Program<ExponentCore>;
  vaultAddress: web3.PublicKey;
  expirationTs: number;
}) {
  const ytAccounts = await exponentCoreProgram.account.yieldTokenPosition.all([
    { memcmp: { offset: 40, bytes: vaultAddress.toBase58() } },
  ]);

  const currentDate = new Date();
  const expirationDate = new Date(expirationTs * 1000);

  return ytAccounts.reduce((acc: YtAccount[], a) => {
    if (currentDate < expirationDate && a.account.vault.equals(vaultAddress)) {
      acc.push({
        owner: a.account.owner,
        ytBalance: BigInt(a.account.ytBalance.toString()),
      });
    }
    return acc;
  }, []);
}

async function getMintYt({
  exponentCoreProgram,
  mintSy,
}: {
  exponentCoreProgram: Program<ExponentCore>;
  mintSy: web3.PublicKey;
}) {
  const vaults = await exponentCoreProgram.account.vault.all([
    { memcmp: { offset: 40, bytes: mintSy.toBase58() } },
  ]);

  return Promise.all(
    vaults
      .filter((v) => v.account.mintSy.equals(mintSy))
      .map(async (v) => {
        const mintInfo = await exponentCoreProgram.provider.connection.getAccountInfo(
          v.account.mintYt,
        );
        if (!mintInfo) throw new Error('Mint not found');

        const data = Buffer.from(mintInfo.data);
        const decimals = data[44];

        return {
          mintYt: v.account.mintYt,
          decimals,
        };
      }),
  ).then((res) => res[0]);
}

export async function getBalancesForVault(
  exponentCoreProgram: Program<ExponentCore>,
  marketAddress: web3.PublicKey,
) {
  const marketData = await getMarketAndLpSupply({
    exponentCoreProgram,
    marketAddress,
  });

  const [ytAccounts, lpAccounts] = await Promise.all([
    getYtAccounts({
      exponentCoreProgram,
      vaultAddress: marketData.vault,
      expirationTs: marketData.marketExpirationTs,
    }),
    getLpAccounts({
      exponentCoreProgram,
      marketAddress,
    }),
  ]);

  return {
    ytBalances: ytAccounts.map((account) => ({
      owner: account.owner.toString(),
      amount: account.ytBalance.toString(),
    })),
    syProportions: lpAccounts.map((account) => ({
      owner: account.owner.toString(),
      amount: calculateSyProportionFromLp({
        lpBalance: account.lpBalance,
        marketLiquditySy: marketData.syBalance,
        lpSupply: marketData.lpSupply,
      }).toString(),
    })),
    mintYt: await getMintYt({
      exponentCoreProgram,
      mintSy: marketData.mintSy,
    }),
  };
}

async function getMarketAndLpSupply({
  exponentCoreProgram,
  marketAddress,
}: {
  exponentCoreProgram: Program<ExponentCore>;
  marketAddress: web3.PublicKey;
}) {
  const market = await exponentCoreProgram.account.marketTwo.fetch(marketAddress);
  const lpMintInfo = await exponentCoreProgram.provider.connection.getAccountInfo(market.mintLp);
  if (!lpMintInfo) throw new Error('LP mint not found');

  const data = Buffer.from(lpMintInfo.data);
  const lpSupply = data.readBigUInt64LE(36);

  return {
    syBalance: BigInt(market.financials.syBalance.toString()),
    mintSy: market.mintSy,
    lpSupply: lpSupply,
    vault: market.vault,
    marketExpirationTs: market.financials.expirationTs,
  };
}

async function getLpAccounts({
  exponentCoreProgram,
  marketAddress,
}: {
  exponentCoreProgram: Program<ExponentCore>;
  marketAddress: web3.PublicKey;
}) {
  const lpPositionAccounts = await exponentCoreProgram.account.lpPosition.all([
    { memcmp: { offset: 40, bytes: marketAddress.toBase58() } },
  ]);

  return lpPositionAccounts
    .filter((a) => a.account.market.equals(marketAddress))
    .map((a) => ({
      owner: a.account.owner,
      lpBalance: BigInt(a.account.lpBalance.toString()),
    }));
}

function calculateSyProportionFromLp({
  lpBalance,
  marketLiquditySy,
  lpSupply,
}: {
  lpBalance: bigint;
  marketLiquditySy: bigint;
  lpSupply: bigint;
}) {
  return (lpBalance * marketLiquditySy) / lpSupply;
}
