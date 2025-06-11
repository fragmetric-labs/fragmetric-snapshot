import * as web3 from '@solana/web3.js';
import { SourceStreamFactory } from '.';
import { RPCClient } from '../../../rpc';

export const SOON_SVM_MAINNET_RPC = 'https://rpc.mainnet.soo.network/rpc';
export const SOON_SVM_WFRAGSOL_MINT_ADDRESS = new web3.PublicKey(
  '7T9sawCGJAV4wC49CjHpw8TGL3ZuPAbZipNq86YXGecy',
);

export const soonBridge: SourceStreamFactory = async (opts) => {
  const bridgePool = new web3.PublicKey(opts.args[0]);
  if (!bridgePool.equals(new web3.PublicKey('PMST7CMBeJubWwhieuTvjgyEEwH8FLdNorZdvMJ3aVA'))) {
    throw new Error(
      `invalid input address: ${bridgePool.toString()} is not a valid bridge pool address`,
    );
  }
  const inputToken = new web3.PublicKey(opts.args[1]);
  if (!inputToken.equals(new web3.PublicKey('WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U'))) {
    throw new Error(
      `invalid input address: ${inputToken.toString()} is not a valid wfragSOL mint address`,
    );
  }
  const bridgedInputToken = SOON_SVM_WFRAGSOL_MINT_ADDRESS;

  const rpc = new RPCClient(SOON_SVM_MAINNET_RPC);
  const accounts = await rpc.getTokenAccountsOfMint(bridgedInputToken);

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
