import * as web3 from '@solana/web3.js';
import { SourceStreamFactory } from '.';
import { RPCClient } from '../../../rpc';
import { Loopscale } from './loopscale.idl';
import LoopscaleIDLFile from './loopscale.idl.json';
import { AnchorProvider, Program, ProgramAccount, Wallet, BN } from '@coral-xyz/anchor';
import { NodeWallet } from '@mrgnlabs/mrgn-common';
import { getConfig, MarginfiClient } from '@mrgnlabs/marginfi-client-v2';
import { AccountLayout } from '@solana/spl-token';

export const loopscaleLending: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);

  // 1. if vault key is strategy key, then it's lending vault
  // 2. if vault key is vault key, then it's advanced lending
  const vault = new web3.PublicKey(opts.args[0]);
  const inputToken = new web3.PublicKey(opts.args[1]);

  const loopscaleProgram = new Program(
    LoopscaleIDLFile as Loopscale,
    new AnchorProvider(rpc.v1, new Wallet(web3.Keypair.generate())),
  );

  const userStrategyBalance = await getBalanceOfStrategiesForMint({
    loopscaleProgram,
    mint: inputToken,
  });
  const vaults = (await getVaultsByMint({ loopscaleProgram, mint: inputToken })).map((v) =>
    v.publicKey.toString(),
  );

  let filteredStrategyBalances: { [k: string]: number } = {};
  let userVaultStakes: { [user: string]: number } = {};

  if (vaults.includes(vault.toString())) {
    filteredStrategyBalances = Object.fromEntries(
      Object.entries(userStrategyBalance).filter(([key]) => !vaults.includes(key)),
    );
  } else {
    userVaultStakes = await getLendVaultPositionsForMint({
      loopscaleProgram,
      mint: inputToken,
      strategy: vault,
    });
  }

  process.nextTick(() => {
    try {
      // 0: advanced lending, 1: lending vault
      for (const obj of [filteredStrategyBalances, userVaultStakes]) {
        for (const [key, value] of Object.entries(obj)) {
          opts.produceSnapshot({
            owner: key,
            baseTokenBalance: Math.floor(value),
          });
        }
      }
    } catch (error) {
      opts.close(error as Error);
      return;
    }
    opts.close();
  });
};

function bytesToNumberLE(bytes: Uint8Array): number {
  let result = 0n; // Start with BigInt 0
  for (let i = bytes.length - 1; i >= 0; i--) {
    result = (result << 8n) | BigInt(bytes[i]);
  }

  return Number(result);
}

async function getBalanceOfStrategiesForMint({
  loopscaleProgram,
  mint,
}: {
  loopscaleProgram: Program<Loopscale>;
  mint: web3.PublicKey;
}) {
  const strats = await getStrategiesByMint({ loopscaleProgram, mint });

  const userBalances: { [user: string]: number } = {};
  for (let i = 0; i < strats.length; i++) {
    const lender = strats[i].lender.toString();
    const balance = getTotalStrategyBalance(strats[i]);
    userBalances[lender] = userBalances[lender] ? userBalances[lender] + balance : balance;
  }

  return userBalances;
}

async function getStrategiesByMint({
  loopscaleProgram,
  mint,
}: {
  loopscaleProgram: Program<Loopscale>;
  mint: web3.PublicKey;
}) {
  const principalFilter = [
    {
      memcmp: {
        offset: 8 + 1 + 32 + 1,
        bytes: mint.toBase58(),
      },
    },
  ];
  const outstandingStrategies = await loopscaleProgram.account.strategy.all(principalFilter);

  return outstandingStrategies.map((str) => str.account);
}

function getTotalStrategyBalance(strategy: any) {
  // Values are stored as a custom decimal type on chain that requires a bit more parsing
  const totalValue =
    new BN(strategy.externalYieldAmount[0].reverse()).toNumber() +
    new BN(strategy.currentDeployedAmount[0].reverse()).toNumber() +
    new BN(strategy.tokenBalance[0].reverse()).toNumber();

  return totalValue;
}

async function getVaultsByMint({
  loopscaleProgram,
  mint,
}: {
  loopscaleProgram: Program<Loopscale>;
  mint: web3.PublicKey;
}) {
  const principalFilter = [
    {
      memcmp: {
        offset: 8 + 32 + 32 + 1 + 8 + 32,
        bytes: mint.toBase58(),
      },
    },
  ];
  const vaults = await loopscaleProgram.account.vault.all(principalFilter);

  return vaults;
}

