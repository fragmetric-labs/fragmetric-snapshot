import web3 from "@solana/web3.js-1";
import { SourceStreamOptions } from ".";
import { RPCClient } from "../rpc";
import { Kamino } from "@kamino-finance/kliquidity-sdk";
import { getMint } from "@solana/spl-token";
import { TokenBalanceSnapshot } from "./snapshot";

export async function produceKaminoLiquidity(opts: SourceStreamOptions) {
    const rpc = new RPCClient(opts.rpc);
    const connection = new web3.Connection(rpc.endpoint);
    const kamino = new Kamino(rpc.cluster == "mainnet" ? "mainnet-beta" : rpc.cluster, connection);

    const pool = new web3.PublicKey(opts.args[0]);
    const tokenMintA = new web3.PublicKey(opts.args[1]);
    const tokenMintB = new web3.PublicKey(opts.args[2]);
    const strategy = new web3.PublicKey(opts.args[3]);
    const baseTokenMint = tokenMintA.toString(); // we should determine which token would be base token at the pool

    const strategyInfo = await kamino.getStrategyByAddress(strategy);
    if (!strategyInfo) {
        throw new Error("kamino strategy info not found: " + strategy.toString());
    }

    const poolInfo = (await kamino.getOrcaPoolsForTokens(tokenMintA, tokenMintB)).filter(pool => pool.address == strategyInfo.pool.toString())[0];
    const poolTokenA = poolInfo.tokenA.mint;
    const poolTokenB = poolInfo.tokenB.mint;

    const poolPrice = await kamino.getOrcaPoolPrice(pool);

    const kaminoPosition = (await kamino.getOrcaPositions([strategyInfo.position]))[0];
    if (!kaminoPosition) {
        throw new Error("kamino position info not found");
    }

    const lowerPrice = 1.0001 ** kaminoPosition.tickLowerIndex;
    const upperPrice = 1.0001 ** kaminoPosition.tickUpperIndex;

    const strategySharesMint = await getMint(connection, strategyInfo.sharesMint);

    const shareData = await kamino.getStrategyShareData(strategy);

    const holders = await kamino.getStrategyHolders(strategy);
    const validHolders = holders.filter(holder => holder.amount.greaterThan(0));

    validHolders.map(holder => {
        const holderShareRate = holder.amount.div(Number(strategySharesMint.supply) / 10**strategySharesMint.decimals);

        const tokenAAmount = Number(kaminoPosition.liquidity) * holderShareRate.toNumber() * (function() {
            if (poolPrice.toNumber() < lowerPrice) {
                return 1 / Math.sqrt(lowerPrice) - 1 / Math.sqrt(upperPrice);
            } else if (lowerPrice <= poolPrice.toNumber() && poolPrice.toNumber() <= upperPrice) {
                return 1 / Math.sqrt(poolPrice.toNumber()) - 1 / Math.sqrt(upperPrice);
            } else {
                return 0;
            }
        })();
        const tokenBAmount = Number(kaminoPosition.liquidity) * holderShareRate.toNumber() * (function() {
            if (poolPrice.toNumber() < lowerPrice) {
                return 0;
            } else if (lowerPrice <= poolPrice.toNumber() && poolPrice.toNumber() <= upperPrice) {
                return Math.sqrt(poolPrice.toNumber()) - Math.sqrt(lowerPrice);
            } else {
                return Math.sqrt(upperPrice) - Math.sqrt(lowerPrice);
            }
        })();

        const snapshot: TokenBalanceSnapshot = {
            owner: holder.holderPubkey.toString(),
            // positionOwner: strategyInfo.baseVaultAuthority, // this maps to orca snapshot's owner, so you can filter the kamino liquidity provider at orca pool
            baseTokenBalance: (function() {
                if (poolTokenA == baseTokenMint) {
                    if (tokenAAmount > 0) {
                        return tokenAAmount + tokenBAmount / poolPrice.toNumber();
                    }
                } else if (poolTokenB == baseTokenMint) {
                    if (tokenBAmount > 0) {
                        return poolPrice.toNumber() * tokenAAmount + tokenBAmount;
                    }
                }
                return 0;
            })(),
        };
    });
}
