import { describe, test } from 'vitest';
import { expectSnapshotSourceWorks } from './testutil';
import { textureLending } from './texture-lending';

describe('snapshot source: texture-lending', async () => {
  // https://app.texture-finance-test.space/super_lendy/reserve?pool=5nTJxyEKfmTAdfEQbZJXUFGxhxn8wytu38q553oGW8ho&token=wfragSOL
  test('wfragSOL-SOL liquidity pool', async () => {
    await expectSnapshotSourceWorks(textureLending, {
      source: 'texture-lending',
      args: [
        'C7a3AjWTvWxf9GSppTcB2E74waveZKNkVYLFFhjr4Uy2',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });
});