async function getLendVaultPositionsForMint({
  loopscaleProgram,
  mint,
  strategy,
}: {
  loopscaleProgram: Program<Loopscale>;
  mint: web3.PublicKey;
  strategy: web3.PublicKey;
}) {
  let vaults = await getVaultsByMint({ loopscaleProgram, mint });
  let strategyMap: { [vault: string]: string } = {};
  vaults.forEach((vault) => {
    const seeds = [Buffer.from('strategy'), vault.publicKey.toBytes()];
    const [strategyAddress] = web3.PublicKey.findProgramAddressSync(
      seeds,
      loopscaleProgram.programId,
    );
    strategyMap[vault.publicKey.toBase58()] = strategyAddress.toString();
  });

  const strats = Object.values(strategyMap);

  // Getting strategy accounts which will be needed to compute nav later
  const accounts = await loopscaleProgram.account.strategy.fetchMultiple(strats);

  const userBalances: { [user: string]: number } = {};
  for (let i = 0; i < vaults.length; i++) {
    const vault = vaults[i];
    const strategyAddress = strategyMap[vault.publicKey.toString()];
    if (strategyAddress != strategy.toString()) continue; // filter the only strategy

    const stratPubkey = new web3.PublicKey(strategyAddress);
    const accountIndex = strats.indexOf(strategyAddress);

    if (accountIndex >= 0) {
      const strat = accounts[accountIndex];
      // This is the total
      const tokenBalance = await getBalanceForVault({
        connection: loopscaleProgram.provider.connection,
        strategyAddress: stratPubkey,
        strategy: strat,
      });
      const lpPrice = tokenBalance / bytesToNumberLE(new Uint8Array(vault.account.lpSupply[0]));
      const stakeAccountFilter = [
        {
          memcmp: {
            offset: 8,
            bytes: vault.publicKey.toBase58(),
          },
        },
      ];

      const vaultStakes = await loopscaleProgram.account.vaultStake.all(stakeAccountFilter);

      // Each stake account will have a user and a balance
      for (let i = 0; i < vaultStakes.length; i++) {
        const stakeAccount = vaultStakes[i].account;
        const staker = stakeAccount.user.toString();
        const stakeAmount = bytesToNumberLE(new Uint8Array(stakeAccount.amount[0]));
        const baseAmount = stakeAmount * lpPrice;
        userBalances[staker] = userBalances[staker]
          ? userBalances[staker] + baseAmount
          : baseAmount;
      }
    }
  }

  return userBalances;
}

async function getBalanceForVault({
  connection,
  strategyAddress,
  strategy,
}: {
  connection: web3.Connection;
  strategyAddress: web3.PublicKey;
  strategy: any;
}) {
  const principalMint = strategy.principalMint;
  const externalYieldSource = strategy.externalYieldSource;
  let balance = 0;
  if (externalYieldSource == 1) {
    // Marginfi used for idle capital, add this account to loader
    const mfiBalance = await getMarginFiAccountBalance({ connection, account: strategyAddress });
    balance += mfiBalance; // mrgn balacne
  } else {
    // No external deployment, just look at token accounts owned by vault strategy
    const stratTAs = await connection.getTokenAccountsByOwner(strategyAddress, {
      mint: principalMint,
    });

    stratTAs.value.forEach((accountInfo) => {
      const decodedAccount = AccountLayout.decode(accountInfo.account.data);
      balance += Number(decodedAccount.amount);
    });
  }
  const lastAccruedTimestamp = bytesToNumberLE(new Uint8Array(strategy.lastAccruedTimestamp[0]));
  const interestPerSecond = bytesToNumberLE(new Uint8Array(strategy.interestPerSecond[0])) / 1e18;
  const currentDeployedAmount = bytesToNumberLE(new Uint8Array(strategy.currentDeployedAmount[0]));
  const now = Math.floor(Date.now() / 1000); // Converts to seconds int
  const accruedDelta = now - lastAccruedTimestamp;
  const deployedAmount = currentDeployedAmount + interestPerSecond * accruedDelta;
  balance += deployedAmount;

  return balance;
}

async function getMarginFiAccountBalance({
  connection,
  account,
}: {
  connection: web3.Connection;
  account: web3.PublicKey;
}) {
  const wallet = NodeWallet.local();
  const config = getConfig('production');
  const client = await MarginfiClient.fetch(config, wallet, connection);
  const mfiAccounts = await client.getMarginfiAccountsForAuthority(account);
  const banks = client.banks;
  let accountBalance = 0;
  mfiAccounts.forEach((acc) => {
    acc.activeBalances.forEach((bal) => {
      const shareBalance = bal.assetShares;
      const bankKey = bal.bankPk.toString();
      const bank = banks.get(bankKey);
      if (bank !== undefined) {
        const shareValue = bank.assetShareValue;
        const totalValue = shareBalance.multipliedBy(shareValue);
        accountBalance += totalValue.toNumber();
      }
    });
  });
  return accountBalance;
}
