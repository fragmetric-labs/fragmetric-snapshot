/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/banx.idl.json`.
 */
export type BanxIdl = {
  address: '4tdmkuY6EStxbS6Y8s5ueznL3VPMSugrvQuDeAHGZhSt';
  metadata: {
    name: 'bonds';
    version: '0.1.0';
    spec: '0.1.0';
    description: 'Created with Anchor';
  };
  instructions: [
    {
      name: 'addLiquidityUserVault';
      discriminator: [79, 96, 221, 216, 238, 125, 246, 31];
      accounts: [
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
        },
        {
          name: 'admin';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'userSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'vaultSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u128';
        },
      ];
    },
    {
      name: 'addLoanCollateral';
      discriminator: [43, 58, 234, 15, 95, 10, 16, 58];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'fraktBond';
          writable: true;
        },
        {
          name: 'oldBondTradeTransaction';
          writable: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  114,
                  97,
                  110,
                  115,
                  97,
                  99,
                  116,
                  105,
                  111,
                  110,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'oldBondTradeTransaction';
              },
            ];
          };
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'mutualBondVaultCollateralTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'mutualBondTradeTxnVault';
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
                path: 'collateralTokenMint';
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
          name: 'userSplCollateralTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'collateralTokenMint';
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
          name: 'collateralTokenMint';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
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
      name: 'borrowCnftPerpetual';
      discriminator: [134, 210, 153, 206, 233, 11, 11, 112];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'bond_offer.asset_receiver';
                account: 'bondOfferV3';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'protocolFeeReceiver';
          writable: true;
          address: 'revJ8QJgQ3xCcZ6CMykjsmGMYdg8Pj9WnqgJZBHBwSK';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'treeAuthority';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'merkleTree';
              },
            ];
            program: {
              kind: 'account';
              path: 'bubblegumProgram';
            };
          };
        },
        {
          name: 'whitelistEntry';
        },
        {
          name: 'merkleTree';
          writable: true;
        },
        {
          name: 'hadoMarketValidation';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  104,
                  97,
                  100,
                  111,
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  95,
                  118,
                  97,
                  108,
                  105,
                  100,
                  97,
                  116,
                  105,
                  111,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'bond_offer.hado_market';
                account: 'bondOfferV3';
              },
            ];
          };
        },
        {
          name: 'logWrapper';
          writable: true;
          address: 'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV';
        },
        {
          name: 'compressionProgram';
          writable: true;
          address: 'cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK';
        },
        {
          name: 'bubblegumProgram';
          writable: true;
          address: 'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY';
        },
        {
          name: 'nftMint';
        },
        {
          name: 'userSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'vaultSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
      ];
      args: [
        {
          name: 'perpetualBorrowParam';
          type: {
            defined: {
              name: 'borrowPerpetualParams';
            };
          };
        },
        {
          name: 'root';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'dataHash';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'creatorHash';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'nonce';
          type: 'u64';
        },
        {
          name: 'index';
          type: 'u32';
        },
        {
          name: 'proofLen';
          type: 'u8';
        },
        {
          name: 'optimizeIntoReserves';
          type: 'bool';
        },
        {
          name: 'aprRate';
          type: 'u64';
        },
      ];
    },
    {
      name: 'borrowPerpetual';
      discriminator: [84, 120, 232, 93, 48, 2, 196, 155];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
        {
          name: 'protocolFeeReceiver';
          writable: true;
          address: 'revJ8QJgQ3xCcZ6CMykjsmGMYdg8Pj9WnqgJZBHBwSK';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'metadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
        {
          name: 'authorizationRulesProgram';
          address: 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg';
        },
        {
          name: 'userSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'collateralMint';
          writable: true;
        },
        {
          name: 'metadata';
          writable: true;
        },
        {
          name: 'edition';
          writable: true;
        },
      ];
      args: [
        {
          name: 'perpetualBorrowParams';
          type: {
            vec: {
              defined: {
                name: 'borrowPerpetualParams';
              };
            };
          };
        },
        {
          name: 'optimizeIntoReserves';
          type: 'bool';
        },
        {
          name: 'aprRate';
          type: 'u64';
        },
      ];
    },
    {
      name: 'borrowPerpetualCore';
      discriminator: [255, 53, 153, 132, 185, 122, 54, 93];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'fraktBond';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [102, 114, 97, 107, 116, 95, 98, 111, 110, 100];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'arg';
                path: 'randomSeed';
              },
            ];
          };
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  114,
                  97,
                  110,
                  115,
                  97,
                  99,
                  116,
                  105,
                  111,
                  110,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for tokens'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
        {
          name: 'hadoMarket';
          writable: true;
        },
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'bond_offer.asset_receiver';
                account: 'bondOfferV3';
              },
              {
                kind: 'account';
                path: 'splOutTokenMint';
              },
            ];
          };
        },
        {
          name: 'bondOfferVaultSplOutTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'lenderVault';
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
                path: 'splOutTokenMint';
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
          name: 'protocolFeeReceiver';
          writable: true;
          address: 'revJ8QJgQ3xCcZ6CMykjsmGMYdg8Pj9WnqgJZBHBwSK';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'splOutTokenMint';
          writable: true;
        },
        {
          name: 'mplCoreProgram';
          address: 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d';
        },
        {
          name: 'logWrapper';
          writable: true;
          address: 'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV';
        },
      ];
      args: [
        {
          name: 'randomSeed';
          type: 'u64';
        },
        {
          name: 'optimizeIntoReserves';
          type: 'bool';
        },
        {
          name: 'amountToGet';
          type: 'u64';
        },
        {
          name: 'aprRate';
          type: 'u64';
        },
      ];
    },
    {
      name: 'borrowPerpetualSpl';
      discriminator: [200, 230, 150, 120, 88, 242, 213, 171];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'fraktBond';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [102, 114, 97, 107, 116, 95, 98, 111, 110, 100];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'arg';
                path: 'randomSeed';
              },
            ];
          };
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  114,
                  97,
                  110,
                  115,
                  97,
                  99,
                  116,
                  105,
                  111,
                  110,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for tokens'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
        {
          name: 'mutualBondVaultSplInTokenAccount';
          docs: ['CHECK vault for tokens'];
          writable: true;
        },
        {
          name: 'userSplInTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'splInTokenMint';
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
          name: 'hadoMarket';
          writable: true;
        },
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'bond_offer.asset_receiver';
                account: 'bondOfferV3';
              },
              {
                kind: 'account';
                path: 'splOutTokenMint';
              },
            ];
          };
        },
        {
          name: 'bondOfferVaultSplOutTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'lenderVault';
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
                path: 'splOutTokenMint';
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
          name: 'splInTokenMint';
          writable: true;
        },
        {
          name: 'protocolFeeReceiver';
          writable: true;
          address: 'revJ8QJgQ3xCcZ6CMykjsmGMYdg8Pj9WnqgJZBHBwSK';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'splOutTokenMint';
          writable: true;
        },
      ];
      args: [
        {
          name: 'randomSeed';
          type: 'u64';
        },
        {
          name: 'optimizeIntoReserves';
          type: 'bool';
        },
        {
          name: 'amountToGet';
          type: 'u64';
        },
        {
          name: 'amountToSend';
          type: 'u64';
        },
        {
          name: 'leverageBasePoints';
          type: 'u64';
        },
      ];
    },
    {
      name: 'borrowStakedBanxPerpetual';
      discriminator: [105, 151, 41, 236, 22, 159, 149, 10];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
        {
          name: 'protocolFeeReceiver';
          writable: true;
          address: 'revJ8QJgQ3xCcZ6CMykjsmGMYdg8Pj9WnqgJZBHBwSK';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'metadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
        {
          name: 'authorizationRulesProgram';
          address: 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg';
        },
        {
          name: 'ownerTokenRecord';
          writable: true;
        },
        {
          name: 'userSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'collateralMint';
          writable: true;
        },
        {
          name: 'metadata';
          writable: true;
        },
      ];
      args: [
        {
          name: 'perpetualBorrowParams';
          type: {
            vec: {
              defined: {
                name: 'borrowPerpetualParams';
              };
            };
          };
        },
        {
          name: 'optimizeIntoReserves';
          type: 'bool';
        },
        {
          name: 'aprRate';
          type: 'u64';
        },
      ];
    },
    {
      name: 'borrowerRefinance';
      discriminator: [245, 133, 59, 90, 202, 63, 202, 202];
      accounts: [
        {
          name: 'fbond';
          writable: true;
        },
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'oldBondOffer';
          docs: ['CHECK old_bond_offer'];
          writable: true;
        },
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'bond_offer.asset_receiver';
                account: 'bondOfferV3';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'oldLenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'old_bond_offer.asset_receiver';
                account: 'bondOfferV3';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  114,
                  97,
                  110,
                  115,
                  97,
                  99,
                  116,
                  105,
                  111,
                  110,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'arg';
                path: 'bondTransactionRandomSeed';
              },
            ];
          };
        },
        {
          name: 'oldBondTradeTransaction';
          writable: true;
        },
        {
          name: 'hadoMarket';
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'protocolFeeReceiver';
          writable: true;
          address: 'revJ8QJgQ3xCcZ6CMykjsmGMYdg8Pj9WnqgJZBHBwSK';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'userSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'vaultSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'oldVaultSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
      ];
      args: [
        {
          name: 'solToRefinance';
          type: 'u64';
        },
        {
          name: 'bondOfferRandomSeed';
          type: 'u64';
        },
        {
          name: 'aprRate';
          type: 'u64';
        },
      ];
    },
    {
      name: 'borrowerRefinanceToSame';
      discriminator: [172, 241, 118, 118, 32, 30, 12, 176];
      accounts: [
        {
          name: 'fbond';
          writable: true;
        },
        {
          name: 'bondOfferV2';
          writable: true;
        },
        {
          name: 'lenderVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'bond_offer_v2.asset_receiver';
                account: 'bondOfferV3';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  114,
                  97,
                  110,
                  115,
                  97,
                  99,
                  116,
                  105,
                  111,
                  110,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'arg';
                path: 'bondTransactionRandomSeed';
              },
            ];
          };
        },
        {
          name: 'oldBondTradeTransaction';
          writable: true;
        },
        {
          name: 'hadoMarket';
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'protocolFeeReceiver';
          writable: true;
          address: 'revJ8QJgQ3xCcZ6CMykjsmGMYdg8Pj9WnqgJZBHBwSK';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'userSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'vaultSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'oldVaultSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'lenderSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
      ];
      args: [
        {
          name: 'solToRefinance';
          type: 'u64';
        },
        {
          name: 'bondOfferRandomSeed';
          type: 'u64';
        },
        {
          name: 'aprRate';
          type: 'u64';
        },
      ];
    },
    {
      name: 'boundHadoMarketToFraktMarket';
      discriminator: [35, 97, 91, 232, 179, 104, 172, 157];
      accounts: [
        {
          name: 'hadoMarket';
        },
        {
          name: 'fraktMarket';
        },
        {
          name: 'hadoRegistry';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  104,
                  97,
                  100,
                  111,
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                ];
              },
              {
                kind: 'account';
                path: 'hadoMarket';
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'buySellingListingSpl';
      discriminator: [146, 62, 227, 178, 11, 221, 10, 237];
      accounts: [
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'bondTradeTransaction';
              },
            ];
          };
        },
        {
          name: 'mutualBondVaultSplCollateralTokenAccount';
          writable: true;
        },
        {
          name: 'userLendingTokenAccount';
          docs: ['CHECK token_mint'];
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'lenderVaultReceiver';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'userReciver';
              },
              {
                kind: 'account';
                path: 'lendingTokenMint';
              },
            ];
          };
        },
        {
          name: 'userReciver';
          writable: true;
        },
        {
          name: 'protocolFeeReceiver';
          writable: true;
          address: 'revJ8QJgQ3xCcZ6CMykjsmGMYdg8Pj9WnqgJZBHBwSK';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'lendingTokenMint';
          writable: true;
        },
        {
          name: 'collateralTokenMint';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'userCollateralAccount';
          docs: ['CHECK token_mint'];
          writable: true;
        },
        {
          name: 'vaultLendingTokenAccountUninitialized';
          writable: true;
        },
      ];
      args: [];
    },
    {
      name: 'changeBanxAdventureRevAdmin';
      discriminator: [20, 175, 41, 190, 120, 238, 114, 25];
      accounts: [
        {
          name: 'banxAdventure';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'newwRev';
          type: 'u64';
        },
      ];
    },
    {
      name: 'claimCnftPerpetualLoan';
      discriminator: [84, 42, 89, 77, 49, 83, 206, 179];
      accounts: [
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'fbond';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'treeAuthority';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'merkleTree';
              },
            ];
            program: {
              kind: 'account';
              path: 'bubblegumProgram';
            };
          };
        },
        {
          name: 'merkleTree';
          writable: true;
        },
        {
          name: 'logWrapper';
          writable: true;
          address: 'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV';
        },
        {
          name: 'compressionProgram';
          writable: true;
          address: 'cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK';
        },
        {
          name: 'bubblegumProgram';
          writable: true;
          address: 'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY';
        },
        {
          name: 'uninitializedOldBondOfferV2';
          docs: ['CHECK old_bond_offer_v2'];
          writable: true;
        },
      ];
      args: [
        {
          name: 'root';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'dataHash';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'creatorHash';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'nonce';
          type: 'u64';
        },
        {
          name: 'index';
          type: 'u32';
        },
        {
          name: 'proofLen';
          type: 'u8';
        },
      ];
    },
    {
      name: 'claimPerpetualBondOfferInterest';
      discriminator: [106, 129, 57, 125, 170, 252, 106, 56];
      accounts: [
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'userSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'vaultSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
      ];
      args: [];
    },
    {
      name: 'claimPerpetualBondOfferRepayments';
      discriminator: [243, 137, 155, 242, 151, 15, 202, 213];
      accounts: [
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'userSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'vaultSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
      ];
      args: [];
    },
    {
      name: 'claimPerpetualBondOfferStakingRewards';
      discriminator: [132, 52, 153, 197, 238, 57, 66, 170];
      accounts: [
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'banxSolStakingVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  114,
                  101,
                  119,
                  97,
                  114,
                  100,
                  115,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'userSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'vaultSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
      ];
      args: [];
    },
    {
      name: 'claimPerpetualLenderVaultRent';
      discriminator: [251, 43, 198, 51, 175, 30, 147, 28];
      accounts: [
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
          address: 'BANXyWgPpa519e2MtQF1ecRbKYKKDMXPF1dyBxUq9NQG';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'claimPerpetualLoanCore';
      discriminator: [125, 135, 30, 145, 254, 221, 170, 137];
      accounts: [
        {
          name: 'oldBondOfferV2';
          writable: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'fbond';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'fbond';
              },
            ];
          };
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'mplCoreProgram';
          address: 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d';
        },
        {
          name: 'nftAsset';
          writable: true;
        },
        {
          name: 'collection';
          writable: true;
        },
        {
          name: 'logWrapper';
          writable: true;
          address: 'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV';
        },
      ];
      args: [];
    },
    {
      name: 'claimPerpetualLoanTest';
      discriminator: [240, 127, 39, 86, 184, 41, 228, 103];
      accounts: [
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'fbond';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'uninitializedOldBondOfferV2';
          docs: ['CHECK old_bond_offer_v2'];
          writable: true;
        },
      ];
      args: [];
    },
    {
      name: 'claimPerpetualLoanV2';
      discriminator: [166, 239, 165, 34, 6, 185, 11, 161];
      accounts: [
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'fbond';
          writable: true;
        },
        {
          name: 'banxStakingSettings';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115,
                ];
              },
            ];
          };
        },
        {
          name: 'tokenMint';
          writable: true;
        },
        {
          name: 'collateralOwner';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'tokenMint';
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
          name: 'collateralTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'fbond.fbond_issuer';
                account: 'fraktBond';
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
                path: 'tokenMint';
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
          name: 'mutualBondTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'mutualBondTradeTxnVault';
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
                path: 'tokenMint';
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
          name: 'authRules';
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'metadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        },
        {
          name: 'metadata';
          writable: true;
        },
        {
          name: 'edition';
          writable: true;
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
        {
          name: 'authorizationRulesProgram';
          address: 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'authorizationData';
          type: {
            option: {
              defined: {
                name: 'authorizationDataLocal';
              };
            };
          };
        },
      ];
    },
    {
      name: 'claimPerpetualLoanV2Spl';
      discriminator: [109, 205, 132, 54, 128, 194, 66, 203];
      accounts: [
        {
          name: 'oldBondOfferV2';
          writable: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'fbond';
          writable: true;
        },
        {
          name: 'tokenMint';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'tokenMint';
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
          name: 'mutualBondTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'mutualBondTradeTxnVault';
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
                path: 'tokenMint';
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
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'fbond';
              },
            ];
          };
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'claimStakingRewards';
      discriminator: [229, 141, 170, 69, 111, 94, 6, 72];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenMint';
          writable: true;
          address: 'BANXbTpN8U2cU41FjPxe2Ti37PiT5cCxLUKDQZuJeMMR';
        },
        {
          name: 'banxTokenStake';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 97, 110, 120, 95, 116, 111, 107, 101, 110, 95, 115, 116, 97, 107, 101];
              },
              {
                kind: 'account';
                path: 'user';
              },
            ];
          };
        },
        {
          name: 'userTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'tokenMint';
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
          name: 'banxStakingVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  114,
                  101,
                  119,
                  97,
                  114,
                  100,
                  115,
                ];
              },
            ];
          };
        },
        {
          name: 'banxStakingSettings';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115,
                ];
              },
            ];
          };
        },
        {
          name: 'banxStakingVaultTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'banxStakingVault';
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
                path: 'tokenMint';
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
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'hadesTokenMint';
          writable: true;
          address: 'BWXrrYFhT7bMHmNBFoQFWdsSgA3yXoAnMhDK6Fn1eSEn';
        },
        {
          name: 'userHadesTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'hadesTokenMint';
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
          name: 'banxStakingVaultHadesTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'banxStakingVault';
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
                path: 'hadesTokenMint';
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
      ];
      args: [];
    },
    {
      name: 'closeTokenAccountsBanxSol';
      discriminator: [171, 215, 199, 173, 49, 56, 233, 43];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'banxSolTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'banxSolMint';
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
          name: 'protocolFeeReciver';
          writable: true;
          address: 'revJ8QJgQ3xCcZ6CMykjsmGMYdg8Pj9WnqgJZBHBwSK';
        },
        {
          name: 'banxSolFeeTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'protocolFeeReciver';
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
                path: 'banxSolMint';
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
          name: 'banxSolMint';
          writable: true;
          address: 'BANXyWgPpa519e2MtQF1ecRbKYKKDMXPF1dyBxUq9NQG';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
      ];
      args: [];
    },
    {
      name: 'createBanxTokenStake';
      discriminator: [176, 136, 20, 174, 207, 53, 165, 171];
      accounts: [
        {
          name: 'banxStakingSettings';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115,
                ];
              },
            ];
          };
        },
        {
          name: 'banxTokenStake';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 97, 110, 120, 95, 116, 111, 107, 101, 110, 95, 115, 116, 97, 107, 101];
              },
              {
                kind: 'account';
                path: 'banxTokenStakeUser';
              },
            ];
          };
        },
        {
          name: 'banxTokenStakeUser';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
          address: 'HAmVVqzQHz4Bk46Rncochq6QkmNjykM4SeXjtmVXusBi';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'banxNftsStakedQuantity';
          type: 'u64';
        },
        {
          name: 'partnerPoints';
          type: 'u64';
        },
        {
          name: 'playerPoints';
          type: 'u64';
        },
      ];
    },
    {
      name: 'createPerpetualBondOfferBonding';
      discriminator: [239, 60, 64, 38, 92, 10, 125, 240];
      accounts: [
        {
          name: 'bondOfferV2';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  111,
                  102,
                  102,
                  101,
                  114,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'arg';
                path: 'bondOfferRandomSeed';
              },
            ];
          };
        },
        {
          name: 'hadoMarket';
        },
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
      ];
      args: [
        {
          name: 'bondOfferRandomSeed';
          type: 'u64';
        },
        {
          name: 'loanValue';
          type: 'u64';
        },
        {
          name: 'quantityOfLoans';
          type: 'u64';
        },
        {
          name: 'bondingCurveType';
          type: {
            defined: {
              name: 'bondOfferBondingCurveType';
            };
          };
        },
        {
          name: 'collateralsPerToken';
          type: 'u64';
        },
        {
          name: 'tokenLendingApr';
          type: 'u64';
        },
        {
          name: 'pythLiquidationLtvBp';
          type: 'u64';
        },
        {
          name: 'offerLtvBp';
          type: 'u64';
        },
      ];
    },
    {
      name: 'createPerpetualListing';
      discriminator: [234, 19, 211, 250, 89, 111, 72, 254];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'fraktBond';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [102, 114, 97, 107, 116, 95, 98, 111, 110, 100];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'arg';
                path: 'randomSeed';
              },
            ];
          };
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  114,
                  97,
                  110,
                  115,
                  97,
                  99,
                  116,
                  105,
                  111,
                  110,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'bondOffer';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  111,
                  102,
                  102,
                  101,
                  114,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'collateralMint';
          writable: true;
        },
        {
          name: 'hadoMarket';
          docs: ['CHECK token_mint'];
          writable: true;
        },
        {
          name: 'userTokenAccount';
          docs: ['CHECK token_mint'];
          writable: true;
        },
        {
          name: 'metadata';
          writable: true;
        },
        {
          name: 'edition';
          writable: true;
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
      ];
      args: [
        {
          name: 'randomSeed';
          type: 'u64';
        },
        {
          name: 'amountOfSolToGet';
          type: 'u64';
        },
        {
          name: 'aprRate';
          type: 'u64';
        },
        {
          name: 'isBorrowerListing';
          type: 'bool';
        },
        {
          name: 'lendingToken';
          type: {
            defined: {
              name: 'lendingTokenType';
            };
          };
        },
        {
          name: 'terminationFreeze';
          type: 'u64';
        },
      ];
    },
    {
      name: 'createPerpetualListingCnft';
      discriminator: [203, 27, 190, 189, 91, 110, 204, 34];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'fraktBond';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [102, 114, 97, 107, 116, 95, 98, 111, 110, 100];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'arg';
                path: 'randomSeed';
              },
            ];
          };
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  114,
                  97,
                  110,
                  115,
                  97,
                  99,
                  116,
                  105,
                  111,
                  110,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'bondOffer';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  111,
                  102,
                  102,
                  101,
                  114,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'whitelistEntry';
        },
        {
          name: 'merkleTree';
          writable: true;
        },
        {
          name: 'hadoMarketValidation';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  104,
                  97,
                  100,
                  111,
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  95,
                  118,
                  97,
                  108,
                  105,
                  100,
                  97,
                  116,
                  105,
                  111,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'hadoMarket';
              },
            ];
          };
        },
        {
          name: 'bubblegumProgram';
          writable: true;
          address: 'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY';
        },
        {
          name: 'hadoMarket';
          writable: true;
        },
        {
          name: 'treeAuthority';
          docs: ['CHECK tree_authority'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'merkleTree';
              },
            ];
            program: {
              kind: 'account';
              path: 'bubblegumProgram';
            };
          };
        },
      ];
      args: [
        {
          name: 'randomSeed';
          type: 'u64';
        },
        {
          name: 'amountOfSolToGet';
          type: 'u64';
        },
        {
          name: 'aprRate';
          type: 'u64';
        },
        {
          name: 'isBorrowerListing';
          type: 'bool';
        },
        {
          name: 'lendingToken';
          type: {
            defined: {
              name: 'lendingTokenType';
            };
          };
        },
        {
          name: 'terminationFreeze';
          type: 'u64';
        },
        {
          name: 'root';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'dataHash';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'nonce';
          type: 'u64';
        },
        {
          name: 'index';
          type: 'u32';
        },
        {
          name: 'proofLen';
          type: 'u8';
        },
      ];
    },
    {
      name: 'createPerpetualListingCore';
      discriminator: [99, 120, 255, 26, 230, 110, 76, 76];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'fraktBond';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [102, 114, 97, 107, 116, 95, 98, 111, 110, 100];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'arg';
                path: 'randomSeed';
              },
            ];
          };
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  114,
                  97,
                  110,
                  115,
                  97,
                  99,
                  116,
                  105,
                  111,
                  110,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'bondOffer';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  111,
                  102,
                  102,
                  101,
                  114,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'hadoMarket';
          writable: true;
        },
        {
          name: 'mplCoreProgram';
          address: 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d';
        },
        {
          name: 'nftAsset';
          writable: true;
        },
        {
          name: 'collection';
          writable: true;
        },
        {
          name: 'logWrapper';
          writable: true;
          address: 'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV';
        },
      ];
      args: [
        {
          name: 'randomSeed';
          type: 'u64';
        },
        {
          name: 'amountOfSolToGet';
          type: 'u64';
        },
        {
          name: 'aprRate';
          type: 'u64';
        },
        {
          name: 'isBorrowerListing';
          type: 'bool';
        },
        {
          name: 'lendingToken';
          type: {
            defined: {
              name: 'lendingTokenType';
            };
          };
        },
        {
          name: 'terminationFreeze';
          type: 'u64';
        },
      ];
    },
    {
      name: 'createPerpetualListingSpl';
      discriminator: [226, 67, 231, 102, 184, 29, 0, 109];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'fraktBond';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [102, 114, 97, 107, 116, 95, 98, 111, 110, 100];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'arg';
                path: 'randomSeed';
              },
            ];
          };
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  114,
                  97,
                  110,
                  115,
                  97,
                  99,
                  116,
                  105,
                  111,
                  110,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'bondOffer';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  111,
                  102,
                  102,
                  101,
                  114,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
        {
          name: 'mutualBondVaultSplInTokenAccount';
          docs: ['CHECK vault for tokens'];
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'splInTokenMint';
          writable: true;
        },
        {
          name: 'lendingToken';
          writable: true;
        },
        {
          name: 'hadoMarket';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          docs: ['CHECK token_mint'];
          writable: true;
        },
      ];
      args: [
        {
          name: 'randomSeed';
          type: 'u64';
        },
        {
          name: 'amountOfSolToGet';
          type: 'u64';
        },
        {
          name: 'aprRate';
          type: 'u64';
        },
        {
          name: 'isBorrowerListing';
          type: 'bool';
        },
        {
          name: 'terminationFreeze';
          type: 'u64';
        },
        {
          name: 'collateralsPerToken';
          type: 'u64';
        },
        {
          name: 'amountToSend';
          type: 'u64';
        },
        {
          name: 'liquidationLtvBp';
          type: 'u64';
        },
        {
          name: 'offerLtvBp';
          type: 'u64';
        },
      ];
    },
    {
      name: 'createPerpetualListingStakedBanx';
      discriminator: [163, 0, 139, 8, 160, 62, 250, 89];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'fraktBond';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [102, 114, 97, 107, 116, 95, 98, 111, 110, 100];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'arg';
                path: 'randomSeed';
              },
            ];
          };
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  114,
                  97,
                  110,
                  115,
                  97,
                  99,
                  116,
                  105,
                  111,
                  110,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'bondOffer';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  111,
                  102,
                  102,
                  101,
                  114,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'banxStake';
          writable: true;
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'collateralMint';
          writable: true;
        },
        {
          name: 'hadoMarket';
          docs: ['CHECK token_mint'];
          writable: true;
        },
        {
          name: 'uninitializedBanxPointMap';
          docs: ['CHECK token_mint'];
          writable: true;
        },
        {
          name: 'userTokenAccount';
          docs: ['CHECK token_mint'];
          writable: true;
        },
        {
          name: 'metadata';
          writable: true;
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
      ];
      args: [
        {
          name: 'randomSeed';
          type: 'u64';
        },
        {
          name: 'amountOfSolToGet';
          type: 'u64';
        },
        {
          name: 'aprRate';
          type: 'u64';
        },
        {
          name: 'isBorrowerListing';
          type: 'bool';
        },
        {
          name: 'lendingToken';
          type: {
            defined: {
              name: 'lendingTokenType';
            };
          };
        },
        {
          name: 'terminationFreeze';
          type: 'u64';
        },
      ];
    },
    {
      name: 'createPerpetualSellListingSpl';
      discriminator: [157, 139, 66, 229, 117, 150, 63, 157];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'userReciver';
          docs: ['CHECK listing reciver'];
          writable: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  114,
                  97,
                  110,
                  115,
                  97,
                  99,
                  116,
                  105,
                  111,
                  110,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'arg';
                path: 'randomSeed';
              },
            ];
          };
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'bondTradeTransaction';
              },
            ];
          };
        },
        {
          name: 'mutualBondVaultSplInTokenAccount';
          docs: ['CHECK vault for tokens'];
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'protocolFeeReceiver';
          writable: true;
          address: 'revJ8QJgQ3xCcZ6CMykjsmGMYdg8Pj9WnqgJZBHBwSK';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'collateralTokenMint';
          writable: true;
        },
        {
          name: 'lendingToken';
          writable: true;
        },
        {
          name: 'hadoMarket';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          docs: ['CHECK token_mint'];
          writable: true;
        },
      ];
      args: [
        {
          name: 'randomSeed';
          type: 'u64';
        },
        {
          name: 'amountToGet';
          type: 'u64';
        },
        {
          name: 'amountToSend';
          type: 'u64';
        },
      ];
    },
    {
      name: 'finishHadoMarket';
      discriminator: [50, 229, 33, 3, 64, 49, 192, 109];
      accounts: [
        {
          name: 'hadoMarket';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'fixBrokenBanxStake';
      discriminator: [193, 73, 169, 201, 193, 157, 136, 95];
      accounts: [
        {
          name: 'banxStake';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
          address: 'HAmVVqzQHz4Bk46Rncochq6QkmNjykM4SeXjtmVXusBi';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'flashLoanBanxSolEnd';
      discriminator: [242, 27, 205, 223, 152, 79, 37, 77];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'banxSolSwapVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  111,
                  108,
                  95,
                  115,
                  119,
                  97,
                  112,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'banxSolMint';
          writable: true;
          address: 'BANXyWgPpa519e2MtQF1ecRbKYKKDMXPF1dyBxUq9NQG';
        },
        {
          name: 'userTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'banxSolMint';
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
          name: 'banxSolSwapVaultTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'banxSolSwapVault';
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
                path: 'banxSolMint';
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
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
      ];
      args: [
        {
          name: 'banxSolAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'flashLoanSolBegin';
      discriminator: [195, 123, 104, 179, 247, 103, 61, 247];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'banxSolSwapVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  111,
                  108,
                  95,
                  115,
                  119,
                  97,
                  112,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'instructions';
          docs: ['CHECK : instructions'];
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'solAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'initializeHadoMarket';
      discriminator: [145, 48, 109, 227, 34, 37, 70, 201];
      accounts: [
        {
          name: 'hadoMarket';
          writable: true;
          signer: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'validationAdapterProgram';
          docs: ['CHECK Custom validation adapter'];
        },
        {
          name: 'pairTokenMint';
          docs: ['CHECK Custom token mint'];
          address: '11111111111111111111111111111111';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'marketParams';
          type: {
            defined: {
              name: 'initializeHadoMarketParams';
            };
          };
        },
      ];
    },
    {
      name: 'instantRefinancePerpetualLoan';
      discriminator: [136, 236, 66, 20, 30, 145, 214, 253];
      accounts: [
        {
          name: 'fbond';
          writable: true;
        },
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'oldBondOffer';
          docs: ['CHECK old_bond_offer'];
          writable: true;
        },
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'bond_offer.asset_receiver';
                account: 'bondOfferV3';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'oldLenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'old_bond_offer.asset_receiver';
                account: 'bondOfferV3';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  97,
                  117,
                  116,
                  111,
                  99,
                  111,
                  109,
                  112,
                  111,
                  117,
                  110,
                  100,
                  95,
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'fbond';
              },
              {
                kind: 'account';
                path: 'bondOffer';
              },
              {
                kind: 'account';
                path: 'oldBondTradeTransaction';
              },
              {
                kind: 'const';
                value: [49];
              },
              {
                kind: 'const';
                value: [49];
              },
            ];
          };
        },
        {
          name: 'oldBondTradeTransaction';
          writable: true;
        },
        {
          name: 'hadoMarket';
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'protocolFeeReceiver';
          writable: true;
          address: 'revJ8QJgQ3xCcZ6CMykjsmGMYdg8Pj9WnqgJZBHBwSK';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'userSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'vaultSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'oldVaultSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
      ];
      args: [
        {
          name: 'newApr';
          type: 'u64';
        },
      ];
    },
    {
      name: 'lendToBorrowerListing';
      discriminator: [52, 85, 47, 164, 17, 155, 224, 57];
      accounts: [
        {
          name: 'fbond';
          writable: true;
        },
        {
          name: 'bondOfferV2';
          writable: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  97,
                  117,
                  116,
                  111,
                  99,
                  111,
                  109,
                  112,
                  111,
                  117,
                  110,
                  100,
                  95,
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'fbond';
              },
              {
                kind: 'account';
                path: 'bondOfferV2';
              },
              {
                kind: 'const';
                value: [49];
              },
              {
                kind: 'const';
                value: [49];
              },
            ];
          };
        },
        {
          name: 'oldBondTradeTransaction';
          writable: true;
        },
        {
          name: 'hadoMarket';
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'protocolFeeReceiver';
          writable: true;
          address: 'revJ8QJgQ3xCcZ6CMykjsmGMYdg8Pj9WnqgJZBHBwSK';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
      ];
      args: [];
    },
    {
      name: 'makePerpetualMarket';
      discriminator: [32, 143, 126, 85, 211, 203, 172, 49];
      accounts: [
        {
          name: 'hadoMarket';
          writable: true;
          signer: true;
        },
        {
          name: 'fraktMarket';
          relations: ['whitelistEntry'];
        },
        {
          name: 'hadoRegistry';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  104,
                  97,
                  100,
                  111,
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                ];
              },
              {
                kind: 'account';
                path: 'hadoMarket';
              },
            ];
          };
        },
        {
          name: 'whitelistEntry';
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'marketParams';
          type: {
            defined: {
              name: 'makePerpetualMarketParams';
            };
          };
        },
      ];
    },
    {
      name: 'makePerpetualMarketValidation';
      discriminator: [102, 250, 69, 239, 251, 240, 86, 39];
      accounts: [
        {
          name: 'hadoMarket';
          writable: true;
        },
        {
          name: 'hadoMarketValidation';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  104,
                  97,
                  100,
                  111,
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  95,
                  118,
                  97,
                  108,
                  105,
                  100,
                  97,
                  116,
                  105,
                  111,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'hadoMarket';
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'creatorHash';
          type: {
            array: ['u8', 32];
          };
        },
      ];
    },
    {
      name: 'manageVaultAdmin';
      discriminator: [11, 158, 170, 108, 158, 139, 235, 44];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
          address: 'F32YNAMnYfXiD8wySM77RnqscnfWT4QTTxSAq4X9djMg';
        },
        {
          name: 'banxSolMint';
          writable: true;
          address: 'BANXyWgPpa519e2MtQF1ecRbKYKKDMXPF1dyBxUq9NQG';
        },
        {
          name: 'userTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'banxSolMint';
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
          name: 'banxSolSwapVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  111,
                  108,
                  95,
                  115,
                  119,
                  97,
                  112,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'banxSolSwapVaultTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'banxSolSwapVault';
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
                path: 'banxSolMint';
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
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'solAmountToDeposit';
          type: 'u64';
        },
        {
          name: 'banxSolAmountToWithdraw';
          type: 'u64';
        },
      ];
    },
    {
      name: 'mapBanxToPoints';
      discriminator: [185, 7, 234, 223, 166, 75, 3, 65];
      accounts: [
        {
          name: 'banxPointsMap';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 97, 110, 120, 95, 112, 111, 105, 110, 116, 115, 95, 109, 97, 112];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              },
            ];
          };
        },
        {
          name: 'tokenMint';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'playerPoints';
          type: 'u64';
        },
        {
          name: 'partnerPoints';
          type: 'u64';
        },
      ];
    },
    {
      name: 'migrateBondOfferLenderVault';
      discriminator: [137, 91, 28, 6, 167, 87, 35, 166];
      accounts: [
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'bond_offer.asset_receiver';
                account: 'bondOfferV3';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'migrateOfferHadomarket';
      discriminator: [70, 162, 247, 129, 144, 130, 188, 62];
      accounts: [
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'hadoMarket';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
          address: 'HAmVVqzQHz4Bk46Rncochq6QkmNjykM4SeXjtmVXusBi';
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
          name: 'typeFeed';
          type: {
            defined: {
              name: 'oraclePriceFeedType';
            };
          };
        },
      ];
    },
    {
      name: 'patchBanxTokenStakeAdmin';
      discriminator: [40, 29, 207, 207, 139, 62, 95, 92];
      accounts: [
        {
          name: 'banxTokenStake';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'nftsAmount';
          type: 'u64';
        },
        {
          name: 'partnerPointsAmount';
          type: 'u64';
        },
        {
          name: 'playerPointsAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'patchBidCapInOffer';
      discriminator: [73, 175, 91, 226, 57, 2, 190, 70];
      accounts: [
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'oldBondTradeTransaction';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
          address: 'HAmVVqzQHz4Bk46Rncochq6QkmNjykM4SeXjtmVXusBi';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'isSpl';
          type: 'bool';
        },
      ];
    },
    {
      name: 'patchOffer';
      discriminator: [176, 183, 106, 116, 239, 46, 205, 219];
      accounts: [
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'patchParialRepayBttRedeemResult';
      discriminator: [43, 6, 28, 96, 191, 199, 16, 169];
      accounts: [
        {
          name: 'bondTradeTransactionV3';
          writable: true;
        },
        {
          name: 'fbond';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
      ];
      args: [];
    },
    {
      name: 'reallocHadomarket';
      discriminator: [212, 155, 250, 125, 73, 152, 179, 191];
      accounts: [
        {
          name: 'hadoMarket';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
          address: 'HAmVVqzQHz4Bk46Rncochq6QkmNjykM4SeXjtmVXusBi';
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
      name: 'refinancePerpetualLoan';
      discriminator: [158, 239, 154, 119, 143, 198, 43, 213];
      accounts: [
        {
          name: 'fbond';
          writable: true;
        },
        {
          name: 'bondOffer';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  111,
                  110,
                  100,
                  95,
                  111,
                  102,
                  102,
                  101,
                  114,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'arg';
                path: 'bondOfferRandomSeed';
              },
            ];
          };
        },
        {
          name: 'oldBondOffer';
          writable: true;
        },
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'oldLenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'old_bond_offer.asset_receiver';
                account: 'bondOfferV3';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  97,
                  117,
                  116,
                  111,
                  99,
                  111,
                  109,
                  112,
                  111,
                  117,
                  110,
                  100,
                  95,
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'fbond';
              },
              {
                kind: 'account';
                path: 'bondOffer';
              },
              {
                kind: 'const';
                value: [49];
              },
              {
                kind: 'const';
                value: [49];
              },
            ];
          };
        },
        {
          name: 'oldBondTradeTransaction';
          writable: true;
        },
        {
          name: 'hadoMarket';
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
      ];
      args: [
        {
          name: 'bondOfferRandomSeed';
          type: 'u64';
        },
        {
          name: 'newApr';
          type: 'u64';
        },
        {
          name: 'newLiqLtv';
          type: 'u64';
        },
      ];
    },
    {
      name: 'removePerpetualListing';
      discriminator: [73, 16, 182, 179, 63, 48, 99, 30];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'fraktBond';
          writable: true;
        },
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'metadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
        {
          name: 'authorizationRulesProgram';
          address: 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg';
        },
        {
          name: 'collateralMint';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          docs: ['CHECK token_mint'];
          writable: true;
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
      ];
      args: [
        {
          name: 'isBorrowerListing';
          type: 'bool';
        },
      ];
    },
    {
      name: 'removePerpetualListingCnft';
      discriminator: [62, 204, 90, 59, 198, 12, 169, 247];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'fraktBond';
          writable: true;
        },
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'metadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        },
        {
          name: 'uninitializedTokenMint';
          docs: ['CHECK token_mint'];
          writable: true;
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
        {
          name: 'authorizationRulesProgram';
          address: 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg';
        },
        {
          name: 'treeAuthority';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'merkleTree';
              },
            ];
            program: {
              kind: 'account';
              path: 'bubblegumProgram';
            };
          };
        },
        {
          name: 'merkleTree';
          writable: true;
        },
        {
          name: 'logWrapper';
          writable: true;
          address: 'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV';
        },
        {
          name: 'compressionProgram';
          writable: true;
          address: 'cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK';
        },
        {
          name: 'bubblegumProgram';
          writable: true;
          address: 'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY';
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
      ];
      args: [
        {
          name: 'isBorrowerListing';
          type: 'bool';
        },
        {
          name: 'root';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'dataHash';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'creatorHash';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'nonce';
          type: 'u64';
        },
        {
          name: 'index';
          type: 'u32';
        },
        {
          name: 'proofLen';
          type: 'u8';
        },
      ];
    },
    {
      name: 'removePerpetualListingCore';
      discriminator: [216, 73, 187, 3, 181, 221, 58, 50];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'fraktBond';
          writable: true;
        },
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'mplCoreProgram';
          address: 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d';
        },
        {
          name: 'nftAsset';
          writable: true;
        },
        {
          name: 'collection';
          writable: true;
        },
        {
          name: 'logWrapper';
          writable: true;
          address: 'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV';
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
      ];
      args: [];
    },
    {
      name: 'removePerpetualListingSpl';
      discriminator: [123, 83, 21, 156, 62, 142, 165, 136];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'fraktBond';
          writable: true;
        },
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'mutualBondVaultSplInTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'mutualBondTradeTxnVault';
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
                path: 'collateralMint';
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
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'collateralMint';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          docs: ['CHECK token_mint'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'collateralMint';
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
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
      ];
      args: [
        {
          name: 'isBorrowerListing';
          type: 'bool';
        },
      ];
    },
    {
      name: 'removePerpetualListingStakedBanx';
      discriminator: [13, 197, 23, 221, 231, 122, 27, 170];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'fraktBond';
          writable: true;
        },
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'banxStake';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'rentVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
      ];
      args: [
        {
          name: 'isBorrowerListing';
          type: 'bool';
        },
      ];
    },
    {
      name: 'removePerpetualOffer';
      discriminator: [166, 123, 70, 44, 235, 18, 187, 41];
      accounts: [
        {
          name: 'bondOfferV2';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
      ];
      args: [];
    },
    {
      name: 'removePerpetualSellListingSpl';
      discriminator: [237, 193, 232, 219, 61, 13, 52, 197];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'bondTradeTransaction';
              },
            ];
          };
        },
        {
          name: 'mutualBondVaultSplInTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'mutualBondTradeTxnVault';
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
                path: 'collateralMint';
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
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'collateralMint';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          docs: ['CHECK token_mint'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'collateralMint';
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
      ];
      args: [];
    },
    {
      name: 'repayAdminPerpetualLoan';
      discriminator: [27, 3, 34, 224, 233, 102, 83, 219];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'bond_offer.asset_receiver';
                account: 'bondOfferV3';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'bondOffer';
          docs: ['CHECK bond_offer_v2'];
          writable: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
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
          name: 'repay';
          type: 'bool';
        },
      ];
    },
    {
      name: 'repayCnftPerpetualLoan';
      discriminator: [97, 155, 147, 222, 111, 212, 228, 93];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'bond_offer.asset_receiver';
                account: 'bondOfferV3';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'bondOffer';
          docs: ['CHECK bond_offer_v2'];
          writable: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'treeAuthority';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'merkleTree';
              },
            ];
            program: {
              kind: 'account';
              path: 'bubblegumProgram';
            };
          };
        },
        {
          name: 'merkleTree';
          writable: true;
        },
        {
          name: 'logWrapper';
          writable: true;
          address: 'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV';
        },
        {
          name: 'compressionProgram';
          writable: true;
          address: 'cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK';
        },
        {
          name: 'bubblegumProgram';
          writable: true;
          address: 'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY';
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
      ];
      args: [
        {
          name: 'root';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'dataHash';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'creatorHash';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'nonce';
          type: 'u64';
        },
        {
          name: 'index';
          type: 'u32';
        },
        {
          name: 'proofLen';
          type: 'u8';
        },
      ];
    },
    {
      name: 'repayPartialPerpetualLoan';
      discriminator: [138, 68, 239, 156, 169, 145, 218, 97];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'oldBondOffer';
          writable: true;
        },
        {
          name: 'oldBondTradeTransaction';
          writable: true;
        },
        {
          name: 'repaidBondTradeTransaction';
          writable: true;
          signer: true;
        },
        {
          name: 'fbond';
          writable: true;
        },
        {
          name: 'protocolFeeReceiver';
          writable: true;
          address: 'revJ8QJgQ3xCcZ6CMykjsmGMYdg8Pj9WnqgJZBHBwSK';
        },
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'old_bond_offer.asset_receiver';
                account: 'bondOfferV3';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'userSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'vaultSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
      ];
      args: [
        {
          name: 'fractionToRepay';
          type: 'u64';
        },
      ];
    },
    {
      name: 'repayPerpetualLoan';
      discriminator: [40, 56, 164, 63, 64, 14, 111, 95];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'metadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
        {
          name: 'authorizationRulesProgram';
          address: 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'userSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
      ];
      args: [];
    },
    {
      name: 'repayPerpetualLoanCore';
      discriminator: [126, 238, 197, 206, 22, 26, 83, 44];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'fraktBond';
          writable: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'bond_offer.asset_receiver';
                account: 'bondOfferV3';
              },
              {
                kind: 'account';
                path: 'splOutTokenMint';
              },
            ];
          };
        },
        {
          name: 'bondOfferVaultSplOutTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'lenderVault';
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
                path: 'splOutTokenMint';
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
          name: 'protocolFeeReceiver';
          writable: true;
          address: 'revJ8QJgQ3xCcZ6CMykjsmGMYdg8Pj9WnqgJZBHBwSK';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'splOutTokenMint';
          writable: true;
        },
        {
          name: 'protocolFeeReceiverSplOutTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'userSplOutTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'mplCoreProgram';
          address: 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d';
        },
        {
          name: 'nftAsset';
          writable: true;
        },
        {
          name: 'collection';
          writable: true;
        },
        {
          name: 'logWrapper';
          writable: true;
          address: 'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV';
        },
      ];
      args: [];
    },
    {
      name: 'repayPerpetualLoanSpl';
      discriminator: [249, 121, 147, 149, 156, 240, 16, 57];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'fraktBond';
          writable: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'mutualBondVaultSplInTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'mutualBondTradeTxnVault';
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
                path: 'splInTokenMint';
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
          name: 'userSplInTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'splInTokenMint';
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
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'bond_offer.asset_receiver';
                account: 'bondOfferV3';
              },
              {
                kind: 'account';
                path: 'splOutTokenMint';
              },
            ];
          };
        },
        {
          name: 'bondOfferVaultSplOutTokenAccount';
          writable: true;
        },
        {
          name: 'splInTokenMint';
          writable: true;
        },
        {
          name: 'protocolFeeReceiver';
          writable: true;
          address: 'revJ8QJgQ3xCcZ6CMykjsmGMYdg8Pj9WnqgJZBHBwSK';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'splOutTokenMint';
          writable: true;
        },
      ];
      args: [];
    },
    {
      name: 'repayStakedBanxPerpetualLoan';
      discriminator: [138, 13, 35, 171, 147, 84, 101, 104];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'metadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
        {
          name: 'authorizationRulesProgram';
          address: 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'userSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'protocolFeeReceiverSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
      ];
      args: [];
    },
    {
      name: 'returnAccountRentByAdmin';
      discriminator: [162, 154, 119, 190, 193, 198, 2, 171];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
          address: 'HAmVVqzQHz4Bk46Rncochq6QkmNjykM4SeXjtmVXusBi';
        },
        {
          name: 'userVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'rentOwner';
              },
              {
                kind: 'const';
                value: [
                  150,
                  251,
                  113,
                  246,
                  39,
                  7,
                  116,
                  33,
                  84,
                  55,
                  86,
                  60,
                  238,
                  100,
                  138,
                  141,
                  250,
                  66,
                  70,
                  173,
                  74,
                  254,
                  60,
                  246,
                  152,
                  214,
                  188,
                  246,
                  40,
                  130,
                  150,
                  25,
                ];
              },
            ];
          };
        },
        {
          name: 'rentOwner';
          writable: true;
        },
        {
          name: 'accountToDelete';
          writable: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'revertTerminationPerpetualLoan';
      discriminator: [109, 94, 171, 40, 163, 68, 46, 252];
      accounts: [
        {
          name: 'fbond';
          writable: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
      ];
      args: [];
    },
    {
      name: 'saveProposal';
      discriminator: [62, 157, 175, 51, 250, 111, 176, 202];
      accounts: [
        {
          name: 'proposal';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'arg';
                path: 'name';
              },
              {
                kind: 'arg';
                path: 'week';
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'saveProposalParams';
            };
          };
        },
      ];
    },
    {
      name: 'saveVariant';
      discriminator: [157, 237, 252, 248, 170, 34, 106, 83];
      accounts: [
        {
          name: 'proposalVariant';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'arg';
                path: 'name';
              },
              {
                kind: 'account';
                path: 'proposal';
              },
            ];
          };
        },
        {
          name: 'proposal';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'saveVariantParams';
            };
          };
        },
      ];
    },
    {
      name: 'sellToRepay';
      discriminator: [142, 25, 232, 144, 76, 228, 59, 239];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'fraktBond';
          writable: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'fraktBond';
              },
            ];
          };
        },
        {
          name: 'mutualBondVaultCollateralTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'mutualBondTradeTxnVault';
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
                path: 'collateralMint';
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
          name: 'userCollateralTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'collateralMint';
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
          name: 'collateralMint';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'instructions';
          docs: ['CHECK : instructions'];
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'collateralToSellAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'sendNftByAdmin';
      discriminator: [238, 0, 106, 86, 194, 24, 175, 91];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
          address: 'HAmVVqzQHz4Bk46Rncochq6QkmNjykM4SeXjtmVXusBi';
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'nftType';
          type: {
            defined: {
              name: 'nftType';
            };
          };
        },
        {
          name: 'root';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'dataHash';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'creatorHash';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'nonce';
          type: 'u64';
        },
        {
          name: 'index';
          type: 'u32';
        },
        {
          name: 'proofLen';
          type: 'u8';
        },
      ];
    },
    {
      name: 'setRepaymentCall';
      discriminator: [124, 138, 178, 198, 78, 94, 193, 242];
      accounts: [
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'callAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'stakeBanxNft';
      discriminator: [149, 139, 27, 195, 60, 19, 128, 54];
      accounts: [
        {
          name: 'banxStakingSettings';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115,
                ];
              },
            ];
          };
        },
        {
          name: 'banxStake';
          writable: true;
          signer: true;
        },
        {
          name: 'banxTokenStake';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 97, 110, 120, 95, 116, 111, 107, 101, 110, 95, 115, 116, 97, 107, 101];
              },
              {
                kind: 'account';
                path: 'user';
              },
            ];
          };
        },
        {
          name: 'banxPointsMap';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 97, 110, 120, 95, 112, 111, 105, 110, 116, 115, 95, 109, 97, 112];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenMint';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'tokenMint';
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
          name: 'hadoRegistry';
        },
        {
          name: 'whitelistEntry';
        },
        {
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'metadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        },
        {
          name: 'metadata';
          writable: true;
        },
        {
          name: 'edition';
          writable: true;
        },
        {
          name: 'ownerTokenRecord';
          writable: true;
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
        {
          name: 'authorizationRulesProgram';
          address: 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg';
        },
      ];
      args: [
        {
          name: 'subscribeBanxAdventureParams';
          type: {
            vec: {
              defined: {
                name: 'subscribeBanxAdventureParams';
              };
            };
          };
        },
      ];
    },
    {
      name: 'stakeBanxToken';
      discriminator: [242, 115, 227, 102, 163, 8, 85, 242];
      accounts: [
        {
          name: 'banxStakingSettings';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115,
                ];
              },
            ];
          };
        },
        {
          name: 'banxTokenStake';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 97, 110, 120, 95, 116, 111, 107, 101, 110, 95, 115, 116, 97, 107, 101];
              },
              {
                kind: 'account';
                path: 'user';
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenMint';
          writable: true;
          address: 'BANXbTpN8U2cU41FjPxe2Ti37PiT5cCxLUKDQZuJeMMR';
        },
        {
          name: 'userTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'tokenMint';
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
          name: 'banxStakingVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'banxStakingVaultTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'banxStakingVault';
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
                path: 'tokenMint';
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
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'tokensToStake';
          type: 'u64';
        },
        {
          name: 'subscribeBanxAdventureParams';
          type: {
            vec: {
              defined: {
                name: 'subscribeBanxAdventureParams';
              };
            };
          };
        },
      ];
    },
    {
      name: 'subscribeBanxAdventure';
      discriminator: [89, 223, 244, 131, 201, 18, 160, 116];
      accounts: [
        {
          name: 'banxStakingSettings';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115,
                ];
              },
            ];
          };
        },
        {
          name: 'banxTokenStake';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 97, 110, 120, 95, 116, 111, 107, 101, 110, 95, 115, 116, 97, 107, 101];
              },
              {
                kind: 'account';
                path: 'user';
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'subscribeBanxAdventureParams';
          type: {
            vec: {
              defined: {
                name: 'subscribeBanxAdventureParams';
              };
            };
          };
        },
      ];
    },
    {
      name: 'subscribeBanxAdventureAdmin';
      discriminator: [133, 142, 216, 193, 187, 144, 112, 25];
      accounts: [
        {
          name: 'banxStakingSettings';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115,
                ];
              },
            ];
          };
        },
        {
          name: 'banxTokenStake';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 97, 110, 120, 95, 116, 111, 107, 101, 110, 95, 115, 116, 97, 107, 101];
              },
              {
                kind: 'account';
                path: 'banxTokenStakeUser';
              },
            ];
          };
        },
        {
          name: 'banxTokenStakeUser';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'subscribeBanxAdventureParams';
          type: {
            vec: {
              defined: {
                name: 'subscribeBanxAdventureParams';
              };
            };
          };
        },
      ];
    },
    {
      name: 'swapBanxSol';
      discriminator: [218, 128, 220, 185, 102, 196, 250, 118];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'banxSolMint';
          writable: true;
          address: 'BANXyWgPpa519e2MtQF1ecRbKYKKDMXPF1dyBxUq9NQG';
        },
        {
          name: 'userTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'banxSolMint';
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
          name: 'banxSolSwapVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  111,
                  108,
                  95,
                  115,
                  119,
                  97,
                  112,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'banxSolSwapVaultTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'banxSolSwapVault';
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
                path: 'banxSolMint';
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
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'banxSolAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'terminatePerpetualLoan';
      discriminator: [50, 99, 124, 192, 16, 106, 78, 113];
      accounts: [
        {
          name: 'fbond';
          writable: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'bondOffer';
          writable: true;
        },
      ];
      args: [
        {
          name: 'startLiquidation';
          type: 'bool';
        },
      ];
    },
    {
      name: 'terminatePerpetualLoanOracleLtv';
      discriminator: [34, 107, 105, 197, 104, 36, 203, 41];
      accounts: [
        {
          name: 'fbond';
          writable: true;
        },
        {
          name: 'bondOffer';
          writable: true;
        },
        {
          name: 'bondTradeTransaction';
          writable: true;
        },
        {
          name: 'hadoMarket';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'transferToSponsorVault';
      discriminator: [77, 108, 244, 20, 153, 220, 102, 39];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'sponsorVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
      ];
      args: [
        {
          name: 'solToTransfer';
          type: 'u64';
        },
      ];
    },
    {
      name: 'unstakeBanxNft';
      discriminator: [209, 16, 56, 47, 174, 215, 243, 218];
      accounts: [
        {
          name: 'banxStakingSettings';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115,
                ];
              },
            ];
          };
        },
        {
          name: 'banxStake';
          writable: true;
        },
        {
          name: 'banxTokenStake';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 97, 110, 120, 95, 116, 111, 107, 101, 110, 95, 115, 116, 97, 107, 101];
              },
              {
                kind: 'account';
                path: 'user';
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
          relations: ['banxStake'];
        },
        {
          name: 'tokenMint';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'tokenMint';
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
          name: 'mutualBondTradeTxnVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  117,
                  116,
                  117,
                  97,
                  108,
                  95,
                  98,
                  111,
                  110,
                  100,
                  95,
                  116,
                  114,
                  97,
                  100,
                  101,
                  95,
                  116,
                  120,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'metadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        },
        {
          name: 'editionInfo';
        },
        {
          name: 'nftMetadata';
          writable: true;
        },
        {
          name: 'instructions';
          address: 'Sysvar1nstructions1111111111111111111111111';
        },
        {
          name: 'authorizationRulesProgram';
          address: 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg';
        },
        {
          name: 'authRules';
        },
        {
          name: 'ownerTokenRecord';
          writable: true;
        },
        {
          name: 'destTokenRecord';
          writable: true;
        },
      ];
      args: [];
    },
    {
      name: 'unstakeBanxTokens';
      discriminator: [220, 93, 238, 171, 107, 40, 167, 73];
      accounts: [
        {
          name: 'banxStakingSettings';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115,
                ];
              },
            ];
          };
        },
        {
          name: 'banxTokenStake';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 97, 110, 120, 95, 116, 111, 107, 101, 110, 95, 115, 116, 97, 107, 101];
              },
              {
                kind: 'account';
                path: 'user';
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenMint';
          writable: true;
          address: 'BANXbTpN8U2cU41FjPxe2Ti37PiT5cCxLUKDQZuJeMMR';
        },
        {
          name: 'userTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'tokenMint';
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
          name: 'banxStakingVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'banxStakingVaultTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'banxStakingVault';
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
                path: 'tokenMint';
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
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'tokensToUnstake';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateBanxStakingSettings';
      discriminator: [214, 216, 254, 86, 204, 111, 146, 242];
      accounts: [
        {
          name: 'banxStakingSettings';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115,
                ];
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'maxTokenStakeAmount';
          type: 'u64';
        },
        {
          name: 'tokensPerPartnerPoints';
          type: 'u64';
        },
        {
          name: 'tokensPerWeek';
          type: 'u64';
        },
        {
          name: 'hadesPerWeek';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateHadoMarketFee';
      discriminator: [17, 242, 249, 155, 215, 175, 182, 231];
      accounts: [
        {
          name: 'hadoMarket';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'newFee';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateInterestPerpetualMarket';
      discriminator: [133, 198, 49, 132, 175, 207, 118, 213];
      accounts: [
        {
          name: 'hadoMarket';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'interestFee';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateLiquidityUserVault';
      discriminator: [20, 186, 139, 212, 126, 127, 202, 83];
      accounts: [
        {
          name: 'lenderVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  112,
                  114,
                  101,
                  102,
                  105,
                  120,
                ];
              },
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'splTokenMint';
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'userSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'vaultSplTokenAccountUninitialized';
          writable: true;
        },
        {
          name: 'splTokenMint';
          writable: true;
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u128';
        },
        {
          name: 'add';
          type: 'bool';
        },
      ];
    },
    {
      name: 'updatePerpetualMarket';
      discriminator: [189, 79, 127, 183, 99, 245, 10, 62];
      accounts: [
        {
          name: 'hadoMarket';
          writable: true;
        },
        {
          name: 'fraktMarket';
          relations: ['whitelistEntry'];
        },
        {
          name: 'hadoRegistry';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  104,
                  97,
                  100,
                  111,
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                ];
              },
              {
                kind: 'account';
                path: 'hadoMarket';
              },
            ];
          };
        },
        {
          name: 'whitelistEntry';
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'updatePerpetualOfferBonding';
      discriminator: [0, 66, 226, 48, 223, 217, 107, 135];
      accounts: [
        {
          name: 'bondOfferV2';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
      ];
      args: [
        {
          name: 'loanValue';
          type: 'u64';
        },
        {
          name: 'quantityOfLoans';
          type: 'u64';
        },
        {
          name: 'collateralsPerToken';
          type: 'u64';
        },
        {
          name: 'tokenLendingApr';
          type: 'u64';
        },
        {
          name: 'pythLiquidationLtvBp';
          type: 'u64';
        },
        {
          name: 'offerLtvBp';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateSplOracleLtvMarket';
      discriminator: [207, 114, 61, 210, 118, 136, 59, 146];
      accounts: [
        {
          name: 'hadoMarket';
          writable: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'collateralDecimals';
          type: 'u64';
        },
        {
          name: 'priceFeedSolana';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'priceFeedUsdc';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'solanaOracleFeedType';
          type: {
            defined: {
              name: 'oraclePriceFeedType';
            };
          };
        },
        {
          name: 'usdcOracleFeedType';
          type: {
            defined: {
              name: 'oraclePriceFeedType';
            };
          };
        },
      ];
    },
    {
      name: 'vote';
      discriminator: [227, 110, 155, 23, 136, 126, 172, 25];
      accounts: [
        {
          name: 'proposal';
          writable: true;
        },
        {
          name: 'adventure';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 97, 110, 120, 95, 97, 100, 118, 101, 110, 116, 117, 114, 101];
              },
              {
                kind: 'account';
                path: 'proposal';
              },
            ];
          };
        },
        {
          name: 'vote';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'proposal';
              },
            ];
          };
        },
        {
          name: 'proposalVariant';
          writable: true;
        },
        {
          name: 'previousProposalVariant';
          writable: true;
        },
        {
          name: 'adventureSubscription';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  97,
                  100,
                  118,
                  101,
                  110,
                  116,
                  117,
                  114,
                  101,
                  95,
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'adventure';
              },
              {
                kind: 'account';
                path: 'user';
              },
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'withdrawBanxSolRewards';
      discriminator: [172, 233, 153, 114, 32, 121, 221, 89];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
          address: 'F32YNAMnYfXiD8wySM77RnqscnfWT4QTTxSAq4X9djMg';
        },
        {
          name: 'banxSolMint';
          writable: true;
          address: 'BANXyWgPpa519e2MtQF1ecRbKYKKDMXPF1dyBxUq9NQG';
        },
        {
          name: 'userTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'banxSolMint';
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
          name: 'banxSolSwapVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  114,
                  101,
                  119,
                  97,
                  114,
                  100,
                  115,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'banxSolSwapVaultTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'banxSolSwapVault';
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
                path: 'banxSolMint';
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
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
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
      name: 'withdrawFromSponsorVault';
      discriminator: [31, 252, 49, 11, 185, 120, 126, 74];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
          address: 'HAmVVqzQHz4Bk46Rncochq6QkmNjykM4SeXjtmVXusBi';
        },
        {
          name: 'sponsorVault';
          docs: ['CHECK sponsor vault'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [114, 101, 110, 116, 95, 118, 97, 117, 108, 116];
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'amountOfSolToWithdraw';
          type: 'u64';
        },
      ];
    },
    {
      name: 'withdrawRewardAdmin';
      discriminator: [185, 60, 78, 112, 165, 133, 255, 144];
      accounts: [
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenMint';
          writable: true;
          address: 'BANXbTpN8U2cU41FjPxe2Ti37PiT5cCxLUKDQZuJeMMR';
        },
        {
          name: 'userTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
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
                path: 'tokenMint';
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
          name: 'banxStakingVault';
          docs: ['CHECK vault for sol'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  98,
                  97,
                  110,
                  120,
                  95,
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: 'banxStakingVaultTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'banxStakingVault';
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
                path: 'tokenMint';
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
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'amountOfTokensToWithdraw';
          type: 'u64';
        },
      ];
    },
  ];
  accounts: [
    {
      name: 'banxAdventure';
      discriminator: [113, 125, 157, 153, 121, 233, 163, 231];
    },
    {
      name: 'banxAdventureSubscription';
      discriminator: [67, 164, 84, 122, 132, 199, 204, 226];
    },
    {
      name: 'banxPointsMap';
      discriminator: [164, 146, 232, 43, 80, 104, 13, 253];
    },
    {
      name: 'banxStake';
      discriminator: [251, 246, 4, 139, 155, 219, 47, 8];
    },
    {
      name: 'banxStakingSettings';
      discriminator: [66, 9, 15, 129, 5, 178, 43, 108];
    },
    {
      name: 'banxTokenStake';
      discriminator: [233, 60, 55, 117, 102, 180, 229, 154];
    },
    {
      name: 'bondOfferV3';
      discriminator: [54, 96, 254, 195, 217, 91, 187, 104];
    },
    {
      name: 'bondTradeTransactionV3';
      discriminator: [203, 220, 99, 58, 119, 173, 245, 89];
    },
    {
      name: 'fraktBond';
      discriminator: [139, 122, 159, 244, 79, 123, 251, 125];
    },
    {
      name: 'fraktMarket';
      discriminator: [156, 52, 124, 57, 204, 15, 211, 221];
    },
    {
      name: 'hadoMarket';
      discriminator: [83, 247, 242, 74, 154, 186, 176, 235];
    },
    {
      name: 'hadoMarketRegistry';
      discriminator: [20, 195, 243, 187, 45, 222, 3, 114];
    },
    {
      name: 'hadoMarketValidation';
      discriminator: [87, 58, 172, 178, 12, 147, 124, 226];
    },
    {
      name: 'proposal';
      discriminator: [26, 94, 189, 187, 116, 136, 53, 33];
    },
    {
      name: 'proposalVariant';
      discriminator: [20, 129, 187, 127, 23, 130, 231, 154];
    },
    {
      name: 'proposalVote';
      discriminator: [65, 232, 198, 107, 71, 106, 252, 40];
    },
    {
      name: 'userVault';
      discriminator: [23, 76, 96, 159, 210, 10, 5, 22];
    },
    {
      name: 'whitelistEntry';
      discriminator: [51, 70, 173, 81, 219, 192, 234, 62];
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'invalidWeek';
      msg: 'Invalid week';
    },
    {
      code: 6001;
      name: 'invalidPreviousVariant';
      msg: 'Invalid previous variant';
    },
    {
      code: 6002;
      name: 'proposalIsNotActive';
      msg: 'Proposal is not active';
    },
  ];
  types: [
    {
      name: 'authorizationDataLocal';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'payload';
            type: {
              vec: {
                defined: {
                  name: 'taggedPayload';
                };
              };
            };
          },
        ];
      };
    },
    {
      name: 'banxAdventure';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'adventureState';
            type: {
              defined: {
                name: 'banxAdventureState';
              };
            };
          },
          {
            name: 'tokensPerPoints';
            type: 'u64';
          },
          {
            name: 'week';
            type: 'u64';
          },
          {
            name: 'periodStartedAt';
            type: 'u64';
          },
          {
            name: 'periodEndingAt';
            type: 'u64';
          },
          {
            name: 'rewardsToBeDistributed';
            type: 'u64';
          },
          {
            name: 'totalPartnerPoints';
            type: 'u64';
          },
          {
            name: 'totalPlayerPoints';
            type: 'u64';
          },
          {
            name: 'totalTokensStaked';
            type: 'u64';
          },
          {
            name: 'totalBanxSubscribed';
            type: 'u64';
          },
          {
            name: 'amountOfTokensHarvested';
            type: 'u64';
          },
          {
            name: 'placeholderOne';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'banxAdventureState';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'none';
          },
          {
            name: 'active';
          },
        ];
      };
    },
    {
      name: 'banxAdventureSubscription';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'adventureSubscriptionState';
            type: {
              defined: {
                name: 'banxAdventureSubscriptionState';
              };
            };
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'adventure';
            type: 'pubkey';
          },
          {
            name: 'banxTokenStake';
            type: 'pubkey';
          },
          {
            name: 'stakeTokensAmount';
            type: 'u64';
          },
          {
            name: 'stakeNftAmount';
            type: 'u64';
          },
          {
            name: 'stakePartnerPointsAmount';
            type: 'u64';
          },
          {
            name: 'stakePlayerPointsAmount';
            type: 'u64';
          },
          {
            name: 'subscribedAt';
            type: 'u64';
          },
          {
            name: 'unsubscribedAt';
            type: 'u64';
          },
          {
            name: 'harvestedAt';
            type: 'u64';
          },
          {
            name: 'amountOfTokensHarvested';
            type: 'u64';
          },
          {
            name: 'amountOfHadesTokensHarvested';
            type: 'u64';
          },
          {
            name: 'placeholderTwo';
            type: 'u64';
          },
          {
            name: 'placeholderThree';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'banxAdventureSubscriptionState';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'none';
          },
          {
            name: 'active';
          },
          {
            name: 'claimed';
          },
        ];
      };
    },
    {
      name: 'banxPointsMap';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'banxMint';
            type: 'pubkey';
          },
          {
            name: 'playerPoints';
            type: 'u64';
          },
          {
            name: 'partnerPoints';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'banxStake';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'banxStakeState';
            type: {
              defined: {
                name: 'banxStakeState';
              };
            };
          },
          {
            name: 'adventureSubscriptionsQuantity';
            type: 'u64';
          },
          {
            name: 'nftMint';
            type: 'pubkey';
          },
          {
            name: 'collateralTokenAccount';
            type: 'pubkey';
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'stakedAt';
            type: 'u64';
          },
          {
            name: 'unstakedOrLiquidatedAt';
            type: 'u64';
          },
          {
            name: 'isLoaned';
            type: 'bool';
          },
          {
            name: 'bond';
            type: 'pubkey';
          },
          {
            name: 'playerPoints';
            type: 'u64';
          },
          {
            name: 'partnerPoints';
            type: 'u64';
          },
          {
            name: 'farmedAmount';
            type: 'u64';
          },
          {
            name: 'placeholderOne';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'banxStakeState';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'staked';
          },
          {
            name: 'unstaked';
          },
          {
            name: 'liquidated';
          },
        ];
      };
    },
    {
      name: 'banxStakingSettings';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'banxStakingSettingsState';
            type: {
              defined: {
                name: 'banxStakingSettingsState';
              };
            };
          },
          {
            name: 'maxTokenStakeAmount';
            type: 'u64';
          },
          {
            name: 'tokensPerPartnerPoints';
            type: 'u64';
          },
          {
            name: 'tokensStaked';
            type: 'u64';
          },
          {
            name: 'banxStaked';
            type: 'u64';
          },
          {
            name: 'tokensPerWeek';
            type: 'u64';
          },
          {
            name: 'rewardsHarvested';
            type: 'u64';
          },
          {
            name: 'hadesPerWeek';
            type: 'u64';
          },
          {
            name: 'placeholderTwo';
            type: 'u64';
          },
          {
            name: 'placeholderThree';
            type: 'u64';
          },
          {
            name: 'placeholderFour';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'banxStakingSettingsState';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'none';
          },
          {
            name: 'active';
          },
        ];
      };
    },
    {
      name: 'banxTokenStake';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'banxStakeState';
            type: {
              defined: {
                name: 'banxTokenStakeState';
              };
            };
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'adventureSubscriptionsQuantity';
            type: 'u64';
          },
          {
            name: 'tokensStaked';
            type: 'u64';
          },
          {
            name: 'partnerPointsStaked';
            type: 'u64';
          },
          {
            name: 'playerPointsStaked';
            type: 'u64';
          },
          {
            name: 'banxNftsStakedQuantity';
            type: 'u64';
          },
          {
            name: 'stakedAt';
            type: 'u64';
          },
          {
            name: 'unstakedAt';
            type: 'u64';
          },
          {
            name: 'farmedAmount';
            type: 'u64';
          },
          {
            name: 'nftsStakedAt';
            type: 'u64';
          },
          {
            name: 'nftsUnstakedAt';
            type: 'u64';
          },
          {
            name: 'placeholderOne';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'banxTokenStakeState';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'none';
          },
          {
            name: 'staked';
          },
          {
            name: 'unstaked';
          },
        ];
      };
    },
    {
      name: 'bondFeatures';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'none';
          },
          {
            name: 'autocompound';
          },
          {
            name: 'receiveNftOnLiquidation';
          },
          {
            name: 'autoreceiveSol';
          },
          {
            name: 'autoCompoundAndReceiveNft';
          },
          {
            name: 'autoReceiveAndReceiveNft';
          },
          {
            name: 'autoReceiveAndReceiveSpl';
          },
        ];
      };
    },
    {
      name: 'bondOfferBondingCurve';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'delta';
            type: 'u64';
          },
          {
            name: 'bondingType';
            type: {
              defined: {
                name: 'bondOfferBondingCurveType';
              };
            };
          },
        ];
      };
    },
    {
      name: 'bondOfferBondingCurveType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'linear';
          },
          {
            name: 'exponential';
          },
          {
            name: 'linearUsdc';
          },
          {
            name: 'exponentialUsdc';
          },
          {
            name: 'linearBanxSol';
          },
          {
            name: 'exponentialBanxSol';
          },
        ];
      };
    },
    {
      name: 'bondOfferV3';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'hadoMarket';
            type: 'pubkey';
          },
          {
            name: 'pairState';
            type: {
              defined: {
                name: 'pairState';
              };
            };
          },
          {
            name: 'bondingCurve';
            type: {
              defined: {
                name: 'bondOfferBondingCurve';
              };
            };
          },
          {
            name: 'baseSpotPrice';
            type: 'u64';
          },
          {
            name: 'mathCounter';
            type: 'i64';
          },
          {
            name: 'currentSpotPrice';
            type: 'u64';
          },
          {
            name: 'concentrationIndex';
            type: 'u64';
          },
          {
            name: 'bidCap';
            type: 'u64';
          },
          {
            name: 'bidSettlement';
            type: 'i64';
          },
          {
            name: 'edgeSettlement';
            type: 'u64';
          },
          {
            name: 'fundsSolOrTokenBalance';
            type: 'u64';
          },
          {
            name: 'buyOrdersQuantity';
            type: 'u64';
          },
          {
            name: 'lastTransactedAt';
            type: 'u64';
          },
          {
            name: 'assetReceiver';
            type: 'pubkey';
          },
          {
            name: 'validation';
            type: {
              defined: {
                name: 'bondOfferValidation';
              };
            };
          },
          {
            name: 'liquidationLtvBp';
            type: 'u64';
          },
          {
            name: 'offerLtvBp';
            type: 'u64';
          },
          {
            name: 'placeholder3';
            type: 'u64';
          },
          {
            name: 'placeholder4';
            type: 'u64';
          },
          {
            name: 'placeholder5';
            type: 'u64';
          },
          {
            name: 'placeholder6';
            type: 'u64';
          },
          {
            name: 'loanApr';
            type: 'u64';
          },
          {
            name: 'placeholder7';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'bondOfferValidation';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'loanToValueFilter';
            type: 'u64';
          },
          {
            name: 'collateralsPerToken';
            type: 'u64';
          },
          {
            name: 'maxReturnAmountFilter';
            type: 'u64';
          },
          {
            name: 'bondFeatures';
            type: {
              defined: {
                name: 'bondFeatures';
              };
            };
          },
        ];
      };
    },
    {
      name: 'bondTradeTransactionV2State';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'notActive';
          },
          {
            name: 'active';
          },
          {
            name: 'perpetualActive';
          },
          {
            name: 'perpetualRepaid';
          },
          {
            name: 'perpetualLiquidatedByAuction';
          },
          {
            name: 'perpetualLiquidatedByClaim';
          },
          {
            name: 'perpetualManualTerminating';
          },
          {
            name: 'perpetualPartialRepaid';
          },
          {
            name: 'perpetualRefinanceRepaid';
          },
          {
            name: 'perpetualRefinancedActive';
          },
          {
            name: 'migrated';
          },
          {
            name: 'perpetualBorrowerListing';
          },
          {
            name: 'perpetualLenderListing';
          },
          {
            name: 'perpetualSellingLoan';
          },
          {
            name: 'perpetualSellingListing';
          },
          {
            name: 'perpetualSellingListingClosed';
          },
          {
            name: 'perpetualAddCollateralClosed';
          },
        ];
      };
    },
    {
      name: 'bondTradeTransactionV2Type';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'none';
          },
          {
            name: 'autocompound';
          },
          {
            name: 'receiveNftOnLiquidation';
          },
          {
            name: 'autoreceiveSol';
          },
          {
            name: 'autoCompoundAndReceiveNft';
          },
          {
            name: 'autoReceiveAndReceiveNft';
          },
          {
            name: 'autoReceiveAndReceiveSpl';
          },
        ];
      };
    },
    {
      name: 'bondTradeTransactionV3';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bondTradeTransactionState';
            type: {
              defined: {
                name: 'bondTradeTransactionV2State';
              };
            };
          },
          {
            name: 'bondOffer';
            type: 'pubkey';
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'amountOfBonds';
            type: 'u64';
          },
          {
            name: 'solAmount';
            type: 'u64';
          },
          {
            name: 'feeAmount';
            type: 'u64';
          },
          {
            name: 'bondTradeTransactionType';
            type: {
              defined: {
                name: 'bondTradeTransactionV2Type';
              };
            };
          },
          {
            name: 'fbondTokenMint';
            type: 'pubkey';
          },
          {
            name: 'soldAt';
            type: 'u64';
          },
          {
            name: 'redeemedAt';
            type: 'u64';
          },
          {
            name: 'redeemResult';
            type: {
              defined: {
                name: 'redeemResult';
              };
            };
          },
          {
            name: 'seller';
            type: 'pubkey';
          },
          {
            name: 'isDirectSell';
            type: 'bool';
          },
          {
            name: 'lendingToken';
            type: {
              defined: {
                name: 'lendingTokenType';
              };
            };
          },
          {
            name: 'currentRemainingLent';
            type: 'u64';
          },
          {
            name: 'interestSnapshot';
            type: 'u64';
          },
          {
            name: 'partialRepaySnapshot';
            type: 'u64';
          },
          {
            name: 'terminationStartedAt';
            type: 'u64';
          },
          {
            name: 'lenderOriginalLent';
            type: 'u64';
          },
          {
            name: 'lenderFullRepaidAmount';
            type: 'u64';
          },
          {
            name: 'borrowerOriginalLent';
            type: 'u64';
          },
          {
            name: 'borrowerFullRepaidAmount';
            type: 'u64';
          },
          {
            name: 'repayDestination';
            type: {
              defined: {
                name: 'repayDestination';
              };
            };
          },
          {
            name: 'repaymentCallAmount';
            type: 'u64';
          },
          {
            name: 'terminationFreeze';
            type: 'u64';
          },
          {
            name: 'redeemResultNext';
            type: {
              defined: {
                name: 'redeemResult';
              };
            };
          },
          {
            name: 'protocolInterestFee';
            type: 'u32';
          },
          {
            name: 'collateralAmountSnapshot';
            type: 'u64';
          },
          {
            name: 'placeholder1';
            type: 'u8';
          },
          {
            name: 'placeholder2';
            type: 'u8';
          },
          {
            name: 'placeholder3';
            type: 'u8';
          },
          {
            name: 'placeholder4';
            type: 'u64';
          },
          {
            name: 'placeholder5';
            type: 'u64';
          },
          {
            name: 'placeholder6';
            type: 'u64';
          },
          {
            name: 'placeholder7';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'borrowPerpetualParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'minAmountToGet';
            type: 'u64';
          },
          {
            name: 'amountOfSolToGet';
            type: 'u64';
          },
          {
            name: 'bondTradeTransactionBump';
            type: 'u8';
          },
          {
            name: 'fraktBondBump';
            type: 'u8';
          },
          {
            name: 'bondOfferVaultBump';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'fraktBond';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'fraktBondState';
            type: {
              defined: {
                name: 'fraktBondState';
              };
            };
          },
          {
            name: 'bondTradeTransactionsCounter';
            type: 'u8';
          },
          {
            name: 'borrowedAmount';
            type: 'u64';
          },
          {
            name: 'banxStake';
            type: 'pubkey';
          },
          {
            name: 'fraktMarket';
            type: 'pubkey';
          },
          {
            name: 'leverageBasePoints';
            type: 'u64';
          },
          {
            name: 'actualReturnedAmount';
            type: 'u64';
          },
          {
            name: 'terminatedCounter';
            type: 'u8';
          },
          {
            name: 'fbondTokenMint';
            type: 'pubkey';
          },
          {
            name: 'fbondTokenSupply';
            type: 'u64';
          },
          {
            name: 'activatedAt';
            type: 'u64';
          },
          {
            name: 'liquidatingAt';
            type: 'u64';
          },
          {
            name: 'fbondIssuer';
            type: 'pubkey';
          },
          {
            name: 'repaidOrLiquidatedAt';
            type: 'u64';
          },
          {
            name: 'currentPerpetualBorrowed';
            type: 'u64';
          },
          {
            name: 'lastTransactedAt';
            type: 'u64';
          },
          {
            name: 'refinanceAuctionStartedAt';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'fraktBondState';
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
            name: 'repaid';
          },
          {
            name: 'liquidating';
          },
          {
            name: 'liquidated';
          },
          {
            name: 'perpetualActive';
          },
          {
            name: 'perpetualRepaid';
          },
          {
            name: 'perpetualLiquidatedByAuction';
          },
          {
            name: 'perpetualLiquidatedByClaim';
          },
        ];
      };
    },
    {
      name: 'fraktMarket';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            type: 'pubkey';
          },
          {
            name: 'whitelistQuantity';
            type: 'u64';
          },
          {
            name: 'state';
            type: {
              defined: {
                name: 'fraktMarketState';
              };
            };
          },
        ];
      };
    },
    {
      name: 'fraktMarketState';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'initialized';
          },
          {
            name: 'active';
          },
        ];
      };
    },
    {
      name: 'hadoMarket';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'marketAuthority';
            type: 'pubkey';
          },
          {
            name: 'marketState';
            type: {
              defined: {
                name: 'marketState';
              };
            };
          },
          {
            name: 'marketTrustType';
            type: {
              defined: {
                name: 'marketTrustType';
              };
            };
          },
          {
            name: 'pairValidationType';
            type: {
              defined: {
                name: 'pairValidationType';
              };
            };
          },
          {
            name: 'fraktMarket';
            type: 'pubkey';
          },
          {
            name: 'upfrontFee';
            type: 'u64';
          },
          {
            name: 'interestFee';
            type: 'u64';
          },
          {
            name: 'whitelistType';
            type: {
              defined: {
                name: 'nftValidationWhitelistTypeHado';
              };
            };
          },
          {
            name: 'whitelistedAddress';
            type: 'pubkey';
          },
          {
            name: 'priceFeedSolana';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'priceFeedUsdc';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'splTokenDecimals';
            type: 'u32';
          },
          {
            name: 'solanaOracleFeedType';
            type: {
              defined: {
                name: 'oraclePriceFeedType';
              };
            };
          },
          {
            name: 'usdcOracleFeedType';
            type: {
              defined: {
                name: 'oraclePriceFeedType';
              };
            };
          },
        ];
      };
    },
    {
      name: 'hadoMarketRegistry';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'hadoMarket';
            type: 'pubkey';
          },
          {
            name: 'fraktMarket';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'hadoMarketValidation';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'hadoMarket';
            type: 'pubkey';
          },
          {
            name: 'creatorHash';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'placeholderOne';
            type: 'pubkey';
          },
          {
            name: 'placeholderTwo';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'initializeHadoMarketParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'upfrontFee';
            type: 'u64';
          },
          {
            name: 'interestFee';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'lendingTokenType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'nativeSol';
          },
          {
            name: 'usdc';
          },
          {
            name: 'banxSol';
          },
        ];
      };
    },
    {
      name: 'makePerpetualMarketParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'upfrontFee';
            type: 'u64';
          },
          {
            name: 'interestFee';
            type: 'u64';
          },
          {
            name: 'marketState';
            type: {
              defined: {
                name: 'marketState';
              };
            };
          },
        ];
      };
    },
    {
      name: 'marketState';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'initializing';
          },
          {
            name: 'available';
          },
          {
            name: 'initializingPerpetual';
          },
          {
            name: 'availablePerpetual';
          },
          {
            name: 'privateAvailablePerpetual';
          },
        ];
      };
    },
    {
      name: 'marketTrustType';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'unverified';
          },
          {
            name: 'verified';
          },
        ];
      };
    },
    {
      name: 'nftType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'pnft';
          },
          {
            name: 'cnft';
          },
        ];
      };
    },
    {
      name: 'nftValidationWhitelistType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'creator';
          },
          {
            name: 'nft';
          },
          {
            name: 'merkleTree';
          },
          {
            name: 'collectionId';
          },
          {
            name: 'splMint';
          },
          {
            name: 'coreCollection';
          },
        ];
      };
    },
    {
      name: 'nftValidationWhitelistTypeHado';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'creator';
          },
          {
            name: 'nft';
          },
          {
            name: 'merkleTree';
          },
          {
            name: 'collectionId';
          },
          {
            name: 'splMint';
          },
          {
            name: 'coreCollection';
          },
        ];
      };
    },
    {
      name: 'oraclePriceFeedType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'none';
          },
          {
            name: 'pyth';
          },
          {
            name: 'switchboard';
          },
        ];
      };
    },
    {
      name: 'pairState';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'initializing';
          },
          {
            name: 'onMarketVirtual';
          },
          {
            name: 'onMarketTokenized';
          },
          {
            name: 'frozen';
          },
          {
            name: 'closed';
          },
          {
            name: 'perpetualOnMarket';
          },
          {
            name: 'perpetualClosed';
          },
          {
            name: 'perpetualBondingCurveOnMarket';
          },
          {
            name: 'perpetualMigrated';
          },
          {
            name: 'perpetualBondingCurveClosed';
          },
          {
            name: 'perpetualListing';
          },
        ];
      };
    },
    {
      name: 'pairValidationType';
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'classicValidation';
          },
          {
            name: 'customValidation';
          },
        ];
      };
    },
    {
      name: 'payloadTypeLocal';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'pubkey';
            fields: ['pubkey'];
          },
          {
            name: 'seeds';
            fields: [
              {
                defined: {
                  name: 'seedsVecLocal';
                };
              },
            ];
          },
          {
            name: 'merkleProof';
            fields: [
              {
                defined: {
                  name: 'proofInfoLocal';
                };
              },
            ];
          },
          {
            name: 'number';
            fields: ['u64'];
          },
        ];
      };
    },
    {
      name: 'proofInfoLocal';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'proof';
            docs: ['The merkle proof.'];
            type: {
              vec: {
                array: ['u8', 32];
              };
            };
          },
        ];
      };
    },
    {
      name: 'proposal';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'state';
            type: {
              defined: {
                name: 'proposalState';
              };
            };
          },
          {
            name: 'name';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'week';
            type: 'u64';
          },
          {
            name: 'duration';
            type: 'u64';
          },
          {
            name: 'pointsQuorum';
            type: 'u64';
          },
          {
            name: 'creator';
            type: 'pubkey';
          },
          {
            name: 'participants';
            type: 'u64';
          },
          {
            name: 'pointsTotal';
            type: 'u64';
          },
          {
            name: 'initializedAt';
            type: 'u64';
          },
          {
            name: 'lastTransactedAt';
            type: 'u64';
          },
          {
            name: 'placeholder1';
            type: 'u64';
          },
          {
            name: 'placeholder2';
            type: 'u64';
          },
          {
            name: 'placeholder3';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'proposalState';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'none';
          },
          {
            name: 'initialized';
          },
        ];
      };
    },
    {
      name: 'proposalVariant';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'proposal';
            type: 'pubkey';
          },
          {
            name: 'name';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'state';
            type: {
              defined: {
                name: 'proposalState';
              };
            };
          },
          {
            name: 'participants';
            type: 'u64';
          },
          {
            name: 'pointsTotal';
            type: 'u64';
          },
          {
            name: 'lastTransactedAt';
            type: 'u64';
          },
          {
            name: 'placeholder1';
            type: 'u64';
          },
          {
            name: 'placeholder2';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'proposalVote';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'state';
            type: {
              defined: {
                name: 'proposalState';
              };
            };
          },
          {
            name: 'proposalVariant';
            type: 'pubkey';
          },
          {
            name: 'adventureSubscription';
            type: 'pubkey';
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'points';
            type: 'u64';
          },
          {
            name: 'lastTransactedAt';
            type: 'u64';
          },
          {
            name: 'placeholder';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'redeemResult';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'none';
          },
          {
            name: 'directBorrow';
          },
          {
            name: 'reborrow';
          },
          {
            name: 'instantRefinanced';
          },
          {
            name: 'refinancedByAuction';
          },
          {
            name: 'partialRepay';
          },
          {
            name: 'directRepaid';
          },
          {
            name: 'claimed';
          },
          {
            name: 'addCollateral';
          },
        ];
      };
    },
    {
      name: 'repayDestination';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'none';
          },
          {
            name: 'offer';
          },
          {
            name: 'wallet';
          },
          {
            name: 'vault';
          },
        ];
      };
    },
    {
      name: 'saveProposalParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'name';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'week';
            type: 'u64';
          },
          {
            name: 'duration';
            type: 'u64';
          },
          {
            name: 'pointsQuorum';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'saveVariantParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'name';
            type: {
              array: ['u8', 32];
            };
          },
        ];
      };
    },
    {
      name: 'seedsVecLocal';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'seeds';
            docs: ['The vector of derivation seeds.'];
            type: {
              vec: 'bytes';
            };
          },
        ];
      };
    },
    {
      name: 'subscribeBanxAdventureParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'week';
            type: 'u64';
          },
          {
            name: 'adventureBump';
            type: 'u8';
          },
          {
            name: 'subscriptionBump';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'taggedPayload';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'name';
            type: 'string';
          },
          {
            name: 'payload';
            type: {
              defined: {
                name: 'payloadTypeLocal';
              };
            };
          },
        ];
      };
    },
    {
      name: 'userVault';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'userVaultState';
            type: {
              defined: {
                name: 'userVaultState';
              };
            };
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'lendingTokenType';
            type: {
              defined: {
                name: 'lendingTokenType';
              };
            };
          },
          {
            name: 'offerLiquidityAmount';
            type: 'u128';
          },
          {
            name: 'liquidityInLoansAmount';
            type: 'u128';
          },
          {
            name: 'repaymentsAmount';
            type: 'u128';
          },
          {
            name: 'interestRewardsAmount';
            type: 'u128';
          },
          {
            name: 'rentRewards';
            type: 'u128';
          },
          {
            name: 'fundsInCurrentEpoch';
            type: 'u64';
          },
          {
            name: 'fundsInNextEpoch';
            type: 'u64';
          },
          {
            name: 'lastCalculatedSlot';
            type: 'u64';
          },
          {
            name: 'lastCalculatedTimestamp';
            type: 'u64';
          },
          {
            name: 'rewardsToHarvest';
            type: 'u64';
          },
          {
            name: 'rewardsHarvested';
            type: 'u64';
          },
          {
            name: 'lastTransactedAt';
            type: 'u64';
          },
          {
            name: 'placeholderOne';
            type: 'u64';
          },
          {
            name: 'placeholderTwo';
            type: 'u64';
          },
          {
            name: 'placeholderThree';
            type: 'pubkey';
          },
          {
            name: 'placeholderFour';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'userVaultState';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'none';
          },
          {
            name: 'active';
          },
        ];
      };
    },
    {
      name: 'whitelistEntry';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'fraktMarket';
            type: 'pubkey';
          },
          {
            name: 'whitelistType';
            type: {
              defined: {
                name: 'nftValidationWhitelistType';
              };
            };
          },
          {
            name: 'whitelistedAddress';
            type: 'pubkey';
          },
          {
            name: 'root';
            type: {
              array: ['u8', 32];
            };
          },
        ];
      };
    },
  ];
};
