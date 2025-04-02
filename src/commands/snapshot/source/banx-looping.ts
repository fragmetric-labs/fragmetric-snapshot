import { AnchorProvider, Program, Wallet, web3 } from '@coral-xyz/anchor';
import { RPCClient } from '../../../rpc';
import { BanxIdl } from './banx.idl';
import BondsIDLFile from './banx.idl.json';
import { SourceStreamFactory } from './index';

export const banxLooping: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);
  const wrappedTokenMintAddress = opts.args[0]
  const banxProgram = new Program(
    BondsIDLFile as unknown as BanxIdl,
    new AnchorProvider(rpc.v1, new Wallet(new web3.Keypair())),
  );

  const fraktBonds = await banxProgram.account.fraktBond.all();
  const wfragsolFraktBonds = fraktBonds
    .filter((fraktBond) =>
      fraktBond.account.fbondTokenMint.equals(new web3.PublicKey(wrappedTokenMintAddress)),
    )

  process.nextTick(() => {
    try {
      for (const wfragsolFraktBond of wfragsolFraktBonds) {
        const account = wfragsolFraktBond.account
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
