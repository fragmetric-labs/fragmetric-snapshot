import { describe, test, expect } from 'vitest';
import { kaminoLiquidity } from './kamino-liquidity';
import { expectSnapshotSourceWorks } from './testutil';

describe('snapshot source: kamino-liquidity', async () => {
  // https://app.kamino.finance/liquidity/8sKf4C6iQ2wfCAp9oXf2NJZNjfDdN16aeYpkew6vsfbi
  test('wfragSOL-JitoSOL liquidity pool', async () => {
    await expectSnapshotSourceWorks(kaminoLiquidity, {
      source: 'kamino-liquidity',
      args: [
        '8sKf4C6iQ2wfCAp9oXf2NJZNjfDdN16aeYpkew6vsfbi',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
        'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
      ],
    });
  });

  // https://app.kamino.finance/liquidity/DLJKhZAUr8k4KFcETPAZk9qHnscsudsbKNg7oKKYeMCC
  test.only('wfragJTO-JTO liquidity pool', async () => {
    await expectSnapshotSourceWorks(kaminoLiquidity, {
      source: 'kamino-liquidity',
      args: [
        'DLJKhZAUr8k4KFcETPAZk9qHnscsudsbKNg7oKKYeMCC',
        'WFRGJnQt5pK8Dv4cDAbrSsgPcmboysrmX3RYhmRRyTR',
        'jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL',
      ],
    });
  });

  // https://app.kamino.finance/liquidity/2AXogHv1qD5dRfxWzWYijxsen2PgpnyziCwRYAWtBLv8
  test('wfragBTC-zBTC liquidity pool', async () => {
    await expectSnapshotSourceWorks(kaminoLiquidity, {
      source: 'kamino-liquidity',
      args: [
        '2AXogHv1qD5dRfxWzWYijxsen2PgpnyziCwRYAWtBLv8',
        'WFRGB49tP8CdKubqCdt5Spo2BdGS4BpgoinNER5TYUm',
        'zBTCug3er3tLyffELcvDNrKkCymbPWysGcWihESYfLg',
      ],
    });
  });
});
