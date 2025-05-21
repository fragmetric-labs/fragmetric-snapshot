import { describe, test, expect } from 'vitest';
import { ratexYieldTrading } from './ratex-yield-trading';
import { expectSnapshotSourceWorks } from './testutil';

describe('snapshot source: ratex-yield-trading', async () => {
  // https://app.rate-x.io/points?symbol=fragSOL-2508
  test('fragSOL-2508 market', async () => {
    await expectSnapshotSourceWorks(ratexYieldTrading, {
      source: 'ratex-yield-trading',
      args: [
        '46eiAqS6c96yjefnRiNQ2WXGjvSv7NBhyxc3f4AZZRZa',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });

  // https://app.rate-x.io/points?symbol=fragJTO-2508
  test('fragJTO-2508 market', async () => {
    await expectSnapshotSourceWorks(ratexYieldTrading, {
      source: 'ratex-yield-trading',
      args: [
        '3QKqmp93duR1mAFmHt33QYJ7eGU9sXPUQrDeX3zGrF2b',
        'WFRGJnQt5pK8Dv4cDAbrSsgPcmboysrmX3RYhmRRyTR',
      ],
    });
  });
});
