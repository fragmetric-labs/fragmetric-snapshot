import { expect } from 'vitest';
import { SourceStreamFactory, SourceStreamOptions } from './index';

// expectSnapshotSourceWorks: generates a simple smoke test suite against the given source configuration.
export async function expectSnapshotSourceWorks(
  sourceStreamFactory: SourceStreamFactory,
  sourceStreamOptions: Omit<SourceStreamOptions, 'rpc' | 'close' | 'produceSnapshot'> &
    Partial<Pick<SourceStreamOptions, 'rpc'>>,
) {
  let snapshotCount = 0;
  let totalBaseTokenBalance = 0n;
  await expect(
    new Promise<void>(async (resolve, reject) => {
      try {
        await sourceStreamFactory({
          rpc: process.env.SOLANA_RPC_MAINNET || 'https://api.mainnet-beta.solana.com',
          ...sourceStreamOptions,
          close(err) {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          },
          produceSnapshot(snapshot): void {
            snapshotCount++;
            totalBaseTokenBalance += BigInt(snapshot.baseTokenBalance);
          },
        });
      } catch (err) {
        reject(err);
      }
    }),
  ).resolves.not.toThrow();
  console.log({
    options: sourceStreamOptions,
    count: snapshotCount,
    amount: totalBaseTokenBalance,
  });
  expect(snapshotCount).toBeGreaterThan(0);
  expect(totalBaseTokenBalance).toBeGreaterThan(0n);
}
