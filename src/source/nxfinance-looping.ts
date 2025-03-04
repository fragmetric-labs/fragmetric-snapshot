import { AnchorProvider, Program, Wallet, web3 } from '@coral-xyz/anchor';
import { SourceStreamFactory } from '.';
import { RPCClient } from '../rpc';
import NxfinanceIDLFile from './nxfinance.idl.json';
import { NxLend } from './nxfinance.idl';
import Decimal from 'decimal.js';

export const nxfinanceLooping: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);

  const inputToken = new web3.PublicKey(opts.args[0]);

  const nxfinanceProgram = new Program(
    NxfinanceIDLFile as NxLend,
    new AnchorProvider(rpc.v1, new Wallet(new web3.Keypair())),
  );

  const positions = await nxfinanceProgram.account.position.all();
  const sSolPositions = positions.filter((position) =>
    position.account.positions.some((_position) => _position.collateralMint.equals(inputToken)),
  );

  const userCollateralMap = new Map<web3.PublicKey, Decimal>();
  sSolPositions.forEach((position) => {
    const owner = position.account.owner;
    const _sSolPositions = position.account.positions.filter((_position) =>
      _position.collateralMint.equals(inputToken),
    );
    _sSolPositions.forEach((_position) => {
      const collateralAmount = userCollateralMap.get(owner) || new Decimal(0);
      userCollateralMap.set(owner, collateralAmount.add(_position.collateralTokens.toString()));
    });
  });

  process.nextTick(() => {
    try {
      [...userCollateralMap].forEach(([owner, collateralAmount]) => {
        opts.produceSnapshot({
          owner: owner.toString(),
          baseTokenBalance: collateralAmount.toNumber(),
        });
      });
    } catch (error) {
      opts.close(error as Error);
      return;
    }
    opts.close();
  });
};
