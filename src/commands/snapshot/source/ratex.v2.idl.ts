/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/ratex_contracts.json`.
 */
export type RatexContracts = {
  address: 'rateE3GompDX8X8a6WEqwve7kge6YwCGEhN8krmTFjB';
  metadata: {
    name: 'ratexContracts';
    version: '0.1.0';
    spec: '0.1.0';
    description: 'Created with Anchor';
  };
  instructions: [
    {
      name: 'addKeeper';
      discriminator: [73, 181, 232, 2, 99, 47, 150, 179];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
          writable: true;
        },
      ];
      args: [
        {
          name: 'newKeeper';
          type: 'pubkey';
        },
      ];
    },
    {
      name: 'addLpShares';
      discriminator: [210, 205, 121, 221, 202, 167, 59, 191];
      accounts: [
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'tokenVaultBase';
          writable: true;
        },
        {
          name: 'tokenVaultQuote';
          writable: true;
        },
        {
          name: 'tickArrayLower';
          writable: true;
        },
        {
          name: 'tickArrayUpper';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [121, 105, 101, 108, 100, 95, 109, 97, 114, 107, 101, 116];
              },
              {
                kind: 'arg';
                path: 'marketIndex';
              },
            ];
          };
        },
        {
          name: 'unifiedPosition';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  110,
                  105,
                  102,
                  105,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                ];
              },
              {
                kind: 'arg';
                path: 'marketIndex';
              },
            ];
          };
        },
        {
          name: 'tokenOwnerAccountBase';
          writable: true;
        },
        {
          name: 'tokenOwnerAccountQuote';
          writable: true;
        },
        {
          name: 'tokenMintBase';
        },
        {
          name: 'tokenMintQuote';
        },
        {
          name: 'marginMarket';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [109, 97, 114, 103, 105, 110, 95, 109, 97, 114, 107, 101, 116];
              },
              {
                kind: 'arg';
                path: 'marginIndex';
              },
            ];
          };
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'oracle';
        },
        {
          name: 'userTokenAccount';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'lp';
          writable: true;
        },
        {
          name: 'authority';
          writable: true;
          signer: true;
          relations: ['lp'];
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'i64';
        },
        {
          name: 'marginIndex';
          type: 'u32';
        },
        {
          name: 'marketIndex';
          type: 'u32';
        },
      ];
    },
    {
      name: 'adminAddLpShares';
      discriminator: [5, 100, 225, 180, 252, 120, 238, 254];
      accounts: [
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'tokenVaultBase';
          writable: true;
        },
        {
          name: 'tokenVaultQuote';
          writable: true;
        },
        {
          name: 'tickArrayLower';
          writable: true;
        },
        {
          name: 'tickArrayUpper';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [121, 105, 101, 108, 100, 95, 109, 97, 114, 107, 101, 116];
              },
              {
                kind: 'arg';
                path: 'marketIndex';
              },
            ];
          };
        },
        {
          name: 'unifiedPosition';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  110,
                  105,
                  102,
                  105,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                ];
              },
              {
                kind: 'arg';
                path: 'marketIndex';
              },
            ];
          };
        },
        {
          name: 'tokenOwnerAccountBase';
          writable: true;
        },
        {
          name: 'tokenOwnerAccountQuote';
          writable: true;
        },
        {
          name: 'tokenMintBase';
        },
        {
          name: 'tokenMintQuote';
        },
        {
          name: 'marginMarket';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [109, 97, 114, 103, 105, 110, 95, 109, 97, 114, 107, 101, 116];
              },
              {
                kind: 'arg';
                path: 'marginIndex';
              },
            ];
          };
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'oracle';
        },
        {
          name: 'userTokenAccount';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'lp';
          writable: true;
        },
        {
          name: 'authority';
          writable: true;
          signer: true;
          relations: ['lp'];
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'i64';
        },
        {
          name: 'marginIndex';
          type: 'u32';
        },
        {
          name: 'marketIndex';
          type: 'u32';
        },
      ];
    },
    {
      name: 'adminAddMargin';
      discriminator: [198, 233, 89, 6, 152, 177, 250, 99];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          writable: true;
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'i64';
        },
      ];
    },
    {
      name: 'adminSolayerDelegate';
      discriminator: [129, 25, 118, 2, 91, 131, 109, 143];
      accounts: [
        {
          name: 'signer';
          signer: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'ssolMint';
          writable: true;
        },
        {
          name: 'avsMint';
          writable: true;
        },
        {
          name: 'avsSsolVault';
          writable: true;
        },
        {
          name: 'ssolVault';
          writable: true;
        },
        {
          name: 'avsMintVault';
          writable: true;
        },
        {
          name: 'endoAvs';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associateTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'endoavsProgram';
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'adminSolayerRestake';
      discriminator: [207, 190, 78, 150, 186, 97, 86, 38];
      accounts: [
        {
          name: 'signer';
          signer: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'lstMint';
          writable: true;
        },
        {
          name: 'rstMint';
          writable: true;
        },
        {
          name: 'solayerVault';
          writable: true;
        },
        {
          name: 'solayerVaultAuthority';
          writable: true;
        },
        {
          name: 'lstVault';
          writable: true;
        },
        {
          name: 'rstVault';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associateTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'solayerProgram';
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'adminSolayerUndelegate';
      discriminator: [126, 74, 39, 69, 85, 122, 209, 156];
      accounts: [
        {
          name: 'signer';
          signer: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'ssolMint';
          writable: true;
        },
        {
          name: 'avsMint';
          writable: true;
        },
        {
          name: 'avsSsolVault';
          writable: true;
        },
        {
          name: 'ssolVault';
          writable: true;
        },
        {
          name: 'avsMintVault';
          writable: true;
        },
        {
          name: 'endoAvs';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associateTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'endoavsProgram';
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'adminSolayerUnrestake';
      discriminator: [17, 27, 239, 48, 196, 151, 39, 196];
      accounts: [
        {
          name: 'signer';
          signer: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'lstMint';
          writable: true;
        },
        {
          name: 'rstMint';
          writable: true;
        },
        {
          name: 'solayerVault';
          writable: true;
        },
        {
          name: 'solayerVaultAuthority';
          writable: true;
        },
        {
          name: 'lstVault';
          writable: true;
        },
        {
          name: 'rstVault';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associateTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'solayerProgram';
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'adminTransferMargin';
      discriminator: [36, 42, 110, 72, 201, 72, 162, 44];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'marginMarket';
        },
        {
          name: 'userTokenAccount';
          writable: true;
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'beginVaultSwap';
      discriminator: [23, 90, 16, 187, 221, 166, 33, 66];
      accounts: [
        {
          name: 'state';
        },
        {
          name: 'authority';
          signer: true;
        },
        {
          name: 'inMarginMarketVault';
          writable: true;
        },
        {
          name: 'outMarginMarketVault';
          writable: true;
        },
        {
          name: 'inMarginMarket';
          writable: true;
        },
        {
          name: 'outMarginMarket';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
        {
          name: 'inUserTokenAccount';
          writable: true;
        },
        {
          name: 'outUserTokenAccount';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'instructions';
          docs: ['Instructions Sysvar for instruction introspection'];
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'otherAmountThreshold';
          type: 'u64';
        },
        {
          name: 'isExactIn';
          type: 'bool';
        },
      ];
    },
    {
      name: 'calculateEarnInvest';
      discriminator: [179, 69, 22, 166, 5, 227, 175, 62];
      accounts: [
        {
          name: 'earnVault';
          writable: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'oracle';
        },
        {
          name: 'observationState';
          writable: true;
        },
        {
          name: 'tokenOwnerAccountBase';
          writable: true;
        },
        {
          name: 'tokenVaultBase';
          writable: true;
        },
        {
          name: 'tokenOwnerAccountQuote';
          writable: true;
        },
        {
          name: 'tokenVaultQuote';
          writable: true;
        },
        {
          name: 'ptMint';
          writable: true;
          relations: ['earnVault'];
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'marginAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'calculateImpliedRate';
      discriminator: [28, 11, 110, 76, 206, 246, 115, 187];
      accounts: [];
      args: [
        {
          name: 'maturity';
          type: 'u64';
        },
        {
          name: 'sqrtPriceX64';
          type: 'u128';
        },
      ];
      returns: 'u128';
    },
    {
      name: 'calculateLpSloss';
      discriminator: [252, 122, 146, 236, 64, 109, 89, 97];
      accounts: [
        {
          name: 'yieldMarket';
        },
        {
          name: 'unifiedPosition';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  110,
                  105,
                  102,
                  105,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'yieldMarket';
              },
            ];
          };
        },
        {
          name: 'oracle';
        },
        {
          name: 'lp';
        },
      ];
      args: [
        {
          name: 'rmLiquidityPercent';
          type: 'u64';
        },
      ];
    },
    {
      name: 'calculateLpValue';
      discriminator: [196, 205, 9, 32, 168, 164, 116, 101];
      accounts: [
        {
          name: 'yieldMarket';
        },
        {
          name: 'unifiedPosition';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  110,
                  105,
                  102,
                  105,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'yieldMarket';
              },
            ];
          };
        },
        {
          name: 'oracle';
        },
        {
          name: 'lp';
        },
      ];
      args: [];
      returns: 'i64';
    },
    {
      name: 'calculateMarginValue';
      discriminator: [124, 69, 9, 16, 66, 212, 29, 66];
      accounts: [
        {
          name: 'user';
        },
      ];
      args: [];
      returns: {
        defined: {
          name: 'marginValue';
        };
      };
    },
    {
      name: 'calculatePositionValue';
      discriminator: [94, 181, 155, 245, 115, 194, 78, 236];
      accounts: [
        {
          name: 'state';
        },
        {
          name: 'user';
        },
      ];
      args: [];
      returns: {
        defined: {
          name: 'positionValue';
        };
      };
    },
    {
      name: 'calculatePtPrice';
      discriminator: [244, 35, 167, 21, 93, 179, 102, 235];
      accounts: [
        {
          name: 'yieldMarket';
        },
        {
          name: 'earnVault';
        },
        {
          name: 'oracle';
        },
      ];
      args: [];
      returns: 'i64';
    },
    {
      name: 'calculateSwap';
      discriminator: [187, 165, 113, 222, 104, 2, 79, 219];
      accounts: [
        {
          name: 'yieldMarket';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'aToB';
          type: 'bool';
        },
        {
          name: 'amountSpecifiedIsInput';
          type: 'bool';
        },
        {
          name: 'sqrtPriceLimit';
          type: 'u128';
        },
        {
          name: 'skipStandardize';
          type: 'bool';
        },
      ];
      returns: {
        defined: {
          name: 'swapResult';
        };
      };
    },
    {
      name: 'calculateSwapV2';
      discriminator: [237, 14, 233, 63, 73, 144, 161, 163];
      accounts: [
        {
          name: 'yieldMarket';
        },
        {
          name: 'observationState';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'aToB';
          type: 'bool';
        },
        {
          name: 'amountSpecifiedIsInput';
          type: 'bool';
        },
        {
          name: 'sqrtPriceLimit';
          type: 'u128';
        },
        {
          name: 'skipStandardize';
          type: 'bool';
        },
      ];
      returns: {
        defined: {
          name: 'swapResult';
        };
      };
    },
    {
      name: 'calculateTickIndex';
      discriminator: [10, 28, 137, 105, 211, 252, 38, 203];
      accounts: [];
      args: [
        {
          name: 'maturity';
          type: 'u64';
        },
        {
          name: 'impliedRate';
          type: 'u64';
        },
        {
          name: 'tickSpacing';
          type: 'i32';
        },
        {
          name: 'isLower';
          type: 'bool';
        },
      ];
      returns: 'i32';
    },
    {
      name: 'calculateTraderPnl';
      discriminator: [172, 2, 209, 230, 49, 245, 183, 199];
      accounts: [
        {
          name: 'yieldMarket';
        },
        {
          name: 'user';
        },
      ];
      args: [];
      returns: 'i64';
    },
    {
      name: 'cancelIsolatedOrder';
      discriminator: [204, 114, 199, 244, 169, 90, 175, 233];
      accounts: [
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'authority';
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'orderId';
          type: 'u32';
        },
      ];
    },
    {
      name: 'cancelOrder';
      discriminator: [95, 129, 237, 240, 8, 49, 223, 132];
      accounts: [
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
        },
        {
          name: 'authority';
          signer: true;
        },
      ];
      args: [
        {
          name: 'orderId';
          type: 'u32';
        },
      ];
    },
    {
      name: 'claimInsurance';
      discriminator: [96, 254, 157, 145, 19, 96, 95, 55];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'tokenOwnerAccount';
          writable: true;
        },
        {
          name: 'tokenVaultMargin';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [];
    },
    {
      name: 'claimKeeperFee';
      discriminator: [233, 182, 238, 12, 107, 123, 30, 161];
      accounts: [
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'state';
          writable: true;
        },
      ];
      args: [];
    },
    {
      name: 'claimYield';
      discriminator: [49, 74, 111, 7, 186, 22, 61, 165];
      accounts: [
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
        },
        {
          name: 'authority';
          signer: true;
          relations: ['user'];
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [
        {
          name: 'marketIndex';
          type: 'u32';
        },
        {
          name: 'amount';
          type: 'i64';
        },
      ];
    },
    {
      name: 'collectEarnFee';
      discriminator: [136, 35, 138, 164, 87, 2, 169, 213];
      accounts: [
        {
          name: 'earnVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [101, 97, 114, 110, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'yieldMarket';
              },
            ];
          };
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          writable: true;
        },
        {
          name: 'oracle';
        },
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [];
    },
    {
      name: 'collectFees';
      discriminator: [164, 152, 207, 99, 30, 186, 19, 182];
      accounts: [
        {
          name: 'yieldMarket';
        },
        {
          name: 'unifiedPosition';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  110,
                  105,
                  102,
                  105,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'yieldMarket';
              },
            ];
          };
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'state';
        },
        {
          name: 'authority';
          signer: true;
          relations: ['lp'];
        },
        {
          name: 'oracle';
        },
        {
          name: 'lp';
          writable: true;
        },
        {
          name: 'tokenOwnerAccount';
          writable: true;
        },
        {
          name: 'tokenVaultMargin';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [];
    },
    {
      name: 'collectLpYieldFee';
      discriminator: [254, 97, 214, 188, 69, 207, 205, 19];
      accounts: [
        {
          name: 'lpMarginMarketVault';
          writable: true;
        },
        {
          name: 'lpMarginMarket';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          writable: true;
        },
        {
          name: 'oracle';
        },
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [];
    },
    {
      name: 'collectProtocolFees';
      discriminator: [22, 67, 23, 98, 150, 178, 70, 220];
      accounts: [
        {
          name: 'state';
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'ammpoolsConfig';
        },
        {
          name: 'collectProtocolFeesAuthority';
          signer: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
        {
          name: 'tokenVaultMargin';
          writable: true;
        },
        {
          name: 'tokenDestination';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [];
    },
    {
      name: 'collectTraderYieldFee';
      discriminator: [174, 193, 147, 209, 51, 133, 195, 119];
      accounts: [
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          writable: true;
        },
        {
          name: 'oracle';
        },
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [];
    },
    {
      name: 'deleteLp';
      discriminator: [135, 33, 154, 68, 253, 179, 43, 87];
      accounts: [
        {
          name: 'lp';
          writable: true;
        },
        {
          name: 'userStats';
          writable: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'authority';
          writable: true;
          relations: ['lp', 'userStats'];
        },
      ];
      args: [];
    },
    {
      name: 'deleteTickArray';
      discriminator: [173, 196, 196, 224, 43, 132, 3, 8];
      accounts: [
        {
          name: 'yieldMarket';
        },
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'state';
        },
        {
          name: 'tickArray';
          writable: true;
        },
      ];
      args: [];
    },
    {
      name: 'deleteUser';
      discriminator: [186, 85, 17, 249, 219, 231, 98, 251];
      accounts: [
        {
          name: 'user';
          writable: true;
        },
        {
          name: 'userStats';
          writable: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'authority';
          writable: true;
          relations: ['user', 'userStats'];
        },
      ];
      args: [];
    },
    {
      name: 'deposit';
      discriminator: [242, 35, 198, 137, 82, 225, 242, 182];
      accounts: [
        {
          name: 'user';
          writable: true;
        },
        {
          name: 'authority';
          writable: true;
          signer: true;
          relations: ['user'];
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'i64';
        },
      ];
    },
    {
      name: 'earnInvest';
      discriminator: [110, 63, 157, 138, 202, 152, 33, 172];
      accounts: [
        {
          name: 'earnVault';
          writable: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'ptTokenProgram';
        },
        {
          name: 'feeVault';
          writable: true;
        },
        {
          name: 'feeMarginMarket';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          writable: true;
        },
        {
          name: 'userFeeAccount';
          writable: true;
        },
        {
          name: 'oracle';
        },
        {
          name: 'observationState';
          writable: true;
        },
        {
          name: 'tokenOwnerAccountBase';
          writable: true;
        },
        {
          name: 'tokenVaultBase';
          writable: true;
        },
        {
          name: 'tokenOwnerAccountQuote';
          writable: true;
        },
        {
          name: 'tokenVaultQuote';
          writable: true;
        },
        {
          name: 'ptTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'authority';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'ptMint';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'ptMint';
          writable: true;
          relations: ['earnVault'];
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'minPtAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'earnRedeem';
      discriminator: [93, 162, 58, 1, 75, 18, 212, 66];
      accounts: [
        {
          name: 'earnVault';
          writable: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'ptTokenProgram';
        },
        {
          name: 'feeVault';
          writable: true;
        },
        {
          name: 'feeMarginMarket';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          writable: true;
        },
        {
          name: 'userFeeAccount';
          writable: true;
        },
        {
          name: 'oracle';
        },
        {
          name: 'observationState';
          writable: true;
        },
        {
          name: 'tokenOwnerAccountBase';
          writable: true;
        },
        {
          name: 'tokenVaultBase';
          writable: true;
        },
        {
          name: 'tokenOwnerAccountQuote';
          writable: true;
        },
        {
          name: 'tokenVaultQuote';
          writable: true;
        },
        {
          name: 'ptTokenAccount';
          writable: true;
        },
        {
          name: 'ptMint';
          writable: true;
          relations: ['earnVault'];
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'sqrtPriceLimit';
          type: 'u128';
        },
      ];
    },
    {
      name: 'endVaultSwap';
      discriminator: [116, 254, 32, 14, 145, 222, 49, 2];
      accounts: [
        {
          name: 'state';
        },
        {
          name: 'authority';
          signer: true;
        },
        {
          name: 'inMarginMarketVault';
          writable: true;
        },
        {
          name: 'outMarginMarketVault';
          writable: true;
        },
        {
          name: 'inMarginMarket';
          writable: true;
        },
        {
          name: 'outMarginMarket';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
        {
          name: 'inUserTokenAccount';
          writable: true;
        },
        {
          name: 'outUserTokenAccount';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'instructions';
          docs: ['Instructions Sysvar for instruction introspection'];
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'otherAmountThreshold';
          type: 'u64';
        },
        {
          name: 'isExactIn';
          type: 'bool';
        },
      ];
    },
    {
      name: 'epochUpdateBegin';
      discriminator: [91, 166, 232, 37, 88, 175, 78, 243];
      accounts: [
        {
          name: 'authority';
          signer: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'isExpired';
          type: 'bool';
        },
      ];
    },
    {
      name: 'epochUpdateEnd';
      discriminator: [164, 158, 251, 170, 210, 146, 160, 208];
      accounts: [
        {
          name: 'authority';
          signer: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'isExpired';
          type: 'bool';
        },
      ];
    },
    {
      name: 'epochUpdateExpiryApply';
      discriminator: [44, 61, 49, 72, 123, 218, 79, 6];
      accounts: [
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [];
    },
    {
      name: 'epochUpdateExpiryCheck';
      discriminator: [99, 200, 237, 96, 245, 113, 213, 36];
      accounts: [
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [];
    },
    {
      name: 'epochUpdateUnifiedPosition';
      discriminator: [9, 82, 156, 62, 57, 38, 246, 246];
      accounts: [
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [121, 105, 101, 108, 100, 95, 109, 97, 114, 107, 101, 116];
              },
              {
                kind: 'arg';
                path: 'marketIndex';
              },
            ];
          };
        },
        {
          name: 'unifiedPosition';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  110,
                  105,
                  102,
                  105,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                ];
              },
              {
                kind: 'arg';
                path: 'marketIndex';
              },
            ];
          };
        },
        {
          name: 'tickArrayLowerOld';
          writable: true;
        },
        {
          name: 'tickArrayUpperOld';
          writable: true;
        },
        {
          name: 'tickArrayLowerNew';
          writable: true;
        },
        {
          name: 'tickArrayUpperNew';
          writable: true;
        },
        {
          name: 'oracle';
        },
        {
          name: 'observationState';
          writable: true;
        },
        {
          name: 'tokenVaultBase';
          writable: true;
        },
        {
          name: 'tokenVaultQuote';
          writable: true;
        },
        {
          name: 'tokenOwnerAccountBase';
          writable: true;
        },
        {
          name: 'tokenOwnerAccountQuote';
          writable: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'marginMarketMint';
        },
        {
          name: 'userTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'authority';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'marginMarketMint';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'marketIndex';
          type: 'u32';
        },
        {
          name: 'isExpired';
          type: 'bool';
        },
      ];
    },
    {
      name: 'fillOrder';
      discriminator: [232, 122, 115, 25, 199, 143, 136, 162];
      accounts: [
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'authority';
          signer: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'tokenOwnerAccountBase';
          writable: true;
        },
        {
          name: 'tokenVaultBase';
          writable: true;
        },
        {
          name: 'tokenOwnerAccountQuote';
          writable: true;
        },
        {
          name: 'tokenVaultQuote';
          writable: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'orderId';
          type: 'u32';
        },
      ];
    },
    {
      name: 'getAmmTwap';
      discriminator: [93, 161, 159, 51, 126, 140, 113, 177];
      accounts: [
        {
          name: 'yieldMarket';
        },
        {
          name: 'observation';
        },
      ];
      args: [
        {
          name: 'secondsAgo';
          type: 'u32';
        },
      ];
      returns: 'u128';
    },
    {
      name: 'initialize';
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
        },
        {
          name: 'state';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 97, 116, 101, 120, 95, 115, 116, 97, 116, 101];
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [
        {
          name: 'marginIndexStart';
          type: 'u32';
        },
        {
          name: 'marketIndexStart';
          type: 'u32';
        },
        {
          name: 'keeperFee';
          type: 'u64';
        },
      ];
    },
    {
      name: 'initializeConfig';
      docs: [
        'Initializes a AmmpoolsConfig account that hosts info & authorities',
        'required to govern a set of Ammpools.',
        '',
        '### Parameters',
        '- `fee_authority` - Authority authorized to initialize fee-tiers and set customs fees.',
        '- `collect_protocol_fees_authority` - Authority authorized to collect protocol fees.',
        '- `reward_emissions_super_authority` - Authority authorized to set reward authorities in pools.',
      ];
      discriminator: [208, 127, 21, 1, 194, 190, 196, 70];
      accounts: [
        {
          name: 'config';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              },
            ];
          };
        },
        {
          name: 'admin';
          writable: true;
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'feeAuthority';
          type: 'pubkey';
        },
        {
          name: 'collectProtocolFeesAuthority';
          type: 'pubkey';
        },
        {
          name: 'rewardEmissionsSuperAuthority';
          type: 'pubkey';
        },
        {
          name: 'defaultProtocolFeeRate';
          type: 'u16';
        },
      ];
    },
    {
      name: 'initializeEarnVault';
      discriminator: [250, 227, 213, 86, 49, 121, 53, 231];
      accounts: [
        {
          name: 'earnVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [101, 97, 114, 110, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'yieldMarket';
              },
            ];
          };
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'ptMint';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [112, 116, 95, 109, 105, 110, 116];
              },
              {
                kind: 'account';
                path: 'earnVault';
              },
            ];
          };
        },
        {
          name: 'mintMetadata';
          writable: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'admin';
          writable: true;
          signer: true;
          relations: ['state'];
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'tokenMetadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'userRatio';
          type: 'u64';
        },
      ];
    },
    {
      name: 'initializeFeeTier';
      docs: [
        'Initializes a fee_tier account usable by Ammpools in a AmmpoolConfig space.',
        '',
        '### Authority',
        '- "fee_authority" - Set authority in the AmmpoolConfig',
        '',
        '### Parameters',
        '- `tick_spacing` - The tick-spacing that this fee-tier suggests the default_fee_rate for.',
        '- `default_fee_rate` - The default fee rate that a pool will use if the pool uses this',
        'fee tier during initialization.',
        '',
        '#### Special Errors',
        '- `FeeRateMaxExceeded` - If the provided default_fee_rate exceeds MAX_FEE_RATE.',
      ];
      discriminator: [183, 74, 156, 160, 112, 2, 42, 30];
      accounts: [
        {
          name: 'config';
        },
        {
          name: 'feeTier';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [102, 101, 101, 95, 116, 105, 101, 114];
              },
              {
                kind: 'account';
                path: 'config';
              },
              {
                kind: 'arg';
                path: 'tickSpacing';
              },
            ];
          };
        },
        {
          name: 'funder';
          writable: true;
          signer: true;
        },
        {
          name: 'feeAuthority';
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'tickSpacing';
          type: 'u16';
        },
        {
          name: 'defaultFeeRate';
          type: 'u16';
        },
      ];
    },
    {
      name: 'initializeLp';
      discriminator: [110, 252, 116, 251, 81, 191, 57, 96];
      accounts: [
        {
          name: 'lp';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [108, 112];
              },
              {
                kind: 'account';
                path: 'authority';
              },
              {
                kind: 'arg';
                path: 'subAccountId';
              },
            ];
          };
        },
        {
          name: 'userStats';
          writable: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'authority';
          signer: true;
          relations: ['userStats'];
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'subAccountId';
          type: 'u16';
        },
      ];
    },
    {
      name: 'initializeMarginMarket';
      discriminator: [188, 92, 253, 198, 89, 179, 165, 83];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
          relations: ['state'];
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'marginMarketMint';
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [
        {
          name: 'name';
          type: {
            array: ['u8', 32];
          };
        },
      ];
    },
    {
      name: 'initializeMarginMarketDelegateVault';
      discriminator: [36, 159, 231, 78, 46, 22, 59, 131];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'marginMarketDelegateVault';
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associateTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'initializeMarginMarketNewVault';
      discriminator: [16, 154, 192, 95, 221, 231, 120, 120];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'oldMarginMarketVault';
          writable: true;
        },
        {
          name: 'newMarginMarketVault';
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associateTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'initializeOracle';
      discriminator: [144, 223, 131, 120, 196, 253, 181, 99];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
          relations: ['state'];
        },
        {
          name: 'oracle';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 97, 116, 101, 120, 95, 111, 114, 97, 99, 108, 101];
              },
              {
                kind: 'arg';
                path: 'name';
              },
            ];
          };
        },
        {
          name: 'state';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'name';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'marketRate';
          type: 'u64';
        },
        {
          name: 'rate';
          type: 'u64';
        },
        {
          name: 'lastRate';
          type: 'u64';
        },
        {
          name: 'epochStartTimestamp';
          type: 'i64';
        },
        {
          name: 'decimals';
          type: 'u32';
        },
      ];
    },
    {
      name: 'initializeTickArray';
      docs: [
        'Initializes a tick_array account to represent a tick-range in a Ammpool.',
        '',
        '### Parameters',
        '- `start_tick_index` - The starting tick index for this tick-array.',
        'Has to be a multiple of TickArray size & the tick spacing of this pool.',
        '',
        '#### Special Errors',
        '- `InvalidStartTick` - if the provided start tick is out of bounds or is not a multiple of',
        'TICK_ARRAY_SIZE * tick spacing.',
      ];
      discriminator: [11, 188, 193, 214, 141, 91, 149, 184];
      accounts: [
        {
          name: 'yieldMarket';
        },
        {
          name: 'funder';
          writable: true;
          signer: true;
        },
        {
          name: 'tickArray';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [116, 105, 99, 107, 95, 97, 114, 114, 97, 121];
              },
              {
                kind: 'account';
                path: 'yieldMarket';
              },
              {
                kind: 'arg';
                path: 'startTickIndex';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'startTickIndex';
          type: 'i32';
        },
      ];
    },
    {
      name: 'initializeUser';
      discriminator: [111, 17, 185, 250, 60, 122, 38, 254];
      accounts: [
        {
          name: 'user';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [117, 115, 101, 114];
              },
              {
                kind: 'account';
                path: 'authority';
              },
              {
                kind: 'arg';
                path: 'subAccountId';
              },
            ];
          };
        },
        {
          name: 'userStats';
          writable: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'authority';
          signer: true;
          relations: ['userStats'];
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'subAccountId';
          type: 'u16';
        },
        {
          name: 'isIsolated';
          type: 'bool';
        },
      ];
    },
    {
      name: 'initializeUserStats';
      discriminator: [254, 243, 72, 98, 251, 130, 168, 213];
      accounts: [
        {
          name: 'userStats';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [117, 115, 101, 114, 95, 115, 116, 97, 116, 115];
              },
              {
                kind: 'account';
                path: 'authority';
              },
            ];
          };
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'authority';
          signer: true;
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'initializeYieldMarket';
      discriminator: [108, 101, 35, 38, 98, 214, 231, 231];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'unifiedPosition';
          writable: true;
        },
        {
          name: 'marginMarket';
        },
        {
          name: 'lpMarginMarket';
        },
        {
          name: 'oracle';
        },
        {
          name: 'baseAssetMint';
          writable: true;
        },
        {
          name: 'quoteAssetMint';
          writable: true;
        },
        {
          name: 'baseAssetVault';
          writable: true;
        },
        {
          name: 'quoteAssetVault';
          writable: true;
        },
        {
          name: 'tokenVaultBase';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [118, 97, 117, 108, 116, 95, 98, 97, 115, 101];
              },
              {
                kind: 'account';
                path: 'yieldMarket';
              },
              {
                kind: 'account';
                path: 'baseAssetMint';
              },
            ];
          };
        },
        {
          name: 'tokenVaultQuote';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [118, 97, 117, 108, 116, 95, 113, 117, 111, 116, 101];
              },
              {
                kind: 'account';
                path: 'yieldMarket';
              },
              {
                kind: 'account';
                path: 'quoteAssetMint';
              },
            ];
          };
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'ammpoolsConfig';
          relations: ['feeTier'];
        },
        {
          name: 'feeTier';
        },
        {
          name: 'observationState';
          writable: true;
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'tickSpacing';
          type: 'u16';
        },
        {
          name: 'sqrtPrice';
          type: 'u128';
        },
        {
          name: 'orderStepSize';
          type: 'u64';
        },
        {
          name: 'minOrderSize';
          type: 'u64';
        },
        {
          name: 'minLiquidationSize';
          type: 'u64';
        },
        {
          name: 'startTs';
          type: 'i64';
        },
        {
          name: 'expireTs';
          type: 'i64';
        },
        {
          name: 'activeRatioCoef';
          type: 'u64';
        },
        {
          name: 'marginType';
          type: {
            defined: {
              name: 'marginType';
            };
          };
        },
        {
          name: 'lpMarginType';
          type: {
            defined: {
              name: 'marginType';
            };
          };
        },
        {
          name: 'minLpAmount';
          type: 'u64';
        },
        {
          name: 'lowerRateBound';
          type: 'u64';
        },
        {
          name: 'upperRateBound';
          type: 'u64';
        },
        {
          name: 'boundPercentage';
          type: 'u64';
        },
        {
          name: 'marketType';
          type: {
            defined: {
              name: 'marketType';
            };
          };
        },
        {
          name: 'name';
          type: {
            array: ['u8', 32];
          };
        },
      ];
    },
    {
      name: 'initializeYieldMarketTokenAccountA';
      discriminator: [202, 175, 124, 235, 234, 83, 219, 218];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'baseAssetMint';
          writable: true;
        },
        {
          name: 'quoteAssetMint';
          writable: true;
        },
        {
          name: 'baseAssetVault';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'yieldMarket';
          type: 'pubkey';
        },
      ];
    },
    {
      name: 'initializeYieldMarketTokenAccountAa';
      discriminator: [247, 19, 79, 46, 98, 38, 117, 103];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'baseAssetMint';
          writable: true;
        },
        {
          name: 'quoteAssetMint';
          writable: true;
        },
        {
          name: 'quoteAssetVault';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'yieldMarket';
          type: 'pubkey';
        },
      ];
    },
    {
      name: 'initializeYieldMarketTokenAccountB';
      discriminator: [87, 55, 154, 192, 99, 4, 14, 237];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'baseAssetMint';
          writable: true;
        },
        {
          name: 'quoteAssetMint';
          writable: true;
        },
        {
          name: 'tokenVaultBase';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [118, 97, 117, 108, 116, 95, 98, 97, 115, 101];
              },
              {
                kind: 'arg';
                path: 'yieldMarket';
              },
              {
                kind: 'account';
                path: 'baseAssetMint';
              },
            ];
          };
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'yieldMarket';
          type: 'pubkey';
        },
      ];
    },
    {
      name: 'initializeYieldMarketTokenAccountBb';
      discriminator: [216, 5, 249, 180, 174, 97, 76, 66];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'baseAssetMint';
          writable: true;
        },
        {
          name: 'quoteAssetMint';
          writable: true;
        },
        {
          name: 'tokenVaultQuote';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [118, 97, 117, 108, 116, 95, 113, 117, 111, 116, 101];
              },
              {
                kind: 'arg';
                path: 'yieldMarket';
              },
              {
                kind: 'account';
                path: 'quoteAssetMint';
              },
            ];
          };
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'yieldMarket';
          type: 'pubkey';
        },
      ];
    },
    {
      name: 'liquidate';
      discriminator: [223, 179, 226, 125, 48, 46, 39, 74];
      accounts: [
        {
          name: 'user';
          writable: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'authority';
          signer: true;
        },
      ];
      args: [];
    },
    {
      name: 'liquidateInsurance';
      discriminator: [125, 56, 6, 102, 255, 77, 1, 47];
      accounts: [
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'authority';
          signer: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'oracle';
        },
        {
          name: 'observation';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'marketIndex';
          type: 'u32';
        },
        {
          name: 'adlFinish';
          type: 'bool';
        },
      ];
    },
    {
      name: 'liquidateLp';
      discriminator: [184, 134, 42, 9, 9, 99, 65, 25];
      accounts: [
        {
          name: 'lp';
          writable: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'tokenVaultBase';
          writable: true;
        },
        {
          name: 'tokenVaultQuote';
          writable: true;
        },
        {
          name: 'tickArrayLower';
          writable: true;
        },
        {
          name: 'tickArrayUpper';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'unifiedPosition';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  110,
                  105,
                  102,
                  105,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'yieldMarket';
              },
            ];
          };
        },
        {
          name: 'tokenOwnerAccountBase';
          writable: true;
        },
        {
          name: 'tokenOwnerAccountQuote';
          writable: true;
        },
        {
          name: 'tokenMintBase';
        },
        {
          name: 'tokenMintQuote';
        },
        {
          name: 'oracle';
        },
        {
          name: 'observationState';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'authority';
          signer: true;
        },
      ];
      args: [];
    },
    {
      name: 'loadObservationState';
      discriminator: [189, 246, 203, 10, 242, 132, 96, 156];
      accounts: [
        {
          name: 'yieldMarket';
        },
      ];
      args: [];
    },
    {
      name: 'multiSigDeposit';
      discriminator: [243, 249, 76, 39, 66, 11, 190, 229];
      accounts: [
        {
          name: 'user';
          writable: true;
        },
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'admin';
          writable: true;
          signer: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'i64';
        },
      ];
    },
    {
      name: 'observe';
      discriminator: [204, 78, 178, 115, 194, 147, 65, 74];
      accounts: [
        {
          name: 'yieldMarket';
        },
        {
          name: 'observation';
        },
      ];
      args: [
        {
          name: 'secondsAgos';
          type: {
            vec: 'u32';
          };
        },
      ];
      returns: {
        vec: 'u128';
      };
    },
    {
      name: 'placeOrder';
      discriminator: [51, 194, 155, 175, 109, 130, 96, 106];
      accounts: [
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
        },
        {
          name: 'authority';
          signer: true;
          relations: ['user'];
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'orderParams';
            };
          };
        },
      ];
    },
    {
      name: 'removeKeeper';
      discriminator: [193, 167, 169, 215, 44, 36, 88, 247];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
          writable: true;
        },
      ];
      args: [
        {
          name: 'removeKeeper';
          type: 'pubkey';
        },
      ];
    },
    {
      name: 'removeLpShares';
      discriminator: [76, 225, 62, 212, 158, 149, 209, 84];
      accounts: [
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'authority';
          writable: true;
          signer: true;
          relations: ['lp'];
        },
        {
          name: 'lp';
          writable: true;
        },
        {
          name: 'tokenVaultBase';
          writable: true;
        },
        {
          name: 'tokenVaultQuote';
          writable: true;
        },
        {
          name: 'tickArrayLower';
          writable: true;
        },
        {
          name: 'tickArrayUpper';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'unifiedPosition';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  110,
                  105,
                  102,
                  105,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'yieldMarket';
              },
            ];
          };
        },
        {
          name: 'tokenOwnerAccountBase';
          writable: true;
        },
        {
          name: 'tokenOwnerAccountQuote';
          writable: true;
        },
        {
          name: 'tokenMintBase';
        },
        {
          name: 'tokenMintQuote';
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'oracle';
        },
        {
          name: 'userTokenAccount';
          writable: true;
        },
        {
          name: 'observationState';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'rmLiquidityPercent';
          type: 'u64';
        },
        {
          name: 'sqrtPriceLimit';
          type: 'u128';
        },
      ];
    },
    {
      name: 'rollbackOracle';
      discriminator: [229, 81, 205, 92, 162, 102, 13, 135];
      accounts: [
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'oracle';
          writable: true;
        },
        {
          name: 'state';
          writable: true;
        },
      ];
      args: [
        {
          name: 'marketRate';
          type: 'u64';
        },
        {
          name: 'rate';
          type: 'u64';
        },
        {
          name: 'lastRate';
          type: 'u64';
        },
        {
          name: 'epochStartTimestamp';
          type: 'i64';
        },
        {
          name: 'lastEpochStartTimestamp';
          type: 'i64';
        },
      ];
    },
    {
      name: 'setCollateralRatio';
      discriminator: [154, 202, 184, 203, 41, 180, 3, 3];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
          writable: true;
        },
      ];
      args: [
        {
          name: 'collateralRatioInitial';
          type: 'i64';
        },
        {
          name: 'collateralRatioMaintenance';
          type: 'i64';
        },
        {
          name: 'collateralRatioInitialPreExpiry';
          type: 'i64';
        },
      ];
    },
    {
      name: 'setKeeperFee';
      discriminator: [70, 15, 64, 136, 169, 67, 173, 168];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
          writable: true;
        },
      ];
      args: [
        {
          name: 'keeperFeePerTx';
          type: 'u64';
        },
      ];
    },
    {
      name: 'setTwapDuration';
      discriminator: [27, 9, 151, 243, 72, 166, 22, 226];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
          writable: true;
        },
      ];
      args: [
        {
          name: 'twapDuration';
          type: 'u32';
        },
      ];
    },
    {
      name: 'settleExpiryUser';
      discriminator: [20, 52, 112, 83, 224, 135, 171, 189];
      accounts: [
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [];
    },
    {
      name: 'solayerDelegate';
      discriminator: [163, 159, 198, 186, 146, 226, 125, 7];
      accounts: [
        {
          name: 'signer';
          signer: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'ssolMint';
          writable: true;
        },
        {
          name: 'avsMint';
          writable: true;
        },
        {
          name: 'avsSsolVault';
          writable: true;
        },
        {
          name: 'ssolVault';
          writable: true;
        },
        {
          name: 'avsMintVault';
          writable: true;
        },
        {
          name: 'endoAvs';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associateTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'endoavsProgram';
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'solayerRestake';
      discriminator: [156, 164, 139, 10, 210, 87, 115, 189];
      accounts: [
        {
          name: 'signer';
          signer: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'lstMint';
          writable: true;
        },
        {
          name: 'rstMint';
          writable: true;
        },
        {
          name: 'solayerVault';
          writable: true;
        },
        {
          name: 'solayerVaultAuthority';
          writable: true;
        },
        {
          name: 'lstVault';
          writable: true;
        },
        {
          name: 'rstVault';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associateTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'solayerProgram';
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'solayerUndelegate';
      discriminator: [207, 110, 9, 100, 199, 163, 241, 50];
      accounts: [
        {
          name: 'signer';
          signer: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'ssolMint';
          writable: true;
        },
        {
          name: 'avsMint';
          writable: true;
        },
        {
          name: 'avsSsolVault';
          writable: true;
        },
        {
          name: 'ssolVault';
          writable: true;
        },
        {
          name: 'avsMintVault';
          writable: true;
        },
        {
          name: 'endoAvs';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associateTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'endoavsProgram';
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'solayerUnrestake';
      discriminator: [195, 238, 1, 187, 205, 129, 124, 123];
      accounts: [
        {
          name: 'signer';
          signer: true;
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'lstMint';
          writable: true;
        },
        {
          name: 'rstMint';
          writable: true;
        },
        {
          name: 'solayerVault';
          writable: true;
        },
        {
          name: 'solayerVaultAuthority';
          writable: true;
        },
        {
          name: 'lstVault';
          writable: true;
        },
        {
          name: 'rstVault';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associateTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'solayerProgram';
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'transferAdmin';
      discriminator: [42, 242, 66, 106, 228, 10, 111, 156];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
          writable: true;
        },
      ];
      args: [
        {
          name: 'newAdmin';
          type: 'pubkey';
        },
      ];
    },
    {
      name: 'transferBaseToken';
      discriminator: [143, 16, 107, 107, 245, 66, 255, 68];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'tokenVaultBase';
          writable: true;
        },
        {
          name: 'tokenOwnerAccountBase';
          writable: true;
        },
        {
          name: 'tokenMintBase';
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [
        {
          name: 'deltaA';
          type: 'u64';
        },
      ];
    },
    {
      name: 'transferQuoteToken';
      discriminator: [193, 247, 26, 0, 0, 46, 73, 80];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'tokenVaultQuote';
          writable: true;
        },
        {
          name: 'tokenOwnerAccountQuote';
          writable: true;
        },
        {
          name: 'tokenMintQuote';
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [
        {
          name: 'deltaB';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateFeesAndRewards';
      discriminator: [154, 230, 250, 13, 236, 209, 75, 223];
      accounts: [
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'unifiedPosition';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  110,
                  105,
                  102,
                  105,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'yieldMarket';
              },
            ];
          };
        },
        {
          name: 'authority';
          signer: true;
          relations: ['lp'];
        },
        {
          name: 'lp';
          writable: true;
        },
        {
          name: 'tickArrayLower';
        },
        {
          name: 'tickArrayUpper';
        },
      ];
      args: [];
    },
    {
      name: 'updateOracle';
      discriminator: [112, 41, 209, 18, 248, 226, 252, 188];
      accounts: [
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'oracle';
          writable: true;
        },
        {
          name: 'state';
          writable: true;
        },
      ];
      args: [
        {
          name: 'marketRate';
          type: 'u64';
        },
        {
          name: 'rate';
          type: 'u64';
        },
        {
          name: 'lastRate';
          type: 'u64';
        },
        {
          name: 'epochStartTimestamp';
          type: 'i64';
        },
      ];
    },
    {
      name: 'updateSpotYieldMarketCollateralRatio';
      discriminator: [207, 41, 41, 101, 217, 208, 246, 12];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [];
    },
    {
      name: 'updateTickLiquidity';
      discriminator: [48, 5, 202, 102, 110, 60, 133, 49];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
        },
        {
          name: 'tickArray';
          writable: true;
        },
      ];
      args: [
        {
          name: 'tickIndex';
          type: 'i32';
        },
        {
          name: 'newLiquidity';
          type: 'u128';
        },
      ];
    },
    {
      name: 'updateUserPosition';
      discriminator: [55, 141, 157, 156, 105, 153, 183, 153];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'user';
          writable: true;
        },
      ];
      args: [
        {
          name: 'baseAssetAmount';
          type: 'i64';
        },
        {
          name: 'quoteAssetAmount';
          type: 'i64';
        },
      ];
    },
    {
      name: 'updateYieldMarket';
      discriminator: [104, 236, 82, 238, 56, 49, 132, 152];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'numberOfActiveLps';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateYieldMarketActiveRatioCoef';
      discriminator: [26, 248, 248, 245, 225, 104, 225, 118];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'activeRatioCoef';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateYieldMarketCollateralRatioInitialPreExpiry';
      discriminator: [245, 255, 224, 236, 15, 173, 92, 250];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'collateralRatioInitialPreExpiry';
          type: 'i64';
        },
      ];
    },
    {
      name: 'updateYieldMarketCollateralRatioMaintenance';
      discriminator: [166, 76, 158, 8, 206, 18, 235, 199];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'collateralRatioMaintenance';
          type: 'i64';
        },
      ];
    },
    {
      name: 'updateYieldMarketExpireTotalPosQuoteAmount';
      discriminator: [120, 213, 112, 169, 145, 83, 143, 67];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'expireTotalPosQuoteAmount';
          type: 'i64';
        },
      ];
    },
    {
      name: 'updateYieldMarketExpireTs';
      discriminator: [34, 253, 131, 199, 30, 185, 230, 184];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'expireTs';
          type: 'i64';
        },
      ];
    },
    {
      name: 'updateYieldMarketFeeRate';
      discriminator: [24, 214, 193, 47, 93, 42, 23, 218];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'feeRate';
          type: 'u16';
        },
      ];
    },
    {
      name: 'updateYieldMarketInsurance';
      discriminator: [140, 16, 164, 75, 14, 201, 179, 20];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'baseAssetAmount';
          type: 'i64';
        },
        {
          name: 'quoteAssetAmount';
          type: 'i64';
        },
      ];
    },
    {
      name: 'updateYieldMarketKeeperFee';
      discriminator: [60, 162, 17, 133, 29, 167, 164, 78];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'keeperFee';
          type: 'i64';
        },
      ];
    },
    {
      name: 'updateYieldMarketLiqFeeRate';
      discriminator: [12, 249, 151, 236, 81, 119, 111, 212];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'liqFeeRate';
          type: 'i64';
        },
      ];
    },
    {
      name: 'updateYieldMarketLowerUpperRateBound';
      discriminator: [97, 124, 168, 170, 119, 123, 216, 223];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'lowerRateBound';
          type: 'u64';
        },
        {
          name: 'upperRateBound';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateYieldMarketMarginDecimalsAndLpMarginDecimals';
      discriminator: [252, 173, 129, 34, 100, 195, 50, 248];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'marginDecimals';
          type: 'u8';
        },
        {
          name: 'lpMarginDecimals';
          type: 'u8';
        },
      ];
    },
    {
      name: 'updateYieldMarketMinLpAmount';
      discriminator: [53, 233, 252, 220, 209, 173, 5, 243];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'minLpAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateYieldMarketMinOrderSize';
      discriminator: [232, 8, 157, 233, 67, 254, 41, 69];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'minOrderSize';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateYieldMarketNetBaseAmount';
      discriminator: [25, 67, 64, 221, 78, 132, 229, 152];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'netBaseAmount';
          type: 'i64';
        },
      ];
    },
    {
      name: 'updateYieldMarketNetQuoteAmount';
      discriminator: [124, 18, 201, 112, 55, 134, 176, 116];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'netQuoteAmount';
          type: 'i64';
        },
      ];
    },
    {
      name: 'updateYieldMarketNumberOfActiveUsers';
      discriminator: [62, 9, 100, 169, 25, 112, 78, 130];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'numberOfActiveUsers';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateYieldMarketNumberOfProcessedUsers';
      discriminator: [116, 170, 60, 63, 31, 207, 180, 242];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'numberOfProcessedUsers';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateYieldMarketOracle';
      discriminator: [184, 214, 121, 145, 119, 111, 171, 186];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [];
    },
    {
      name: 'updateYieldMarketOrderStepSize';
      discriminator: [176, 26, 197, 18, 43, 13, 98, 4];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'orderStepSize';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateYieldMarketPoolLiquidity';
      discriminator: [131, 180, 171, 119, 73, 129, 11, 199];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'liquidity';
          type: 'u128';
        },
      ];
    },
    {
      name: 'updateYieldMarketPtData';
      discriminator: [131, 82, 138, 231, 215, 139, 53, 136];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'mintMetadata';
          writable: true;
        },
        {
          name: 'tokenMetadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        },
      ];
      args: [
        {
          name: 'name';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'symbol';
          type: {
            array: ['u8', 10];
          };
        },
        {
          name: 'uri';
          type: {
            array: ['u8', 200];
          };
        },
      ];
    },
    {
      name: 'updateYieldMarketSocialLoss';
      discriminator: [188, 137, 141, 51, 72, 241, 194, 43];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'baseAssetAmount';
          type: 'i64';
        },
        {
          name: 'quoteAssetAmount';
          type: 'i64';
        },
      ];
    },
    {
      name: 'updateYieldMarketStartTs';
      discriminator: [64, 30, 124, 204, 254, 161, 237, 169];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'startTs';
          type: 'i64';
        },
      ];
    },
    {
      name: 'updateYieldMarketStatus';
      discriminator: [177, 3, 6, 192, 64, 227, 170, 23];
      accounts: [
        {
          name: 'authority';
          signer: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'status';
          type: {
            defined: {
              name: 'marketStatus';
            };
          };
        },
      ];
    },
    {
      name: 'updateYieldMarketTickIndex';
      discriminator: [253, 45, 187, 126, 152, 129, 67, 102];
      accounts: [
        {
          name: 'authority';
          signer: true;
        },
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
      ];
      args: [
        {
          name: 'tickLowerIndex';
          type: 'i32';
        },
        {
          name: 'tickUpperIndex';
          type: 'i32';
        },
      ];
    },
    {
      name: 'updateYieldMarketTotalReserveQuoteAndBase';
      discriminator: [139, 225, 156, 224, 232, 210, 173, 61];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'totalReserveQuoteAmount';
          type: 'i64';
        },
        {
          name: 'effectiveReserveBaseAmount';
          type: 'i64';
        },
        {
          name: 'totalReserveBaseAmount';
          type: 'i64';
        },
      ];
    },
    {
      name: 'updateYieldMarketUnifiedPositionProcessed';
      discriminator: [174, 79, 149, 7, 3, 23, 223, 75];
      accounts: [
        {
          name: 'admin';
          signer: true;
          relations: ['state'];
        },
        {
          name: 'state';
        },
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'oracle';
        },
      ];
      args: [
        {
          name: 'unifiedPositionProcessed';
          type: 'bool';
        },
      ];
    },
    {
      name: 'vaultTransfer';
      discriminator: [211, 125, 3, 105, 45, 33, 227, 214];
      accounts: [
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'earnVault';
          writable: true;
        },
        {
          name: 'lpMarginMarket';
          writable: true;
        },
        {
          name: 'otherMarginMarket';
          writable: true;
        },
        {
          name: 'lpVault';
          writable: true;
        },
        {
          name: 'otherVault';
          writable: true;
        },
        {
          name: 'authority';
          writable: true;
          signer: true;
        },
        {
          name: 'state';
        },
        {
          name: 'oracle';
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [
        {
          name: 'fromLpAmount';
          type: 'i64';
        },
        {
          name: 'isEarn';
          type: 'bool';
        },
      ];
    },
    {
      name: 'withdraw';
      discriminator: [183, 18, 70, 156, 148, 109, 161, 34];
      accounts: [
        {
          name: 'state';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
        },
        {
          name: 'authority';
          signer: true;
          relations: ['user'];
        },
        {
          name: 'marginMarket';
          writable: true;
        },
        {
          name: 'marginMarketVault';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'i64';
        },
      ];
    },
  ];
  accounts: [
    {
      name: 'ammpoolsConfig';
      discriminator: [231, 149, 203, 83, 71, 11, 230, 197];
    },
    {
      name: 'earnVault';
      discriminator: [50, 118, 31, 24, 200, 163, 174, 156];
    },
    {
      name: 'feeTier';
      discriminator: [56, 75, 159, 76, 142, 68, 190, 105];
    },
    {
      name: 'lp';
      discriminator: [31, 47, 62, 188, 110, 128, 12, 82];
    },
    {
      name: 'marginMarket';
      discriminator: [239, 74, 160, 96, 142, 137, 58, 112];
    },
    {
      name: 'observationState';
      discriminator: [122, 174, 197, 53, 129, 9, 165, 132];
    },
    {
      name: 'oracle';
      discriminator: [139, 194, 131, 179, 140, 179, 229, 244];
    },
    {
      name: 'state';
      discriminator: [216, 146, 107, 94, 104, 75, 182, 177];
    },
    {
      name: 'tickArray';
      discriminator: [69, 97, 189, 190, 110, 7, 66, 187];
    },
    {
      name: 'unifiedPosition';
      discriminator: [182, 114, 26, 146, 21, 76, 138, 109];
    },
    {
      name: 'user';
      discriminator: [159, 117, 95, 227, 239, 151, 58, 236];
    },
    {
      name: 'userStats';
      discriminator: [176, 223, 136, 27, 122, 79, 32, 227];
    },
    {
      name: 'yieldMarket';
      discriminator: [140, 119, 210, 6, 237, 21, 244, 227];
    },
  ];
  events: [
    {
      name: 'cancelOrderRecord';
      discriminator: [167, 200, 248, 214, 88, 169, 36, 199];
    },
    {
      name: 'claimYieldRecord';
      discriminator: [173, 147, 97, 205, 228, 186, 4, 27];
    },
    {
      name: 'collectEarnProtocolFeeRecord';
      discriminator: [177, 123, 86, 117, 25, 15, 102, 60];
    },
    {
      name: 'collectFeesRecord';
      discriminator: [237, 208, 140, 137, 219, 180, 26, 185];
    },
    {
      name: 'collectLpYieldFeeRecord';
      discriminator: [177, 18, 243, 249, 111, 29, 140, 31];
    },
    {
      name: 'collectProtocolFeesRecord';
      discriminator: [251, 123, 34, 82, 12, 173, 90, 219];
    },
    {
      name: 'collectTraderYieldFeeRecord';
      discriminator: [17, 92, 178, 97, 197, 244, 117, 32];
    },
    {
      name: 'decreaseLiquidityEvent';
      discriminator: [58, 222, 86, 58, 68, 50, 85, 56];
    },
    {
      name: 'deleteLpRecord';
      discriminator: [192, 157, 152, 50, 196, 226, 66, 209];
    },
    {
      name: 'deleteTickArrayEvent';
      discriminator: [218, 143, 2, 251, 195, 26, 158, 109];
    },
    {
      name: 'deleteUserOrdersRecord';
      discriminator: [155, 10, 59, 253, 193, 39, 166, 137];
    },
    {
      name: 'deleteUserRecord';
      discriminator: [71, 111, 190, 118, 7, 3, 132, 222];
    },
    {
      name: 'depositRecord';
      discriminator: [180, 241, 218, 207, 102, 135, 44, 134];
    },
    {
      name: 'earnRecord';
      discriminator: [72, 177, 156, 61, 83, 203, 22, 6];
    },
    {
      name: 'epochUpdateAddSocialLossRecord';
      discriminator: [254, 53, 70, 131, 83, 242, 176, 41];
    },
    {
      name: 'epochUpdateBeginRecord';
      discriminator: [171, 68, 76, 7, 122, 36, 226, 235];
    },
    {
      name: 'epochUpdateChangePriceRecord';
      discriminator: [80, 141, 38, 247, 97, 221, 231, 118];
    },
    {
      name: 'epochUpdateEndRecord';
      discriminator: [152, 243, 159, 243, 122, 10, 127, 64];
    },
    {
      name: 'epochUpdateExpiryRecord';
      discriminator: [186, 83, 77, 129, 225, 58, 237, 40];
    },
    {
      name: 'epochUpdateLpRecord';
      discriminator: [87, 125, 161, 56, 10, 234, 181, 184];
    },
    {
      name: 'fillOrderRecord';
      discriminator: [244, 224, 137, 180, 16, 96, 69, 144];
    },
    {
      name: 'increaseLiquidityEvent';
      discriminator: [49, 79, 105, 212, 32, 34, 30, 84];
    },
    {
      name: 'initializeConfigEvent';
      discriminator: [115, 64, 125, 137, 211, 17, 190, 43];
    },
    {
      name: 'initializeFeeTierEvent';
      discriminator: [139, 205, 2, 116, 180, 7, 123, 22];
    },
    {
      name: 'initializeLpEvent';
      discriminator: [218, 42, 158, 82, 220, 48, 73, 133];
    },
    {
      name: 'initializeMarginMarketRecord';
      discriminator: [52, 90, 159, 67, 116, 13, 141, 113];
    },
    {
      name: 'initializePositionEvent';
      discriminator: [85, 19, 123, 191, 85, 221, 47, 87];
    },
    {
      name: 'initializeTickArrayEvent';
      discriminator: [179, 254, 236, 82, 79, 126, 74, 24];
    },
    {
      name: 'initializeYieldMarketRecord';
      discriminator: [182, 200, 13, 213, 20, 93, 127, 44];
    },
    {
      name: 'insuranceLiquidationRecord';
      discriminator: [5, 109, 249, 71, 130, 140, 251, 90];
    },
    {
      name: 'insuranceTransferPositionRecord';
      discriminator: [10, 82, 193, 149, 4, 0, 24, 74];
    },
    {
      name: 'lpRecord';
      discriminator: [101, 22, 54, 38, 178, 13, 142, 111];
    },
    {
      name: 'liquidationRecord';
      discriminator: [127, 17, 0, 108, 182, 13, 231, 53];
    },
    {
      name: 'lpRemoveMaxRatioRecord';
      discriminator: [50, 163, 44, 8, 235, 156, 15, 66];
    },
    {
      name: 'lpUpdateRecord';
      discriminator: [222, 127, 247, 41, 124, 242, 133, 41];
    },
    {
      name: 'newEarnVaultRecord';
      discriminator: [246, 224, 114, 89, 166, 9, 116, 187];
    },
    {
      name: 'newLpRecord';
      discriminator: [49, 100, 102, 111, 204, 158, 224, 179];
    },
    {
      name: 'newUserOrdersRecord';
      discriminator: [55, 238, 97, 45, 255, 102, 54, 230];
    },
    {
      name: 'newUserRecord';
      discriminator: [236, 186, 113, 219, 42, 51, 149, 249];
    },
    {
      name: 'orderRecord';
      discriminator: [104, 19, 64, 56, 89, 21, 2, 90];
    },
    {
      name: 'settleUserRecord';
      discriminator: [146, 47, 119, 244, 16, 163, 64, 24];
    },
    {
      name: 'socialLossChangeRecord';
      discriminator: [109, 188, 133, 140, 202, 122, 220, 15];
    },
    {
      name: 'socialLossTransferPositionRecord';
      discriminator: [128, 84, 218, 67, 154, 208, 187, 177];
    },
    {
      name: 'swapEvent';
      discriminator: [64, 198, 205, 232, 38, 8, 113, 226];
    },
    {
      name: 'transferLpRecord';
      discriminator: [204, 226, 62, 99, 194, 23, 242, 221];
    },
    {
      name: 'transferPositionRecord';
      discriminator: [188, 125, 111, 105, 220, 7, 170, 228];
    },
    {
      name: 'unifiedPositionSettledUpdateRecord';
      discriminator: [80, 236, 113, 63, 228, 143, 182, 113];
    },
    {
      name: 'unifiedPositionUpdateRecord';
      discriminator: [29, 122, 30, 174, 52, 220, 127, 224];
    },
    {
      name: 'updateOracleRecord';
      discriminator: [19, 185, 218, 90, 23, 244, 14, 11];
    },
    {
      name: 'vaultSwapRecord';
      discriminator: [12, 85, 1, 63, 52, 181, 25, 214];
    },
    {
      name: 'vaultTransferRecord';
      discriminator: [6, 233, 100, 32, 243, 149, 152, 12];
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'invalidMarginMarketAuthority';
      msg: 'Invalid Margin Market Authority';
    },
    {
      code: 6001;
      name: 'invalidInsuranceFundAuthority';
      msg: 'Clearing house not insurance fund authority';
    },
    {
      code: 6002;
      name: 'insufficientDeposit';
      msg: 'Insufficient deposit';
    },
    {
      code: 6003;
      name: 'insufficientCollateral';
      msg: 'Insufficient collateral';
    },
    {
      code: 6004;
      name: 'insufficientCollateralInVault';
      msg: 'Insufficient collateral in vault';
    },
    {
      code: 6005;
      name: 'orderSizeTooSmall';
      msg: 'Order Size Too Small';
    },
    {
      code: 6006;
      name: 'mathError';
      msg: 'Math Error';
    },
    {
      code: 6007;
      name: 'bnConversionError';
      msg: 'Conversion to u128/u64 failed with an overflow or underflow';
    },
    {
      code: 6008;
      name: 'unableToLoadOracle';
      msg: 'Unable To Load Oracles';
    },
    {
      code: 6009;
      name: 'invalidRate';
      msg: 'Invalid oracle rate';
    },
    {
      code: 6010;
      name: 'exchangePaused';
      msg: 'Exchange is paused';
    },
    {
      code: 6011;
      name: 'userHasNoPositionInMarket';
      msg: 'User Has No Position In Market';
    },
    {
      code: 6012;
      name: 'yieldMarketPaused';
      msg: 'Yield market is paused';
    },
    {
      code: 6013;
      name: 'yieldMarketNotPaused';
      msg: 'Yield market not paused';
    },
    {
      code: 6014;
      name: 'insuranceEmpty';
      msg: 'Insurance fund and position is empty';
    },
    {
      code: 6015;
      name: 'yieldMarketNotExpired';
      msg: 'Yield market not expired';
    },
    {
      code: 6016;
      name: 'yieldMarketNotEpochUpdating';
      msg: 'Yield market not in epoch update';
    },
    {
      code: 6017;
      name: 'yieldMarketNotFound';
      msg: 'yieldMarketNotFound';
    },
    {
      code: 6018;
      name: 'invalidMarketAccount';
      msg: 'invalidMarketAccount';
    },
    {
      code: 6019;
      name: 'marketIndexMismatch';
      msg: 'marketIndexMismatch';
    },
    {
      code: 6020;
      name: 'rateMismatch';
      msg: 'rateMismatch';
    },
    {
      code: 6021;
      name: 'marketWrongMutability';
      msg: 'marketWrongMutability';
    },
    {
      code: 6022;
      name: 'couldNotLoadMarketData';
      msg: 'couldNotLoadMarketData';
    },
    {
      code: 6023;
      name: 'unableToLoadYieldMarketAccount';
      msg: 'unableToLoadYieldMarketAccount';
    },
    {
      code: 6024;
      name: 'processedLpNotZero';
      msg: 'Processed lp accounts is not zero';
    },
    {
      code: 6025;
      name: 'processedLpAndUserNotZero';
      msg: 'Processed lp and user accounts is not zero';
    },
    {
      code: 6026;
      name: 'marginMarketPaused';
      msg: 'Margin market is paused';
    },
    {
      code: 6027;
      name: 'referrerNotFound';
      msg: 'Referrer not found';
    },
    {
      code: 6028;
      name: 'referrerStatsNotFound';
      msg: 'referrerNotFound';
    },
    {
      code: 6029;
      name: 'referrerMustBeWritable';
      msg: 'referrerMustBeWritable';
    },
    {
      code: 6030;
      name: 'referrerStatsMustBeWritable';
      msg: 'referrerMustBeWritable';
    },
    {
      code: 6031;
      name: 'referrerAndReferrerStatsAuthorityUnequal';
      msg: 'referrerAndReferrerStatsAuthorityUnequal';
    },
    {
      code: 6032;
      name: 'invalidReferrer';
      msg: 'invalidReferrer';
    },
    {
      code: 6033;
      name: 'invalidOracle';
      msg: 'invalidOracle';
    },
    {
      code: 6034;
      name: 'oracleNotFound';
      msg: 'oracleNotFound';
    },
    {
      code: 6035;
      name: 'unableToLoadAccountLoader';
      msg: 'Unable to load AccountLoader';
    },
    {
      code: 6036;
      name: 'cantDeleteUserWithCollateral';
      msg: 'Can not delete user that still has collateral';
    },
    {
      code: 6037;
      name: 'castingFailure';
      msg: 'Casting Failure';
    },
    {
      code: 6038;
      name: 'invalidOrder';
      msg: 'invalidOrder';
    },
    {
      code: 6039;
      name: 'couldNotFindMarginPosition';
      msg: 'couldNotFindMarginPosition';
    },
    {
      code: 6040;
      name: 'noMarginPositionAvailable';
      msg: 'noMarginPositionAvailable';
    },
    {
      code: 6041;
      name: 'noYieldPositionAvailable';
      msg: 'noYieldPositionAvailable';
    },
    {
      code: 6042;
      name: 'invalidMarginMarketInitialization';
      msg: 'invalidMarginMarketInitialization';
    },
    {
      code: 6043;
      name: 'couldNotLoadMarginMarketData';
      msg: 'couldNotLoadMarginMarketData';
    },
    {
      code: 6044;
      name: 'marginMarketNotFound';
      msg: 'marginMarketNotFound';
    },
    {
      code: 6045;
      name: 'invalidMarginMarketAccount';
      msg: 'invalidMarginMarketAccount';
    },
    {
      code: 6046;
      name: 'unableToLoadMarginMarketAccount';
      msg: 'unableToLoadMarginMarketAccount';
    },
    {
      code: 6047;
      name: 'marginMarketWrongMutability';
      msg: 'marginMarketWrongMutability';
    },
    {
      code: 6048;
      name: 'userIsBeingLiquidated';
      msg: 'userIsBeingLiquidated';
    },
    {
      code: 6049;
      name: 'userNotBeingLiquidated';
      msg: 'userNotBeingLiquidated';
    },
    {
      code: 6050;
      name: 'defaultError';
      msg: 'defaultError';
    },
    {
      code: 6051;
      name: 'userCantBeDeleted';
      msg: 'User Cant Be Deleted';
    },
    {
      code: 6052;
      name: 'lpCantBeDeleted';
      msg: 'Lp Cant Be Deleted';
    },
    {
      code: 6053;
      name: 'maxOpenInterest';
      msg: 'Max Open Interest';
    },
    {
      code: 6054;
      name: 'yieldMarketNotInSettlement';
      msg: 'yieldMarketNotInSettlement';
    },
    {
      code: 6055;
      name: 'yieldMarketNotInReduceOnly';
      msg: 'yieldMarketNotInReduceOnly';
    },
    {
      code: 6056;
      name: 'yieldMarketSettlementBufferNotReached';
      msg: 'yieldMarketSettlementBufferNotReached';
    },
    {
      code: 6057;
      name: 'yieldMarketSettlementUserHasOpenOrders';
      msg: 'yieldMarketSettlementUserHasOpenOrders';
    },
    {
      code: 6058;
      name: 'yieldMarketSettlementUserHasActiveLp';
      msg: 'yieldMarketSettlementUserHasActiveLp';
    },
    {
      code: 6059;
      name: 'marketBeingInitialized';
      msg: 'Market Being Initialized';
    },
    {
      code: 6060;
      name: 'invalidUserSubAccountId';
      msg: 'Invalid Sub Account Id';
    },
    {
      code: 6061;
      name: 'failedUnwrap';
      msg: 'Failed Unwrap';
    },
    {
      code: 6062;
      name: 'couldNotLoadUserData';
      msg: 'couldNotLoadUserData';
    },
    {
      code: 6063;
      name: 'invalidUserAccount';
      msg: 'invalidUserAccount';
    },
    {
      code: 6064;
      name: 'couldNotLoadUserStatsData';
      msg: 'couldNotLoadUserData';
    },
    {
      code: 6065;
      name: 'userStatsWrongMutability';
      msg: 'userWrongMutability';
    },
    {
      code: 6066;
      name: 'invalidUserStatsAccount';
      msg: 'invalidUserStatsAccount';
    },
    {
      code: 6067;
      name: 'unableToLoadUserAccount';
      msg: 'unableToLoadUserAccount';
    },
    {
      code: 6068;
      name: 'invalidJupSwap';
      msg: 'invalidJupSwap';
    },
    {
      code: 6069;
      name: 'unableToGetTwapPrice';
      msg: 'Unable to get twap price';
    },
    {
      code: 6070;
      name: 'invalidAdlLiquidation';
      msg: 'Invalid adl liquidation';
    },
    {
      code: 6071;
      name: 'cantSelfAdl';
      msg: 'Cant self Adl';
    },
    {
      code: 6072;
      name: 'unauthorizedUserOrKeeper';
      msg: 'Unauthorized user or keeper';
    },
    {
      code: 6073;
      name: 'userNotIsolated';
      msg: 'User is not isolated';
    },
    {
      code: 6074;
      name: 'invalidLiquidityRange';
      msg: 'liquidity range is not allowed';
    },
    {
      code: 6075;
      name: 'invalidOracleAccount';
      msg: 'Invalid oracle account';
    },
    {
      code: 6076;
      name: 'unableToLoadOracleAccount';
      msg: 'Unable to load oracle account';
    },
    {
      code: 6077;
      name: 'couldNotLoadOracleData';
      msg: 'could not load oracle data';
    },
    {
      code: 6078;
      name: 'oracleWrongMutability';
      msg: 'wrong oracle mutablility';
    },
    {
      code: 6079;
      name: 'keeperAlreadyExists';
      msg: 'The keeper already exists in the list.';
    },
    {
      code: 6080;
      name: 'keepersListFull';
      msg: 'The keepers list is full.';
    },
    {
      code: 6081;
      name: 'keeperNotFound';
      msg: 'The keeper was not found in the list.';
    },
    {
      code: 6082;
      name: 'maxOpenInterestExceeded';
      msg: 'Max open interest exceeded';
    },
    {
      code: 6083;
      name: 'maxNumberOfOrders';
      msg: 'Max number of orders taken';
    },
    {
      code: 6084;
      name: 'invalidOrderStepSize';
      msg: 'Invalid order step size';
    },
    {
      code: 6085;
      name: 'orderExpired';
      msg: 'Order expired';
    },
    {
      code: 6086;
      name: 'orderNotOpen';
      msg: 'Order not open';
    },
    {
      code: 6087;
      name: 'orderDoesNotExist';
      msg: 'Order does not exist';
    },
    {
      code: 6088;
      name: 'onlyTrader';
      msg: 'Only trader';
    },
    {
      code: 6089;
      name: 'onlyLp';
      msg: 'Only LP';
    },
    {
      code: 6090;
      name: 'invalidWithdraw';
      msg: 'Invalid Withdraw';
    },
    {
      code: 6091;
      name: 'invalidLiquidate';
      msg: 'Invalid Liquidate';
    },
    {
      code: 6092;
      name: 'meetMaintenanceCollateralRequirement';
      msg: 'Meet maintenance collateral requirement';
    },
    {
      code: 6093;
      name: 'failToMeetMaintenanceCollateralRequirement';
      msg: 'Fail to meet maintenance collateral requirement';
    },
    {
      code: 6094;
      name: 'failToMeetInitialCollateralRequirement';
      msg: 'Fail to meet initial collateral requirement';
    },
    {
      code: 6095;
      name: 'insuranceMeetMaintenanceCollateralRequirement';
      msg: 'Insurance fund meet maintenance collateral requirement';
    },
    {
      code: 6096;
      name: 'negativeMarginBalance';
      msg: 'Negative margin balance';
    },
    {
      code: 6097;
      name: 'invalidStartTick';
      msg: 'Invalid start tick index provided.';
    },
    {
      code: 6098;
      name: 'tickArrayExistInPool';
      msg: 'Tick-array already exists in this ammpool';
    },
    {
      code: 6099;
      name: 'tickArrayIndexOutofBounds';
      msg: 'Attempt to search for a tick-array failed';
    },
    {
      code: 6100;
      name: 'invalidTickSpacing';
      msg: 'Tick-spacing is not supported';
    },
    {
      code: 6101;
      name: 'closePositionNotEmpty';
      msg: 'Position is not empty It cannot be closed';
    },
    {
      code: 6102;
      name: 'divideByZero';
      msg: 'Unable to divide by zero';
    },
    {
      code: 6103;
      name: 'numberCastError';
      msg: 'Unable to cast number into BigInt';
    },
    {
      code: 6104;
      name: 'numberDownCastError';
      msg: 'Unable to down cast number';
    },
    {
      code: 6105;
      name: 'tickNotFound';
      msg: 'Tick not found within tick array';
    },
    {
      code: 6106;
      name: 'invalidTickIndex';
      msg: 'Provided tick index is either out of bounds or uninitializable';
    },
    {
      code: 6107;
      name: 'sqrtPriceOutOfBounds';
      msg: 'Provided sqrt price out of bounds';
    },
    {
      code: 6108;
      name: 'liquidityZero';
      msg: 'Liquidity amount must be greater than zero';
    },
    {
      code: 6109;
      name: 'liquidityTooHigh';
      msg: 'Liquidity amount must be less than i64::MAX';
    },
    {
      code: 6110;
      name: 'liquidityOverflow';
      msg: 'Liquidity overflow';
    },
    {
      code: 6111;
      name: 'liquidityUnderflow';
      msg: 'Liquidity underflow';
    },
    {
      code: 6112;
      name: 'liquidityNetError';
      msg: 'Tick liquidity net underflowed or overflowed';
    },
    {
      code: 6113;
      name: 'tokenMaxExceeded';
      msg: 'Exceeded token max';
    },
    {
      code: 6114;
      name: 'tokenMinSubceeded';
      msg: 'Did not meet token min';
    },
    {
      code: 6115;
      name: 'missingOrInvalidDelegate';
      msg: 'Position token account has a missing or invalid delegate';
    },
    {
      code: 6116;
      name: 'invalidPositionTokenAmount';
      msg: 'Position token amount must be 1';
    },
    {
      code: 6117;
      name: 'invalidTimestampConversion';
      msg: 'Timestamp should be convertible from i64 to u64';
    },
    {
      code: 6118;
      name: 'invalidTimestamp';
      msg: 'Timestamp should be greater than the last updated timestamp';
    },
    {
      code: 6119;
      name: 'invalidTickArraySequence';
      msg: 'Invalid tick array sequence provided for instruction.';
    },
    {
      code: 6120;
      name: 'invalidTokenMintOrder';
      msg: 'Token Mint in wrong order';
    },
    {
      code: 6121;
      name: 'rewardNotInitialized';
      msg: 'Reward not initialized';
    },
    {
      code: 6122;
      name: 'invalidRewardIndex';
      msg: 'Invalid reward index';
    },
    {
      code: 6123;
      name: 'rewardVaultAmountInsufficient';
      msg: 'Reward vault requires amount to support emissions for at least one day';
    },
    {
      code: 6124;
      name: 'feeRateMaxExceeded';
      msg: 'Exceeded max fee rate';
    },
    {
      code: 6125;
      name: 'protocolFeeRateMaxExceeded';
      msg: 'Exceeded max protocol fee rate';
    },
    {
      code: 6126;
      name: 'multiplicationShiftRightOverflow';
      msg: 'Multiplication with shift right overflow';
    },
    {
      code: 6127;
      name: 'mulDivOverflow';
      msg: 'Muldiv overflow';
    },
    {
      code: 6128;
      name: 'mulDivInvalidInput';
      msg: 'Invalid div_u256 input';
    },
    {
      code: 6129;
      name: 'multiplicationOverflow';
      msg: 'Multiplication overflow';
    },
    {
      code: 6130;
      name: 'invalidSqrtPriceLimitDirection';
      msg: 'Provided SqrtPriceLimit not in the same direction as the swap';
    },
    {
      code: 6131;
      name: 'invalidSqrtPrice';
      msg: 'Invalid sqrt price in the swap';
    },
    {
      code: 6132;
      name: 'zeroTradableAmount';
      msg: 'There are no tradable amount to swap.';
    },
    {
      code: 6133;
      name: 'amountOutBelowMinimum';
      msg: 'Amount out below minimum threshold';
    },
    {
      code: 6134;
      name: 'amountInAboveMaximum';
      msg: 'Amount in above maximum threshold';
    },
    {
      code: 6135;
      name: 'tickArraySequenceInvalidIndex';
      msg: 'Invalid index for tick array sequence';
    },
    {
      code: 6136;
      name: 'invalidAmmDetected';
      msg: 'invalidAmmDetected';
    },
    {
      code: 6137;
      name: 'amountCalcOverflow';
      msg: 'Amount calculated overflows';
    },
    {
      code: 6138;
      name: 'amountRemainingOverflow';
      msg: 'Amount remaining overflows';
    },
    {
      code: 6139;
      name: 'invalidIntermediaryMint';
      msg: 'Invalid intermediary mint';
    },
    {
      code: 6140;
      name: 'duplicateTwoHopPool';
      msg: 'Duplicate two hop pool';
    },
    {
      code: 6141;
      name: 'invalidBundleIndex';
      msg: 'Bundle index is out of bounds';
    },
    {
      code: 6142;
      name: 'bundledPositionAlreadyOpened';
      msg: 'Position has already been opened';
    },
    {
      code: 6143;
      name: 'bundledPositionAlreadyClosed';
      msg: 'Position has already been closed';
    },
    {
      code: 6144;
      name: 'unableToLoadObservationStateAccount';
      msg: 'Unable To Observation state';
    },
    {
      code: 6145;
      name: 'observationStateNotFound';
      msg: 'Observation state not found';
    },
    {
      code: 6146;
      name: 'invalidImpliedRate';
      msg: 'invalidImpliedRate';
    },
    {
      code: 6147;
      name: 'invalidRmLiquidityPercent';
      msg: 'invalidRmLiquidityPercent';
    },
    {
      code: 6148;
      name: 'invalidLpAccountsProcessed';
      msg: 'invalidLpAccountsProcessed';
    },
    {
      code: 6149;
      name: 'invalidUserAccountsProcessed';
      msg: 'invalidUserAccountsProcessed';
    },
    {
      code: 6150;
      name: 'lpIsInactive';
      msg: 'lpIsInactive';
    },
    {
      code: 6151;
      name: 'invalidYieldMarket';
      msg: 'invalidYieldMarket';
    },
    {
      code: 6152;
      name: 'lpAmountTooLow';
      msg: 'lpAmountTooLow';
    },
    {
      code: 6153;
      name: 'lpIsEmpty';
      msg: 'lpIsEmpty';
    },
    {
      code: 6154;
      name: 'invalidLpState';
      msg: 'invalidLpState';
    },
    {
      code: 6155;
      name: 'wrongMakerDirection';
      msg: 'wrongMakerDirection';
    },
    {
      code: 6156;
      name: 'insufficientSwapAmount';
      msg: 'insufficientSwapAmount';
    },
    {
      code: 6157;
      name: 'invalidEpochStartTimestamp';
      msg: 'invalidEpochStartTimestamp';
    },
    {
      code: 6158;
      name: 'invalidEarnPrice';
      msg: 'invalidEarnPrice';
    },
    {
      code: 6159;
      name: 'marketExpired';
      msg: 'Market expired';
    },
    {
      code: 6160;
      name: 'marketNotExpired';
      msg: 'Market not expired';
    },
    {
      code: 6161;
      name: 'invalidEpochStateTransition';
      msg: 'Invalid epoch state transition';
    },
    {
      code: 6162;
      name: 'negativeBalanceInSpotMarketType';
      msg: 'negative balance in spot market';
    },
    {
      code: 6163;
      name: 'spotMarketTypeCantLiquidate';
      msg: 'spot market type cant liquidate';
    },
    {
      code: 6164;
      name: 'mintMismatch';
      msg: 'mint mismatch';
    },
    {
      code: 6165;
      name: 'wrongMarginMarket';
      msg: 'wrong margin market';
    },
    {
      code: 6166;
      name: 'invalidRealizedAmount';
      msg: 'invalid realized amount';
    },
    {
      code: 6167;
      name: 'invalidAmmpool';
      msg: 'invalid amm pool';
    },
    {
      code: 6168;
      name: 'lessThanCurrentRate';
      msg: 'rate should not be less than current rate';
    },
    {
      code: 6169;
      name: 'invalidIsolatedUser';
      msg: 'more than one position for isolated user';
    },
    {
      code: 6170;
      name: 'liquidationDuringTwap';
      msg: 'Cannot liquidate within TWAP duration after epoch update';
    },
    {
      code: 6171;
      name: 'duplicateUser';
      msg: 'duplicate user';
    },
    {
      code: 6172;
      name: 'decimalNotMatch';
      msg: 'deciaml not match';
    },
    {
      code: 6173;
      name: 'nonPositiveMaturity';
      msg: 'non positive maturity';
    },
    {
      code: 6174;
      name: 'oppositeOpenNotAllowed';
      msg: 'opposite open not supported';
    },
    {
      code: 6175;
      name: 'invalidUserAuthority';
      msg: 'invalid user authority';
    },
    {
      code: 6176;
      name: 'wrongUserTokenAccount';
      msg: 'wrong user token account';
    },
    {
      code: 6177;
      name: 'liquidityMustBeZero';
      msg: 'Liquidity must be zero';
    },
    {
      code: 6178;
      name: 'residualAmountMustFullClose';
      msg: 'Residual amount must full close';
    },
    {
      code: 6179;
      name: 'notSpotMarket';
      msg: 'Yield market not spot market';
    },
    {
      code: 6180;
      name: 'insufficientFee';
      msg: 'Insufficient fee';
    },
    {
      code: 6181;
      name: 'unknownDelegateMint';
      msg: 'Unknown delegate mint';
    },
    {
      code: 6182;
      name: 'lowerRateBelowBound';
      msg: 'Lower rate below bound';
    },
    {
      code: 6183;
      name: 'upperRateAboveBound';
      msg: 'Upper rate above bound';
    },
    {
      code: 6184;
      name: 'lowerRateAboveUpperRate';
      msg: 'Lower rate above upper rate';
    },
    {
      code: 6185;
      name: 'unifiedPositionProcessed';
      msg: 'unifiedPositionProcessed';
    },
    {
      code: 6186;
      name: 'unifiedPositionNotProcessed';
      msg: 'unifiedPositionNotProcessed';
    },
  ];
  types: [
    {
      name: 'ammpool';
      serialization: 'bytemuckunsafe';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ammpoolsConfig';
            type: 'pubkey';
          },
          {
            name: 'liquidity';
            type: 'u128';
          },
          {
            name: 'sqrtPrice';
            type: 'u128';
          },
          {
            name: 'protocolFeeOwedA';
            type: 'u64';
          },
          {
            name: 'protocolFeeOwedB';
            type: 'u64';
          },
          {
            name: 'tokenMintBase';
            type: 'pubkey';
          },
          {
            name: 'tokenVaultBase';
            type: 'pubkey';
          },
          {
            name: 'feeGrowthGlobalA';
            type: 'u128';
          },
          {
            name: 'tokenMintQuote';
            type: 'pubkey';
          },
          {
            name: 'tokenVaultQuote';
            type: 'pubkey';
          },
          {
            name: 'feeGrowthGlobalB';
            type: 'u128';
          },
          {
            name: 'padding1';
            type: {
              array: ['u64', 32];
            };
          },
          {
            name: 'padding2';
            type: {
              array: ['u64', 17];
            };
          },
          {
            name: 'oracle';
            type: 'pubkey';
          },
          {
            name: 'tickCurrentIndex';
            type: 'i32';
          },
          {
            name: 'observationIndex';
            docs: ['the most-recently updated index of the observations array'];
            type: 'u16';
          },
          {
            name: 'observationUpdateDuration';
            type: 'u16';
          },
          {
            name: 'tickSpacing';
            type: 'u16';
          },
          {
            name: 'tickSpacingSeed';
            type: {
              array: ['u8', 2];
            };
          },
          {
            name: 'feeRate';
            type: 'u16';
          },
          {
            name: 'protocolFeeRate';
            type: 'u16';
          },
          {
            name: 'ammpoolBump';
            type: {
              array: ['u8', 1];
            };
          },
          {
            name: 'padding';
            type: {
              array: ['u8', 7];
            };
          },
        ];
      };
    },
    {
      name: 'ammpoolsConfig';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'feeAuthority';
            type: 'pubkey';
          },
          {
            name: 'collectProtocolFeesAuthority';
            type: 'pubkey';
          },
          {
            name: 'rewardEmissionsSuperAuthority';
            type: 'pubkey';
          },
          {
            name: 'defaultProtocolFeeRate';
            type: 'u16';
          },
          {
            name: 'padding';
            type: {
              array: ['u8', 30];
            };
          },
        ];
      };
    },
    {
      name: 'cancelOrderRecord';
      docs: ['cancel_yield_order event'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'userAuthority';
            type: 'pubkey';
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'orderId';
            docs: ['The id for the order. Each users has their own order id space'];
            type: 'u32';
          },
        ];
      };
    },
    {
      name: 'claimYieldRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'userAuthority';
            type: 'pubkey';
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'marginIndex';
            docs: ['margin token index'];
            type: 'u32';
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'amount';
            type: 'i64';
          },
          {
            name: 'baseAmountHeld';
            type: 'i64';
          },
          {
            name: 'quoteAmountHeld';
            type: 'i64';
          },
          {
            name: 'totalBalance';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'collectEarnProtocolFeeRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'admin';
            type: 'pubkey';
          },
          {
            name: 'earnVault';
            type: 'pubkey';
          },
          {
            name: 'fee';
            type: 'u64';
          },
          {
            name: 'feeAmount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'collectFeesRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'feeA';
            type: 'u64';
          },
          {
            name: 'feeB';
            type: 'u64';
          },
          {
            name: 'feeAmount';
            type: 'u64';
          },
          {
            name: 'tickLower';
            type: 'i32';
          },
          {
            name: 'tickUpper';
            docs: ['the upper tick'];
            type: 'i32';
          },
          {
            name: 'rateLower';
            docs: ['the lower rate'];
            type: 'u64';
          },
          {
            name: 'rateUpper';
            docs: ['the upper rate'];
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'collectLpYieldFeeRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'admin';
            type: 'pubkey';
          },
          {
            name: 'lpMarginMarketVault';
            type: 'pubkey';
          },
          {
            name: 'fee';
            type: 'u64';
          },
          {
            name: 'feeAmount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'collectProtocolFeesRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'yieldMarket';
            type: 'pubkey';
          },
          {
            name: 'feeA';
            type: 'u64';
          },
          {
            name: 'feeB';
            type: 'u64';
          },
          {
            name: 'feeAmount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'collectTraderYieldFeeRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'admin';
            type: 'pubkey';
          },
          {
            name: 'marginMarketVault';
            type: 'pubkey';
          },
          {
            name: 'fee';
            type: 'u64';
          },
          {
            name: 'feeAmount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'decreaseLiquidityEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'position';
            type: 'pubkey';
          },
          {
            name: 'tickArrayLower';
            type: 'pubkey';
          },
          {
            name: 'tickArrayUpper';
            type: 'pubkey';
          },
          {
            name: 'liquidityAmount';
            type: 'u128';
          },
          {
            name: 'tokenA';
            type: 'u64';
          },
          {
            name: 'tokenB';
            type: 'u64';
          },
          {
            name: 'tickLowerIndex';
            type: 'i32';
          },
          {
            name: 'tickUpperIndex';
            type: 'i32';
          },
        ];
      };
    },
    {
      name: 'deleteLpRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            docs: ['unix_timestamp of action'];
            type: 'i64';
          },
          {
            name: 'lpAuthority';
            docs: ['owner of subaccount'];
            type: 'pubkey';
          },
          {
            name: 'lp';
            docs: ['subaccount'];
            type: 'pubkey';
          },
          {
            name: 'subAccountId';
            docs: ['subaccount id'];
            type: 'u16';
          },
        ];
      };
    },
    {
      name: 'deleteTickArrayEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            type: 'pubkey';
          },
          {
            name: 'tickArray';
            type: 'pubkey';
          },
          {
            name: 'startTickIndex';
            type: 'i32';
          },
        ];
      };
    },
    {
      name: 'deleteUserOrdersRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            docs: ['unix_timestamp of action'];
            type: 'i64';
          },
          {
            name: 'userAuthority';
            docs: ['owner of subaccount'];
            type: 'pubkey';
          },
          {
            name: 'user';
            docs: ['subaccount'];
            type: 'pubkey';
          },
          {
            name: 'subAccountId';
            docs: ['subaccount id'];
            type: 'u16';
          },
        ];
      };
    },
    {
      name: 'deleteUserRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            docs: ['unix_timestamp of action'];
            type: 'i64';
          },
          {
            name: 'userAuthority';
            docs: ['owner of subaccount'];
            type: 'pubkey';
          },
          {
            name: 'user';
            docs: ['subaccount'];
            type: 'pubkey';
          },
          {
            name: 'subAccountId';
            docs: ['subaccount id'];
            type: 'u16';
          },
        ];
      };
    },
    {
      name: 'depositDirection';
      docs: ['deposit/withdraw event'];
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'deposit';
          },
          {
            name: 'withdraw';
          },
        ];
      };
    },
    {
      name: 'depositRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'userAuthority';
            type: 'pubkey';
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'direction';
            docs: ['deposit/withdraw'];
            type: {
              defined: {
                name: 'depositDirection';
              };
            };
          },
          {
            name: 'marketIndex';
            docs: ['margin token index'];
            type: 'u32';
          },
          {
            name: 'depositRecordId';
            docs: ['record id, Each users has their own order id space'];
            type: 'u64';
          },
          {
            name: 'amount';
            docs: ['the deposited/withdrawn amount'];
            type: 'i64';
          },
          {
            name: 'totalBalance';
            docs: ['total balance'];
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'earnDirection';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'invest';
          },
          {
            name: 'redeem';
          },
        ];
      };
    },
    {
      name: 'earnRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'userAuthority';
            type: 'pubkey';
          },
          {
            name: 'earnVault';
            type: 'pubkey';
          },
          {
            name: 'direction';
            type: {
              defined: {
                name: 'earnDirection';
              };
            };
          },
          {
            name: 'baseAmountFilled';
            type: 'i64';
          },
          {
            name: 'quoteAmountFilled';
            docs: ['amount of traded vt'];
            type: 'i64';
          },
          {
            name: 'baseAmountHeld';
            docs: ['amount of held yt after trade'];
            type: 'i64';
          },
          {
            name: 'quoteAmountHeld';
            docs: ['amount of held vt after trade'];
            type: 'i64';
          },
          {
            name: 'ptAmount';
            type: 'u64';
          },
          {
            name: 'ptAmountHeld';
            type: 'u64';
          },
          {
            name: 'marginAmount';
            type: 'u64';
          },
          {
            name: 'feeAmount';
            type: 'u64';
          },
          {
            name: 'rate';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'earnVault';
      serialization: 'bytemuckunsafe';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ptMint';
            type: 'pubkey';
          },
          {
            name: 'ptTotalSupply';
            type: 'u64';
          },
          {
            name: 'marginPosition';
            docs: ["The user's collateral"];
            type: {
              defined: {
                name: 'marginPosition';
              };
            };
          },
          {
            name: 'yieldPosition';
            type: {
              defined: {
                name: 'yieldPosition';
              };
            };
          },
          {
            name: 'protocolFee';
            type: 'u64';
          },
          {
            name: 'lastActiveSlot';
            docs: ['The last slot a user was active. Used to'];
            type: 'u64';
          },
          {
            name: 'marginIndex';
            type: 'u32';
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'userRatio';
            docs: ["user's yield share"];
            type: 'u64';
          },
          {
            name: 'idle';
            docs: [
              "User is idle if they haven't interacted",
              'Off-chain keeper bots can ignore users t',
            ];
            type: 'bool';
          },
          {
            name: 'padding1';
            type: {
              array: ['u8', 7];
            };
          },
          {
            name: 'netQuoteAmountRealized';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'epochUpdateAddSocialLossRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'lp';
            type: 'pubkey';
          },
          {
            name: 'debtCovered';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'epochUpdateBeginRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'keeper';
            type: 'pubkey';
          },
          {
            name: 'epochStartTimestamp';
            type: 'i64';
          },
          {
            name: 'impliedRate';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'epochUpdateChangePriceRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'sqrtPriceNew';
            type: 'u128';
          },
          {
            name: 'epochStartTimestamp';
            type: 'i64';
          },
          {
            name: 'ttm';
            type: 'i64';
          },
          {
            name: 'yieldMarket';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'epochUpdateEndRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'epochUpdateEndTs';
            type: 'i64';
          },
          {
            name: 'totalQuoteAssetAmount';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'epochUpdateExpiryRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'user';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'epochUpdateLpRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'userAuthority';
            type: 'pubkey';
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'direction';
            type: {
              defined: {
                name: 'lpDirection';
              };
            };
          },
          {
            name: 'deltaBaseAssetAmount';
            type: 'i64';
          },
          {
            name: 'deltaQuoteAssetAmount';
            type: 'i64';
          },
          {
            name: 'tickLower';
            docs: ['the lower tick'];
            type: 'i32';
          },
          {
            name: 'tickUpper';
            docs: ['the upper tick'];
            type: 'i32';
          },
          {
            name: 'rateLower';
            docs: ['the lower rate'];
            type: 'u64';
          },
          {
            name: 'rateUpper';
            docs: ['the upper rate'];
            type: 'u64';
          },
          {
            name: 'liquidityAmount';
            docs: ['liquidity amount'];
            type: 'u128';
          },
          {
            name: 'reserveBaseAmount';
            type: 'i64';
          },
          {
            name: 'reserveQuoteAmount';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'epochUpdateStatus';
      repr: {
        kind: 'rust';
      };
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'begin';
          },
          {
            name: 'expiry';
          },
          {
            name: 'expiryApply';
          },
          {
            name: 'update';
          },
          {
            name: 'end';
          },
        ];
      };
    },
    {
      name: 'feeTier';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ammpoolsConfig';
            type: 'pubkey';
          },
          {
            name: 'tickSpacing';
            type: 'u16';
          },
          {
            name: 'defaultFeeRate';
            type: 'u16';
          },
          {
            name: 'padding';
            type: {
              array: ['u8', 4];
            };
          },
        ];
      };
    },
    {
      name: 'fillOrderRecord';
      docs: ['fill_yield_order event'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'userAuthority';
            type: 'pubkey';
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'orderId';
            docs: ['The id for the order. Each users has their own order id space'];
            type: 'u32';
          },
          {
            name: 'filler';
            docs: ['The keeper'];
            type: {
              option: 'pubkey';
            };
          },
          {
            name: 'marketIndex';
            docs: ['market index'];
            type: 'u32';
          },
          {
            name: 'baseAmountFilled';
            docs: ['amount of traded yt'];
            type: 'i64';
          },
          {
            name: 'quoteAmountFilled';
            docs: ['amount of traded vt'];
            type: 'i64';
          },
          {
            name: 'baseAmountHeld';
            docs: ['amount of held yt after trade'];
            type: 'i64';
          },
          {
            name: 'quoteAmountHeld';
            docs: ['amount of held vt after trade'];
            type: 'i64';
          },
          {
            name: 'tradePrice';
            docs: ['the average trading price in quote token'];
            type: 'i64';
          },
          {
            name: 'fee';
            docs: ['transaction fees'];
            type: 'i64';
          },
          {
            name: 'rate';
            docs: ['current oracle rate'];
            type: 'u64';
          },
          {
            name: 'realizedPnl';
            docs: ['realized pnl'];
            type: 'i64';
          },
          {
            name: 'orderIsClose';
            docs: ['is close flag in order params'];
            type: 'bool';
          },
          {
            name: 'totalBalance';
            docs: ['user margin balance'];
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'increaseLiquidityEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'position';
            type: 'pubkey';
          },
          {
            name: 'tickArrayLower';
            type: 'pubkey';
          },
          {
            name: 'tickArrayUpper';
            type: 'pubkey';
          },
          {
            name: 'liquidityAmount';
            type: 'u128';
          },
          {
            name: 'tokenA';
            type: 'u64';
          },
          {
            name: 'tokenB';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'initializeConfigEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'feeAuthority';
            type: 'pubkey';
          },
          {
            name: 'collectProtocolFeesAuthority';
            type: 'pubkey';
          },
          {
            name: 'rewardEmissionsSuperAuthority';
            type: 'pubkey';
          },
          {
            name: 'defaultProtocolFeeRate';
            type: 'u16';
          },
        ];
      };
    },
    {
      name: 'initializeFeeTierEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'feeTier';
            type: 'pubkey';
          },
          {
            name: 'tickSpacing';
            type: 'u16';
          },
          {
            name: 'defaultFeeRate';
            type: 'u16';
          },
        ];
      };
    },
    {
      name: 'initializeLpEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'yieldMarket';
            type: 'pubkey';
          },
          {
            name: 'owner';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'initializeMarginMarketRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'marginMarket';
            type: 'pubkey';
          },
          {
            name: 'marginMarketMint';
            type: 'pubkey';
          },
          {
            name: 'marginMarketVault';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'initializePositionEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'yieldMarket';
            type: 'pubkey';
          },
          {
            name: 'owner';
            type: 'pubkey';
          },
          {
            name: 'lowerRate';
            type: 'u64';
          },
          {
            name: 'upperRate';
            type: 'u64';
          },
          {
            name: 'lowerTickIndex';
            type: 'i32';
          },
          {
            name: 'upperTickIndex';
            type: 'i32';
          },
        ];
      };
    },
    {
      name: 'initializeTickArrayEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'yieldMarket';
            type: 'pubkey';
          },
          {
            name: 'startTickIndex';
            type: 'i32';
          },
        ];
      };
    },
    {
      name: 'initializeYieldMarketRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'oracle';
            type: 'pubkey';
          },
          {
            name: 'name';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'pubkey';
            type: 'pubkey';
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'marginIndex';
            type: 'u32';
          },
          {
            name: 'lpMarginIndex';
            type: 'u32';
          },
          {
            name: 'orderStepSize';
            type: 'u64';
          },
          {
            name: 'minOrderSize';
            type: 'u64';
          },
          {
            name: 'minLiquidationSize';
            type: 'u64';
          },
          {
            name: 'startTs';
            type: 'i64';
          },
          {
            name: 'expireTs';
            type: 'i64';
          },
          {
            name: 'activeRatioCoef';
            type: 'u64';
          },
          {
            name: 'minLpAmount';
            type: 'u64';
          },
          {
            name: 'defaultFeeRate';
            type: 'u16';
          },
          {
            name: 'tickSpacing';
            type: 'u16';
          },
          {
            name: 'initialSqrtPrice';
            type: 'u128';
          },
          {
            name: 'yieldMarket';
            docs: ['yieldMarket'];
            type: 'pubkey';
          },
          {
            name: 'quoteAssetMint';
            type: 'pubkey';
          },
          {
            name: 'baseAssetMint';
            type: 'pubkey';
          },
          {
            name: 'quoteAssetVault';
            type: 'pubkey';
          },
          {
            name: 'baseAssetVault';
            type: 'pubkey';
          },
          {
            name: 'observationState';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'insuranceLiquidationRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'marketIndex';
            docs: ['market index'];
            type: 'u32';
          },
          {
            name: 'baseAmountFilled';
            docs: ['amount of traded yt'];
            type: 'i64';
          },
          {
            name: 'quoteAmountFilled';
            docs: ['amount of traded vt'];
            type: 'i64';
          },
          {
            name: 'baseAmountHeld';
            docs: ['amount of held yt after trade'];
            type: 'i64';
          },
          {
            name: 'quoteAmountHeld';
            docs: ['amount of held vt after trade'];
            type: 'i64';
          },
          {
            name: 'tradePrice';
            docs: ['the average trading price in quote token'];
            type: 'i64';
          },
          {
            name: 'realizedPnl';
            docs: ['realized pnl'];
            type: 'i64';
          },
          {
            name: 'totalBalance';
            docs: ['margin balance'];
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'insuranceTransferPositionRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'baseAmountTransfered';
            type: 'i64';
          },
          {
            name: 'quoteAmountTransfered';
            type: 'i64';
          },
          {
            name: 'marginTransfered';
            type: 'i64';
          },
          {
            name: 'baseAmountHeld';
            type: 'i64';
          },
          {
            name: 'quoteAmountHeld';
            type: 'i64';
          },
          {
            name: 'totalBalance';
            type: 'i64';
          },
          {
            name: 'rate';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'lpDirection';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'addLiquidity';
          },
          {
            name: 'removeLiquidity';
          },
        ];
      };
    },
    {
      name: 'lpRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'userAuthority';
            type: 'pubkey';
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'direction';
            docs: ['add/remove liquidity'];
            type: {
              defined: {
                name: 'lpDirection';
              };
            };
          },
          {
            name: 'marginIndex';
            docs: ['the margin index'];
            type: 'u32';
          },
          {
            name: 'marketIndex';
            docs: ['the yield market index'];
            type: 'u32';
          },
          {
            name: 'deltaBaseAssetAmount';
            docs: [
              'the change to amm pool, positive for adding liquidity, negative for removing liquidity',
            ];
            type: 'i64';
          },
          {
            name: 'deltaQuoteAssetAmount';
            type: 'i64';
          },
          {
            name: 'tickLower';
            docs: ['the lower tick'];
            type: 'i32';
          },
          {
            name: 'tickUpper';
            docs: ['the upper tick'];
            type: 'i32';
          },
          {
            name: 'rateLower';
            docs: ['the lower rate'];
            type: 'u64';
          },
          {
            name: 'rateUpper';
            docs: ['the upper rate'];
            type: 'u64';
          },
          {
            name: 'marginAmount';
            docs: ['the deposited amount of margin mint'];
            type: 'i64';
          },
          {
            name: 'mintedQuoteAmount';
            docs: ['minted/burned quote asset amount'];
            type: 'i64';
          },
          {
            name: 'liquidityAmount';
            docs: ['liquidity amount'];
            type: 'u128';
          },
          {
            name: 'reserveBaseAmount';
            type: 'i64';
          },
          {
            name: 'reserveQuoteAmount';
            type: 'i64';
          },
          {
            name: 'settledBaseAmount';
            type: 'i64';
          },
          {
            name: 'settledQuoteAmount';
            type: 'i64';
          },
          {
            name: 'totalQuoteAssetAmount';
            docs: ['total_minted_quote_amount'];
            type: 'i64';
          },
          {
            name: 'totalMarginAmount';
            docs: ['the total deposited amount of the lp mint;'];
            type: 'i64';
          },
          {
            name: 'isActive';
            type: 'bool';
          },
          {
            name: 'socialLossBaseAmountFilled';
            type: 'i64';
          },
          {
            name: 'socialLossQuoteAmountFilled';
            type: 'i64';
          },
          {
            name: 'lastRate';
            type: 'u64';
          },
          {
            name: 'lastLiquidity';
            type: 'u128';
          },
          {
            name: 'lastRatio';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'liquidationRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'userAuthority';
            type: 'pubkey';
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'marketIndex';
            docs: ['market index'];
            type: 'u32';
          },
          {
            name: 'baseAmountFilled';
            docs: ['amount of traded yt'];
            type: 'i64';
          },
          {
            name: 'quoteAmountFilled';
            docs: ['amount of traded vt'];
            type: 'i64';
          },
          {
            name: 'baseAmountHeld';
            docs: ['amount of held yt after trade'];
            type: 'i64';
          },
          {
            name: 'quoteAmountHeld';
            docs: ['amount of held vt after trade'];
            type: 'i64';
          },
          {
            name: 'tradePrice';
            docs: ['the average trading price in quote token'];
            type: 'i64';
          },
          {
            name: 'fee';
            docs: ['transaction fees'];
            type: 'i64';
          },
          {
            name: 'rate';
            docs: ['current oracle rate'];
            type: 'u64';
          },
          {
            name: 'realizedPnl';
            docs: ['realized pnl'];
            type: 'i64';
          },
          {
            name: 'totalBalance';
            docs: ['margin balance'];
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'lp';
      serialization: 'bytemuckunsafe';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            docs: ['The owner/authority of the account'];
            type: 'pubkey';
          },
          {
            name: 'ammpool';
            type: 'pubkey';
          },
          {
            name: 'position';
            type: 'pubkey';
          },
          {
            name: 'lastRate';
            type: 'u64';
          },
          {
            name: 'lastLiquidity';
            docs: ["The user's liquidity"];
            type: 'u128';
          },
          {
            name: 'lastRatio';
            type: 'u64';
          },
          {
            name: 'lastFeeGrowthGlobalA';
            type: 'u128';
          },
          {
            name: 'feeOwedA';
            type: 'u64';
          },
          {
            name: 'lastFeeGrowthGlobalB';
            type: 'u128';
          },
          {
            name: 'feeOwedB';
            type: 'u64';
          },
          {
            name: 'padding';
            type: {
              array: ['u8', 48];
            };
          },
          {
            name: 'reserveQuoteAmount';
            type: 'i64';
          },
          {
            name: 'reserveBaseAmount';
            type: 'i64';
          },
          {
            name: 'lastActiveSlot';
            docs: ['The last slot a user was active. Used to determine if a user is idle'];
            type: 'u64';
          },
          {
            name: 'subAccountId';
            docs: ['The sub account id for this user'];
            type: 'u16';
          },
          {
            name: 'idle';
            docs: [
              "User is idle if they haven't interacted with the protocol in 1 week and they have no orders, yield positions or borrows",
              'Off-chain keeper bots can ignore users that are idle',
            ];
            type: 'bool';
          },
          {
            name: 'padding1';
            type: {
              array: ['u8', 8];
            };
          },
          {
            name: 'padding2';
            type: {
              array: ['u8', 72];
            };
          },
        ];
      };
    },
    {
      name: 'lpRemoveMaxRatioRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ratio';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'lpUpdateRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'lastRate';
            type: 'u64';
          },
          {
            name: 'lastLiquidity';
            type: 'u128';
          },
          {
            name: 'lastRatio';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'marginMarket';
      serialization: 'bytemuckunsafe';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'pubkey';
            docs: ['The address of the margin market. It is a pda of the market index'];
            type: 'pubkey';
          },
          {
            name: 'mint';
            docs: ['The token mint of the margin'];
            type: 'pubkey';
          },
          {
            name: 'vault';
            docs: ["The vault used to store the market's deposits"];
            type: 'pubkey';
          },
          {
            name: 'name';
            docs: ['The encoded display name for the market e.g. SOL'];
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'padding1';
            type: {
              array: ['u8', 4];
            };
          },
          {
            name: 'depositBalance';
            docs: [
              'The sum of the scaled balances for deposits across users and pool balances',
              'To convert to the deposit token amount, multiply by the cumulative deposit interest',
              'precision: SPOT_BALANCE_PRECISION',
            ];
            type: 'i64';
          },
          {
            name: 'nextDepositRecordId';
            docs: ['Every deposit has a deposit record id. This is the next id to use'];
            type: 'u64';
          },
          {
            name: 'flashLoanAmount';
            docs: [
              'For swaps, the amount of token loaned out in the begin_swap ix',
              'precision: token mint precision',
            ];
            type: 'u64';
          },
          {
            name: 'flashLoanInitialTokenAmount';
            docs: [
              'For swaps, the amount in the users token account in the begin_swap ix',
              'Used to calculate how much of the token left the system in end_swap ix',
              'precision: token mint precision',
            ];
            type: 'u64';
          },
          {
            name: 'decimals';
            docs: [
              "The market's token mint's decimals. To from decimals to a precision, 10^decimals",
            ];
            type: 'u32';
          },
          {
            name: 'status';
            type: {
              defined: {
                name: 'marketStatus';
              };
            };
          },
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'padding2';
            type: {
              array: ['u8', 2];
            };
          },
          {
            name: 'delegateVault';
            type: 'pubkey';
          },
          {
            name: 'padding';
            type: {
              array: ['u8', 32];
            };
          },
        ];
      };
    },
    {
      name: 'marginPosition';
      serialization: 'bytemuckunsafe';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'balance';
            docs: ['precision: token mint precision'];
            type: 'i64';
          },
          {
            name: 'marketIndex';
            docs: ['The market index of the corresponding spot market'];
            type: 'u32';
          },
          {
            name: 'decimals';
            type: 'u32';
          },
          {
            name: 'padding2';
            type: {
              array: ['u8', 32];
            };
          },
        ];
      };
    },
    {
      name: 'marginType';
      repr: {
        kind: 'rust';
      };
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'nonYieldBearing';
          },
          {
            name: 'yieldBearing';
          },
        ];
      };
    },
    {
      name: 'marginValue';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'marginAssetValue';
            type: 'i64';
          },
          {
            name: 'marginLiabilityValue';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'marketStatus';
      repr: {
        kind: 'rust';
      };
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'initialized';
          },
          {
            name: 'active';
          },
          {
            name: 'paused';
          },
          {
            name: 'reduceOnly';
          },
          {
            name: 'updating';
          },
          {
            name: 'expired';
          },
          {
            name: 'settlement';
          },
        ];
      };
    },
    {
      name: 'marketType';
      repr: {
        kind: 'rust';
      };
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'perp';
          },
          {
            name: 'spot';
          },
        ];
      };
    },
    {
      name: 'newEarnVaultRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            docs: ['unix_timestamp of action'];
            type: 'i64';
          },
          {
            name: 'ptMint';
            type: 'pubkey';
          },
          {
            name: 'earnVault';
            type: 'pubkey';
          },
          {
            name: 'marginIndex';
            type: 'u32';
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'userRatio';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'newLpRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            docs: ['unix_timestamp of action'];
            type: 'i64';
          },
          {
            name: 'lpAuthority';
            docs: ['owner of subaccount'];
            type: 'pubkey';
          },
          {
            name: 'lp';
            docs: ['subaccount'];
            type: 'pubkey';
          },
          {
            name: 'subAccountId';
            docs: ['subaccount id'];
            type: 'u16';
          },
        ];
      };
    },
    {
      name: 'newUserOrdersRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            docs: ['unix_timestamp of action'];
            type: 'i64';
          },
          {
            name: 'userAuthority';
            docs: ['owner of subaccount'];
            type: 'pubkey';
          },
          {
            name: 'user';
            docs: ['subaccount'];
            type: 'pubkey';
          },
          {
            name: 'subAccountId';
            docs: ['subaccount id'];
            type: 'u16';
          },
        ];
      };
    },
    {
      name: 'newUserRecord';
      docs: ['user init event'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            docs: ['unix_timestamp of action'];
            type: 'i64';
          },
          {
            name: 'userAuthority';
            docs: ['owner of subaccount'];
            type: 'pubkey';
          },
          {
            name: 'user';
            docs: ['subaccount'];
            type: 'pubkey';
          },
          {
            name: 'subAccountId';
            docs: ['subaccount id'];
            type: 'u16';
          },
          {
            name: 'isIsolated';
            docs: ['isIsolated'];
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'observation';
      docs: ['The element of observations in ObservationState'];
      serialization: 'bytemuckunsafe';
      repr: {
        kind: 'rust';
        packed: true;
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'blockTimestamp';
            docs: ['The block timestamp of the observation'];
            type: 'u32';
          },
          {
            name: 'sqrtPriceX64';
            docs: ['the price of the observation timestamp, Q64.64'];
            type: 'u128';
          },
          {
            name: 'cumulativeTimePriceX64';
            docs: ['the cumulative of price during the duration time, Q64.64'];
            type: 'u128';
          },
          {
            name: 'padding';
            docs: ['padding for feature update'];
            type: 'u128';
          },
        ];
      };
    },
    {
      name: 'observationState';
      serialization: 'bytemuckunsafe';
      repr: {
        kind: 'rust';
        packed: true;
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'initialized';
            docs: ['Whether the ObservationState is initialized'];
            type: 'bool';
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'observations';
            docs: ['observation array'];
            type: {
              array: [
                {
                  defined: {
                    name: 'observation';
                  };
                },
                1000,
              ];
            };
          },
          {
            name: 'padding';
            docs: ['padding for feature update'];
            type: {
              array: ['u128', 5];
            };
          },
        ];
      };
    },
    {
      name: 'oracle';
      serialization: 'bytemuckunsafe';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'admin';
            type: 'pubkey';
          },
          {
            name: 'name';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'lastRate';
            type: 'u64';
          },
          {
            name: 'rate';
            type: 'u64';
          },
          {
            name: 'marketRate';
            type: 'u64';
          },
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'decimals';
            type: 'u32';
          },
          {
            name: 'padding';
            type: {
              array: ['u8', 4];
            };
          },
          {
            name: 'epochStartTimestamp';
            type: 'i64';
          },
          {
            name: 'lastEpochStartTimestamp';
            type: 'i64';
          },
          {
            name: 'padding1';
            type: {
              array: ['u8', 32];
            };
          },
        ];
      };
    },
    {
      name: 'order';
      serialization: 'bytemuckunsafe';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'slot';
            docs: ['The slot the order was placed'];
            type: 'u64';
          },
          {
            name: 'priceLimit';
            docs: [
              'The limit price for the order (can be 0 for market orders)',
              "For orders with an auction, this price isn't used until the auction is complete",
              'precision: PRICE_PRECISION',
            ];
            type: 'u128';
          },
          {
            name: 'baseAssetAmount';
            docs: ['The size of the order', 'precision for yields: BASE_PRECISION'];
            type: 'i64';
          },
          {
            name: 'baseAssetAmountFilled';
            type: 'i64';
          },
          {
            name: 'quoteAssetAmountFilled';
            type: 'i64';
          },
          {
            name: 'expireTs';
            docs: ['The time when the order will expire'];
            type: 'i64';
          },
          {
            name: 'orderIndex';
            docs: ['The id for the order. Each users has their own order id space'];
            type: 'u32';
          },
          {
            name: 'orderId';
            type: 'u32';
          },
          {
            name: 'isolatedMarginAmount';
            type: 'u64';
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'status';
            docs: ['Whether the order is open or unused'];
            type: {
              defined: {
                name: 'orderStatus';
              };
            };
          },
          {
            name: 'orderType';
            docs: ['The type of order'];
            type: {
              defined: {
                name: 'orderType';
              };
            };
          },
          {
            name: 'isClose';
            type: 'bool';
          },
          {
            name: 'padding1';
            type: {
              array: ['u8', 1];
            };
          },
          {
            name: 'padding2';
            type: {
              array: ['u8', 32];
            };
          },
        ];
      };
    },
    {
      name: 'orderParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'baseAssetAmount';
            type: 'i64';
          },
          {
            name: 'priceLimit';
            type: 'u128';
          },
          {
            name: 'expireTs';
            type: 'i64';
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'orderType';
            type: {
              defined: {
                name: 'orderType';
              };
            };
          },
          {
            name: 'isolatedMarginAmount';
            type: 'u64';
          },
          {
            name: 'isClose';
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'orderRecord';
      docs: ['place_yield_order event'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'userAuthority';
            type: 'pubkey';
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'order';
            docs: ['order struct'];
            type: {
              defined: {
                name: 'order';
              };
            };
          },
        ];
      };
    },
    {
      name: 'orderStatus';
      repr: {
        kind: 'rust';
      };
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'init';
          },
          {
            name: 'open';
          },
          {
            name: 'filled';
          },
          {
            name: 'canceled';
          },
        ];
      };
    },
    {
      name: 'orderType';
      repr: {
        kind: 'rust';
      };
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'market';
          },
          {
            name: 'limit';
          },
        ];
      };
    },
    {
      name: 'positionValue';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'positionAssetValue';
            type: 'i64';
          },
          {
            name: 'positionLiabilityValue';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'settleUserRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'userAuthority';
            type: 'pubkey';
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'marketIndex';
            docs: ['market index'];
            type: 'u32';
          },
          {
            name: 'baseAmountFilled';
            docs: ['amount of traded yt'];
            type: 'i64';
          },
          {
            name: 'quoteAmountFilled';
            docs: ['amount of traded vt'];
            type: 'i64';
          },
          {
            name: 'baseAmountHeld';
            docs: ['amount of held yt after trade'];
            type: 'i64';
          },
          {
            name: 'quoteAmountHeld';
            docs: ['amount of held vt after trade'];
            type: 'i64';
          },
          {
            name: 'rate';
            docs: ['current oracle rate'];
            type: 'u64';
          },
          {
            name: 'realizedPnl';
            docs: ['realized pnl'];
            type: 'i64';
          },
          {
            name: 'totalBalance';
            docs: ['margin balance'];
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'socialLossChangeRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'baseAmountFilled';
            type: 'i64';
          },
          {
            name: 'quoteAmountFilled';
            type: 'i64';
          },
          {
            name: 'marginFilled';
            type: 'i64';
          },
          {
            name: 'baseAmountHeld';
            type: 'i64';
          },
          {
            name: 'quoteAmountHeld';
            type: 'i64';
          },
          {
            name: 'totalBalance';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'socialLossTransferPositionRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'baseAmountTransfered';
            type: 'i64';
          },
          {
            name: 'quoteAmountTransfered';
            type: 'i64';
          },
          {
            name: 'marginTransfered';
            type: 'i64';
          },
          {
            name: 'baseAmountHeld';
            type: 'i64';
          },
          {
            name: 'quoteAmountHeld';
            type: 'i64';
          },
          {
            name: 'totalBalance';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'state';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'admin';
            type: 'pubkey';
          },
          {
            name: 'signer';
            type: 'pubkey';
          },
          {
            name: 'numberOfAuthorities';
            type: 'u64';
          },
          {
            name: 'numberOfSubAccounts';
            type: 'u64';
          },
          {
            name: 'collateralRatioInitial';
            type: 'i64';
          },
          {
            name: 'collateralRatioMaintenance';
            type: 'i64';
          },
          {
            name: 'collateralRatioInitialPreExpiry';
            type: 'i64';
          },
          {
            name: 'numberOfYieldMarkets';
            type: 'u32';
          },
          {
            name: 'numberOfMarginMarkets';
            type: 'u32';
          },
          {
            name: 'signerNonce';
            type: 'u8';
          },
          {
            name: 'twapDuration';
            type: 'u32';
          },
          {
            name: 'marginIndexStart';
            type: 'u32';
          },
          {
            name: 'marketIndexStart';
            type: 'u32';
          },
          {
            name: 'keepers';
            type: {
              array: ['pubkey', 20];
            };
          },
          {
            name: 'keeperFeePerTx';
            type: 'u64';
          },
          {
            name: 'keeperFee';
            type: 'u64';
          },
          {
            name: 'padding0';
            type: {
              array: ['u8', 4];
            };
          },
          {
            name: 'padding1';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'padding2';
            type: {
              array: ['u8', 32];
            };
          },
        ];
      };
    },
    {
      name: 'swapEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'yieldMarket';
            type: 'pubkey';
          },
          {
            name: 'amountA';
            type: 'i64';
          },
          {
            name: 'amountB';
            type: 'i64';
          },
          {
            name: 'aToB';
            type: 'bool';
          },
          {
            name: 'sqrtPriceX64';
            type: 'u128';
          },
          {
            name: 'tickCurrentIndex';
            type: 'i32';
          },
        ];
      };
    },
    {
      name: 'swapResult';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amountBaseSwap';
            type: 'u64';
          },
          {
            name: 'amountQuoteSwap';
            type: 'u64';
          },
          {
            name: 'sqrtPriceX64';
            type: 'u128';
          },
        ];
      };
    },
    {
      name: 'tick';
      serialization: 'bytemuckunsafe';
      repr: {
        kind: 'rust';
        packed: true;
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'initialized';
            type: 'bool';
          },
          {
            name: 'liquidityNet';
            type: 'i128';
          },
          {
            name: 'liquidityGross';
            type: 'u128';
          },
          {
            name: 'feeGrowthOutsideA';
            type: 'u128';
          },
          {
            name: 'feeGrowthOutsideB';
            type: 'u128';
          },
          {
            name: 'padding';
            type: {
              array: ['u16', 24];
            };
          },
        ];
      };
    },
    {
      name: 'tickArray';
      serialization: 'bytemuckunsafe';
      repr: {
        kind: 'rust';
        packed: true;
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'startTickIndex';
            type: 'i32';
          },
          {
            name: 'ticks';
            type: {
              array: [
                {
                  defined: {
                    name: 'tick';
                  };
                },
                88,
              ];
            };
          },
          {
            name: 'ammpool';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'transferLpRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'userAuthority';
            type: 'pubkey';
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'direction';
            type: {
              defined: {
                name: 'lpDirection';
              };
            };
          },
          {
            name: 'deltaBaseAssetAmount';
            type: 'i64';
          },
          {
            name: 'deltaQuoteAssetAmount';
            type: 'i64';
          },
          {
            name: 'tickLower';
            docs: ['the lower tick'];
            type: 'i32';
          },
          {
            name: 'tickUpper';
            docs: ['the upper tick'];
            type: 'i32';
          },
          {
            name: 'rateLower';
            docs: ['the lower rate'];
            type: 'u64';
          },
          {
            name: 'rateUpper';
            docs: ['the upper rate'];
            type: 'u64';
          },
          {
            name: 'liquidityAmount';
            docs: ['liquidity amount'];
            type: 'u128';
          },
          {
            name: 'reserveBaseAmount';
            type: 'i64';
          },
          {
            name: 'reserveQuoteAmount';
            type: 'i64';
          },
          {
            name: 'isActive';
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'transferPositionRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'userAuthority';
            type: 'pubkey';
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'baseAmountTransfered';
            type: 'i64';
          },
          {
            name: 'quoteAmountTransfered';
            type: 'i64';
          },
          {
            name: 'marginTransfered';
            type: 'i64';
          },
          {
            name: 'baseAmountHeld';
            type: 'i64';
          },
          {
            name: 'quoteAmountHeld';
            type: 'i64';
          },
          {
            name: 'totalBalance';
            type: 'i64';
          },
          {
            name: 'tradePrice';
            type: 'i64';
          },
          {
            name: 'fee';
            type: 'u64';
          },
          {
            name: 'rate';
            type: 'u64';
          },
          {
            name: 'realizedPnl';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'unifiedPosition';
      serialization: 'bytemuckunsafe';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ammpool';
            type: 'pubkey';
          },
          {
            name: 'tickLowerIndex';
            type: 'i32';
          },
          {
            name: 'tickUpperIndex';
            type: 'i32';
          },
          {
            name: 'lowerRate';
            type: 'u64';
          },
          {
            name: 'upperRate';
            type: 'u64';
          },
          {
            name: 'ratio';
            type: 'u64';
          },
          {
            name: 'settledBaseAmount';
            type: 'i64';
          },
          {
            name: 'settledQuoteAmount';
            type: 'i64';
          },
          {
            name: 'padding';
            type: {
              array: ['u8', 64];
            };
          },
        ];
      };
    },
    {
      name: 'unifiedPositionSettledUpdateRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'settledBaseAmount';
            type: 'i64';
          },
          {
            name: 'settledQuoteAmount';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'unifiedPositionUpdateRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'tickLowerIndex';
            type: 'i32';
          },
          {
            name: 'tickUpperIndex';
            type: 'i32';
          },
          {
            name: 'lowerRate';
            type: 'u64';
          },
          {
            name: 'upperRate';
            type: 'u64';
          },
          {
            name: 'ratio';
            type: 'u64';
          },
          {
            name: 'settledBaseAmount';
            type: 'i64';
          },
          {
            name: 'settledQuoteAmount';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'updateOracleRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'oracle';
            type: 'pubkey';
          },
          {
            name: 'rate';
            type: 'u64';
          },
          {
            name: 'marketRate';
            type: 'u64';
          },
          {
            name: 'lastRate';
            type: 'u64';
          },
          {
            name: 'epochStartTimestamp';
            type: 'i64';
          },
          {
            name: 'lastEpochStartTimestamp';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'user';
      serialization: 'bytemuckunsafe';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            docs: ['The owner/authority of the account'];
            type: 'pubkey';
          },
          {
            name: 'marginPositions';
            docs: ["The user's collateral"];
            type: {
              array: [
                {
                  defined: {
                    name: 'marginPosition';
                  };
                },
                2,
              ];
            };
          },
          {
            name: 'orders';
            docs: ["The user's liquidity"];
            type: {
              array: [
                {
                  defined: {
                    name: 'order';
                  };
                },
                32,
              ];
            };
          },
          {
            name: 'yieldPositions';
            docs: ["The user's yield positions"];
            type: {
              array: [
                {
                  defined: {
                    name: 'yieldPosition';
                  };
                },
                8,
              ];
            };
          },
          {
            name: 'lastActiveSlot';
            docs: ['The last slot a user was active. Used to determine if a user is idle'];
            type: 'u64';
          },
          {
            name: 'lastOrderId';
            type: 'u32';
          },
          {
            name: 'subAccountId';
            docs: ['The sub account id for this user'];
            type: 'u16';
          },
          {
            name: 'idle';
            docs: [
              "User is idle if they haven't interacted with the protocol in 1 week and they have no orders, yield positions or borrows",
              'Off-chain keeper bots can ignore users that are idle',
            ];
            type: 'bool';
          },
          {
            name: 'padding2';
            docs: ['Whether or not the subaccount has been liquidated'];
            type: 'bool';
          },
          {
            name: 'isIsolated';
            docs: ['isolated / cross margin flag'];
            type: 'bool';
          },
          {
            name: 'isExpiryOn';
            type: 'bool';
          },
          {
            name: 'padding1';
            type: {
              array: ['u8', 6];
            };
          },
        ];
      };
    },
    {
      name: 'userStats';
      serialization: 'bytemuckunsafe';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            docs: ['The authority for all of a users sub accounts'];
            type: 'pubkey';
          },
          {
            name: 'referrer';
            docs: ['The address that referred this user'];
            type: 'pubkey';
          },
          {
            name: 'numberOfSubAccounts';
            docs: ['The current number of sub accounts'];
            type: 'u16';
          },
          {
            name: 'numberOfSubAccountsCreated';
            docs: [
              'The number of sub accounts created. Can be greater than the number of sub accounts if user',
              'has deleted sub accountsget_margin_position_index',
            ];
            type: 'u16';
          },
          {
            name: 'padding';
            type: {
              array: ['u8', 52];
            };
          },
        ];
      };
    },
    {
      name: 'vaultSwapRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'inMarginIndex';
            type: 'u32';
          },
          {
            name: 'outMarginIndex';
            type: 'u32';
          },
          {
            name: 'amountIn';
            type: 'u64';
          },
          {
            name: 'amountOut';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'vaultTransferRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ts';
            type: 'i64';
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'lpMarginIndex';
            type: 'u32';
          },
          {
            name: 'otherMarginIndex';
            type: 'u32';
          },
          {
            name: 'fromLpAmount';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'yieldMarket';
      serialization: 'bytemuckunsafe';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'pubkey';
            docs: ["The yield market's address. It is a pda of the market index"];
            type: 'pubkey';
          },
          {
            name: 'oracle';
            docs: ['the quote asset oracle'];
            type: 'pubkey';
          },
          {
            name: 'name';
            docs: ['Encoded display name for the yield market e.g. MSOL-2406'];
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'quoteAssetVault';
            type: 'pubkey';
          },
          {
            name: 'baseAssetVault';
            type: 'pubkey';
          },
          {
            name: 'pool';
            type: {
              defined: {
                name: 'ammpool';
              };
            };
          },
          {
            name: 'startTs';
            docs: ['start time'];
            type: 'i64';
          },
          {
            name: 'expireTs';
            docs: ['expiration time'];
            type: 'i64';
          },
          {
            name: 'orderStepSize';
            type: 'u64';
          },
          {
            name: 'minOrderSize';
            type: 'u64';
          },
          {
            name: 'minLpAmount';
            type: 'u64';
          },
          {
            name: 'minLiquidationSize';
            type: 'u64';
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'marginIndex';
            type: 'u32';
          },
          {
            name: 'lpMarginIndex';
            type: 'u32';
          },
          {
            name: 'marginType';
            type: {
              defined: {
                name: 'marginType';
              };
            };
          },
          {
            name: 'lpMarginType';
            type: {
              defined: {
                name: 'marginType';
              };
            };
          },
          {
            name: 'marginDecimals';
            type: 'u8';
          },
          {
            name: 'lpMarginDecimals';
            type: 'u8';
          },
          {
            name: 'collateralRatioInitial';
            type: 'i64';
          },
          {
            name: 'collateralRatioInitialPreExpiry';
            type: 'i64';
          },
          {
            name: 'collateralRatioMaintenance';
            type: 'i64';
          },
          {
            name: 'activeRatioCoef';
            type: 'u64';
          },
          {
            name: 'maxOpenInterest';
            docs: ['the max open interest'];
            type: 'u64';
          },
          {
            name: 'openInterest';
            docs: ['current open interest'];
            type: 'u64';
          },
          {
            name: 'numberOfActiveUsers';
            type: 'u64';
          },
          {
            name: 'numberOfActiveLps';
            type: 'u64';
          },
          {
            name: 'status';
            type: {
              defined: {
                name: 'marketStatus';
              };
            };
          },
          {
            name: 'marketType';
            type: {
              defined: {
                name: 'marketType';
              };
            };
          },
          {
            name: 'padding2';
            type: {
              array: ['u8', 6];
            };
          },
          {
            name: 'netQuoteAmount';
            type: 'i64';
          },
          {
            name: 'netBaseAmount';
            type: 'i64';
          },
          {
            name: 'lastRate';
            type: 'u64';
          },
          {
            name: 'totalQuoteAssetAmount';
            docs: ['lp stats', 'the quote asset amount minted by lps'];
            type: 'i64';
          },
          {
            name: 'totalMarginAmount';
            docs: ['the total deposited amount of the lp mint;'];
            type: 'i64';
          },
          {
            name: 'netQuoteAmountRealized';
            docs: ['net realized quote of all traders'];
            type: 'i64';
          },
          {
            name: 'socialLossMarginPosition';
            type: {
              defined: {
                name: 'marginPosition';
              };
            };
          },
          {
            name: 'socialLossYieldPosition';
            type: {
              defined: {
                name: 'yieldPosition';
              };
            };
          },
          {
            name: 'tickLowerIndex';
            type: 'i32';
          },
          {
            name: 'tickUpperIndex';
            type: 'i32';
          },
          {
            name: 'insuranceMarginPosition';
            docs: ['insurance'];
            type: {
              defined: {
                name: 'marginPosition';
              };
            };
          },
          {
            name: 'insuranceYieldPosition';
            type: {
              defined: {
                name: 'yieldPosition';
              };
            };
          },
          {
            name: 'keeperFee';
            docs: ['epoch update'];
            type: 'i64';
          },
          {
            name: 'lpPositionProcessed';
            type: 'u64';
          },
          {
            name: 'impliedRate';
            type: 'u64';
          },
          {
            name: 'lpQuoteAmount';
            type: 'i64';
          },
          {
            name: 'lpBaseAmount';
            type: 'i64';
          },
          {
            name: 'numberOfProcessedUsers';
            type: 'u64';
          },
          {
            name: 'expireUpdateTs';
            docs: ['epoch update expire'];
            type: 'i64';
          },
          {
            name: 'expireTotalDebt';
            type: 'i64';
          },
          {
            name: 'expireTotalMargin';
            type: 'i64';
          },
          {
            name: 'expireTotalPosQuoteAmount';
            type: 'i64';
          },
          {
            name: 'expireTotalDebtCovered';
            type: 'i64';
          },
          {
            name: 'effectiveReserveBaseAmount';
            type: 'i64';
          },
          {
            name: 'liqFeeRate';
            type: 'i64';
          },
          {
            name: 'protocolFee';
            type: 'i64';
          },
          {
            name: 'epochUpdateStatus';
            type: {
              defined: {
                name: 'epochUpdateStatus';
              };
            };
          },
          {
            name: 'padding3';
            type: {
              array: ['u8', 7];
            };
          },
          {
            name: 'earnNetQuoteAmountRealized';
            type: 'i64';
          },
          {
            name: 'totalSlossQuoteQuota';
            type: 'i64';
          },
          {
            name: 'epochUpdateEndTs';
            type: 'i64';
          },
          {
            name: 'totalReserveQuoteAmount';
            type: 'i64';
          },
          {
            name: 'slossBaseAmountFilled';
            type: 'i64';
          },
          {
            name: 'slossQuoteAmountFilled';
            type: 'i64';
          },
          {
            name: 'lowerRateBound';
            type: 'u64';
          },
          {
            name: 'upperRateBound';
            type: 'u64';
          },
          {
            name: 'sqrtPriceLowerBound';
            type: 'u128';
          },
          {
            name: 'sqrtPriceUpperBound';
            type: 'u128';
          },
          {
            name: 'boundPercentage';
            type: 'u64';
          },
          {
            name: 'epochPriceGapX64';
            type: 'u128';
          },
          {
            name: 'totalReserveBaseAmount';
            type: 'i64';
          },
          {
            name: 'protocolTraderFee';
            type: {
              defined: {
                name: 'yieldPosition';
              };
            };
          },
          {
            name: 'protocolLpFee';
            type: {
              defined: {
                name: 'yieldPosition';
              };
            };
          },
          {
            name: 'unifiedPositionProcessed';
            type: 'bool';
          },
          {
            name: 'padding4';
            type: {
              array: ['u8', 7];
            };
          },
          {
            name: 'padding5';
            type: {
              array: ['u8', 90];
            };
          },
        ];
      };
    },
    {
      name: 'yieldPosition';
      serialization: 'bytemuckunsafe';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'baseAssetAmount';
            docs: ['the size of the users yield position', 'precision: BASE_PRECISION'];
            type: 'i64';
          },
          {
            name: 'quoteAssetAmount';
            docs: [
              'Used to calculate the users pnl. Upon entry, is equal to base_asset_amount * avg entry price - fees',
              'Updated when the user open/closes position or settles pnl. Includes fees/funding',
              'precision: QUOTE_PRECISION',
            ];
            type: 'i64';
          },
          {
            name: 'lastRate';
            docs: ['last cumlative rate'];
            type: 'u64';
          },
          {
            name: 'marketIndex';
            docs: ['The market index for the yield market'];
            type: 'u32';
          },
          {
            name: 'padding1';
            type: {
              array: ['u8', 4];
            };
          },
          {
            name: 'padding2';
            type: {
              array: ['u8', 32];
            };
          },
        ];
      };
    },
  ];
};
