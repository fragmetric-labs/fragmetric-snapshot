import { AnchorProvider, Program, Wallet, web3 } from '@coral-xyz/anchor';
import { SourceStreamFactory } from './index';
import { RPCClient } from '../../../rpc';
import nxfinanceIDLFile from './nxfinance.idl.json';
import { NxLend } from './nxfinance.idl';
import Decimal from 'decimal.js';
// import crypto from 'crypto';

// args: nxfinance fragmetric pool address, input token mint
export const nxfinanceLooping: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);
  const fragmetricPool = new web3.PublicKey(opts.args[0]);
  const inputToken = new web3.PublicKey(opts.args[1]);

  const nxfinanceProgram = new Program(
    nxfinanceIDLFile as unknown as NxLend,
    new AnchorProvider(rpc.v1, new Wallet(new web3.Keypair())),
  );

  const fragmetricPoolAccount = await nxfinanceProgram.account.fragmetricPool.fetch(fragmetricPool);
  if (!fragmetricPoolAccount.receiptToken.equals(inputToken)) {
    throw 'unmatched pool account and input token';
  }
  const userAccounts = await nxfinanceProgram.account.fragmetricUser.all();

  process.nextTick(() => {
    try {
      for (const userAccount of userAccounts) {
        const user = userAccount.account;
        if (
          user.nxMarket.equals(fragmetricPoolAccount.nxMarket) &&
          user.receiptToken.equals(inputToken)
        ) {
          const amount = new Decimal(user.amount.toString());
          if (!amount.isZero()) {
            opts.produceSnapshot({
              owner: user.owner.toString(),
              baseTokenBalance: amount.toNumber(),
            });
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

// function generateAccountDiscriminatorFromIdl(idl: any) {
//   function generateAccountDiscriminator(name: string) {
//     const capitalizedAccountName = name.charAt(0).toUpperCase() + name.slice(1);
//     const buff = Buffer.from(crypto.createHash('sha256').update(`account:${capitalizedAccountName}`).digest('hex'), 'hex')
//     return [...Uint8Array.from(buff).slice(0, 8)]
//   }
//
//   const discriminatorMap = idl.accounts?.reduce(
//       (acc: { [name: string]: number[] }, account: any) => {
//         acc[account.name] = generateAccountDiscriminator(account.name);
//         return acc;
//       },
//       {} as { [name: string]: number[] },
//   );
//
//   console.log(discriminatorMap);
// }
