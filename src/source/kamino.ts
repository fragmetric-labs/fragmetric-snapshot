import web3 from "@solana/web3.js-1";
import { Kamino } from "@kamino-finance/kliquidity-sdk";
import { RPCClient } from "../rpc";
import { SourceStreamOptions, Snapshot } from "./index";

// args: kamino strategy address, base token mint, other token mint
export async function produceKaminoLiquidity(opts: SourceStreamOptions) {
    const rpc = new RPCClient(opts.rpc);
    const kamino = new Kamino(rpc.cluster == "mainnet" ? "mainnet-beta" : rpc.cluster, rpc.v1);

    const strategy = new web3.PublicKey(opts.args[0]);
    const tokenMintA = new web3.PublicKey(opts.args[1]);
    const tokenMintB = new web3.PublicKey(opts.args[2]);
    const baseTokenMint = tokenMintA.toString(); // we should determine which token would be base token at the pool

    const strategyInfo = await kamino.getStrategyByAddress(strategy);
    if (!strategyInfo) {
        throw new Error("kamino strategy info not found: " + strategy.toString());
    }

    const poolInfo = (await kamino.getOrcaPoolsForTokens(tokenMintA, tokenMintB)).filter(pool => pool.address == strategyInfo.pool.toString())[0];
    const poolTokenA = poolInfo.tokenA.mint;
    const poolTokenB = poolInfo.tokenB.mint;

    const poolPrice = await kamino.getOrcaPoolPrice(new web3.PublicKey(poolInfo.address));

    const kaminoPosition = (await kamino.getOrcaPositions([strategyInfo.position]))[0];
    if (!kaminoPosition) {
        throw new Error("kamino position info not found");
    }

    const lowerPrice = 1.0001 ** kaminoPosition.tickLowerIndex;
    const upperPrice = 1.0001 ** kaminoPosition.tickUpperIndex;

    const strategySharesMintSupply = await rpc.getTokenSupply(strategyInfo.sharesMint);
    const holders = await kamino.getStrategyHolders(strategy);
    const validHolders = holders.filter(holder => holder.amount.greaterThan(0));

    process.nextTick(() => {
        try {
            for (const holder of validHolders) {
                const holderShareRate = holder.amount.div(Number(strategySharesMintSupply.amount) / 10**strategySharesMintSupply.decimals);

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

                const snapshot: Snapshot = {
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

                opts.produceSnapshot(snapshot);
            }
        } catch (error) {
            opts.close(error as Error);
            return;
        }
        opts.close();
    });
}
