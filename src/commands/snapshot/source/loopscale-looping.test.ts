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

  // https://app.loopscale.com/loops/wfragbtc-zbtc
  test('wfragBTC looping', async () => {
    await expectSnapshotSourceWorks(loopscaleLooping, {
      source: 'loopscale-looping',
      args: [
        'HgmkjvzLaGa8J7QAmYsQL5b5fgAExGtpYpFxz9LYoHmT',
        'WFRGB49tP8CdKubqCdt5Spo2BdGS4BpgoinNER5TYUm',
      ],
    });
  });
});
