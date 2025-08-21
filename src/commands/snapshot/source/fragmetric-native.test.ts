import { describe, test } from 'vitest';
import { fragmetricNative } from './fragmetric-native';
import { expectSnapshotSourceWorks } from './testutil';

describe('snapshot source: fragmetric-native', async () => {
  test('fragSOL receipt token balance', async () => {
    await expectSnapshotSourceWorks(fragmetricNative, {
      source: 'fragmetric-native',
      args: [
        '4YHmpuyY54Bsj61qNxYGgtQy8xhacfnhdZ6W92rqB64w',
        'FRAGSEthVFL7fdqM8hxfxkfCZzUvmg21cqPJVvC1qdbo',
      ],
    });
  });
  test('fragJTO receipt token balance', async () => {
    await expectSnapshotSourceWorks(fragmetricNative, {
      source: 'fragmetric-native',
      args: [
        'EQmDqtcHbTU19twRoRPmjntd9zG3PeeuG4eB8ex3TUio',
        'FRAGJ157KSDfGvBJtCSrsTWUqFnZhrw4aC8N8LqHuoos',
      ],
    });
  });
  test('fragBTC receipt token balance', async () => {
    await expectSnapshotSourceWorks(fragmetricNative, {
      source: 'fragmetric-native',
      args: [
        'DbSAJ5oAWrhLLvmwCpNZXggGvLxaUHAqd9vrhDk9p2rf',
        'FRAGB4KZGLMy3wH1nBajP3Q17MHnecEvTPT6wb4pX5MB',
      ],
    });
  });
  test('frag2 receipt token balance', async () => {
    await expectSnapshotSourceWorks(fragmetricNative, {
      source: 'fragmetric-native',
      args: [
        'CZ92Kdfnaf4WJzw3MDvnSmak9912ejUdSJiQtHX4qUNb',
        'FRAG2gPNXozPpYcn2a8zK7YdtfNXCLsioZNwZXwTQ3cP',
      ],
    });
  });
});
