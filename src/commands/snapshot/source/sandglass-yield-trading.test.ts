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

  // https://sandglass.so
  test.skip('sandglass fragjto market', async () => {
    await expectSnapshotSourceWorks(sandglassYieldTrading, {
      source: 'sandglass-yield-trading',
      args: [
        '8FriGWLJ1NGXdtm9ow4SoFGMcidKGs5s81yRCG3YjVw2',
        'WFRGJnQt5pK8Dv4cDAbrSsgPcmboysrmX3RYhmRRyTR',
      ],
    });
  });
});
