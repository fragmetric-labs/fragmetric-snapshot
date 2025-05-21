import { describe, test, expect } from 'vitest';
import { banxLooping } from './banx-looping';
import { expectSnapshotSourceWorks } from './testutil';

describe('snapshot source: banx-looping', async () => {
  // https://banx.gg/multiply/wfragSOL
  test('wfragSOL multiply', async () => {
    await expectSnapshotSourceWorks(banxLooping, {
      source: 'banx-looping',
      args: [
        '5c8BxBTHVWhVygh3gLioeQVJH6D4DcxEm167X74p8cNu',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });
});
