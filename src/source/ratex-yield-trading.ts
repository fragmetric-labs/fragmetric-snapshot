import { web3, Program, AnchorProvider, Wallet, Idl, ProgramAccount } from '@coral-xyz/anchor';
import * as token from '@solana/spl-token';
import { RatexContracts } from './ratex.idl';
import RatexContractsIDLFile from './ratex.idl.json';
import { RestakingClient, RestakingFundReceiptToken } from '@fragmetric-labs/sdk';
import Decimal from 'decimal.js';
import { Snapshot, SourceStreamFactory } from './index';
import { RPCClient } from '../rpc';
import { IdlAccounts } from '@coral-xyz/anchor/dist/cjs/program/namespace/types';

// args: ratex yield market address, input token mint
export const ratexYieldTrading: SourceStreamFactory = async (opts) => {
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
  const rateXProtocolFeeAddress = new web3.PublicKey(
    '2koowWZUTSkdC9o2wgW12hpzEBj3S9JKmPy8WJbFZ4Zg',
  );

  const fragmetricRestakingClients = await RestakingClient.createAll({
    cluster: rpc.cluster,
    connection: rpc.v1,
  });

  let receiptToken: RestakingFundReceiptToken | null = null;
  for (const fragmetricRestakingClient of fragmetricRestakingClients) {
    const currentReceiptToken = await fragmetricRestakingClient.state.receiptToken();
    if (currentReceiptToken.wrappedTokenMint?.equals(inputToken)) {
      receiptToken = currentReceiptToken;
      break;
    }
  }
  if (!receiptToken) {
    throw new Error('failed to find matched fragmetric receipt token from given input token');
  }

  const oracleList = await rateXProgram.account.oracle.all();
  const oracleRate = new Decimal(oracleList[0].account.rate.toString());
  const inputTokenDecimals = receiptToken.decimals;
  const totalAmount = await getTotalDeposits({ rateXProgram, inputToken });

  const userStatsList = await rateXProgram.account.userStats.all();
  const userList = await rateXProgram.account.user.all();
  const userMap = new Map<string, IdlAccounts<RatexContracts>['user']>();
  for (const user of userList) {
    userMap.set(user.publicKey.toBase58(), user.account);
  }
  const lpList = await rateXProgram.account.lp.all();
  const lpMap = new Map<string, IdlAccounts<RatexContracts>['lp']>();
  for (const lp of lpList) {
    lpMap.set(lp.publicKey.toBase58(), lp.account);
  }
  const yieldMarketList = await rateXProgram.account.yieldMarket.all();
  const yieldMarketMap = new Map<string | number, IdlAccounts<RatexContracts>['yieldMarket']>();
  for (const yieldMarket of yieldMarketList) {
    yieldMarketMap.set(yieldMarket.publicKey.toBase58(), yieldMarket.account);
    yieldMarketMap.set(yieldMarket.account.marketIndex, yieldMarket.account);
  }

  process.nextTick(async () => {
    try {
      let userTotalAmount = new Decimal(0);
      let userTotalAmountForTargetYieldMarket = new Decimal(0);
      for (const userStats of userStatsList) {
        const baseTokenAmount = await calcUserInputToken({
          rateXProgram,
          oracleRate,
          inputTokenDecimals,
          targetYieldMarket: market,
          accounts: {
            userStats: userStats.account,
            userMap,
            lpMap,
            yieldMarketMap,
          },
        });
        opts.produceSnapshot({
          owner: userStats.account.authority.toBase58(),
          baseTokenBalance: baseTokenAmount.target.toNumber(),
        });
        userTotalAmount = userTotalAmount.add(baseTokenAmount.target).add(baseTokenAmount.others);
        userTotalAmountForTargetYieldMarket = userTotalAmountForTargetYieldMarket.add(
          baseTokenAmount.target,
        );
      }
      const totalProtocolFeeAmount = totalAmount.sub(userTotalAmount);
      const protocolFeeAmountForTargetYieldMarket = !userTotalAmount.isZero()
        ? totalProtocolFeeAmount
            .mul(userTotalAmountForTargetYieldMarket)
            .div(userTotalAmount)
            .round()
        : new Decimal(0);
      opts.produceSnapshot({
        owner: rateXProtocolFeeAddress.toBase58(),
        baseTokenBalance: protocolFeeAmountForTargetYieldMarket.toNumber(),
      });
    } catch (error) {
      opts.close(error as Error);
      return;
    }
    opts.close();
  });
};

