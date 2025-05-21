import * as web3 from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { SourceStreamFactory } from '.';
import { RPCClient } from '../../../rpc';

export const TOKEN_2022_PROGRAM_ID = new web3.PublicKey(
  'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb',
);

export const SOON_SVM_MAINNET_RPC = 'https://rpc.mainnet.soo.network/rpc';
export const SOON_SVM_WFRAGSOL_MINT_ADDRESS = new web3.PublicKey(
  '7T9sawCGJAV4wC49CjHpw8TGL3ZuPAbZipNq86YXGecy',
);

async function getTokenAccountsOfMint(
  conn: web3.Connection,
  mint: web3.PublicKey,
): Promise<
  {
    programOwner: string;
    address: string;
    tokenOwner: string;
    amount: bigint;
  }[]
> {
  enum AccountType {
    /// Marker for 0 data
    Uninitialized,
    /// Mint account with additional extensions
    Mint,
    /// Token holding account with additional extensions
    Account,
  }

  const TOKEN_ACC_SIZE = 165;

  let totalAccs: web3.GetProgramAccountsResponse = [];

  {
    const accs = await conn.getProgramAccounts(TOKEN_PROGRAM_ID, {
      dataSlice: { offset: 0, length: TOKEN_ACC_SIZE + 1 },
      filters: [{ dataSize: TOKEN_ACC_SIZE }, { memcmp: { offset: 0, bytes: mint.toBase58() } }],
    });

    totalAccs = totalAccs.concat(accs);
  }

  {
    let accs = await conn.getProgramAccounts(TOKEN_2022_PROGRAM_ID, {
      dataSlice: { offset: 0, length: TOKEN_ACC_SIZE + 1 },
      filters: [{ memcmp: { offset: 0, bytes: mint.toBase58() } }],
    });

    // filter out non-tokenAccount accounts
    accs = accs.filter((acc) => acc.account.data[TOKEN_ACC_SIZE] == AccountType.Account);

    totalAccs = totalAccs.concat(accs);
  }

  // Filter out zero balance accounts
  const nonZeroAccs = totalAccs.filter(
    (acc) => !acc.account.data.subarray(64, 64 + 8).equals(Buffer.from([0, 0, 0, 0, 0, 0, 0, 0])),
  );

  const finalAccs = nonZeroAccs.map((acc) => {
    return {
      programOwner: acc.account.owner.toBase58(),
      address: acc.pubkey.toBase58(),
      tokenOwner: new web3.PublicKey(acc.account.data.subarray(32, 64)).toBase58(),
      amount: acc.account.data.subarray(64, 64 + 8).readBigUInt64LE(),
    };
  });

  return finalAccs;
}

export const soonBridge: SourceStreamFactory = async (opts) => {
  const bridgePool = new web3.PublicKey(opts.args[0]);
  const inputToken = new web3.PublicKey(opts.args[1]);
  if (!bridgePool.equals(new web3.PublicKey('PMST7CMBeJubWwhieuTvjgyEEwH8FLdNorZdvMJ3aVA'))) {
    throw new Error(
      `invalid input address: ${bridgePool.toString()} is not a valid bridge pool address`,
    );
  }
  if (!inputToken.equals(new web3.PublicKey('WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U'))) {
    throw new Error(
      `invalid input address: ${inputToken.toString()} is not a valid wfragSOL mint address`,
    );
  }

  const rpc = new RPCClient(SOON_SVM_MAINNET_RPC);
  const accounts = await getTokenAccountsOfMint(rpc.v1, SOON_SVM_WFRAGSOL_MINT_ADDRESS);

  process.nextTick(() => {
    try {
      for (const account of accounts) {
        opts.produceSnapshot({
          owner: account.tokenOwner,
          baseTokenBalance: Number(account.amount),
        });
      }
    } catch (error) {
      opts.close(error as Error);
      return;
    }
    opts.close();
  });
};
