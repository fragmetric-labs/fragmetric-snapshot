# Fragmetric Snapshot

### Requirements

- uses pnpm **version 10**: https://pnpm.io/installation

### Usage

```shell
# can use @dev tag for unstable version
$ pnpx @fragmetric-labs/snapshot@latest --help
Usage: fragmetric-snapshot [options] <source> [source-args>

CLI to take arbitrary onchain snapshots for Fragmetric platform

Arguments:
  <source> [source-args]  test, orca-liquidity pool tokenA tokenB, ...

Options:
  -V, --version         output the version number
  -s, --silent          Turn off stdout logging
  --rpc <url>           Solana RPC URL
  --output <path>       Output path: - (stdout), ./fragmetric-snapshot.json, /tmp/fragmetric-snapshot.sock, ...
  -h, --help            display help for command


$ pnpx @fragmetric-labs/snapshot --rpc '<RPC-URL>' orca-liquidity Cso7i3czFUiBo7rW7r6T7riKSQRzV7CPBcaY2Q56eVSY WFRGJnQt5pK8Dv4cDAbrSsgPcmboysrmX3RYhmRRyTR jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL

$ pnpx @fragmetric-labs/snapshot --rpc '<RPC-URL>' kamino-liquidity 8sKf4C6iQ2wfCAp9oXf2NJZNjfDdN16aeYpkew6vsfbi WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn

$ pnpx @fragmetric-labs/snapshot --rpc '<RPC-URL>' exponent-yield-trading EJ4GPTCnNtemBVrT7QKhRfSKfM53aV2UJYGAC8gdVz5b WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U

$ pnpx @fragmetric-labs/snapshot --rpc '<RPC-URL>' ratex-yield-trading 46eiAqS6c96yjefnRiNQ2WXGjvSv7NBhyxc3f4AZZRZa WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U

$ pnpx @fragmetric-labs/snapshot --rpc '<RPC-URL>' kamino-lending 4pDCUGYftuPG1sV3xcqsn2YGfHC6Q3eZVfDyzQm8SK5A kySo1nETpsZE2NWe5vj2C64mPSciH1SppmHb4XieQ7B

$ pnpx @fragmetric-labs/snapshot --rpc '<RPC-URL>' nxfinance-looping DbJWoq7RoKYb9iMrGvGoXyaYwBLWKdXHpt9T6N5EzSJ7 WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U
```

### How to Contribute

```shell
$ pnpm install
...

$ pnpm start --rpc '<RPC-URL>' orca-liquidity 7FcvD7B7GZKJjNUuRAX8exMkMkHPsptwFrqhtLf5c4rf ezSoL6fY1PVdJcJsUpe5CM3xkfmy3zoVCABybm5WtiC J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn
...

$ pnpm build && npm publish --access public --tag dev
...

$ npm dist-tag add @fragmetric-labs/snapshot@x.x.x latest
...
```
