# Fragmetric Snapshot

### Requirements

- uses pnpm **version 10**: https://pnpm.io/installation

### Usage

```shell
# can use @dev tag for unstable version
$ pnpx @fragmetric-labs/snapshot@latest --help
Usage: fragmetric-snapshot [options] [command]

CLI to take defi snapshot

Options:
  -V, --version                 output the version number
  -h, --help                    display help for command

Commands:
  snapshot [options] <args...>  CLI to take arbitrary onchain snapshots for Fragmetric platform
  help [command]                display help for command


$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<RPC-URL>' orca-liquidity Cso7i3czFUiBo7rW7r6T7riKSQRzV7CPBcaY2Q56eVSY WFRGJnQt5pK8Dv4cDAbrSsgPcmboysrmX3RYhmRRyTR jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL

$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<RPC-URL>' kamino-liquidity 8sKf4C6iQ2wfCAp9oXf2NJZNjfDdN16aeYpkew6vsfbi WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn

$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<RPC-URL>' exponent-yield-trading EJ4GPTCnNtemBVrT7QKhRfSKfM53aV2UJYGAC8gdVz5b WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U

$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<RPC-URL>' ratex-yield-trading 46eiAqS6c96yjefnRiNQ2WXGjvSv7NBhyxc3f4AZZRZa WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U

$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<RPC-URL>' kamino-lending 4pDCUGYftuPG1sV3xcqsn2YGfHC6Q3eZVfDyzQm8SK5A kySo1nETpsZE2NWe5vj2C64mPSciH1SppmHb4XieQ7B

$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<RPC-URL>' nxfinance-looping 9wgoVx6dtLRfHb7xaBpPb8gUkLuZZqyRkXUuL4Df6ZhA WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U

$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<RPC-URL>' banx-looping 5c8BxBTHVWhVygh3gLioeQVJH6D4DcxEm167X74p8cNu WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U

$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<RPC-URL>' soon-bridge PMST7CMBeJubWwhieuTvjgyEEwH8FLdNorZdvMJ3aVA WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U

$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<RPC-URL>' loopscale-lending 7JoN6uJodmc4J4mQG35N7jA9Y3rWDw4oQAQBeaPSoUaP WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U

$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<RPC-URL>' loopscale-lending 7n5F6vLutwTPuVju9t4ZC22vHyJNyGbHKzaokdyWycjy WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U

$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<RPC-URL>' loopscale-looping 7n5F6vLutwTPuVju9t4ZC22vHyJNyGbHKzaokdyWycjy WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U

$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<RPC-URL>' texture-lending C7a3AjWTvWxf9GSppTcB2E74waveZKNkVYLFFhjr4Uy2 WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U

$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<RPC-URL>' sandglass-yield-trading 8BTZiJ5G8SkB69bPtGfA2eiyYhkqbDhf8ryxovJFVnuJ WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U

$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<RPC-URL>' sonic-bridge 6frK7w6bRkRTutjmeiTJoD6tcBjrCh9Aph1tfkW35yoW WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U

# Topu NFT collection (with reveal/epic logic)
$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<HELIUS-RPC-URL>' metaplex-nft 6WTgf5Gt3SHuJeHtxsHuniRMdu2kAAVJLYAcG3nTpxj4

# General Metaplex NFT collection
$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<HELIUS-RPC-URL>' metaplex-nft <COLLECTION_ADDRESS>

$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<RPC-URL>' fragmetric-native FRAGSEthVFL7fdqM8hxfxkfCZzUvmg21cqPJVvC1qdbo FRAGSEthVFL7fdqM8hxfxkfCZzUvmg21cqPJVvC1qdbo

$ pnpx @fragmetric-labs/snapshot@latest snapshot --rpc '<RPC-URL>' fragmetric-native FRAGSEthVFL7fdqM8hxfxkfCZzUvmg21cqPJVvC1qdbo WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U

```

### How to Contribute

```shell
$ pnpm install
...

$ pnpm start snapshot --rpc '<RPC-URL>' orca-liquidity 7FcvD7B7GZKJjNUuRAX8exMkMkHPsptwFrqhtLf5c4rf ezSoL6fY1PVdJcJsUpe5CM3xkfmy3zoVCABybm5WtiC J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn
...

$ pnpm build && npm publish --access public --tag dev
...

$ npm dist-tag add @fragmetric-labs/snapshot@x.x.x latest
...
```

### How to Test

```shell
$ pnpm test ./src/commands/snapshot/source/banx-looping.test.ts

> @fragmetric-labs/snapshot@2.1.0 test /Users/dehypnosis/Works/fragmetric-snapshot
> vitest --run ./src/commands/snapshot/source/banx-looping.test.ts


 RUN  v3.1.3 /Users/dehypnosis/Works/fragmetric-snapshot

stdout | src/commands/snapshot/source/banx-looping.test.ts > snapshot source: banx-looping > wfragSOL multiply
{
  options: {
    source: 'banx-looping',
    args: [
      '5c8BxBTHVWhVygh3gLioeQVJH6D4DcxEm167X74p8cNu',
      'WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U'
    ]
  },
  count: 1026,
  amount: 3786001222210n
}

 ✓ src/commands/snapshot/source/banx-looping.test.ts (1 test) 1468ms
   ✓ snapshot source: banx-looping > wfragSOL multiply  1468ms

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  21:57:02
   Duration  1.71s (transform 27ms, setup 0ms, collect 144ms, tests 1.47s, environment 0ms, prepare 27ms)
```

`export SOLANA_RPC_MAINNET="https://custom-rpc-url"` to configure RPC for test suites.
Some snapshot sources require `helius` rpc due to dependencies to specific RPC methods:

- `orca-liquidity` source not works with other RPCs
- `metaplex-nft` requires Helius RPC for `searchAssets` method
  - Topu collection (`6WTgf5Gt3SHuJeHtxsHuniRMdu2kAAVJLYAcG3nTpxj4`): applies reveal/epic logic
  - Other collections: counts all NFTs as normal (baseTokenBalance = NFT count)
