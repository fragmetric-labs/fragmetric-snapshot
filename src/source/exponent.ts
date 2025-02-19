import web3 from "@solana/web3.js-1";
import { AnchorProvider, Program, Wallet } from "@coral-xyz/anchor";
import { Snapshot, SourceStreamOptions } from "./index";
import { RPCClient } from "../rpc";
import { ExponentCore } from "../idl/exponent_core";
import { RestakingClient } from "@fragmetric-labs/sdk";
import { getMint } from "@solana/spl-token";

// args: exponent market address, input token mint
export async function produceExponentLiquidity(opts: SourceStreamOptions) {
    const rpc = new RPCClient(opts.rpc);

    const market = new web3.PublicKey(opts.args[0]);
    const inputToken = new web3.PublicKey(opts.args[1]);

    const exponentCoreProgram = new Program(
        require("../idl/exponent_core.json") as ExponentCore,
        new AnchorProvider(rpc.v1, new Wallet(web3.Keypair.generate())),
    );
    const fragmetricFunds = await RestakingClient.createAll({ cluster: rpc.cluster, connection: rpc.v1 });
    const fragmetricFund = fragmetricFunds.filter(async fund => ((await fund.state.receiptToken()).wrappedTokenMint?.toString() == inputToken.toString()))[0];
    const receiptTokenData = await fragmetricFund.state.receiptToken();

    const balances = await getBalancesForVault(exponentCoreProgram, market);

    process.nextTick(async () => {
        try {
            for (const yt of balances.ytBalances) {
                const snapshot: Snapshot = {
                    owner: yt.owner.toString(),
                    baseTokenBalance: Math.round(Number(yt.amount) / receiptTokenData.oneTokenAsSOL * 10**(receiptTokenData.decimals - (await balances.mintYt).decimals * 10**(receiptTokenData.decimals))),
                };

                opts.produceSnapshot(snapshot);
            }
        } catch (error) {
            opts.close(error as Error);
            return;
        }
    });
}

type UserBalance = {
    owner: string,
    amount: string
};

async function getMarketAndLpSupply({ exponentCoreProgram, marketAddress }: { exponentCoreProgram: Program<ExponentCore>, marketAddress: web3.PublicKey }) {
    const market = await exponentCoreProgram.account.marketTwo.fetch(marketAddress);
    const lpMint = await getMint(exponentCoreProgram.provider.connection, market.mintLp);

    return {
        vault: market.vault,
        syBalance: BigInt(market.financials.syBalance.toString()),
        mintSy: market.mintSy,
        lpSupply: BigInt(lpMint.supply.toString()),
        marketExpirationTs: market.financials.expirationTs,
    };
}

async function getLpAccounts({ exponentCoreProgram, marketAddress }: { exponentCoreProgram: Program<ExponentCore>, marketAddress: web3.PublicKey }) {
    const lpPositionAccounts = await exponentCoreProgram.account.lpPosition.all([
        { memcmp: { offset: 40, bytes: marketAddress.toBase58() } },
    ]);

    return lpPositionAccounts.map((a) => ({
        owner: a.account.owner,
        lpBalance: BigInt(a.account.lpBalance.toString()),
    }));
}

async function getYtAccounts({ exponentCoreProgram, vaultAddress, expirationTs }: { exponentCoreProgram: Program<ExponentCore>, vaultAddress: web3.PublicKey, expirationTs: number }) {
    const ytAccounts = await exponentCoreProgram.account.yieldTokenPosition.all([
        { memcmp: { offset: 40, bytes: vaultAddress.toBase58() } },
    ]);

    const currentDate = new Date();
    const expirationDate = new Date(expirationTs * 1000);

    return ytAccounts.reduce((acc: Array<Object>, a) => {
        if (currentDate < expirationDate) {
            acc.push({
                owner: a.account.owner,
                ytBalance: BigInt(a.account.ytBalance.toString()),
            });
        }
        return acc;
    }, []);
}

async function getMintYt({ exponentCoreProgram, mintSy }: { exponentCoreProgram: Program<ExponentCore>, mintSy: web3.PublicKey }) {
    const vaults = await exponentCoreProgram.account.vault.all([
        { memcmp: { offset: 40, bytes: mintSy.toBase58() } },
    ]);

    return vaults.map(async (v) => {
        const mintYt = await getMint(exponentCoreProgram.provider.connection, v.account.mintYt);
        return {
            mintYt: v.account.mintYt,
            supply: mintYt.supply,
            decimals: mintYt.decimals,
        };
    });
}

function calculateSyProportionFromLp({
    lpBalance,
    marketLiquiditySy,
    lpSupply,
}: {
    lpBalance: bigint,
    marketLiquiditySy: bigint,
    lpSupply: bigint,
}) {
    // Simple proportion calculation: (lpBalance * marketLiquiditySy) / lpSupply
    return (lpBalance * marketLiquiditySy) / lpSupply;
} 

export async function getBalancesForVault(exponentCoreProgram: Program<ExponentCore>, marketAddress: web3.PublicKey) {
    // Fetch all necessary data
    const marketData = await getMarketAndLpSupply({ exponentCoreProgram, marketAddress });
    const vaultAddress = marketData.vault;
    const [lpAccounts, ytAccounts] = await Promise.all([
        getLpAccounts({ exponentCoreProgram, marketAddress }),
        getYtAccounts({ exponentCoreProgram, vaultAddress, expirationTs: marketData.marketExpirationTs }),
    ]);
    const mintYts = await getMintYt({ exponentCoreProgram, mintSy: marketData.mintSy });

    // Process YT balances
    const ytBalances: UserBalance[] = ytAccounts.map((account) => ({
        owner: account.owner.toString(),
        amount: account.ytBalance.toString(),
    }));

    // Process LP balances to get SY proportions
    const syProportions: UserBalance[] = lpAccounts.map((account) => ({
        owner: account.owner.toString(),
        amount: calculateSyProportionFromLp({
            lpBalance: account.lpBalance,
            marketLiquiditySy: marketData.syBalance,
            lpSupply: marketData.lpSupply,
        }).toString(),
    }));

    return {
        ytBalances,
        syProportions,
        mintYt: mintYts[0],
    };
}
