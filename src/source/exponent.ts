import web3 from "@solana/web3.js-1";
import { AnchorProvider, Program, Wallet } from "@coral-xyz/anchor";
import { SourceStreamOptions } from "./index";
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
    const fragmetricFund = fragmetricFunds.filter(fund => fund.receiptTokenMint.toString() == inputToken.toString())[0];

    const balances = await getBalancesForVault(exponentCoreProgram, market);

    const inputTokenData = await fragmetricFund.state.receiptToken();

    balances.ytBalances.map((yt, i) => {
        return balances.syProportions.map(async (sy, j) => {
            if (yt.owner.toString() == sy.owner.toString()) {
                console.log(yt.owner.toString(), i, j, `yt balance ${yt.amount}, sy proportions ${sy.amount}, fpoint balances ${Math.round(Number(yt.amount) / inputTokenData.oneTokenAsSOL * 10**(inputTokenData.decimals - (await balances.mintYt).decimals * 10**(inputTokenData.decimals)))}`);
                return;
            }
            if (j == balances.syProportions.length - 1) {
                console.log(yt.owner.toString(), i, j, `yt balance ${yt.amount}, no sy`);
                return;
            }
        });
    });

    // process.nextTick(() => {
    //     try {

    //     } catch (error) {
    //         opts.close(error as Error);
    //         return;
    //     }
    // });
}

type UserBalance = {
    owner: string,
    amount: string
};

async function getMarketAndLpSupply({ exponentCoreProgram, marketAddress }: { exponentCoreProgram: Program<ExponentCore>, marketAddress: web3.PublicKey }) {
    const market = await exponentCoreProgram.account.marketTwo.fetch(marketAddress);
    const lpMint = await getMint(exponentCoreProgram.provider.connection, market.mintLp);

    console.log(`market`, market);
    console.log(`market cpiAccounts:`, market.cpiAccounts);

    return {
        vault: market.vault,
        syBalance: BigInt(market.financials.syBalance.toString()),
        mintSy: market.mintSy,
        lpSupply: BigInt(lpMint.supply.toString()),
    };
}

async function getLpAccounts({ exponentCoreProgram, marketAddress }: { exponentCoreProgram: Program<ExponentCore>, marketAddress: web3.PublicKey }) {
    const lpPositionAccounts = await exponentCoreProgram.account.lpPosition.all([
        { memcmp: { offset: 40, bytes: marketAddress.toBase58() } },
    ]);

    console.log(`lpPositionAccounts:`, lpPositionAccounts);

    return lpPositionAccounts.map((a) => ({
        owner: a.account.owner,
        lpBalance: BigInt(a.account.lpBalance.toString()),
    }));
}

async function getYtAccounts({ exponentCoreProgram, vaultAddress }: { exponentCoreProgram: Program<ExponentCore>, vaultAddress: web3.PublicKey }) {
    const ytAccounts = await exponentCoreProgram.account.yieldTokenPosition.all([
        { memcmp: { offset: 40, bytes: vaultAddress.toBase58() } },
    ]);

    // console.log(`ytAccounts:`, ytAccounts);

    return ytAccounts.map((a) => ({
        owner: a.account.owner,
        ytBalance: BigInt(a.account.ytBalance.toString()),
    }));
}

async function getMintYt({ exponentCoreProgram, mintSy }: { exponentCoreProgram: Program<ExponentCore>, mintSy: web3.PublicKey }) {
    const vaults = await exponentCoreProgram.account.vault.all([
        { memcmp: { offset: 40, bytes: mintSy.toBase58() } },
    ]);

    return vaults.map(async (v) => {
        console.log(`vault ${v.publicKey}:`, v);
        console.log(`vault account cpiAccounts ${v.publicKey}:`, v.account.cpiAccounts);
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
    console.log(`Fetching balances for market ${marketAddress.toString()}...`);

    // Fetch all necessary data
    const marketData = await getMarketAndLpSupply({ exponentCoreProgram, marketAddress });
    const vaultAddress = marketData.vault;
    const [lpAccounts, ytAccounts] = await Promise.all([
        getLpAccounts({ exponentCoreProgram, marketAddress }),
        getYtAccounts({ exponentCoreProgram, vaultAddress }),
    ]);
    const mintYts = await getMintYt({ exponentCoreProgram, mintSy: marketData.mintSy });
    // console.log(`mintYt:`, mintYt);
    // const [mintYts] = await Promise.all([
    //     getMintYtSupply({ mintSy: marketData.mintSy }),
    // ]);
    mintYts.map(async (yt) => {
        console.log(`yt:`, await yt);
    });

    // Process YT balances
    const ytBalances: UserBalance[] = ytAccounts.map((account) => ({
        owner: account.owner.toString(),
        amount: account.ytBalance.toString(),
    }));

    lpAccounts.map((a) => {
        console.log(`${a.owner} lpBalance ${a.lpBalance}`);
        console.log(`lp supply ${marketData.lpSupply}`);
    });

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
