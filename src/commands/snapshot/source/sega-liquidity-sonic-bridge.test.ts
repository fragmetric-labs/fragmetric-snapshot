import { describe, test, expect } from 'vitest';
import { expectSnapshotSourceWorks } from './testutil';
import { segaLiquiditySonicBridge } from './sega-liquidity-sonic-bridge';

describe('snapshot source: sega-liquidity-sonic-bridge', async () => {
  // https://sega.so/liquidity/increase/?mode=add&pool_id=6frK7w6bRkRTutjmeiTJoD6tcBjrCh9Aph1tfkW35yoW
  test('sega liquidity sonic svm bridge', async () => {
    await expectSnapshotSourceWorks(segaLiquiditySonicBridge, {
      source: 'sega-liquidity-sonic-bridge',
      args: [
        '6frK7w6bRkRTutjmeiTJoD6tcBjrCh9Aph1tfkW35yoW',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });
});
