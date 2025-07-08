import { describe, test, expect } from 'vitest';
import { orcaLiquidity } from './orca-liquidity';
import { expectSnapshotSourceWorks } from './testutil';
import { exponentYieldTrading } from './exponent-yield-trading';

describe('snapshot source: orca-liquidity', async () => {
  // https://www.orca.so/pools/5xfKkFmhzNhHKTFUkh4PJmHSWB6LpRvhJcUMKzPP6md2
  test('wfragSOL-JitoSOL liquidity pool', async () => {
    await expectSnapshotSourceWorks(orcaLiquidity, {
      source: 'orca-liquidity',
      args: [
        '5xfKkFmhzNhHKTFUkh4PJmHSWB6LpRvhJcUMKzPP6md2',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
        'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
      ],
    });
  });

  // https://www.orca.so/pools/Cso7i3czFUiBo7rW7r6T7riKSQRzV7CPBcaY2Q56eVSY
  test('wfragJTO-JTO liquidity pool', async () => {
    await expectSnapshotSourceWorks(orcaLiquidity, {
      source: 'orca-liquidity',
      args: [
        'Cso7i3czFUiBo7rW7r6T7riKSQRzV7CPBcaY2Q56eVSY',
        'WFRGJnQt5pK8Dv4cDAbrSsgPcmboysrmX3RYhmRRyTR',
        'jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL',
      ],
    });
  });

  // https://www.orca.so/pools/H6gUYo94dMyhaT4Zm94DRSuH931atRcdAVdMCu3aAwze
  test('wfragBTC-zBTC liquidity pool', async () => {
    await expectSnapshotSourceWorks(orcaLiquidity, {
      source: 'orca-liquidity',
      args: [
        'H6gUYo94dMyhaT4Zm94DRSuH931atRcdAVdMCu3aAwze',
        'WFRGB49tP8CdKubqCdt5Spo2BdGS4BpgoinNER5TYUm',
        'zBTCug3er3tLyffELcvDNrKkCymbPWysGcWihESYfLg',
      ],
    });
  });

  // https://www.orca.so/pools/DufLmLSPfw8scyx5p6XRa8WuCvM6nEoVUjV4RkWTRpLS
  test('wfragBTC-SOL liquidity pool', async () => {
    await expectSnapshotSourceWorks(orcaLiquidity, {
      source: 'orca-liquidity',
      args: [
        'DufLmLSPfw8scyx5p6XRa8WuCvM6nEoVUjV4RkWTRpLS',
        'WFRGB49tP8CdKubqCdt5Spo2BdGS4BpgoinNER5TYUm',
        'So11111111111111111111111111111111111111112',
      ],
    });
  });
});
