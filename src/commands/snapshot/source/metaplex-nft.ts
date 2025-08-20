import { SourceStreamFactory, SourceStreamOptions } from './index';
import retry from 'promise-retry';

const CONSTANTS = {
  PAGE_LIMIT: 1000,
  RETRY_CONFIG: {
    retries: 5,
    minTimeout: 500,
    maxTimeout: 10_000,
  },
  VIRTUAL_RECEIPT_TOKEN_MINT_ADDRESS: 'metaplexNFT111111111111111111111',

  // Topu-specific constants
  TOPU_COLLECTION_ID: '6WTgf5Gt3SHuJeHtxsHuniRMdu2kAAVJLYAcG3nTpxj4',
  TOPU_REVEALED_JSON_URI_DOMAIN: 'nft-assets.topu.inc',
  TOPU_UNREVEALED_JSON_URI_DOMAIN:
    'bafybeiff3it3mcgkjtl5vcm2zni3miutlzrqpxylpgu3jzyqmykxay5gcm.ipfs.w3s.link',
} as const;

const TOPU_EPIC_TRAITS = [
  { trait_type: 'Color', value: 'Solana' },
  { trait_type: 'Type', value: 'Skull' },
  { trait_type: 'Skin', value: 'Galaxy_male' },
  { trait_type: 'Skin', value: 'Aurora_female' },
  { trait_type: 'Eyes', value: 'Insane Mint_male' },
  { trait_type: 'Eyes', value: 'Insane Yellow_male' },
  { trait_type: 'Clothing', value: 'TOPU PJ_male' },
  { trait_type: 'Position', value: 'Medic_short' },
];

interface SearchAssetsResultItem {
  id: string;
  content?: {
    json_uri?: string;
    metadata?: {
      name?: string;
      attributes?: Array<{
        trait_type: string;
        value: string;
      }>;
    };
  };
  ownership?: {
    owner?: string;
  };
}

interface RpcResponse {
  result?: {
    items?: SearchAssetsResultItem[];
  };
  error?: {
    message?: string;
  };
}

interface NFTCounts {
  epic: number;
  normal: number;
}

function isTopuCollection(collectionId: string): boolean {
  return collectionId === CONSTANTS.TOPU_COLLECTION_ID;
}

function isTopuRevealed(jsonUri: string | undefined): boolean {
  if (!jsonUri) return false;
  return jsonUri.includes(CONSTANTS.TOPU_REVEALED_JSON_URI_DOMAIN);
}

function isTopuEpic(attributes: Array<{ trait_type: string; value: string }> | undefined): boolean {
  if (!attributes) return false;

  return TOPU_EPIC_TRAITS.some((epicTrait) =>
    attributes.some(
      (attr) => attr.trait_type === epicTrait.trait_type && attr.value === epicTrait.value,
    ),
  );
}

function calculateBaseTokenBalance(counts: NFTCounts): number {
  return counts.epic * 1_000_000 + counts.normal;
}

function processNFTItem(
  item: SearchAssetsResultItem,
  ownerToCounts: Map<string, NFTCounts>,
  collectionId: string,
): void {
  const owner = item.ownership?.owner;
  if (!owner) return;

  const counts = ownerToCounts.get(owner) || { epic: 0, normal: 0 };

  if (isTopuCollection(collectionId)) {
    // Topu-specific logic: only process revealed NFTs
    const jsonUri = item.content?.json_uri;
    if (!isTopuRevealed(jsonUri)) {
      return;
    }

    const attributes = item.content?.metadata?.attributes;
    const isEpicNFT = isTopuEpic(attributes);

    if (isEpicNFT) {
      counts.epic += 1;
    } else {
      counts.normal += 1;
    }
  } else {
    // General Metaplex NFT logic: count all NFTs as normal
    counts.normal += 1;
  }

  ownerToCounts.set(owner, counts);
}

async function fetchPage(
  rpc: string,
  collectionId: string,
  page: number,
): Promise<SearchAssetsResultItem[]> {
  try {
    const data = await retry(CONSTANTS.RETRY_CONFIG, async () => {
      const response = await fetch(rpc, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: `metaplex-nft.searchAssets.page.${page}`,
          method: 'searchAssets',
          params: {
            grouping: ['collection', collectionId],
            page,
            limit: CONSTANTS.PAGE_LIMIT,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const body: RpcResponse = await response.json();
      if (body.error) {
        throw new Error(`RPC Error: ${body.error.message || 'Unknown error'}`);
      }

      return body.result || { items: [] };
    });

    return data.items || [];
  } catch (error) {
    throw new Error(`Failed to fetch page ${page}: ${(error as Error).message}`);
  }
}

async function collectNFTData(rpc: string, collectionId: string): Promise<Map<string, NFTCounts>> {
  const ownerToCounts = new Map<string, NFTCounts>();
  let page = 1;

  while (true) {
    const items = await fetchPage(rpc, collectionId, page);

    for (const item of items) {
      processNFTItem(item, ownerToCounts, collectionId);
    }

    if (items.length < CONSTANTS.PAGE_LIMIT) {
      break;
    }

    page += 1;
  }

  return ownerToCounts;
}

function generateSnapshots(ownerToCounts: Map<string, NFTCounts>, opts: SourceStreamOptions): void {
  let totalBaseTokenBalance = 0n;
  let epicOwners = 0;
  let normalOnlyOwners = 0;

  for (const [owner, counts] of ownerToCounts.entries()) {
    const baseTokenBalance = calculateBaseTokenBalance(counts);
    totalBaseTokenBalance += BigInt(baseTokenBalance);

    if (counts.epic > 0) {
      epicOwners++;
    } else {
      normalOnlyOwners++;
    }

    opts.produceSnapshot({ owner, baseTokenBalance });
  }
}

export const metaplexNFT: SourceStreamFactory = async (opts) => {
  const collectionId = opts.args[0];
  const receiptTokenMint = opts.args[1]; // "metaplexNFT111111111111111111111"

  if (!collectionId) {
    throw new Error('Collection ID is required as first argument');
  }

  if (!receiptTokenMint || receiptTokenMint !== CONSTANTS.VIRTUAL_RECEIPT_TOKEN_MINT_ADDRESS) {
    throw new Error(`Receipt token mint must be "${CONSTANTS.VIRTUAL_RECEIPT_TOKEN_MINT_ADDRESS}"`);
  }

  try {
    const ownerToCounts = await collectNFTData(opts.rpc, collectionId);
    generateSnapshots(ownerToCounts, opts);
    opts.close();
  } catch (error) {
    console.error(`[METAPLEX-NFT] Error:`, error);
    opts.close(error as Error);
  }
};