async function getTotalDeposits({
  rateXProgram,
  inputToken,
}: {
  rateXProgram: Program<RatexContracts>;
  inputToken: web3.PublicKey;
}) {
  const [statePda, _] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from('ratex_state')],
    rateXProgram.programId,
  );
  const stateData = await rateXProgram.account.state.fetch(statePda);
  const marketIndexStart = stateData.marketIndexStart;
  const numberOfMarginMarkets = stateData.numberOfMarginMarkets;

  let totalDeposits = new Decimal(0);
  for (
    let marginIndex = marketIndexStart;
    marginIndex < marketIndexStart + numberOfMarginMarkets;
    marginIndex++
  ) {
    let marginIndexBuffer = Buffer.alloc(4);
    marginIndexBuffer.writeUInt32LE(marginIndex);
    const [marginMarketAddress, _] = web3.PublicKey.findProgramAddressSync(
      [Buffer.from('margin_market'), marginIndexBuffer],
      rateXProgram.programId,
    );
    // @ts-ignore
    const ata = token.getAssociatedTokenAddressSync(inputToken, marginMarketAddress, true);
    const tokenBalanceData = (await rateXProgram.provider.connection.getTokenAccountBalance(ata))
      .value;
    totalDeposits = totalDeposits.add(new Decimal(tokenBalanceData.amount));
  }
  return totalDeposits;
}

const d2_64 = Decimal.pow(2, 64);

function getTokenAmountsFromLiquidity({
  liquidity,
  currentSqrtPrice,
  lowerSqrtPrice,
  upperSqrtPrice,
  roundUp,
}: {
  liquidity: Decimal;
  currentSqrtPrice: Decimal;
  lowerSqrtPrice: Decimal;
  upperSqrtPrice: Decimal;
  roundUp: boolean;
}) {
  let tokenA = new Decimal(0),
    tokenB = new Decimal(0);
  if (currentSqrtPrice < lowerSqrtPrice) {
    tokenA = liquidity
      .mul(d2_64)
      .mul(upperSqrtPrice.sub(lowerSqrtPrice))
      .div(lowerSqrtPrice.mul(upperSqrtPrice));
  } else if (currentSqrtPrice < upperSqrtPrice) {
    tokenA = liquidity
      .mul(d2_64)
      .mul(upperSqrtPrice.sub(currentSqrtPrice))
      .div(currentSqrtPrice.mul(upperSqrtPrice));
    tokenB = liquidity.mul(currentSqrtPrice.sub(lowerSqrtPrice)).div(d2_64);
  } else {
    tokenB = liquidity.mul(upperSqrtPrice.sub(lowerSqrtPrice)).div(d2_64);
  }

  if (roundUp) {
    return [tokenA.ceil(), tokenB.ceil()];
  } else {
    return [tokenA.floor(), tokenB.floor()];
  }
}

