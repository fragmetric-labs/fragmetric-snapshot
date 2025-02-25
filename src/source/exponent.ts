import web3 from '@solana/web3.js-1';
import { AnchorProvider, Program, Wallet } from '@coral-xyz/anchor';
import { SourceStreamOptions } from './index';
import { RPCClient } from '../rpc';
import { ExponentCore } from './exponent_core_idl';
import ExponentCoreIDLFile from './exponent_core_idl.json';
import { RestakingClient, RestakingFundReceiptToken } from '@fragmetric-labs/sdk';
import Decimal from 'decimal.js';

// args: exponent market address, input token mint
export async function produceExponentYieldTrading(opts: SourceStreamOptions) {
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

  const balances = await getBalancesForVault(exponentCoreProgram, market);

  process.nextTick(async () => {
    try {
      const syProportionsMap: {[owner: string]: Decimal} = {}; // owner -> amount map
      for (const balance of balances.syProportions) {
        syProportionsMap[balance.owner] = new Decimal(balance.amount);
      }

      const receiptTokenOneTokenAsSOL = new Decimal(receiptToken.oneTokenAsSOL.toString());
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
}

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
    if (currentDate < expirationDate) {
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

  return vaults.map(async (v) => {
    const mintInfo = await exponentCoreProgram.provider.connection.getAccountInfo(v.account.mintYt);
    if (!mintInfo) throw new Error('Mint not found');

    const data = Buffer.from(mintInfo.data);
    const decimals = data[44];

    return {
      mintYt: v.account.mintYt,
      decimals,
    };
  });
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
    mintYt: (
      await Promise.all(
        await getMintYt({
          exponentCoreProgram,
          mintSy: marketData.mintSy,
        }),
      )
    )[0],
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

  return lpPositionAccounts.map((a) => ({
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
