import * as web3 from '@solana/web3.js';
import { SuperLendyAccounts } from '@texture-finance/superlendy-sdk/build';
import { SourceStreamFactory } from './index';
import { RPCClient } from '../../../rpc';
import Decimal from 'decimal.js';

// args: texture reserve address, base token mint
export const textureLending: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);
  const superLendyAccounts = new SuperLendyAccounts(rpc.v1);

  const reserve = new web3.PublicKey(opts.args[0]);
  const baseTokenMint = new web3.PublicKey(opts.args[1]);
  const reserveInfo = await superLendyAccounts.getReserveAccount(reserve);
  if (!reserveInfo) {
    throw new Error('texture reserve info not found: ' + reserve.toString());
  }
  if (!reserveInfo.liquidity.mint.equals(baseTokenMint)) {
    throw new Error(
      'incorrect base token mint: ' + reserveInfo.liquidity.mint.toString(),
    );
  }

  const positions = await superLendyAccounts.getAllPositionsByReserve(reserve);

  process.nextTick(() => {
    try {
      for (const position of positions) {
        const owner = position.owner;
        const collateralAmount = position.collateral
          .filter((deposit) => deposit.deposit_reserve.equals(reserve))
          .reduce((sum, item) => {
            return sum.add(new Decimal(item.deposited_amount.toString()));
          }, new Decimal(0));

        const hasBorrows = position.borrows.length > 0;

        if (collateralAmount.isZero()) continue;

        opts.produceSnapshot({
          owner: owner.toString(),
          baseTokenBalance: hasBorrows ? collateralAmount.floor().toNumber() : 0,
        });
      }
    } catch (error) {
      opts.close(error as Error);
      return;
    }
    opts.close();
  });
};
