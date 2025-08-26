import { describe, test, expect } from 'vitest';
import { expectSnapshotSourceWorks } from './testutil';
import { kaminoLending } from './kamino-lending';

describe('snapshot source: kamino-lending', async () => {
  // https://app.kamino.finance/lending/reserve/F4Pn9mAvbUazDmWET5yYATTiyLHLaCRTWgGex4tiMXAs/3w38SEhBoK2LRjuSL8p7cGAZ9hoFZ5gXjpza432HbeKx
  test('wfragBTC-zBTC liquidity pool', async () => {
    await expectSnapshotSourceWorks(kaminoLending, {
      source: 'kamino-lending',
      args: [
        '3w38SEhBoK2LRjuSL8p7cGAZ9hoFZ5gXjpza432HbeKx',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });
});
