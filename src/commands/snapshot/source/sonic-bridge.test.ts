import { describe, test, expect } from 'vitest';
import { expectSnapshotSourceWorks } from './testutil';
import { sonicBridge } from './sonic-bridge';

describe('snapshot source: sonic-bridge', async () => {
  // https://sega.so/liquidity/increase/?mode=add&pool_id=6frK7w6bRkRTutjmeiTJoD6tcBjrCh9Aph1tfkW35yoW
  test('sega liquidity sonic svm bridge', async () => {
    await expectSnapshotSourceWorks(sonicBridge, {
      source: 'sonic-bridge',
      args: [
        '6frK7w6bRkRTutjmeiTJoD6tcBjrCh9Aph1tfkW35yoW',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });
});
