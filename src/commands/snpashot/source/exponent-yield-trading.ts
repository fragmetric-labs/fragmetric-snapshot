import web3 from '@solana/web3.js-1';
import { AnchorProvider, Program, Wallet } from '@coral-xyz/anchor';
import { SourceStreamFactory } from './index';
import { RPCClient } from '../../../rpc';
import { ExponentCore } from './exponent.idl';
import ExponentCoreIDLFile from './exponent.idl.json';
import { RestakingClient, RestakingFundReceiptToken } from '@fragmetric-labs/sdk';
import Decimal from 'decimal.js';
import {logger} from "../../../logger";
import * as path from "path";
import * as fs from "fs";
import { parse } from "csv-parse";

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

  const CHUNK_SIZE = 10;
  const chunkList = chunkArray(users, CHUNK_SIZE);  // avoid to Too Many Requests
  let userBalanceOfDate: any[] = [];
  let errorUserList: string[] = [];

  let results = await getUsersBalanceOfDateCsv(opts.date, balances.marketData);
  results = (function (results) {
    const filteredUsersMap: { [owner: string]: any } = {}; // owner -> {sy, yt} map

    for (const result of results) {
      if (result.sy) {
        const owner = result.sy.owner;
        if (!filteredUsersMap[owner]) {
          filteredUsersMap[owner] = {};
        }
        filteredUsersMap[owner].sy = result.sy;
      }
      if (result.yt) {
        const owner = result.yt.owner;
        if (!filteredUsersMap[owner]) {
          filteredUsersMap[owner] = {};
        }
        filteredUsersMap[owner].yt = result.yt;
      }
    }

    return Object.values(filteredUsersMap);
  })(results);
  userBalanceOfDate = userBalanceOfDate.concat(results);

  // for api call
  // let loopIndex = 0;
  // for (const chunk of chunkList) {
  //   const userBalanceOfDataLengthBef = userBalanceOfDate.length;
  //   const errorUserListLengthBef = errorUserList.length;

  //   for (const user of chunk) {
  //     try {
  //       const result = await getUserBalanceOfDate(user, opts.date, balances.marketData);
  //       userBalanceOfDate.push(result);

  //       // check value
  //       // const owner = result.sy?.owner
  //       //   ? result.sy.owner
  //       //   : result.yt?.owner
  //       //     ? result.yt.owner
  //       //     : undefined;
  //       // const isOwnerMatch = result.sy?.owner
  //       //   ? result.sy.owner == owner
  //       //   : result.yt?.owner
  //       //     ? result.yt.owner == owner
  //       //     : false;
  //       // if (isOwnerMatch) {
  //       //   console.log(`user ${owner} in balances - yt: ${balances.ytBalances.filter(balance => balance.owner == owner)[0].amount}, sy: ${balances.syProportions.filter(balance => balance.owner == owner)[0].amount}`);
  //       //   console.log(`> user ${owner} in api call - yt: ${result.yt?.amount}, sy: ${result.sy?.amount}`);
  //       // }
  //     } catch (err: any) {
  //       const errorUser = err.message.split(" ")[0];
  //       if (errorUser.length < 43) continue; // if it's not publickey then skip
  //       errorUserList.push(errorUser);
  //     }
  //   }

  //   console.log(`userBalanceOfDate length ${userBalanceOfDate.length}, +${userBalanceOfDate.length - userBalanceOfDataLengthBef}\n errorUserList length ${errorUserList.length}, +${errorUserList.length - errorUserListLengthBef}`);

  //   loopIndex++;

  //   // await new Promise(resolve => setTimeout(resolve, 3000)); //sleep 3s
  // }

  // let errorLoopIndex = 0;
  // while (errorUserList.length > 0) {
  //   let userBalanceOfDataLengthBef = userBalanceOfDate.length;
  //   let errorUserListLengthBef = errorUserList.length;
  //   console.log(`starting error loop ${errorLoopIndex}, errorUserList length ${errorUserListLengthBef}`);

  //   let chunkLen = errorUserList.length > CHUNK_SIZE ? CHUNK_SIZE : errorUserList.length;
  //   const chunk = errorUserList.splice(0, chunkLen);

  //   for (const user of chunk) {
  //     try {
  //       const result = await getUserBalanceOfDate(user, opts.date, balances.marketData);
  //       userBalanceOfDate.push(result);
  //     } catch (err: any) {
  //       const errorUser = err.message.split(" ")[0];
  //       if (errorUser.length < 43) continue; // if it's not publickey then skip
  //       errorUserList.push(errorUser);
  //     }
  //   }

  //   console.log(`ending error loop ${errorLoopIndex}, userBalanceOfDate length ${userBalanceOfDate.length}, changed +${userBalanceOfDate.length - userBalanceOfDataLengthBef}\n errorUserList length ${errorUserList.length}, changed -${errorUserListLengthBef - errorUserList.length}`);

  //   errorLoopIndex++;

  //   // await new Promise(resolve => setTimeout(resolve, 3000)); //sleep 3s
  // }

  balances.ytBalances = userBalanceOfDate
    .map((row) => row.yt)
    .filter((row) => row != null && row != undefined);
  balances.syProportions = userBalanceOfDate
    .map((row) => row.sy)
    .filter((row) => row != null && row != undefined);
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
    marketData,
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

async function getUsersBalanceOfDateCsv(
  date: string,
  marketData: any,
) {  
  return new Promise((resolve, reject) => {
    const results: any[] = [];
    // create a readable stream and pipe it to the CSV parser.
    fs.createReadStream(path.join(__dirname, "../../../../tmp/user_balance_history_0317_0319.csv"))
      .pipe(
        parse({
          columns: true,
          trim: true,
        })
      )
      .on("data", (row: {
        id: string;
        user_address: string;
        vault_address: string;
        token_type: string;
        balance: string;
        created_at: string;
        balance_usd_value: string;
      }) => {
        const lpBalance = row.token_type == "LP" && (row.created_at.startsWith(`${date} 22`) || row.created_at.startsWith(`${date} 23`)) ? row.balance : undefined;

        const sy = lpBalance ? {
          owner: row.user_address,
          amount: calculateSyProportionFromLp({
            lpBalance: BigInt(lpBalance),
            marketLiquditySy: marketData.syBalance,
            lpSupply: marketData.lpSupply,
          }).toString(),
        } : undefined;

        const ytBalance = row.token_type == "YT" && (row.created_at.startsWith(`${date} 22`) || row.created_at.startsWith(`${date} 23`)) ? row.balance : undefined;

        const yt = ytBalance ? {
          owner: row.user_address,
          amount: ytBalance,
        } : undefined;

        if (sy || yt) {
          results.push({ sy, yt });
        }
      })
      .on("end", () => {
        resolve(results);
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

async function getUserBalanceOfDate(
  owner: string,
  date: string,
  marketData: any,
) {
  const historyResponse = await fetch(`https://xpon-json-api-prod-650968662509.europe-west3.run.app/api/user-balance-history/${owner}/DYpJrbeHuoY33VXmYN7uo87e8aepatZyDS46j8cPscsN`);
  if (!historyResponse.ok) {
    logger.error(`Failed to fetch user balance history: ${owner}`);
    throw new Error(`${owner} Failed to fetch user balance history: ${historyResponse.statusText}`);
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
    amount: calculateSyProportionFromLp({
      lpBalance: BigInt(lpBalance.balance),
      marketLiquditySy: marketData.syBalance,
      lpSupply: marketData.lpSupply,
    }).toString(),
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