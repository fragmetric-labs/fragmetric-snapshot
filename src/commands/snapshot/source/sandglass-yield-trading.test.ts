import { describe, test, expect } from 'vitest';
import { sandglassYieldTrading } from './sandglass-yield-trading';
import { expectSnapshotSourceWorks } from './testutil';

describe('snapshot source: sandglass-yield-trading', async () => {
  // https://sandglass.so
  test('sandglass fragsol market', async () => {
    await expectSnapshotSourceWorks(sandglassYieldTrading, {
      source: 'sandglass-yield-trading',
      args: [
        '8BTZiJ5G8SkB69bPtGfA2eiyYhkqbDhf8ryxovJFVnuJ',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });
});
