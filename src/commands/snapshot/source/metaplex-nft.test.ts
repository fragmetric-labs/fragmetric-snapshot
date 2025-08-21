import { describe, test } from 'vitest';
import { metaplexNFT } from './metaplex-nft';
import { expectSnapshotSourceWorks } from './testutil';

describe('snapshot source: metaplex-nft', async () => {
  test('Topu collection snapshot with revealed NFTs only', async () => {
    await expectSnapshotSourceWorks(metaplexNFT, {
      source: 'metaplex-nft',
      args: [
        '6WTgf5Gt3SHuJeHtxsHuniRMdu2kAAVJLYAcG3nTpxj4', // Topu collection
      ],
    });
  });

  test('General Metaplex NFT collection snapshot', async () => {
    await expectSnapshotSourceWorks(metaplexNFT, {
      source: 'metaplex-nft',
      args: [
        'J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w', // Mad Lads collection (example)
      ],
    });
  });
});
