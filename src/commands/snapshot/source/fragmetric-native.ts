import { web3 } from '@coral-xyz/anchor';
import { RestakingProgram } from '@fragmetric-labs/sdk';
import { RPCClient } from '../../../rpc';
import { SourceStreamFactory } from './index';

export const fragmetricNative: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);
  const receiptTokenMintAddress = opts.args[0];
  try {
    const restaking = RestakingProgram[rpc.cluster]();
    const resolvedReceiptTokenMint = await restaking
      .receiptTokenMint(receiptTokenMintAddress)
      .resolve();
    if (resolvedReceiptTokenMint === null) {
      throw new Error(
        `the given receipt_token_mint_address: ${receiptTokenMintAddress} is invalid`,
      );
    }
  } catch (e) {
    opts.close(e as Error);
    return;
  }

  process.nextTick(async () => {
    try {
      const tokenAccounts = await rpc.getTokenAccountsOfMint(
        new web3.PublicKey(receiptTokenMintAddress),
      );

      for (const tokenAccount of tokenAccounts) {
        opts.produceSnapshot({
          owner: tokenAccount.tokenOwner.toString(),
          baseTokenBalance: Number(tokenAccount.amount),
        });
      }
    } catch (e) {
      opts.close(e as Error);
      return;
    }
    opts.close();
  });
};
