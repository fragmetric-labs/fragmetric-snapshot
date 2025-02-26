import web3 from "@solana/web3.js-1";
import { getSingleReserve, DEFAULT_RECENT_SLOT_DURATION_MS, KaminoMarket } from "@kamino-finance/klend-sdk";
import { Snapshot, SourceStreamOptions } from ".";
import { RPCClient } from "../rpc";
import Decimal from "decimal.js";

export async function produceKaminoLending(opts: SourceStreamOptions) {
    const rpc = new RPCClient(opts.rpc);

    const reserve = new web3.PublicKey(opts.args[0]);

    const reserveInfo = await getSingleReserve(reserve, rpc.v1, DEFAULT_RECENT_SLOT_DURATION_MS);
    const marketInfo = await KaminoMarket.load(rpc.v1, reserveInfo.state.lendingMarket, DEFAULT_RECENT_SLOT_DURATION_MS);
    if (!marketInfo) {
        throw new Error("kamino lending market info not found: " + reserveInfo.state.lendingMarket.toString());
    }

    const obligations = await marketInfo.getAllObligationsByDepositedReserve(reserve);
    const deposits = obligations.map(obligation => ({
        owner: obligation.state.owner,
        depositAmount: obligation.state.deposits.filter(deposit => deposit.depositReserve.equals(reserve))[0].depositedAmount,
    }));

    const lastUpdatedSlot = reserveInfo.state.lastUpdate.slot;
    const exchangeRates = marketInfo.getCollateralExchangeRatesByReserve(lastUpdatedSlot.toNumber()).entries();
    let exchangeRate: Decimal;
    for (const _exchangeRate of exchangeRates) {
        if (_exchangeRate[0].equals(reserve)) {
            exchangeRate = _exchangeRate[1];
        }
    }

    process.nextTick(() => {
        try {
            for (const deposit of deposits) {
                if (deposit.depositAmount == 0) continue;

                const collateralAmount = deposit.depositAmount.toString();

                const snapshot: Snapshot = {
                    owner: deposit.owner.toString(),
                    baseTokenBalance: new Decimal(collateralAmount).div(exchangeRate).floor().toNumber(),
                };

                opts.produceSnapshot(snapshot);
            }
        } catch (error) {
            opts.close(error as Error);
            return;
        }
        opts.close();
    });
}
