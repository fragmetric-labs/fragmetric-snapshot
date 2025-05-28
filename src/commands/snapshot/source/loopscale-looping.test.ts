import { describe, test } from 'vitest';
import { expectSnapshotSourceWorks } from './testutil';
import { loopscaleLooping } from './loopscale-looping';

describe('snapshot source: loopscale-looping', async () => {
  // https://app.loopscale.com/loops/wfragsol-sol
  test('wfragSOL looping', async () => {
    await expectSnapshotSourceWorks(loopscaleLooping, {
      source: 'loopscale-looping',
      args: [
        '7n5F6vLutwTPuVju9t4ZC22vHyJNyGbHKzaokdyWycjy',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });
});
