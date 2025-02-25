import {web3, Program, AnchorProvider, Wallet, Idl, ProgramAccount} from "@coral-xyz/anchor";
import { getAssociatedTokenAddressSync, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { RatexContracts } from './ratex_idl';
import RatexContractsIDLFile from './ratex_idl.json';
import { RestakingClient, RestakingFundReceiptToken } from '@fragmetric-labs/sdk';
import Decimal from "decimal.js";
import {Snapshot, SourceStreamOptions} from "./index";
import {RPCClient} from "../rpc";
import {IdlAccounts} from "@coral-xyz/anchor/dist/cjs/program/namespace/types";

export async function produceRateXYieldTrading(opts: SourceStreamOptions) {
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
    const rateXProtocolFeeAddress = new web3.PublicKey("2koowWZUTSkdC9o2wgW12hpzEBj3S9JKmPy8WJbFZ4Zg");

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

    const receiptTokenDecimals = receiptToken.decimals;
    const receiptTokenOneTokenAsSOL = new Decimal(receiptToken.oneTokenAsSOL.toString());
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
    const yieldMarketMap = new Map<string, IdlAccounts<RatexContracts>['yieldMarket']>();
    for (const yieldMarket of yieldMarketList) {
        yieldMarketMap.set(yieldMarket.publicKey.toBase58(), yieldMarket.account);
    }

    process.nextTick(async () => {
        try {
            let userTotalAmount = new Decimal(0);
            for (const userStats of userStatsList) {
                const baseTokenAmount = await calcUserToken({
                    rateXProgram,
                    receiptTokenOneTokenAsSOL,
                    receiptTokenDecimals,
                    accounts: {
                        userStats: userStats.account,
                        userMap,
                        lpMap,
                        yieldMarketMap,
                    }
                });
                opts.produceSnapshot({
                    owner: userStats.account.authority.toBase58(),
                    baseTokenBalance: baseTokenAmount.round().toNumber(),
                });
                userTotalAmount = userTotalAmount.add(baseTokenAmount);
            }
            opts.produceSnapshot({
                owner: rateXProtocolFeeAddress.toBase58(),
                baseTokenBalance: totalAmount.sub(userTotalAmount).floor().toNumber(),
            });
        } catch (error) {
            opts.close(error as Error);
            return;
        }
        opts.close();
    })
}

async function getTotalDeposits({ rateXProgram, inputToken }: { rateXProgram: Program<RatexContracts>, inputToken: web3.PublicKey }) {
    const [statePda, _] = web3.PublicKey.findProgramAddressSync(
        [Buffer.from("ratex_state")],
        rateXProgram.programId,
    );
    const stateData = await rateXProgram.account.state.fetch(statePda);
    const marketIndexStart = stateData.marketIndexStart;
    const numberOfMarginMarkets = stateData.numberOfMarginMarkets;

    let totalDeposits = new Decimal(0);
    for (let marginIndex = marketIndexStart; marginIndex < marketIndexStart + numberOfMarginMarkets; marginIndex++) {
        let marginIndexBuffer = Buffer.alloc(4);
        marginIndexBuffer.writeUInt32LE(marginIndex);
        const [marginMarketPda, _] = web3.PublicKey.findProgramAddressSync(
            [Buffer.from("margin_market"), marginIndexBuffer],
            rateXProgram.programId,
        );
        // console.log(`marginMarketPda: ${marginMarketPda}`);
        const ata = getAssociatedTokenAddressSync(inputToken, marginMarketPda, true);
        const tokenBalanceData = (await rateXProgram.provider.connection.getTokenAccountBalance(ata)).value;
        totalDeposits = totalDeposits.add(new Decimal(tokenBalanceData.amount));
    }
    return totalDeposits;
}

function getTokenAmountsFromLiquidity({ liquidity, currentSqrtPrice, lowerSqrtPrice, upperSqrtPrice, roundUp }: { liquidity: Decimal, currentSqrtPrice: Decimal, lowerSqrtPrice: Decimal, upperSqrtPrice: Decimal, roundUp: boolean }) {
    let tokenA = new Decimal(0), tokenB = new Decimal(0);
    if (currentSqrtPrice < lowerSqrtPrice) {
        tokenA = liquidity.mul(Decimal.pow(2, 64)).mul(upperSqrtPrice.sub(lowerSqrtPrice))
            .div(lowerSqrtPrice.mul(upperSqrtPrice));
    } else if (currentSqrtPrice < upperSqrtPrice) {
        tokenA = liquidity.mul(Decimal.pow(2, 64)).mul(upperSqrtPrice.sub(currentSqrtPrice))
            .div(currentSqrtPrice.mul(upperSqrtPrice));
        tokenB = liquidity.mul(currentSqrtPrice.sub(lowerSqrtPrice)).div(Decimal.pow(2, 64));
    } else {
        tokenB = liquidity.mul(upperSqrtPrice.sub(lowerSqrtPrice)).div(Decimal.pow(2, 64));
    }

    if (roundUp) {
        return [Decimal.ceil(tokenA), Decimal.ceil(tokenB)];
    } else {
        return [Decimal.floor(tokenA), Decimal.floor(tokenB)];
    }
}

async function calcUserToken({rateXProgram, receiptTokenOneTokenAsSOL, receiptTokenDecimals, accounts }: {
    rateXProgram: Program<RatexContracts>,
    receiptTokenOneTokenAsSOL: Decimal,
    receiptTokenDecimals: number,
    accounts: {
        userStats: IdlAccounts<RatexContracts>['userStats'],
        userMap: Map<string, IdlAccounts<RatexContracts>['user']>,
        lpMap: Map<string, IdlAccounts<RatexContracts>['lp']>,
        yieldMarketMap: Map<string, IdlAccounts<RatexContracts>['yieldMarket']>,
    }
}) {
    let traderMarginAmount = new Decimal(0),
        traderStAmount = new Decimal(0),
        traderYtAmount = new Decimal(0),
        lpStAmount = new Decimal(0),
        lpYtAmount = new Decimal(0);

    const userAddresses: string[] = [], lpAddresses: string[] = [];
    for (let subAccountId = 0; subAccountId < accounts.userStats.numberOfSubAccountsCreated; subAccountId++) {
        const subAccountIdBuffer = Buffer.alloc(2);
        subAccountIdBuffer.writeUInt16LE(subAccountId);
        const [userAddress,] = web3.PublicKey.findProgramAddressSync(
            [Buffer.from("user"), accounts.userStats.authority.toBuffer(), subAccountIdBuffer],
            rateXProgram.programId,
        );
        userAddresses.push(userAddress.toBase58());
        const [lpAddress,] = web3.PublicKey.findProgramAddressSync(
            [Buffer.from("lp"), accounts.userStats.authority.toBuffer(), subAccountIdBuffer],
            rateXProgram.programId,
        );
        lpAddresses.push(lpAddress.toBase58());
    }

    for (const userAddress of userAddresses) {
        const user = accounts.userMap.get(userAddress);
        if (!user) {
            continue;
        }
        traderMarginAmount = traderMarginAmount.add(new Decimal(user.marginPositions[0].balance.toString()));
        for (const yieldPosition of user.yieldPositions) {
            if (yieldPosition.lastRate.toNumber() > 0) {
                traderYtAmount = traderYtAmount.add(new Decimal(yieldPosition.baseAssetAmount.toString()));
                const rebaseStAmount = new Decimal(yieldPosition.quoteAssetAmount.toString())
                    .add(
                        new Decimal(yieldPosition.baseAssetAmount.toString())
                            .add(new Decimal(yieldPosition.quoteAssetAmount.toString()))
                    )
                    .mul(
                        receiptTokenOneTokenAsSOL.div(new Decimal(yieldPosition.lastRate.toString())).sub(new Decimal(1))
                    );
                traderStAmount = traderStAmount.add(rebaseStAmount);
                // console.log(`traderMarginAmount: ${traderMarginAmount}, traderYtAmount: ${traderYtAmount}, rebaseStAmount: ${rebaseStAmount}, traderStAmount: ${traderStAmount}`);
            }
            // console.log(`yieldPosition:`, yieldPosition);
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
        const lowerSqrtPrice = 1.0001 ** (tickLowerIndex/2) * 2**64;
        const tickUpperIndex = ammPosition.tickUpperIndex;
        const upperSqrtPrice = 1.0001 ** (tickUpperIndex/2) * 2**64;
        // console.log(`lpPda ${lpPda} data:`, lpData, `ammPosition.ammpool ${ammPosition.ammpool}`);
        const ammPool = accounts.yieldMarketMap.get(ammPosition.ammpool.toBase58());
        if (!ammPool) {
            throw new Error(`cannot find the amm pool: ${ammPosition.ammpool.toBase58()}`);
        }
        const currentSqrtPrice = ammPool.pool.sqrtPrice;
        // console.log(`tickLowerIndex ${tickLowerIndex}, tickUpperIndex ${tickUpperIndex}, lowerSqrtPrice ${lowerSqrtPrice}, upperSqrtPrice ${upperSqrtPrice}, currentSqrtPrice ${currentSqrtPrice}`);
        const [tokenA, tokenB] = getTokenAmountsFromLiquidity({
            liquidity: new Decimal(liquidity.toString()),
            currentSqrtPrice: new Decimal(currentSqrtPrice.toString()),
            lowerSqrtPrice: new Decimal(lowerSqrtPrice),
            upperSqrtPrice: new Decimal(upperSqrtPrice),
            roundUp: true,
        });
        lpYtAmount = lpYtAmount.add(new Decimal(lp.reserveBaseAmount.toString())).add(tokenA);
        lpStAmount = lpStAmount.add(new Decimal(lp.reserveQuoteAmount.toString())).add(tokenB);
        // console.log(`tokenA ${tokenA}, tokenB ${tokenB}, lpYtAmount ${lpYtAmount}, lpStAmount ${lpStAmount}`);
    }

    return (traderYtAmount.add(traderStAmount).add(lpYtAmount).add(lpStAmount))
        .mul(Decimal.pow(10, receiptTokenDecimals))
        .div(receiptTokenOneTokenAsSOL)
        .add(traderMarginAmount)
}
