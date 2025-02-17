import web3 from "@solana/web3.js-1";
import { Kamino } from "@kamino-finance/kliquidity-sdk";
import { Farms, scaleDownWads } from "@kamino-finance/farms-sdk";
import { RPCClient } from "../rpc";
import { SourceStreamOptions, Snapshot } from "./index";
import Decimal from "decimal.js";

// args: kamino strategy address, base token mint, other token mint
export async function produceKaminoLiquidity(opts: SourceStreamOptions) {
    const rpc = new RPCClient(opts.rpc);
    const kamino = new Kamino(rpc.cluster == "mainnet" ? "mainnet-beta" : rpc.cluster, rpc.v1);
    const farms = new Farms(rpc.v1);

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
    const kaminoLiquidity = new Decimal(kaminoPosition.liquidity.toString());
    const lowerPrice = 1.0001 ** kaminoPosition.tickLowerIndex;
    const upperPrice = 1.0001 ** kaminoPosition.tickUpperIndex;
    const kaminoLiquidityTokenAAmount = kaminoLiquidity.mul(calcTokenAAmountWeight(poolPrice.toNumber(), lowerPrice, upperPrice));
    const kaminoLiquidityTokenBAmount = kaminoLiquidity.mul(calcTokenBAmountWeight(poolPrice.toNumber(), lowerPrice, upperPrice));

    const farmState = (await farms.getAllFarmStatesByPubkeys([strategyInfo.farm]))[0];
    const farmUsers = await farms.getAllUserStatesForFarm(strategyInfo.farm);

    const sharesMintSupply = await rpc.getTokenSupply(strategyInfo.sharesMint);
    const sharesTotal = new Decimal(sharesMintSupply.amount).div(Decimal.pow(10, sharesMintSupply.decimals));

    const sharesHolders = await kamino.getStrategyHolders(strategy);
    const farmShareHolder = sharesHolders.find(holder => holder.holderPubkey.equals(farmState.farmState.farmVaultsAuthority));
    const farmShareRatio = sharesTotal.isZero() ? new Decimal(0) : (farmShareHolder?.amount ?? new Decimal(0)).div(sharesTotal);
    const nonFarmShareHolders = farmShareHolder ? sharesHolders.filter(holder => holder !== farmShareHolder) : sharesHolders;

    process.nextTick(() => {
        try {
            for (const holder of nonFarmShareHolders) {
                if (holder.amount.isZero()) continue;

                const holderShareRatio = holder.amount.div(sharesTotal);
                const tokenAAmount = kaminoLiquidityTokenAAmount.mul(holderShareRatio).toNumber();
                const tokenBAmount = kaminoLiquidityTokenBAmount.mul(holderShareRatio).toNumber();

                const snapshot: Snapshot = {
                    owner: holder.holderPubkey.toString(),
                    // positionOwner: strategyInfo.baseVaultAuthority, // this maps to orca snapshot's owner, so you can filter the kamino liquidity provider at orca pool
                    baseTokenBalance: calcBaseTokenBalance(poolTokenA, poolTokenB, baseTokenMint, poolPrice.toNumber(), tokenAAmount, tokenBAmount),
                };

                opts.produceSnapshot(snapshot);
            }

            for (const user of farmUsers) {
                if (user.userState.activeStakeScaled.isZero()) continue;
                const holderShareRatio = new Decimal(user.userState.activeStakeScaled.toString()).div(new Decimal(farmState.farmState.totalActiveStakeScaled.toString()));
                const tokenAAmount = kaminoLiquidityTokenAAmount.mul(holderShareRatio).mul(farmShareRatio).toNumber();
                const tokenBAmount = kaminoLiquidityTokenBAmount.mul(holderShareRatio).mul(farmShareRatio).toNumber();

                const snapshot: Snapshot = {
                    owner: user.userState.owner.toString(),
                    baseTokenBalance: calcBaseTokenBalance(poolTokenA, poolTokenB, baseTokenMint, poolPrice.toNumber(), tokenAAmount, tokenBAmount),
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

function calcBaseTokenBalance(poolTokenA: string, poolTokenB: string, baseTokenMint: string, poolPrice: number, tokenAAmount: number, tokenBAmount: number) {
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
