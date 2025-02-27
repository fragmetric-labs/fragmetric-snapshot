import web3 from '@solana/web3.js-1';
import * as orca from '@orca-so/whirlpools';
import { Snapshot, SourceStreamFactory } from './index';
import { RPCClient } from '../rpc';
import { logger } from '../logger';

// args: pool address, base token mint, other token mint, [whirlpool config]
export const orcaLiquidity: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc); // opts.rpc

  const pool = new web3.PublicKey(opts.args[0]);
  const tokenMintA = new web3.PublicKey(opts.args[1]);
  const tokenMintB = new web3.PublicKey(opts.args[2]);
  const baseTokenMint = tokenMintA.toString(); // we should determine which token would be base token at the pool

  await orca.setWhirlpoolsConfig(
    (opts.args[3] as any) ?? (rpc.cluster == 'mainnet' ? 'solanaMainnet' : 'solanaDevnet'),
  );
  const poolInfo = (
    await orca.fetchWhirlpoolsByTokenPair(
      rpc.v2,
      tokenMintA.toString() as any,
      tokenMintB.toString() as any,
    )
  ).filter((poolInfo) => poolInfo.address == pool.toString())[0];
  if (!poolInfo) {
    throw new Error('orca pool info not found: ' + pool.toString());
  }
  const poolTokenA = poolInfo.tokenMintA;
  const poolTokenB = poolInfo.tokenMintB;
  const currentPrice = (poolInfo as any).price ?? 0;

  const positionsInfo = await orca.fetchPositionsInWhirlpool(rpc.v2, pool.toString() as any);
  logger.info(`pool total positions: ${positionsInfo.length}`);

  // now initialization phase finished, begin streaming
  process.nextTick(async () => {
    try {
      for (const pos of positionsInfo) {
        const lowerPrice = 1.0001 ** pos.data.tickLowerIndex;
        const upperPrice = 1.0001 ** pos.data.tickUpperIndex;
        const positionTokenAmountA =
          Number(pos.data.liquidity) *
          (function () {
            if (currentPrice < lowerPrice) {
              return 1 / Math.sqrt(lowerPrice) - 1 / Math.sqrt(upperPrice);
            } else if (lowerPrice <= currentPrice && currentPrice <= upperPrice) {
              return 1 / Math.sqrt(currentPrice) - 1 / Math.sqrt(upperPrice);
            } else {
              // currentPrice > upperPrice
              return 0;
            }
          })();
        const positionTokenAmountB =
          Number(pos.data.liquidity) *
          (function () {
            if (currentPrice < lowerPrice) {
              return 0;
            } else if (lowerPrice <= currentPrice && currentPrice <= upperPrice) {
              return Math.sqrt(currentPrice) - Math.sqrt(lowerPrice);
            } else {
              // currentPrice > upperPrice
              return Math.sqrt(upperPrice) - Math.sqrt(lowerPrice);
            }
          })();
        const positionTokenAccount = await rpc.getNFTOwnerByMintAddress(pos.data.positionMint);
        if (!positionTokenAccount) continue;

        const snapshot: Snapshot = {
          owner: positionTokenAccount,
          baseTokenBalance: (function () {
            if (poolTokenA == baseTokenMint) {
              if (positionTokenAmountA > 0) {
                return Math.round(positionTokenAmountA + positionTokenAmountB / currentPrice);
              }
            } else if (poolTokenB == baseTokenMint) {
              if (positionTokenAmountB > 0) {
                return Math.round(currentPrice * positionTokenAmountA + positionTokenAmountB);
              }
            }
            return 0;
          })(),
        };
        if (snapshot.baseTokenBalance === 0) continue;
        opts.produceSnapshot(snapshot);
      }
    } catch (err) {
      opts.close(err as Error);
      return;
    }
    opts.close();
  });
};
