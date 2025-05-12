import { describe, test } from 'vitest';
import { SOON_SVM_MAINNET_RPC, soonBridge } from './soon-bridge';
import { expectSnapshotSourceWorks } from './testutil';

describe('snapshot source: soon-bridge', async () => {
  test('soon-bridge-wfragSOL-token-account', async () => {
    await expectSnapshotSourceWorks(soonBridge, {
      source: 'soon-bridge',
      rpc: SOON_SVM_MAINNET_RPC,
      args: [],
    });
  });
});
