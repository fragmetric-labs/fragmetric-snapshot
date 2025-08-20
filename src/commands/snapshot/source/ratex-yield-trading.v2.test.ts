import { describe, test, expect } from 'vitest';
import { ratexV2YieldTrading } from './ratex-yield-trading.v2';
import { expectSnapshotSourceWorks } from './testutil';

describe('snapshot source: ratex-v2-yield-trading', async () => {
  // https://app.rate-x.io/points?symbol=fragSOL-2509
  test('fragSOL-2508 market', async () => {
    await expectSnapshotSourceWorks(ratexV2YieldTrading, {
      source: 'ratex-yield-trading',
      args: [
        '3yth9DRQsgEkNEfY6dWyurhtHyLuGgeZ9GvkAQi5ETgT',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });

  // https://app.rate-x.io/points?symbol=fragJTO-2508
  // test('fragJTO-2508 market', async () => {
  //   await expectSnapshotSourceWorks(ratexV2YieldTrading, {
  //     source: 'ratex-v2-yield-trading',
  //     args: [
  //       '3QKqmp93duR1mAFmHt33QYJ7eGU9sXPUQrDeX3zGrF2b',
  //       'WFRGJnQt5pK8Dv4cDAbrSsgPcmboysrmX3RYhmRRyTR',
  //     ],
  //   });
  // });
});
