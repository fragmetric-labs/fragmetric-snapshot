import web3 from '@solana/web3.js-1';
import { AnchorProvider, Program, Wallet, BN } from '@coral-xyz/anchor';
import { SourceStreamFactory } from './index';
import { RPCClient } from '../../../rpc';
import { ExponentCore } from './exponent.idl';
import ExponentCoreIDLFile from './exponent.idl.json';
import {
  RestakingClient,
  RestakingFundReceiptToken,
  RestakingFundSupportedAsset,
} from '@fragmetric-labs/sdk';
import Decimal from 'decimal.js';
import AmmImpl from '@meteora-ag/dynamic-amm-sdk';

const testUser = new web3.PublicKey('91zBeWL8kHBaMtaVrHwWsck1UacDKvje82QQ3HE2k8mJ');

const EXPONENT_METEORA_MARKET_ADDRS = [
  'GZ5ZaP3D9qSQ4R4ob2NPP7TXEnjZmYgN916NGvr8gg16', // Exponent MLP wfragSOL-JitoSOL DAMM pool
  '5dzopBMvCi6U3CpC9SdjE88A2gQT4ZgKPrjRZnaoPRV2', // Exponent MLP wfragJTO-JTO DAMM pool
];
const METEORA_DAMM_POOL_ADDR: Record<string, string> = {
  WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U: 'iMTNY8mkASoED5kmGFrmbJXmV4GpWuhn92JRYGEMUuV', // wfragSOL : Meteora wfragSOL-JitoSOL DAMM pool
  WFRGJnQt5pK8Dv4cDAbrSsgPcmboysrmX3RYhmRRyTR: 'AZnMR3v5VvAFtVTLQGwEcgAZxim1E8wYmDunDp9FyKRd', // wfragJTO : Meteora wfragJTO-JTO DAMM pool
};

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

  process.nextTick(async () => {
    try {
      const syProportionsMap: { [owner: string]: Decimal } = {}; // owner -> amount map
      for (const balance of balances.syProportions) {
        syProportionsMap[balance.owner] = new Decimal(balance.amount);
        if (balance.owner == testUser.toString()) {
          console.log(`My syProportion:`, syProportionsMap[balance.owner]);
        }
      }

      if (!isMeteoraMarket({ market })) {
        // then it's normal exponent
        for (const yt of balances.ytBalances) {
          const ytAmount = new Decimal(yt.amount);
          const ytValue = ytAmount
            .mul(Decimal.pow(10, 2 * receiptToken.decimals - balances.mintYt.decimals))
            .div(receiptTokenOneTokenAsSOL)
            .floor();
          if (yt.owner == testUser.toString()) {
            console.log(`My yt amount ${ytAmount}, yt value: ${ytValue}`);
          }

          const syValue = syProportionsMap[yt.owner] ?? new Decimal(0);
          delete syProportionsMap[yt.owner];

          opts.produceSnapshot({
            owner: yt.owner.toString(),
            baseTokenBalance: ytValue.plus(syValue).round().toNumber(),
          });
        }
      } else {
        // then it would be meteora's
        const dammPoolAddr = new web3.PublicKey(METEORA_DAMM_POOL_ADDR[inputToken.toString()]);
        const dammPool = await AmmImpl.create(rpc.v1, dammPoolAddr);

        const tokenA = dammPool.tokenAMint;
        const tokenB = dammPool.tokenBMint;

        for (const yt of balances.ytBalances) {
          const ytAmount = new Decimal(yt.amount);
          const ytValue = ytAmount.div(dammPool.poolInfo.virtualPrice).floor();
          if (yt.owner == testUser.toString()) {
            console.log(`My yt amount ${ytAmount}, yt value: ${ytValue}`);
          }

          const syValue = syProportionsMap[yt.owner] ?? new Decimal(0);
          delete syProportionsMap[yt.owner];

          const mlpAmount = ytValue.plus(syValue).round().toNumber();

          // MLP -> wfrag token amount
          let supportedAsset: RestakingFundSupportedAsset | undefined = undefined;
          const withdrawQuoteBothTokens = dammPool.getWithdrawQuote(new BN(mlpAmount), 0);

          if (tokenA.address.toString() == inputToken.toString()) {
            // const withdrawQuoteOneToken = dammPool.getWithdrawQuote(new BN(mlpAmount), 0, tokenA.address);
            // console.log(`${yt.owner} withdrawQuoteBothTokens:`, withdrawQuoteBothTokens, `withdrawQuoteOneToken:`, withdrawQuoteOneToken);

            for (const fragmetricRestakingClient of fragmetricRestakingClients) {
              supportedAsset = (await fragmetricRestakingClient.state.supportedAssets()).find(
                (asset) => asset.mint?.equals(tokenB.address),
              );
              if (supportedAsset) break;
            }
            if (!supportedAsset) {
              throw new Error('failed to find matched fragmetric supported token from given token');
            }

            const tokenBOneTokenAsSol = new Decimal(supportedAsset.oneTokenAsSOL.toString());

            opts.produceSnapshot({
              owner: yt.owner.toString(),
              // baseTokenBalance: withdrawQuoteOneToken.tokenAOutAmount.toNumber(),
              // tokenB -> tokenA
              baseTokenBalance: new Decimal(withdrawQuoteBothTokens.tokenAOutAmount.toString())
                .add(
                  new Decimal(withdrawQuoteBothTokens.tokenBOutAmount.toString())
                    .mul(tokenBOneTokenAsSol.div(receiptTokenOneTokenAsSOL))
                    .floor(),
                )
                .toNumber(),
            });
          } else if (tokenB.address.toString() == inputToken.toString()) {
            // const withdrawQuoteOneToken = dammPool.getWithdrawQuote(new BN(mlpAmount), 0, tokenB.address);
            // console.log(`${yt.owner} withdrawQuoteBothTokens:`, withdrawQuoteBothTokens, `withdrawQuoteOneToken:`, withdrawQuoteOneToken);

            for (const fragmetricRestakingClient of fragmetricRestakingClients) {
              supportedAsset = (await fragmetricRestakingClient.state.supportedAssets()).find(
                (asset) => asset.mint?.equals(tokenA.address),
              );
              if (supportedAsset) break;
            }
            if (!supportedAsset) {
              throw new Error('failed to find matched fragmetric supported token from given token');
            }

            const tokenAOneTokenAsSol = new Decimal(supportedAsset.oneTokenAsSOL.toString());

            opts.produceSnapshot({
              owner: yt.owner.toString(),
              // baseTokenBalance: withdrawQuoteOneToken.tokenBOutAmount.toNumber(),
              // tokenA -> tokenB
              baseTokenBalance: new Decimal(withdrawQuoteBothTokens.tokenBOutAmount.toString())
                .add(
                  new Decimal(withdrawQuoteBothTokens.tokenAOutAmount.toString())
                    .mul(tokenAOneTokenAsSol.div(receiptTokenOneTokenAsSOL))
                    .floor(),
                )
                .toNumber(),
            });
          } else {
            throw new Error('invalid meteora pool');
          }
        }
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

function isMeteoraMarket({ market }: { market: web3.PublicKey }) {
  return EXPONENT_METEORA_MARKET_ADDRS.includes(market.toString());
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
