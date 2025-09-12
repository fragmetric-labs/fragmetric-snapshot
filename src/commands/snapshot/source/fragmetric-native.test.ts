import { describe, test } from 'vitest';
import { fragmetricNative } from './fragmetric-native';
import { expectSnapshotSourceWorks } from './testutil';

describe('snapshot source: fragmetric-native', async () => {
  test.each([
    {
      name: 'fragSOL wrapped token balance',
      args: [
        'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U',
        'FRAGSEthVFL7fdqM8hxfxkfCZzUvmg21cqPJVvC1qdbo',
      ],
    },
    {
      name: 'fragSOL receipt token balance',
      args: ['FRAGSEthVFL7fdqM8hxfxkfCZzUvmg21cqPJVvC1qdbo'],
    },
    {
      name: 'fragJTO receipt token balance',
      args: ['FRAGJ157KSDfGvBJtCSrsTWUqFnZhrw4aC8N8LqHuoos'],
    },
    {
      name: 'fragBTC receipt token balance',
      args: ['FRAGB4KZGLMy3wH1nBajP3Q17MHnecEvTPT6wb4pX5MB'],
    },
    {
      name: 'frag2 receipt token balance',
      args: ['FRAG2gPNXozPpYcn2a8zK7YdtfNXCLsioZNwZXwTQ3cP'],
    },
  ])('$name', async ({ args }) => {
    await expectSnapshotSourceWorks(fragmetricNative, {
      source: 'fragmetric-native',
      args,
    });
  });
});
