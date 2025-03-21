import web3 from '@solana/web3.js-1';
import { AnchorProvider, Program, Wallet } from '@coral-xyz/anchor';
import { SourceStreamFactory } from './index';
import { RPCClient } from '../../../rpc';
import { ExponentCore } from './exponent.idl';
import ExponentCoreIDLFile from './exponent.idl.json';
import { RestakingClient, RestakingFundReceiptToken } from '@fragmetric-labs/sdk';
import Decimal from 'decimal.js';
import {logger} from "../../../logger";
import * as string_decoder from "node:string_decoder";

// args: exponent yield market address, input token mint
export const exponentYieldTrading: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);

  const market = new web3.PublicKey(opts.args[0]);
  const inputToken = new web3.PublicKey(opts.args[1]);

  const exponentCoreProgram = new Program(
    ExponentCoreIDLFile as ExponentCore,
    new AnchorProvider(rpc.v1, new Wallet(web3.Keypair.generate())),
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

  const receiptTokenOneTokenAsSOL = new Decimal(receiptToken.oneTokenAsSOL.toString());
  const balances = await getBalancesForVault(exponentCoreProgram, market);

  /* --------------------------------------------------------------- */
  logger.info(opts);
  const ytUsers = balances.ytBalances.map((balance) => balance.owner)
  const syUsers = balances.syProportions.map((balance) => balance.owner)
  const users = [...new Set([...ytUsers, ...syUsers])];
  const chunkList = chunkArray(users, 10);  // avoid to Too Many Requests
  const userBalanceOfDate = [];

  for (const chunk of chunkList) {
    const chunkRes = await Promise.all(chunk.map(
      async (user) => getUserBalanceOfDate(user, opts.date)
    ))
    userBalanceOfDate.push(...chunkRes)
    await new Promise(resolve => setTimeout(resolve, 5000)); //sleep 5s
  }

  balances.ytBalances = userBalanceOfDate
    .map((row) => row.yt)
    .filter((row) => row != null);
  balances.syProportions = userBalanceOfDate
    .map((row) => row.sy)
    .filter((row) => row != null);
  /* --------------------------------------------------------------- */

  process.nextTick(async () => {
    try {
      const syProportionsMap: { [owner: string]: Decimal } = {}; // owner -> amount map
      for (const balance of balances.syProportions) {
        syProportionsMap[balance.owner] = new Decimal(balance.amount);
      }

      for (const yt of balances.ytBalances) {
        const ytAmount = new Decimal(yt.amount);
        const ytValue = ytAmount
          .mul(Decimal.pow(10, 2 * receiptToken.decimals - balances.mintYt.decimals))
          .div(receiptTokenOneTokenAsSOL)
          .floor();

        const syValue = syProportionsMap[yt.owner] ?? new Decimal(0);
        delete syProportionsMap[yt.owner];

        opts.produceSnapshot({
          owner: yt.owner.toString(),
          baseTokenBalance: ytValue.plus(syValue).round().toNumber(),
        });
      }

      for (const [syOwner, syAmount] of Object.entries(syProportionsMap)) {
        opts.produceSnapshot({
          owner: syOwner,
          baseTokenBalance: syAmount.round().toNumber(),
        });
      }
    } catch (error) {
      opts.close(error as Error);
      return;
    }
    opts.close();
  });
};

interface YtAccount {
  owner: web3.PublicKey;
  ytBalance: bigint;
}

async function getYtAccounts({
  exponentCoreProgram,
  vaultAddress,
  expirationTs,
}: {
  exponentCoreProgram: Program<ExponentCore>;
  vaultAddress: web3.PublicKey;
  expirationTs: number;
}) {
  const ytAccounts = await exponentCoreProgram.account.yieldTokenPosition.all([
    { memcmp: { offset: 40, bytes: vaultAddress.toBase58() } },
  ]);

  const currentDate = new Date();
  const expirationDate = new Date(expirationTs * 1000);

  return ytAccounts.reduce((acc: YtAccount[], a) => {
    if (currentDate < expirationDate && a.account.vault.equals(vaultAddress)) {
      acc.push({
        owner: a.account.owner,
        ytBalance: BigInt(a.account.ytBalance.toString()),
      });
    }
    return acc;
  }, []);
}

async function getMintYt({
  exponentCoreProgram,
  mintSy,
}: {
  exponentCoreProgram: Program<ExponentCore>;
  mintSy: web3.PublicKey;
}) {
  const vaults = await exponentCoreProgram.account.vault.all([
    { memcmp: { offset: 40, bytes: mintSy.toBase58() } },
  ]);

  return Promise.all(
    vaults
      .filter((v) => v.account.mintSy.equals(mintSy))
      .map(async (v) => {
        const mintInfo = await exponentCoreProgram.provider.connection.getAccountInfo(
          v.account.mintYt,
        );
        if (!mintInfo) throw new Error('Mint not found');

        const data = Buffer.from(mintInfo.data);
        const decimals = data[44];

        return {
          mintYt: v.account.mintYt,
          decimals,
        };
      }),
  ).then((res) => res[0]);
}

