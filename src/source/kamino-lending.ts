import web3 from '@solana/web3.js-1';
import {
  getSingleReserve,
  DEFAULT_RECENT_SLOT_DURATION_MS,
  KaminoMarket,
} from '@kamino-finance/klend-sdk';
import {Snapshot, SourceStreamFactory} from '.';
import { RPCClient } from '../rpc';
import Decimal from 'decimal.js';

// args: kamino reserve address, base token mint
export const kaminoLending: SourceStreamFactory =  async (opts) => {
  const rpc = new RPCClient(opts.rpc);

  const reserve = new web3.PublicKey(opts.args[0]);
  const baseTokenMint = new web3.PublicKey(opts.args[1]);
  const reserveInfo = await getSingleReserve(reserve, rpc.v1, DEFAULT_RECENT_SLOT_DURATION_MS);
  if (!reserveInfo) {
    throw new Error(
        'kamino reserve info not found: ' + reserve.toString(),
    );
  }
  if (!reserveInfo.state.liquidity.mintPubkey.equals(baseTokenMint)) {
    throw new Error(
        'incorrect base token mint: ' + reserveInfo.state.liquidity.mintPubkey.toString(),
    );
  }

  const marketInfo = await KaminoMarket.load(
    rpc.v1,
    reserveInfo.state.lendingMarket,
    DEFAULT_RECENT_SLOT_DURATION_MS,
  );
  if (!marketInfo) {
    throw new Error(
      'kamino lending market info not found: ' + reserveInfo.state.lendingMarket.toString(),
    );
  }

  const lastUpdatedSlot = reserveInfo.state.lastUpdate.slot;
  const exchangeRates = marketInfo.getCollateralExchangeRatesByReserve(lastUpdatedSlot.toNumber());
  let exchangeRate: Decimal;
  for (const [k, v] of exchangeRates) {
    if (k.equals(reserve)) {
      exchangeRate = v;
    }
  }

  const obligations = await marketInfo.getAllObligationsByDepositedReserve(reserve);

  process.nextTick(() => {
    try {
      for (const obligation of obligations) {
        const owner = obligation.state.owner;
        const collateralAmount = obligation.state.deposits
          .filter((deposit) => deposit.depositReserve.equals(reserve))
          .reduce((sum, item) => {
            return sum.add(new Decimal(item.depositedAmount.toString()));
          }, new Decimal(0));

        if (collateralAmount.isZero()) continue;

        opts.produceSnapshot({
          owner: owner.toString(),
          baseTokenBalance: collateralAmount.div(exchangeRate).floor().toNumber(),
        });
      }
    } catch (error) {
      opts.close(error as Error);
      return;
    }
    opts.close();
  });
}
