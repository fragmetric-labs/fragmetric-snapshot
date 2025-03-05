import { AnchorProvider, Program, Wallet, web3 } from '@coral-xyz/anchor';
import { SourceStreamFactory } from '.';
import { RPCClient } from '../rpc';
import nxfinanceIDLFile from './nxfinance.idl.json';
import { NxLend } from './nxfinance.idl';
import Decimal from 'decimal.js';


export const nxfinanceLooping: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);
  const inputToken = new web3.PublicKey(opts.args[0]);

  const nxfinanceProgram = new Program(
    nxfinanceIDLFile as NxLend,
    new AnchorProvider(rpc.v1, new Wallet(new web3.Keypair())),
  );

  const positionAccounts = await nxfinanceProgram.account.position.all();

  process.nextTick(() => {
    try {
      for (const positionAccount of positionAccounts) {
        const owner = positionAccount.account.owner;
        for (const position of positionAccount.account.positions) {
          if (position.collateralMint.equals(inputToken)) {
            const amount = new Decimal(position.collateralTokens.toString());
            if (!amount.isZero()) {
              opts.produceSnapshot({
                owner: owner.toString(),
                baseTokenBalance: amount.toNumber(),
              });
            }
          }
        }
      }
    } catch (error) {
      opts.close(error as Error);
      return;
    }
    opts.close();
  });
};
