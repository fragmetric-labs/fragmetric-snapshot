import * as web3 from '@solana/web3.js';
import { Kamino } from '@kamino-finance/kliquidity-sdk';
import { Farms } from '@kamino-finance/farms-sdk';
import { RPCClient } from '../../../rpc';
import { Snapshot, SourceStreamFactory } from './index';
import Decimal from 'decimal.js';
import { Address } from '@solana/kit';

// args: kamino strategy address, base token mint, other token mint
export const kaminoLiquidity: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);
  const kamino = new Kamino(
    rpc.cluster == 'mainnet' ? 'mainnet-beta' : rpc.cluster,
    rpc.v2,
    rpc.v1,
  );
  const farms = new Farms(rpc.v2);

  const strategyAddress = opts.args[0] as Address;
  const tokenMintA = opts.args[1] as Address;
  const tokenMintB = opts.args[2] as Address;
  const baseTokenMint = tokenMintA; // we should determine which token would be base token at the pool

  const strategy = await kamino.getStrategyByAddress(strategyAddress);
  if (!strategy) {
    throw new Error('kamino strategy not found: ' + strategyAddress);
  }
  const poolTokenA = strategy.tokenAMint;
  const poolTokenB = strategy.tokenBMint;
  if (
    !(
      (tokenMintA == poolTokenA && tokenMintB == poolTokenB) ||
      (tokenMintA == poolTokenB && tokenMintB == poolTokenA)
    )
  ) {
    throw new Error(`pool token pair is invalid: ${poolTokenA}/${poolTokenB}`);
  }
  const poolPrice = await kamino.getOrcaPoolPrice(strategy.pool);

  const kaminoPosition = (await kamino.getOrcaPositions([strategy.position]))[0];
  if (!kaminoPosition) {
    throw new Error('kamino position not found');
  }
  const kaminoLiquidity = new Decimal(kaminoPosition.liquidity.toString());
  const lowerPrice = 1.0001 ** kaminoPosition.tickLowerIndex;
  const upperPrice = 1.0001 ** kaminoPosition.tickUpperIndex;
  const kaminoLiquidityTokenAAmount = kaminoLiquidity.mul(
    calcTokenAAmountWeight(poolPrice.toNumber(), lowerPrice, upperPrice),
  );
  const kaminoLiquidityTokenBAmount = kaminoLiquidity.mul(
    calcTokenBAmountWeight(poolPrice.toNumber(), lowerPrice, upperPrice),
  );

  const farmState = (await farms.getAllFarmStatesByPubkeys([strategy.farm]))[0];
  const farmUsers = await farms.getAllUserStatesForFarm(strategy.farm);

  const sharesMintSupply = await rpc.getTokenSupply(new web3.PublicKey(strategy.sharesMint));
  const sharesTotal = new Decimal(sharesMintSupply.amount).div(
    Decimal.pow(10, sharesMintSupply.decimals),
  );

  const sharesHolders = await kamino.getStrategyHolders(strategyAddress);
  const farmShareHolder = sharesHolders.find(
    (holder) => holder.holderPubkey == farmState.farmState.farmVaultsAuthority,
  );
  const farmShareRatio = sharesTotal.isZero()
    ? new Decimal(0)
    : (farmShareHolder?.amount ?? new Decimal(0)).div(sharesTotal);
  const nonFarmShareHolders = farmShareHolder
    ? sharesHolders.filter((holder) => holder !== farmShareHolder)
    : sharesHolders;

  process.nextTick(() => {
    try {
      for (const holder of nonFarmShareHolders) {
        if (holder.amount.isZero()) continue;

        const holderShareRatio = holder.amount.div(sharesTotal);
        const tokenAAmount = kaminoLiquidityTokenAAmount.mul(holderShareRatio).toNumber();
        const tokenBAmount = kaminoLiquidityTokenBAmount.mul(holderShareRatio).toNumber();

        const snapshot: Snapshot = {
          owner: holder.holderPubkey,
          baseTokenBalance: calcBaseTokenBalance(
            poolTokenA,
            poolTokenB,
            baseTokenMint,
            poolPrice.toNumber(),
            tokenAAmount,
            tokenBAmount,
          ),
        };

        opts.produceSnapshot(snapshot);
      }

      for (const user of farmUsers) {
        if (user.userState.activeStakeScaled.isZero()) continue;
        const holderShareRatio = new Decimal(user.userState.activeStakeScaled.toString()).div(
          new Decimal(farmState.farmState.totalActiveStakeScaled.toString()),
        );
        const tokenAAmount = kaminoLiquidityTokenAAmount
          .mul(holderShareRatio)
          .mul(farmShareRatio)
          .toNumber();
        const tokenBAmount = kaminoLiquidityTokenBAmount
          .mul(holderShareRatio)
          .mul(farmShareRatio)
          .toNumber();

        const snapshot: Snapshot = {
          owner: user.userState.owner.toString(),
          baseTokenBalance: calcBaseTokenBalance(
            poolTokenA,
            poolTokenB,
            baseTokenMint,
            poolPrice.toNumber(),
            tokenAAmount,
            tokenBAmount,
          ),
        };

        opts.produceSnapshot(snapshot);
      }
    } catch (error) {
      opts.close(error as Error);
      return;
    }
    opts.close();
  });
};

function calcTokenAAmountWeight(poolPrice: number, lowerPrice: number, upperPrice: number) {
  if (poolPrice < lowerPrice) {
    return 1 / Math.sqrt(lowerPrice) - 1 / Math.sqrt(upperPrice);
  } else if (lowerPrice <= poolPrice && poolPrice <= upperPrice) {
    return 1 / Math.sqrt(poolPrice) - 1 / Math.sqrt(upperPrice);
  } else {
    return 0;
  }
}

function calcTokenBAmountWeight(poolPrice: number, lowerPrice: number, upperPrice: number) {
  if (poolPrice < lowerPrice) {
    return 0;
  } else if (lowerPrice <= poolPrice && poolPrice <= upperPrice) {
    return Math.sqrt(poolPrice) - Math.sqrt(lowerPrice);
  } else {
    return Math.sqrt(upperPrice) - Math.sqrt(lowerPrice);
  }
}

function calcBaseTokenBalance(
  poolTokenA: string,
  poolTokenB: string,
  baseTokenMint: string,
  poolPrice: number,
  tokenAAmount: number,
  tokenBAmount: number,
) {
  if (poolTokenA == baseTokenMint) {
    if (tokenAAmount > 0) {
      return Math.round(tokenAAmount + tokenBAmount / poolPrice);
    }
  } else if (poolTokenB == baseTokenMint) {
    if (tokenBAmount > 0) {
      return Math.round(poolPrice * tokenAAmount + tokenBAmount);
    }
  }
  return 0;
}
