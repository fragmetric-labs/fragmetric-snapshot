import { describe, test } from 'vitest';
import { expectSnapshotSourceWorks } from './testutil';
import { loopscaleLooping } from './loopscale-looping';

describe('snapshot source: loopscale-looping', () => {
  // https://app.loopscale.com/loops/wfragsol-sol
  test('wfragSOL looping', async () => {
    await expectSnapshotSourceWorks(loopscaleLooping, {
      source: 'loopscale-looping',
      args: [
        'loopscaleLoopingWfragsol11111111111111111111',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });

  // https://app.loopscale.com/loops/wfragbtc-zbtc
  test('wfragBTC looping', async () => {
    await expectSnapshotSourceWorks(loopscaleLooping, {
      source: 'loopscale-looping',
      args: [
        'loopscaleLoopingWfragbtc11111111111111111111',
        'WFRGB49tP8CdKubqCdt5Spo2BdGS4BpgoinNER5TYUm',
      ],
    });
  });

  // https://app.loopscale.com/loops/orcaFragSolJitoSol-fragSol
  test.only('OWP wfragSOL-JitoSOL looping', async () => {
    await expectSnapshotSourceWorks(loopscaleLooping, {
      source: 'loopscale-looping',
      args: [
        'loopscaleLoopingWfragsol11111111111111111OWP',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });

  // https://app.loopscale.com/loops/orcazBTCwfragBTC
  test.only('OWP wfragBTC-zBTC looping', async () => {
    await expectSnapshotSourceWorks(loopscaleLooping, {
      source: 'loopscale-looping',
      args: [
        'loopscaleLoopingWfragbtc11111111111111111OWP',
        'WFRGB49tP8CdKubqCdt5Spo2BdGS4BpgoinNER5TYUm',
      ],
    });
  });
});
