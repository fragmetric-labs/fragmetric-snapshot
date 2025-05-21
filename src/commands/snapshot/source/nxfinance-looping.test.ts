import { describe, test, expect } from 'vitest';
import { nxfinanceLooping } from './nxfinance-looping';
import { expectSnapshotSourceWorks } from './testutil';

describe('snapshot source: nxfinance-looping', async () => {
  // https://www.nxfinance.info/leverage/v2/fragSOL
  test('wfragSOL GSM strategy', async () => {
    await expectSnapshotSourceWorks(nxfinanceLooping, {
      source: 'nxfinance-looping',
      args: [
        '9wgoVx6dtLRfHb7xaBpPb8gUkLuZZqyRkXUuL4Df6ZhA',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });
});
