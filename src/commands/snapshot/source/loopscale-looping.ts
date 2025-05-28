import * as web3 from '@solana/web3.js';
import { SourceStreamFactory } from '.';
import { RPCClient } from '../../../rpc';
import { AnchorProvider, BN, Program, ProgramAccount, Wallet } from '@coral-xyz/anchor';
import LoopscaleIDLFile from './loopscale.idl.json';
import { Loopscale } from './loopscale.idl';

export const loopscaleLooping: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);

  const _ = new web3.PublicKey(opts.args[0]);
  const inputToken = new web3.PublicKey(opts.args[1]);

  const loopscaleProgram = new Program(
    LoopscaleIDLFile as Loopscale,
    new AnchorProvider(rpc.v1, new Wallet(web3.Keypair.generate())),
  );

  // TODO: no need to validate vault? because opts.args[0] key would be arbitrary key
  // const vaults = (await getVaultsByMint({ loopscaleProgram, mint: inputToken })).map((v) =>
  //   v.publicKey.toString(),
  // );
  // if (!vaults.includes(vault.toString()))
  //   throw new Error("input vault address doesn't match with input token mint");

  const loans = await getLoansBorrowedByMint({ loopscaleProgram, mint: inputToken });
  const userCollateralBalance = getBorrowerCollateralValuesForMint(loans);

  process.nextTick(() => {
    try {
      for (const [key, value] of Object.entries(userCollateralBalance)) {
        opts.produceSnapshot({
          owner: key,
          baseTokenBalance: Math.floor(value),
        });
      }
    } catch (error) {
      opts.close(error as Error);
      return;
    }
    opts.close();
  });
};

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

async function getLoansBorrowedByMint({
  loopscaleProgram,
  mint,
}: {
  loopscaleProgram: Program<Loopscale>;
  mint: web3.PublicKey;
}) {
  const borrowMintFilter = [
    {
      memcmp: {
        offset: 8 + 1 + 1 + 1 + 32 + 8 + 8 + 5 * (1 + 3 * 32 + 4 * 8 + 5 + 24 + 3 * 8),
        bytes: mint.toBase58(),
      },
    },
  ];
  const loansBorrowed = await loopscaleProgram.account.loan.all(borrowMintFilter);
  return loansBorrowed;
}

function getBorrowerCollateralValuesForMint(
  loans: ProgramAccount<{
    version: number;
    bump: number;
    loanType: number;
    borrower: web3.PublicKey;
    nonce: BN;
    startTime: any;
    ledgers: any[];
    collateral: any[];
    weightMatrix: any[][];
    ltvMatrix: any[][];
    lqtMatrix: any[][];
  }>[],
) {
  const userBalances: { [user: string]: number } = {};
  for (let i = 0; i < loans.length; i++) {
    const collateralData = loans[i].account.collateral[0];
    const totalCollateral = new BN(collateralData.amount[0].reverse()).toNumber();
    const borrower = loans[i].account.borrower.toString();

    userBalances[borrower] = userBalances[borrower]
      ? userBalances[borrower] + totalCollateral
      : totalCollateral;
  }
  return userBalances;
}