export async function getBalancesForVault(
  exponentCoreProgram: Program<ExponentCore>,
  marketAddress: web3.PublicKey,
) {
  const marketData = await getMarketAndLpSupply({
    exponentCoreProgram,
    marketAddress,
  });

  const [ytAccounts, lpAccounts] = await Promise.all([
    getYtAccounts({
      exponentCoreProgram,
      vaultAddress: marketData.vault,
      expirationTs: marketData.marketExpirationTs,
    }),
    getLpAccounts({
      exponentCoreProgram,
      marketAddress,
    }),
  ]);

  return {
    ytBalances: ytAccounts.map((account) => ({
      owner: account.owner.toString(),
      amount: account.ytBalance.toString(),
    })),
    syProportions: lpAccounts.map((account) => ({
      owner: account.owner.toString(),
      amount: calculateSyProportionFromLp({
        lpBalance: account.lpBalance,
        marketLiquditySy: marketData.syBalance,
        lpSupply: marketData.lpSupply,
      }).toString(),
    })),
    mintYt: await getMintYt({
      exponentCoreProgram,
      mintSy: marketData.mintSy,
    }),
  };
}

async function getMarketAndLpSupply({
  exponentCoreProgram,
  marketAddress,
}: {
  exponentCoreProgram: Program<ExponentCore>;
  marketAddress: web3.PublicKey;
}) {
  const market = await exponentCoreProgram.account.marketTwo.fetch(marketAddress);
  const lpMintInfo = await exponentCoreProgram.provider.connection.getAccountInfo(market.mintLp);
  if (!lpMintInfo) throw new Error('LP mint not found');

  const data = Buffer.from(lpMintInfo.data);
  const lpSupply = data.readBigUInt64LE(36);

  return {
    syBalance: BigInt(market.financials.syBalance.toString()),
    mintSy: market.mintSy,
    lpSupply: lpSupply,
    vault: market.vault,
    marketExpirationTs: market.financials.expirationTs,
  };
}

async function getLpAccounts({
  exponentCoreProgram,
  marketAddress,
}: {
  exponentCoreProgram: Program<ExponentCore>;
  marketAddress: web3.PublicKey;
}) {
  const lpPositionAccounts = await exponentCoreProgram.account.lpPosition.all([
    { memcmp: { offset: 40, bytes: marketAddress.toBase58() } },
  ]);

  return lpPositionAccounts
    .filter((a) => a.account.market.equals(marketAddress))
    .map((a) => ({
      owner: a.account.owner,
      lpBalance: BigInt(a.account.lpBalance.toString()),
    }));
}

function calculateSyProportionFromLp({
  lpBalance,
  marketLiquditySy,
  lpSupply,
}: {
  lpBalance: bigint;
  marketLiquditySy: bigint;
  lpSupply: bigint;
}) {
  return (lpBalance * marketLiquditySy) / lpSupply;
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

async function getUserBalanceOfDate(
  owner: string,
  date: string,
) {
  const historyResponse = await fetch(`https://xpon-json-api-prod-650968662509.europe-west3.run.app/api/user-balance-history/${owner}/DYpJrbeHuoY33VXmYN7uo87e8aepatZyDS46j8cPscsN`)
  if (! historyResponse.ok) {
    logger.error(`Failed to fetch user balance history: ${owner}`);
    throw new Error(`Failed to fetch user balance history: ${historyResponse.statusText}`);
  }

  const history = (await historyResponse.json()) as { data: Array<{
    vaultAddress: string;
    balance: number;
    tokenType: "LP" | "YT";
    createdAt: string;  // ISO string
  }>};
  const lpBalance = history.data.find(
    (row) => (
      row.tokenType === 'LP' && (row.createdAt.startsWith(`${date}T22`) || row.createdAt.startsWith(`${date}T23`))
    )
  );
  const sy = lpBalance ? {
    owner,
    amount: lpBalance.balance.toString(),
  } : undefined

  const ytBalance = history.data.find(
    (row) => (
      row.tokenType === 'YT' && (row.createdAt.startsWith(`${date}T22`) || row.createdAt.startsWith(`${date}T23`))
    )
  );
  const yt = ytBalance ? {
    owner,
    amount: ytBalance.balance.toString(),
  } : undefined

  return { sy, yt };
}