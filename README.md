# Fragmetric Snapshot

### Requirement
- uses pnpm **version 10**: https://pnpm.io/installation

### Usage
```shell
$ NPM_CONFIG_AUTO_INSTALL_PEERS=false pnpm i -g -s @fragmetric-labs/snapshot@latest
$ fragmetric-snapshot --help
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


$ pnpx @fragmetric-labs/snapshot --silent --rpc '<RPC-URL>' orca-liquidity 7FcvD7B7GZKJjNUuRAX8exMkMkHPsptwFrqhtLf5c4rf ezSoL6fY1PVdJcJsUpe5CM3xkfmy3zoVCABybm5WtiC J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn
{"owner":"59yVBmP4zcPgq9FPoRktwJUzC2NgZfqSFxiRr9UKUqP3","baseTokenBalance":2742875614.433223}
{"owner":"4A5p7zgmGfNbv2pejyv4P4jy1RRxx3KKz1MgejDHe6TC","baseTokenBalance":14749271505953.082}
{"owner":"gEoLbi5KLsVJmNMHUp3aJgktqHT51p7ADCA2A4ZJzxX","baseTokenBalance":174338201.17712158}
{"owner":"7kE2Te1j94NDC4sktugKRT5YDqz1sTdST2pY7iqW4dDp","baseTokenBalance":8559265.158283588}
{"owner":"DQbNFD8gc8Fz9J1c2WGZ3QJ84P92kuc2pxajaErBBUDD","baseTokenBalance":2168524378.4292836}
...
```


### How to Contribute
```shell
$ pnpm dev --rpc '<RPC-URL>' orca-liquidity 7FcvD7B7GZKJjNUuRAX8exMkMkHPsptwFrqhtLf5c4rf ezSoL6fY1PVdJcJsUpe5CM3xkfmy3zoVCABybm5WtiC J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn
...

$ pnpm build && pnpm publish --access public --tag dev
...

$ npm dist-tag add @fragmetric-labs/snapshot@1.1.0 latest
...
```
