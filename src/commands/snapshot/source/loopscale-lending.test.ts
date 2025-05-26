import { describe, test } from "vitest";
import { expectSnapshotSourceWorks } from "./testutil";
import { loopscaleLending } from "./loopscale-lending";

describe('snapshot source: loopscale-lending', async () => {
  // https://app.loopscale.com/vault/7n5F6vLutwTPuVju9t4ZC22vHyJNyGbHKzaokdyWycjy/
  test('wfragSOL vault', async () => {
    await expectSnapshotSourceWorks(loopscaleLending, {
      source: 'loopscale-lending',
      args: [
        '7n5F6vLutwTPuVju9t4ZC22vHyJNyGbHKzaokdyWycjy',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });
});
