import { web3 } from '@coral-xyz/anchor';
import { RestakingProgram } from '@fragmetric-labs/sdk';
import { Address } from '@solana/kit';
import { RPCClient } from '../../../rpc';
import { SourceStreamFactory } from './index';

export const fragmetricNative: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);
  const targetTokenMintAddress = opts.args[0]; // pool address
  const receiptTokenMintAddress = opts.args[1] || targetTokenMintAddress; // token A

  const restaking = RestakingProgram[rpc.cluster]();
  const fragX = await restaking.receiptTokenMint(receiptTokenMintAddress);
  const fragXResolved = await fragX.resolve();

  if (fragXResolved === null) {
    throw new Error(`the given receipt_token_mint_address: ${receiptTokenMintAddress} is invalid`);
  }

  if (
    fragXResolved.receiptTokenMint != targetTokenMintAddress &&
    fragXResolved.wrappedTokenMint != targetTokenMintAddress
  ) {
    throw new Error(
      `the given target_token_mint_address: ${targetTokenMintAddress} is not a valid fragAsset or wfragAsset mint address`,
    );
  }

  process.nextTick(async () => {
    try {
      const tokenAccounts = await rpc.getTokenAccountsOfMint(
        new web3.PublicKey(targetTokenMintAddress),
      );

      for (const tokenAccount of tokenAccounts) {
        if (!web3.PublicKey.isOnCurve(new web3.PublicKey(tokenAccount.tokenOwner))) {
          continue;
        }
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
