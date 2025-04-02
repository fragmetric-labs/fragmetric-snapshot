import { AnchorProvider, Program, Wallet, web3 } from '@coral-xyz/anchor';
import { RPCClient } from '../../../rpc';
import { BanxIdl } from './banx.idl';
import BondsIDLFile from './banx.idl.json';
import { SourceStreamFactory } from './index';

// args: banx market address, base token mint
export const banxLooping: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);
  const wrappedTokenMintAddress = opts.args[1];
  const banxProgram = new Program(
    BondsIDLFile as BanxIdl,
    new AnchorProvider(rpc.v1, new Wallet(new web3.Keypair())),
  );

  const wfragsolFraktBonds = await banxProgram.account.fraktBond.all([
    {
      memcmp: { offset: 99, bytes: new web3.PublicKey(wrappedTokenMintAddress).toBase58() },
    },
  ]);

  process.nextTick(() => {
    try {
      for (const wfragsolFraktBond of wfragsolFraktBonds) {
        const account = wfragsolFraktBond.account;
        opts.produceSnapshot({
          owner: account.fbondIssuer.toString(),
          baseTokenBalance: account.fbondTokenSupply.toString(),
        });
      }
    } catch (error) {
      opts.close(error as Error);
      return;
    }
    opts.close();
  });
};
