import { describe, test, expect } from 'vitest';
import { ratexV2YieldTrading } from './ratex-yield-trading.v2';
import { expectSnapshotSourceWorks } from './testutil';

describe('snapshot source: ratex-v2-yield-trading', async () => {
  // staging
  // https://app-uat.rate-x.io/points?symbol=fragSOL-2509
  test('fragSOL-2509 market', async () => {
    await expectSnapshotSourceWorks(ratexV2YieldTrading, {
      source: 'ratex-yield-trading',
      args: [
        '3yth9DRQsgEkNEfY6dWyurhtHyLuGgeZ9GvkAQi5ETgT',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });

  // production
  // fragSOL
  // https://app.rate-x.io/points?symbol=fragSOL-2510
  test('fragSOL-2510 market', async () => {
    await expectSnapshotSourceWorks(ratexV2YieldTrading, {
      source: 'ratex-yield-trading',
      args: [
        '3jB3LKEy6xR1LCWArzqHsZ9v5CWxNNFhNzqy51xv5gEw',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });

  // https://app.rate-x.io/points?symbol=fragSOL-2601
  test('fragSOL-2601 market', async () => {
    await expectSnapshotSourceWorks(ratexV2YieldTrading, {
      source: 'ratex-yield-trading',
      args: [
        'HrrW6M4EsJjkEF2eMXXM9Ash5iNy7ino2ZUxbxBGCXTM',
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
      ],
    });
  });

  // fragJTO
  // https://app.rate-x.io/points?symbol=fragJTO-2510
  test('fragJTO-2510 market', async () => {
    await expectSnapshotSourceWorks(ratexV2YieldTrading, {
      source: 'ratex-yield-trading',
      args: [
        'Cthq9BbpctLMAZw7DyWmvVcX9uyuSoVeCNBcepSjSmmL',
        'WFRGJnQt5pK8Dv4cDAbrSsgPcmboysrmX3RYhmRRyTR',
      ],
    });
  });

  // https://app.rate-x.io/points?symbol=fragJTO-2601
  test('fragJTO-2601 market', async () => {
    await expectSnapshotSourceWorks(ratexV2YieldTrading, {
      source: 'ratex-yield-trading',
      args: [
        '4JsDhy51uY8tUfWSJ4gUFz4apo7ua5FwjZgZDEkxTof8',
        'WFRGJnQt5pK8Dv4cDAbrSsgPcmboysrmX3RYhmRRyTR',
      ],
    });
  });

  // fragBTC
  // https://app.rate-x.io/points?symbol=fragBTC-2510
  test('fragBTC-2510 market', async () => {
    await expectSnapshotSourceWorks(ratexV2YieldTrading, {
      source: 'ratex-yield-trading',
      args: [
        'GEkVuB7mPNNCdHwYwo9iLr3RAYwc914HTPG5YVN2NXkQ',
        'WFRGB49tP8CdKubqCdt5Spo2BdGS4BpgoinNER5TYUm',
      ],
    });
  });

  // https://app.rate-x.io/points?symbol=fragBTC-2601
  test('fragBTC-2601 market', async () => {
    await expectSnapshotSourceWorks(ratexV2YieldTrading, {
      source: 'ratex-yield-trading',
      args: [
        'DWNtGEMjzCoS6TTEKniA7tDyGBnb8oBDbBR7Qq8AVFYL',
        'WFRGB49tP8CdKubqCdt5Spo2BdGS4BpgoinNER5TYUm',
      ],
    });
  });
});