async function calcUserInputToken({
  rateXProgram,
  oracleRate,
  inputTokenDecimals,
  targetYieldMarket,
  accounts,
}: {
  rateXProgram: Program<RatexContracts>;
  oracleRate: Decimal;
  inputTokenDecimals: number;
  targetYieldMarket: web3.PublicKey;
  accounts: {
    userStats: IdlAccounts<RatexContracts>['userStats'];
    userMap: Map<string, IdlAccounts<RatexContracts>['user']>;
    lpMap: Map<string, IdlAccounts<RatexContracts>['lp']>;
    yieldMarketMap: Map<string | number, IdlAccounts<RatexContracts>['yieldMarket']>;
  };
}) {
  const userAddresses: string[] = [],
    lpAddresses: string[] = [];
  for (
    let subAccountId = 0;
    subAccountId < accounts.userStats.numberOfSubAccountsCreated;
    subAccountId++
  ) {
    const subAccountIdBuffer = Buffer.alloc(2);
    subAccountIdBuffer.writeUInt16LE(subAccountId);
    const [userAddress] = web3.PublicKey.findProgramAddressSync(
      [Buffer.from('user'), accounts.userStats.authority.toBuffer(), subAccountIdBuffer],
      rateXProgram.programId,
    );
    userAddresses.push(userAddress.toBase58());
    const [lpAddress] = web3.PublicKey.findProgramAddressSync(
      [Buffer.from('lp'), accounts.userStats.authority.toBuffer(), subAccountIdBuffer],
      rateXProgram.programId,
    );
    lpAddresses.push(lpAddress.toBase58());
  }

  let traderMarginAmount = new Decimal(0);
  const amountsPerYieldMarket: Array<{
    yieldMarket: web3.PublicKey;
    traderStAmount: Decimal;
    traderYtAmount: Decimal;
    lpStAmount: Decimal;
    lpYtAmount: Decimal;
  }> = [];

  for (const userAddress of userAddresses) {
    const user = accounts.userMap.get(userAddress);
    if (!user) {
      continue;
    }
    traderMarginAmount = traderMarginAmount.add(
      new Decimal(user.marginPositions[0].balance.toString()),
    );

    for (const yieldPosition of user.yieldPositions) {
      if (yieldPosition.marketIndex == 0) continue;

      const yieldMarket = accounts.yieldMarketMap.get(yieldPosition.marketIndex);
      if (!yieldMarket) {
        throw new Error(`cannot find the yield market: ${yieldPosition.marketIndex}`);
      }
      if (yieldPosition.lastRate.toNumber() > 0) {
        let amounts = amountsPerYieldMarket.find((a) => a.yieldMarket.equals(yieldMarket.pubkey));
        if (!amounts) {
          amounts = {
            yieldMarket: yieldMarket.pubkey,
            traderStAmount: new Decimal(0),
            traderYtAmount: new Decimal(0),
            lpStAmount: new Decimal(0),
            lpYtAmount: new Decimal(0),
          };
          amountsPerYieldMarket.push(amounts);
        }
        amounts.traderYtAmount = amounts.traderYtAmount.add(
          new Decimal(yieldPosition.baseAssetAmount.toString()),
        );
        const quoteAssetAmount = new Decimal(yieldPosition.quoteAssetAmount.toString());
        const rebaseStAmount = quoteAssetAmount.add(
          new Decimal(yieldPosition.baseAssetAmount.toString())
            .add(quoteAssetAmount)
            .mul(
              oracleRate.div(new Decimal(yieldPosition.lastRate.toString())).sub(new Decimal(1)),
            ),
        );
        amounts.traderStAmount = amounts.traderStAmount.add(rebaseStAmount);
      }
    }
  }

  for (const lpAddress of lpAddresses) {
    const lp = accounts.lpMap.get(lpAddress);
    if (!lp) {
      continue;
    }
    const ammPosition = lp.ammPosition;
    const liquidity = ammPosition.liquidity;
    const tickLowerIndex = ammPosition.tickLowerIndex;
    const lowerSqrtPrice = Decimal.pow(1.0001, tickLowerIndex / 2).mul(d2_64);
    const tickUpperIndex = ammPosition.tickUpperIndex;
    const upperSqrtPrice = Decimal.pow(1.0001, tickUpperIndex / 2).mul(d2_64);
    const yieldMarket = accounts.yieldMarketMap.get(ammPosition.ammpool.toBase58());
    if (!yieldMarket) {
      throw new Error(`cannot find the yield market: ${ammPosition.ammpool.toBase58()}`);
    }
    let amounts = amountsPerYieldMarket.find((a) => a.yieldMarket.equals(yieldMarket.pubkey));
    if (!amounts) {
      amounts = {
        yieldMarket: yieldMarket.pubkey,
        traderStAmount: new Decimal(0),
        traderYtAmount: new Decimal(0),
        lpStAmount: new Decimal(0),
        lpYtAmount: new Decimal(0),
      };
      amountsPerYieldMarket.push(amounts);
    }
    const currentSqrtPrice = yieldMarket.pool.sqrtPrice;
    const [tokenA, tokenB] = getTokenAmountsFromLiquidity({
      liquidity: new Decimal(liquidity.toString()),
      currentSqrtPrice: new Decimal(currentSqrtPrice.toString()),
      lowerSqrtPrice: new Decimal(lowerSqrtPrice),
      upperSqrtPrice: new Decimal(upperSqrtPrice),
      roundUp: true,
    });
    amounts.lpYtAmount = amounts.lpYtAmount
      .add(new Decimal(lp.reserveBaseAmount.toString()))
      .add(tokenA);
    amounts.lpStAmount = amounts.lpStAmount
      .add(new Decimal(lp.reserveQuoteAmount.toString()))
      .add(tokenB);
  }

  const result = amountsPerYieldMarket.map((amounts) => {
    return {
      yieldMarket: amounts.yieldMarket,
      inputTokenAmount: amounts.traderYtAmount
        .add(amounts.traderStAmount)
        .add(amounts.lpYtAmount)
        .add(amounts.lpStAmount)
        .mul(Decimal.pow(10, inputTokenDecimals))
        .div(oracleRate)
        .round(),
    };
  });
  if (result.length == 0) {
    return {
      target: traderMarginAmount,
      others: new Decimal(0),
    };
  }

  const totalAmount = result.reduce(
    (amount, item) => amount.add(item.inputTokenAmount),
    new Decimal(0),
  );
  const targetYieldMarketAmount =
    result.find((item) => item.yieldMarket.equals(targetYieldMarket))?.inputTokenAmount ??
    new Decimal(0);
  const target = targetYieldMarketAmount.add(
    traderMarginAmount
      .mul(targetYieldMarketAmount)
      .div(totalAmount.isZero() ? new Decimal(1) : totalAmount)
      .round(),
  );
  const others = totalAmount.add(traderMarginAmount).sub(target);
  return {
    target,
    others,
  };
}
