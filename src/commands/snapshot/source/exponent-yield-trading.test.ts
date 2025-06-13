import { describe, test, expect } from 'vitest';
import { exponentYieldTrading } from './exponent-yield-trading';
import { expectSnapshotSourceWorks } from './testutil';

describe('snapshot source: exponent-yield-trading', async () => {
  // https://www.exponent.finance/liquidity/fragsol-10Jul25
  test('fragsol-10Jul25 market', async () => {
    await expectSnapshotSourceWorks(exponentYieldTrading, {
      source: 'exponent-yield-trading',
      args: [
        'EJ4GPTCnNtemBVrT7QKhRfSKfM53aV2UJYGAC8gdVz5b',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });

  // https://www.exponent.finance/liquidity/meteora-wfragSOL-JitoSOL-31Aug25
  test('meteora-wfragSOL-JitoSOL-31Aug25 market', async () => {
    await expectSnapshotSourceWorks(exponentYieldTrading, {
      source: 'exponent-yield-trading',
      args: [
        'GZ5ZaP3D9qSQ4R4ob2NPP7TXEnjZmYgN916NGvr8gg16',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });

  // https://www.exponent.finance/liquidity/meteora-wfragJTO-JTO-31Aug25
  test('meteora-wfragJTO-JTO-31Aug25 market', async () => {
    await expectSnapshotSourceWorks(exponentYieldTrading, {
      source: 'exponent-yield-trading',
      args: [
        '5dzopBMvCi6U3CpC9SdjE88A2gQT4ZgKPrjRZnaoPRV2',
        'WFRGJnQt5pK8Dv4cDAbrSsgPcmboysrmX3RYhmRRyTR',
      ],
    });
  });

  // https://www.exponent.finance/liquidity/solv-fragbtc-30Sep25
  test('solv-fragbtc-30Sep25 market', async () => {
    await expectSnapshotSourceWorks(exponentYieldTrading, {
      source: 'exponent-yield-trading',
      args: [
        'DdG9ZBNz24XeaynViCKTPJg3PU3YYDR694EbyNN2tuBG',
        'WFRGB49tP8CdKubqCdt5Spo2BdGS4BpgoinNER5TYUm',
      ],
    });
  });
});
