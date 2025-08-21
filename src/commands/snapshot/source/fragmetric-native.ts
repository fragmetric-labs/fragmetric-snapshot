import { web3 } from '@coral-xyz/anchor';
import { RPCClient } from '../../../rpc';
import { SourceStreamFactory } from './index';

export const fragmetricNative: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);
  const receiptTokenMintAddress = opts.args[1];
  const tokenAccounts = await rpc.getTokenAccountsOfMint(
    new web3.PublicKey(receiptTokenMintAddress),
  );

  process.nextTick(() => {
    try {
      for (const tokenAccount of tokenAccounts) {
        opts.produceSnapshot({
          owner: tokenAccount.tokenOwner.toString(),
          baseTokenBalance: Number(tokenAccount.amount),
        });
      }
    } catch (error) {
      opts.close(error as Error);
      return;
    }
    opts.close();
  });
};
