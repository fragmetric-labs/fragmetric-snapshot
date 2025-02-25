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

    const receiptTokenOneTokenAsSOL = new Decimal(receiptToken.oneTokenAsSOL.toString());
    const totalAmount = await getTotalDeposits({ rateXProgram, inputToken });
    console.log(totalAmount);
    const userStatsList = await rateXProgram.account.userStats.all();

    process.nextTick(async () => {
        try {
            let userTotalAmount = new Decimal(0);
            for (const userStats of userStatsList) {
                const baseTokenAmount = await calcUserToken({
                    rateXProgram,
                    userStats: userStats.account,
                    receiptTokenOneTokenAsSOL,
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

async function calcUserToken({ rateXProgram, userStats, receiptTokenOneTokenAsSOL }: { rateXProgram: Program<RatexContracts>, userStats: IdlAccounts<RatexContracts>['userStats'], receiptTokenOneTokenAsSOL: Decimal }) {
    let traderMarginAmount = new Decimal(0),
        traderStAmount = new Decimal(0),
        traderYtAmount = new Decimal(0),
        lpStAmount = new Decimal(0),
        lpYtAmount = new Decimal(0);

    const userPDAs = [], lpPDAs = [];
    for (let subAccountId = 0; subAccountId < userStats.numberOfSubAccountsCreated; subAccountId++) {
        const subAccountIdBuffer = Buffer.alloc(2);
        subAccountIdBuffer.writeUInt16LE(subAccountId);
        const [userPDA,] = web3.PublicKey.findProgramAddressSync(
            [Buffer.from("user"), userStats.authority.toBuffer(), subAccountIdBuffer],
            rateXProgram.programId,
        );
        userPDAs.push(userPDA);
        const [lpPDA,] = web3.PublicKey.findProgramAddressSync(
            [Buffer.from("lp"), userStats.authority.toBuffer(), subAccountIdBuffer],
            rateXProgram.programId,
        );
        lpPDAs.push(lpPDA);
    }

    for (const userPda of userPDAs) {
        try {
            const userData = await rateXProgram.account.user.fetch(userPda);
            traderMarginAmount = traderMarginAmount.add(new Decimal(userData.marginPositions[0].balance.toString()));
            for (const yieldPosition of userData.yieldPositions) {
                if (yieldPosition.lastRate.toNumber() > 0) {
                    traderYtAmount = traderYtAmount.add(new Decimal(yieldPosition.baseAssetAmount.toString()));
                    let rebaseStAmount = new Decimal(yieldPosition.quoteAssetAmount.toString())
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
        } catch (err: any) {
            if (!err.toString().includes("Account does not exist or has no data")) {
                throw err;
            }
        }
    }

    for (const lpPda of lpPDAs) {
        try {
            const lpData = await rateXProgram.account.lp.fetch(lpPda);
            const ammPosition = lpData.ammPosition;
            const liquidity = ammPosition.liquidity;
            const tickLowerIndex = ammPosition.tickLowerIndex;
            const lowerSqrtPrice = 1.0001 ** (tickLowerIndex/2) * 2**64;
            const tickUpperIndex = ammPosition.tickUpperIndex;
            const upperSqrtPrice = 1.0001 ** (tickUpperIndex/2) * 2**64;
            // console.log(`lpPda ${lpPda} data:`, lpData, `ammPosition.ammpool ${ammPosition.ammpool}`);
            const ammPool = await rateXProgram.account.yieldMarket.fetch(ammPosition.ammpool);
            const currentSqrtPrice = ammPool.pool.sqrtPrice;
            // console.log(`tickLowerIndex ${tickLowerIndex}, tickUpperIndex ${tickUpperIndex}, lowerSqrtPrice ${lowerSqrtPrice}, upperSqrtPrice ${upperSqrtPrice}, currentSqrtPrice ${currentSqrtPrice}`);
            const [tokenA, tokenB] = getTokenAmountsFromLiquidity({
                liquidity: new Decimal(liquidity.toString()),
                currentSqrtPrice: new Decimal(currentSqrtPrice.toString()),
                lowerSqrtPrice: new Decimal(lowerSqrtPrice),
                upperSqrtPrice: new Decimal(upperSqrtPrice),
                roundUp: true,
            });
            lpYtAmount = lpYtAmount.add(new Decimal(lpData.reserveBaseAmount.toString())).add(tokenA);
            lpStAmount = lpStAmount.add(new Decimal(lpData.reserveQuoteAmount.toString())).add(tokenB);
            // console.log(`tokenA ${tokenA}, tokenB ${tokenB}, lpYtAmount ${lpYtAmount}, lpStAmount ${lpStAmount}`);
        } catch (err: any) {
            if (!err.toString().includes("Account does not exist or has no data")) {
                throw err;
            }
            // console.log(`lpPda ${lpPda} error:`, error);
        }
    }

    return (traderYtAmount.add(traderStAmount).add(lpYtAmount).add(lpStAmount))
        .mul(Decimal.pow(10, 9))
        .div(receiptTokenOneTokenAsSOL)
        .add(traderMarginAmount)
}
