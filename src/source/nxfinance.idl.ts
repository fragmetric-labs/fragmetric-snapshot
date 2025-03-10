/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/nx_lend.json`.
 */
export type NxLend = {
  address: 'NXFiKimQN3QSL3CDhCXddyVmLfrai8HK36bHKaAzK7g';
  metadata: {
    name: 'nxLend';
    version: '0.1.0';
    spec: '0.1.0';
  };
  instructions: [
    {
      name: 'initMarket';
      discriminator: [33, 253, 15, 116, 89, 25, 127, 236];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'feeTo';
        },
        {
          name: 'nxMarketAdmin';
          writable: true;
        },
        {
          name: 'nxMarket';
          writable: true;
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: {
              name: 'initMarketParams';
            };
          };
        },
      ];
    },
    {
      name: 'configNxMarket';
      discriminator: [224, 152, 70, 99, 169, 198, 220, 35];
      accounts: [
        {
          name: 'nxMarket';
          writable: true;
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: {
              name: 'marketUpdateData';
            };
          };
        },
      ];
    },
    {
      name: 'updateMarketAdmin';
      discriminator: [167, 63, 152, 152, 112, 165, 97, 114];
      accounts: [
        {
          name: 'nxMarket';
          writable: true;
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
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
      name: 'createLendingPool';
      discriminator: [9, 142, 19, 71, 14, 1, 131, 81];
      accounts: [
        {
          name: 'nxMarket';
        },
        {
          name: 'lendingPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'tokenMint';
          docs: ['The mint for the token being custodied by the pool'];
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'rates';
          type: {
            vec: {
              defined: {
                name: 'interestRateConfig';
              };
            };
          };
        },
      ];
    },
    {
      name: 'configInterestRate';
      discriminator: [159, 61, 161, 52, 88, 33, 189, 102];
      accounts: [
        {
          name: 'nxMarket';
        },
        {
          name: 'lendingPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'tokenMint';
          docs: ['The mint for the token being custodied by the pool'];
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'rates';
          type: {
            vec: {
              defined: {
                name: 'interestRateConfig';
              };
            };
          };
        },
      ];
    },
    {
      name: 'createCollateralPool';
      discriminator: [135, 155, 25, 21, 243, 241, 244, 164];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'collateralPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'poolVault';
          docs: ["The token account holding the pool's deposited funds"];
          writable: true;
        },
        {
          name: 'tokenMint';
          docs: ['The mint for the token being custodied by the pool'];
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [];
    },
    {
      name: 'lendingDeposit';
      discriminator: [87, 116, 35, 200, 111, 205, 215, 72];
      accounts: [
        {
          name: 'depositor';
          docs: ['The address with authority to deposit the tokens'];
          signer: true;
        },
        {
          name: 'payer';
          docs: ['The account paying for all rents'];
          writable: true;
          signer: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'lendingPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'poolVault';
          docs: ["The token account holding the pool's deposited funds"];
          writable: true;
        },
        {
          name: 'tokenMint';
          docs: ['The mint for the token being custodied by the pool'];
        },
        {
          name: 'depositorTokenMintAccount';
          docs: ['The source of the tokens to be deposited'];
          writable: true;
        },
        {
          name: 'lendingAccount';
          writable: true;
        },
        {
          name: 'tokenProgram';
          docs: ['Solana ecosystem accounts'];
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
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
      name: 'lendingWithdraw';
      discriminator: [176, 134, 15, 72, 99, 111, 4, 196];
      accounts: [
        {
          name: 'depositor';
          docs: ['The address with authority to deposit the tokens'];
          signer: true;
        },
        {
          name: 'payer';
          docs: ['The account paying for all rents'];
          writable: true;
          signer: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'lendingPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'poolVault';
          docs: ["The token account holding the pool's deposited funds"];
          writable: true;
        },
        {
          name: 'tokenMint';
          docs: ['The mint for the token being custodied by the pool'];
        },
        {
          name: 'depositorTokenMintAccount';
          docs: ['The source of the tokens to be deposited'];
          writable: true;
        },
        {
          name: 'lendingAccount';
          writable: true;
        },
        {
          name: 'feeDestination';
          writable: true;
        },
        {
          name: 'feeTo';
          docs: ['The wallet address of the fee receiver'];
        },
        {
          name: 'tokenProgram';
          docs: ['Solana ecosystem accounts'];
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'notes';
          type: 'u64';
        },
      ];
    },
    {
      name: 'initSolayerPool';
      discriminator: [75, 87, 152, 82, 237, 122, 95, 53];
      accounts: [
        {
          name: 'payer';
          docs: ['The account paying for all rents'];
          writable: true;
          signer: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'solayerPool';
          writable: true;
        },
        {
          name: 'systemProgram';
          docs: ['Solana ecosystem accounts'];
        },
      ];
      args: [
        {
          name: 'lrtMint';
          type: 'pubkey';
        },
      ];
    },
    {
      name: 'solayerDepositSol';
      discriminator: [160, 196, 171, 36, 187, 161, 246, 71];
      accounts: [
        {
          name: 'nxMarket';
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'stakePool';
        },
        {
          name: 'collateralPool';
          writable: true;
        },
        {
          name: 'solLendingPool';
          writable: true;
        },
        {
          name: 'borrowerTokenAccount';
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'instructions';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'positionIdx';
          type: 'u8';
        },
        {
          name: 'leverageMint';
          type: 'pubkey';
        },
        {
          name: 'collateralAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'solayerDepositLrt';
      discriminator: [36, 64, 66, 235, 39, 174, 198, 34];
      accounts: [
        {
          name: 'nxMarket';
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'stakePool';
        },
        {
          name: 'collateralPool';
          writable: true;
        },
        {
          name: 'solLendingPool';
          writable: true;
        },
        {
          name: 'solayerPool';
          writable: true;
        },
        {
          name: 'solayerUser';
          writable: true;
        },
        {
          name: 'lstVault';
          writable: true;
        },
        {
          name: 'lrtVault';
          writable: true;
        },
        {
          name: 'borrowerTokenAccount';
          writable: true;
        },
        {
          name: 'cpiLstMint';
          writable: true;
          optional: true;
        },
        {
          name: 'cpiRstMint';
          writable: true;
          optional: true;
        },
        {
          name: 'cpiSolayerVault';
          writable: true;
          optional: true;
        },
        {
          name: 'cpiSolayerPool';
          optional: true;
        },
        {
          name: 'solayerProgram';
          optional: true;
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'instructions';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'positionIdx';
          type: 'u8';
        },
        {
          name: 'collateralMint';
          type: 'pubkey';
        },
        {
          name: 'leverageMint';
          type: 'pubkey';
        },
        {
          name: 'collateralAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'solayerLeverage';
      discriminator: [89, 223, 128, 75, 84, 42, 236, 225];
      accounts: [
        {
          name: 'nxMarket';
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'solMint';
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'stakePool';
        },
        {
          name: 'collateralPool';
          writable: true;
        },
        {
          name: 'solLendingPool';
          writable: true;
        },
        {
          name: 'lendingVault';
          writable: true;
        },
        {
          name: 'borrowerTokenAccount';
        },
        {
          name: 'unwrapper';
        },
        {
          name: 'unwrapperMintAccount';
          writable: true;
        },
        {
          name: 'feeReceiver';
          writable: true;
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'instructions';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'positionIdx';
          type: 'u8';
        },
        {
          name: 'collateralMint';
          type: 'pubkey';
        },
        {
          name: 'leverageMint';
          type: 'pubkey';
        },
        {
          name: 'collateralAmount';
          type: 'u64';
        },
        {
          name: 'borrowAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'solayerBorrow';
      discriminator: [12, 199, 47, 117, 221, 103, 172, 123];
      accounts: [
        {
          name: 'nxMarket';
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'solMint';
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'stakePool';
        },
        {
          name: 'solLendingPool';
          writable: true;
        },
        {
          name: 'lendingVault';
          writable: true;
        },
        {
          name: 'borrowerTokenAccount';
        },
        {
          name: 'unwrapper';
        },
        {
          name: 'unwrapperMintAccount';
          writable: true;
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'instructions';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'positionIdx';
          type: 'u8';
        },
        {
          name: 'collateralMint';
          type: 'pubkey';
        },
        {
          name: 'leverageMint';
          type: 'pubkey';
        },
        {
          name: 'borrowAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'solayerAfterBorrow';
      discriminator: [34, 240, 140, 2, 155, 40, 38, 10];
      accounts: [
        {
          name: 'nxMarket';
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'stakePool';
        },
        {
          name: 'solLendingPool';
          writable: true;
        },
        {
          name: 'solayerPool';
          writable: true;
        },
        {
          name: 'solayerUser';
          writable: true;
        },
        {
          name: 'lstVault';
          writable: true;
        },
        {
          name: 'lrtVault';
          writable: true;
        },
        {
          name: 'borrowerTokenAccount';
          writable: true;
        },
        {
          name: 'cpiLstMint';
          writable: true;
          optional: true;
        },
        {
          name: 'cpiRstMint';
          writable: true;
          optional: true;
        },
        {
          name: 'cpiSolayerVault';
          writable: true;
          optional: true;
        },
        {
          name: 'cpiSolayerPool';
          optional: true;
        },
        {
          name: 'solayerProgram';
          optional: true;
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'instructions';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'positionIdx';
          type: 'u8';
        },
        {
          name: 'collateralMint';
          type: 'pubkey';
        },
        {
          name: 'leverageMint';
          type: 'pubkey';
        },
      ];
    },
    {
      name: 'registerWithdraw';
      discriminator: [124, 204, 88, 206, 196, 104, 74, 138];
      accounts: [
        {
          name: 'nxMarket';
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'stakePool';
          writable: true;
        },
        {
          name: 'collateralPool';
          writable: true;
        },
        {
          name: 'solLendingPool';
          writable: true;
        },
        {
          name: 'solayerPool';
          writable: true;
        },
        {
          name: 'solayerUser';
          writable: true;
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'cpiLstMint';
          writable: true;
        },
        {
          name: 'cpiLstAta';
          writable: true;
        },
        {
          name: 'cpiRstAta';
          writable: true;
        },
        {
          name: 'cpiRstMint';
          writable: true;
        },
        {
          name: 'cpiSolayerVault';
          writable: true;
        },
        {
          name: 'cpiSolayerPool';
        },
        {
          name: 'cpiValidatorList';
          writable: true;
        },
        {
          name: 'cpiWithdrawAuthority';
        },
        {
          name: 'cpiValidatorAccount';
          writable: true;
        },
        {
          name: 'cpiStakeAccount';
          writable: true;
        },
        {
          name: 'cpiManagerFeeAccount';
          writable: true;
        },
        {
          name: 'solayerProgram';
        },
        {
          name: 'stakePoolProgram';
        },
        {
          name: 'stakeProgram';
        },
        {
          name: 'clockProgram';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'withdrawFrom';
          type: 'pubkey';
        },
        {
          name: 'positionIdx';
          type: 'u8';
        },
        {
          name: 'collateralMint';
          type: 'pubkey';
        },
        {
          name: 'leverageMint';
          type: 'pubkey';
        },
        {
          name: 'lrtAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'solayerRepay';
      discriminator: [23, 13, 204, 33, 121, 111, 179, 51];
      accounts: [
        {
          name: 'nxMarket';
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'stakePool';
        },
        {
          name: 'collateralPool';
          writable: true;
        },
        {
          name: 'solLendingPool';
          writable: true;
        },
        {
          name: 'solayerPool';
          writable: true;
        },
        {
          name: 'solayerUser';
          writable: true;
        },
        {
          name: 'lendingVault';
          writable: true;
        },
        {
          name: 'cpiStakeAccount';
          writable: true;
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'stakeHistory';
        },
        {
          name: 'stakeProgram';
        },
        {
          name: 'clockProgram';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'positionIdx';
          type: 'u8';
        },
        {
          name: 'withdrawalIdx';
          type: 'u8';
        },
        {
          name: 'collateralMint';
          type: 'pubkey';
        },
        {
          name: 'leverageMint';
          type: 'pubkey';
        },
        {
          name: 'repayAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'solayerReducePosition';
      discriminator: [131, 208, 72, 165, 156, 56, 82, 217];
      accounts: [
        {
          name: 'nxMarket';
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'stakePool';
        },
        {
          name: 'collateralPool';
          writable: true;
        },
        {
          name: 'solLendingPool';
          writable: true;
        },
        {
          name: 'solayerPool';
          writable: true;
        },
        {
          name: 'solayerUser';
          writable: true;
        },
        {
          name: 'lendingVault';
          writable: true;
        },
        {
          name: 'lstVault';
          writable: true;
        },
        {
          name: 'lrtVault';
          writable: true;
        },
        {
          name: 'userTokenAccount';
          writable: true;
        },
        {
          name: 'cpiStakeAccount';
          writable: true;
        },
        {
          name: 'cpiLstMint';
          writable: true;
        },
        {
          name: 'cpiRstMint';
          writable: true;
        },
        {
          name: 'cpiSolayerVault';
          writable: true;
        },
        {
          name: 'cpiSolayerPool';
        },
        {
          name: 'solayerProgram';
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'stakeHistory';
        },
        {
          name: 'stakeProgram';
        },
        {
          name: 'clockProgram';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'positionIdx';
          type: 'u8';
        },
        {
          name: 'withdrawalIdx';
          type: 'u8';
        },
        {
          name: 'collateralMint';
          type: 'pubkey';
        },
        {
          name: 'leverageMint';
          type: 'pubkey';
        },
        {
          name: 'repayAmount';
          type: 'u64';
        },
        {
          name: 'withdrawAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'solayerLiquidate';
      discriminator: [144, 249, 231, 166, 154, 140, 175, 81];
      accounts: [
        {
          name: 'nxMarket';
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'stakePool';
        },
        {
          name: 'collateralPool';
          writable: true;
        },
        {
          name: 'solLendingPool';
          writable: true;
        },
        {
          name: 'solayerPool';
          writable: true;
        },
        {
          name: 'solayerUser';
          writable: true;
        },
        {
          name: 'lendingVault';
          writable: true;
        },
        {
          name: 'cpiStakeAccount';
          writable: true;
        },
        {
          name: 'liquidatee';
          writable: true;
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'stakeHistory';
        },
        {
          name: 'stakeProgram';
        },
        {
          name: 'clockProgram';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'positionIdx';
          type: 'u8';
        },
        {
          name: 'withdrawalIdx';
          type: 'u8';
        },
        {
          name: 'collateralMint';
          type: 'pubkey';
        },
      ];
    },
    {
      name: 'vSolCreateMiner';
      discriminator: [139, 160, 153, 121, 143, 234, 251, 225];
      accounts: [
        {
          name: 'payer';
          docs: ['The account paying for all rents'];
          writable: true;
          signer: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'marketAuthority';
          writable: true;
        },
        {
          name: 'quarryProgram';
        },
        {
          name: 'miner';
          writable: true;
        },
        {
          name: 'quarry';
          docs: ['[Quarry] to create a [Miner] for.'];
          writable: true;
        },
        {
          name: 'rewarder';
          docs: ['[Rewarder].'];
        },
        {
          name: 'systemProgram';
          docs: ['System program.'];
        },
        {
          name: 'tokenMint';
          docs: ['[Mint] of the token to create a [Quarry] for.'];
        },
        {
          name: 'minerVault';
          docs: ['[TokenAccount] holding the token [Mint].'];
        },
        {
          name: 'tokenProgram';
          docs: ['SPL Token program.'];
        },
      ];
      args: [];
    },
    {
      name: 'vSolInitPool';
      discriminator: [89, 67, 20, 181, 59, 234, 125, 52];
      accounts: [
        {
          name: 'payer';
          docs: ['The account paying for all rents'];
          writable: true;
          signer: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'vSolPool';
          writable: true;
        },
        {
          name: 'systemProgram';
          docs: ['Solana ecosystem accounts'];
        },
      ];
      args: [];
    },
    {
      name: 'vSolDepositCollateral';
      discriminator: [242, 54, 168, 44, 137, 150, 211, 11];
      accounts: [
        {
          name: 'depositor';
          docs: ['The address with authority to deposit the tokens'];
          signer: true;
        },
        {
          name: 'payer';
          docs: ['The account paying for all rents'];
          writable: true;
          signer: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'collateralPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'lendingPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'vSolPool';
          writable: true;
        },
        {
          name: 'collateralMint';
          docs: ['The collateral token'];
        },
        {
          name: 'borrowMint';
          docs: ['The borrrow token'];
        },
        {
          name: 'leverageMint';
          docs: ['The leverage token'];
        },
        {
          name: 'collateralPriceOracle';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'borrowPriceOracle';
          writable: true;
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'poolVault';
          docs: ["The token account holding the pool's deposited funds"];
          writable: true;
        },
        {
          name: 'depositorCollateralMintAccount';
          docs: ['The source of the tokens to be deposited'];
          writable: true;
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'miner';
          docs: ['Miner.'];
          writable: true;
        },
        {
          name: 'quarry';
          docs: ['Quarry to claim from.'];
          writable: true;
        },
        {
          name: 'minerVault';
          docs: ['Vault of the miner.'];
          writable: true;
        },
        {
          name: 'rewarder';
          docs: ['Rewarder'];
        },
        {
          name: 'quarryProgram';
          docs: ['Solana ecosystem accounts'];
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'positionIdx';
          type: 'u8';
        },
        {
          name: 'amount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'vSolWithdrawCollateral';
      discriminator: [136, 227, 245, 247, 161, 10, 63, 35];
      accounts: [
        {
          name: 'borrower';
          docs: ['The address with authority to withdraw the tokens'];
          signer: true;
        },
        {
          name: 'payer';
          docs: ['The account paying for all rents'];
          writable: true;
          signer: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'collateralPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'lendingPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'vSolPool';
          writable: true;
        },
        {
          name: 'collateralMint';
          docs: ['The collateral token'];
        },
        {
          name: 'borrowMint';
          docs: ['The borrrow token'];
        },
        {
          name: 'leverageMint';
          docs: ['The leverage token'];
        },
        {
          name: 'collateralPriceOracle';
          writable: true;
        },
        {
          name: 'borrowPriceOracle';
          writable: true;
        },
        {
          name: 'leveragePriceOracle';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'poolVault';
          docs: ["The token account holding the pool's withdrawed funds"];
          writable: true;
        },
        {
          name: 'borrowerCollateralMintAccount';
          docs: ['The source of the tokens to be withdrawed'];
          writable: true;
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'miner';
          docs: ['Miner.'];
          writable: true;
        },
        {
          name: 'quarry';
          docs: ['Quarry to claim from.'];
          writable: true;
        },
        {
          name: 'minerVault';
          docs: ['Vault of the miner.'];
          writable: true;
        },
        {
          name: 'rewarder';
          docs: ['Rewarder'];
        },
        {
          name: 'quarryProgram';
          docs: ['Solana ecosystem accounts'];
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'positionIdx';
          type: 'u8';
        },
        {
          name: 'noteAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'vSolWithdrawLeverage';
      discriminator: [182, 100, 215, 120, 129, 5, 222, 93];
      accounts: [
        {
          name: 'payer';
          docs: ['The account paying for all rents'];
          writable: true;
          signer: true;
        },
        {
          name: 'withdrawer';
          docs: ['The address with authority to position'];
          signer: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'poolLeverageVault';
          docs: ["The token account holding the pool's deposited funds"];
          writable: true;
        },
        {
          name: 'feeDestination';
          docs: ["The token account holding the pool's deposited funds"];
          writable: true;
        },
        {
          name: 'feeTo';
          docs: ['The wallet address of the fee receiver'];
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'collateralPool';
          docs: ['The pool to be created'];
        },
        {
          name: 'vSolPool';
          writable: true;
        },
        {
          name: 'lendingPool';
          writable: true;
        },
        {
          name: 'collateralMint';
          docs: ['The collateral token'];
        },
        {
          name: 'borrowMint';
          docs: ['The borrrow token'];
        },
        {
          name: 'leverageMint';
          docs: ['The leverage token'];
        },
        {
          name: 'collateralPriceOracle';
          writable: true;
        },
        {
          name: 'borrowPriceOracle';
          writable: true;
        },
        {
          name: 'leveragePriceOracle';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'withdrawerLeverageMintAccount';
          writable: true;
        },
        {
          name: 'instructions';
        },
        {
          name: 'miner';
          docs: ['Miner.'];
          writable: true;
        },
        {
          name: 'quarry';
          docs: ['Quarry to claim from.'];
          writable: true;
        },
        {
          name: 'minerVault';
          docs: ['Vault of the miner.'];
          writable: true;
        },
        {
          name: 'rewarder';
          docs: ['Rewarder'];
        },
        {
          name: 'tokenProgram';
          docs: ['***************** Solana ecosystem accounts *****************/'];
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'quarryProgram';
        },
      ];
      args: [
        {
          name: 'positionIdx';
          type: 'u8';
        },
        {
          name: 'noteAmount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'vSolBorrow';
      discriminator: [58, 157, 184, 166, 91, 37, 128, 242];
      accounts: [
        {
          name: 'payer';
          docs: ['The account paying for all rents'];
          writable: true;
          signer: true;
        },
        {
          name: 'borrower';
          docs: ['The address with authority to position'];
          signer: true;
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'lendingPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'collateralPool';
          docs: ['The pool to be created'];
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'collateralMint';
          docs: ['The collateral token'];
        },
        {
          name: 'borrowMint';
          docs: ['The borrrow token'];
        },
        {
          name: 'leverageMint';
          docs: ['The leverage token'];
        },
        {
          name: 'collateralPriceOracle';
          writable: true;
        },
        {
          name: 'borrowPriceOracle';
          writable: true;
        },
        {
          name: 'leveragePriceOracle';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'instructions';
        },
        {
          name: 'borrowerBorrowMintAccount';
        },
        {
          name: 'borrowerLeverageMintAccount';
          docs: ["The token account holding the pool's deposited funds"];
        },
        {
          name: 'poolVault';
          docs: ["The token account holding the pool's deposited funds"];
          writable: true;
        },
        {
          name: 'unwrapper';
        },
        {
          name: 'unwrapperMintAccount';
          writable: true;
        },
        {
          name: 'feeReceiver';
          writable: true;
        },
        {
          name: 'tokenProgram';
          docs: ['Solana ecosystem accounts'];
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'positionIdx';
          type: 'u8';
        },
        {
          name: 'borrowTokens';
          type: 'u64';
        },
      ];
    },
    {
      name: 'vSolAfterBorrow';
      discriminator: [165, 16, 253, 217, 216, 102, 94, 135];
      accounts: [
        {
          name: 'payer';
          docs: ['The account paying for all rents'];
          writable: true;
          signer: true;
        },
        {
          name: 'borrower';
          docs: ['The address with authority to position'];
          signer: true;
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'vSolPool';
          writable: true;
        },
        {
          name: 'collateralPool';
          docs: ['The pool to be created'];
        },
        {
          name: 'lendingPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'collateralMint';
          docs: ['The collateral token'];
        },
        {
          name: 'borrowMint';
          docs: ['The borrrow token'];
        },
        {
          name: 'leverageMint';
          docs: ['The leverage token'];
        },
        {
          name: 'collateralPriceOracle';
          writable: true;
        },
        {
          name: 'borrowPriceOracle';
          writable: true;
        },
        {
          name: 'leveragePriceOracle';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'borrowerLeverageMintAccount';
          writable: true;
        },
        {
          name: 'poolVault';
          docs: ["The token account holding the pool's deposited funds"];
          writable: true;
        },
        {
          name: 'instructions';
        },
        {
          name: 'miner';
          docs: ['Miner.'];
          writable: true;
        },
        {
          name: 'quarry';
          docs: ['Quarry to claim from.'];
          writable: true;
        },
        {
          name: 'minerVault';
          docs: ['Vault of the miner.'];
          writable: true;
        },
        {
          name: 'rewarder';
          docs: ["User's staked token account", 'Rewarder'];
        },
        {
          name: 'tokenProgram';
          docs: ['***************** Solana ecosystem accounts *****************/'];
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'quarryProgram';
        },
      ];
      args: [
        {
          name: 'positionIdx';
          type: 'u8';
        },
      ];
    },
    {
      name: 'vSolRepayWithCollateral';
      docs: ['* amount: collateral amount'];
      discriminator: [139, 11, 2, 232, 123, 59, 66, 184];
      accounts: [
        {
          name: 'payer';
          docs: ['The account paying for all rents'];
          writable: true;
          signer: true;
        },
        {
          name: 'repayer';
          docs: ['The address with authority to position'];
          signer: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'poolCollateralVault';
          docs: [
            "The token account holding the pool's deposited funds",
            "The token account holding the pool's deposited funds",
          ];
          writable: true;
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'collateralPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'vSolPool';
          writable: true;
        },
        {
          name: 'lendingPool';
          writable: true;
        },
        {
          name: 'collateralMint';
          docs: ['The collateral token'];
        },
        {
          name: 'borrowMint';
          docs: ['The borrrow token'];
        },
        {
          name: 'leverageMint';
          docs: ['The leverage token'];
        },
        {
          name: 'collateralPriceOracle';
          writable: true;
        },
        {
          name: 'borrowPriceOracle';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'repayerCollateralMintAccount';
          writable: true;
        },
        {
          name: 'repayerBorrowMintAccount';
        },
        {
          name: 'instructions';
        },
        {
          name: 'miner';
          docs: ['Miner.'];
          writable: true;
        },
        {
          name: 'quarry';
          docs: ['Quarry to claim from.'];
          writable: true;
        },
        {
          name: 'minerVault';
          docs: ['Vault of the miner.'];
          writable: true;
        },
        {
          name: 'rewarder';
          docs: ['Rewarder'];
        },
        {
          name: 'tokenProgram';
          docs: ['***************** Solana ecosystem accounts *****************/'];
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'quarryProgram';
        },
      ];
      args: [
        {
          name: 'positionIdx';
          type: 'u8';
        },
        {
          name: 'amount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'vSolRepayWithLeverage';
      discriminator: [63, 26, 106, 252, 194, 48, 199, 31];
      accounts: [
        {
          name: 'payer';
          docs: ['The account paying for all rents'];
          writable: true;
          signer: true;
        },
        {
          name: 'repayer';
          docs: ['The address with authority to position'];
          signer: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'poolLeverageVault';
          docs: ["The token account holding the pool's deposited funds"];
          writable: true;
        },
        {
          name: 'positionAccount';
          docs: ["The token account holding the pool's deposited funds"];
          writable: true;
        },
        {
          name: 'vSolPool';
          writable: true;
        },
        {
          name: 'lendingPool';
          writable: true;
        },
        {
          name: 'collateralMint';
          docs: ['The collateral token'];
        },
        {
          name: 'borrowMint';
          docs: ['The borrrow token'];
        },
        {
          name: 'leverageMint';
          docs: ['The leverage token'];
        },
        {
          name: 'borrowPriceOracle';
          writable: true;
        },
        {
          name: 'leveragePriceOracle';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'repayerLeverageMintAccount';
          writable: true;
        },
        {
          name: 'repayerBorrowMintAccount';
        },
        {
          name: 'instructions';
        },
        {
          name: 'miner';
          docs: ['Miner.'];
          writable: true;
        },
        {
          name: 'quarry';
          docs: ['Quarry to claim from.'];
          writable: true;
        },
        {
          name: 'minerVault';
          docs: ['Vault of the miner.'];
          writable: true;
        },
        {
          name: 'rewarder';
          docs: ['Rewarder'];
        },
        {
          name: 'tokenProgram';
          docs: ['***************** Solana ecosystem accounts *****************/'];
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'quarryProgram';
        },
      ];
      args: [
        {
          name: 'positionIdx';
          type: 'u8';
        },
        {
          name: 'borrowTokens';
          type: 'u64';
        },
      ];
    },
    {
      name: 'vSolAfterRepay';
      discriminator: [38, 208, 153, 65, 69, 159, 197, 16];
      accounts: [
        {
          name: 'payer';
          docs: ['The account paying for all rents'];
          writable: true;
          signer: true;
        },
        {
          name: 'repayer';
          docs: ['The address with authority to position'];
          signer: true;
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'lendingPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'collateralPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'poolBorrowVault';
          docs: ["The token account holding the pool's deposited funds"];
          writable: true;
        },
        {
          name: 'collateralMint';
          docs: ['The collateral token'];
        },
        {
          name: 'borrowMint';
          docs: ['The borrrow token'];
        },
        {
          name: 'leverageMint';
          docs: ['The leverage token'];
        },
        {
          name: 'collateralPriceOracle';
          writable: true;
        },
        {
          name: 'borrowPriceOracle';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'repayerBorrowMintAccount';
          writable: true;
        },
        {
          name: 'instructions';
        },
        {
          name: 'tokenProgram';
          docs: ['Solana ecosystem accounts'];
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'loanOwner';
          type: 'pubkey';
        },
        {
          name: 'positionIdx';
          type: 'u8';
        },
      ];
    },
    {
      name: 'vSolRefreshPoints';
      discriminator: [1, 155, 168, 74, 133, 208, 113, 62];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'vSolPool';
          writable: true;
        },
        {
          name: 'mintWrapper';
          docs: ['Mint wrapper.'];
          writable: true;
        },
        {
          name: 'mintWrapperProgram';
          docs: ['Mint wrapper program.'];
        },
        {
          name: 'minter';
          docs: ['[quarry_mint_wrapper::Minter] information.'];
          writable: true;
        },
        {
          name: 'rewardsTokenMint';
          docs: ['Mint of the rewards token.'];
          writable: true;
        },
        {
          name: 'poolRewardVault';
          docs: ["The token account holding the pool's deposited funds"];
          writable: true;
        },
        {
          name: 'claimFeeTokenAccount';
          docs: ['Account to send claim fees to.'];
          writable: true;
        },
        {
          name: 'claimMiner';
          docs: ['Miner.'];
          writable: true;
        },
        {
          name: 'claimQuarry';
          docs: ['Quarry to claim from.'];
          writable: true;
        },
        {
          name: 'claimRewarder';
          docs: ['Rewarder'];
        },
        {
          name: 'tokenProgram';
          docs: ['Token program'];
        },
        {
          name: 'quarryProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [];
    },
    {
      name: 'vSolLiquidateWithCollateral';
      discriminator: [96, 37, 184, 11, 168, 5, 136, 28];
      accounts: [
        {
          name: 'liquidator';
          docs: ['The address with authority to the liquidator rewards'];
          writable: true;
          signer: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'lendingPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'collateralPool';
          docs: ['The pool to be created'];
        },
        {
          name: 'vSolPool';
          writable: true;
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'collateralMint';
          docs: ['The collateral token'];
        },
        {
          name: 'borrowMint';
          docs: ['The borrrow token'];
        },
        {
          name: 'leverageMint';
          docs: ['The leverage token'];
        },
        {
          name: 'collateralPriceOracle';
          writable: true;
        },
        {
          name: 'borrowPriceOracle';
          writable: true;
        },
        {
          name: 'leveragePriceOracle';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'liquidatorCollateralMintAccount';
          writable: true;
        },
        {
          name: 'liquidatorBorrowMintAccount';
        },
        {
          name: 'poolCollateralVault';
          docs: ["The token account holding the pool's deposited funds"];
          writable: true;
        },
        {
          name: 'instructions';
        },
        {
          name: 'miner';
          docs: ['Miner.'];
          writable: true;
        },
        {
          name: 'quarry';
          docs: ['Quarry to claim from.'];
          writable: true;
        },
        {
          name: 'minerVault';
          docs: ['Vault of the miner.'];
          writable: true;
        },
        {
          name: 'rewarder';
          docs: ['Rewarder'];
        },
        {
          name: 'tokenProgram';
          docs: ['***************** Solana ecosystem accounts *****************/'];
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'quarryProgram';
        },
      ];
      args: [
        {
          name: 'liquidatee';
          type: 'pubkey';
        },
        {
          name: 'positionIdx';
          type: 'u8';
        },
      ];
    },
    {
      name: 'vSolLiquidateWithLeverage';
      discriminator: [32, 78, 78, 196, 72, 124, 47, 128];
      accounts: [
        {
          name: 'liquidator';
          docs: ['The address with authority to the liquidator rewards'];
          writable: true;
          signer: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'lendingPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'collateralPool';
          docs: ['The pool to be created'];
        },
        {
          name: 'vSolPool';
          writable: true;
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'collateralMint';
          docs: ['The collateral token'];
        },
        {
          name: 'borrowMint';
          docs: ['The borrrow token'];
        },
        {
          name: 'leverageMint';
          docs: ['The leverage token'];
        },
        {
          name: 'collateralPriceOracle';
          writable: true;
        },
        {
          name: 'borrowPriceOracle';
          writable: true;
        },
        {
          name: 'leveragePriceOracle';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'liquidatorLeverageMintAccount';
          writable: true;
        },
        {
          name: 'liquidatorBorrowMintAccount';
        },
        {
          name: 'poolLeverageVault';
          docs: ["The token account holding the pool's deposited funds"];
          writable: true;
        },
        {
          name: 'instructions';
        },
        {
          name: 'miner';
          docs: ['Miner.'];
          writable: true;
        },
        {
          name: 'quarry';
          docs: ['Quarry to claim from.'];
          writable: true;
        },
        {
          name: 'minerVault';
          docs: ['Vault of the miner.'];
          writable: true;
        },
        {
          name: 'rewarder';
          docs: ['Rewarder'];
        },
        {
          name: 'tokenProgram';
          docs: ['***************** Solana ecosystem accounts *****************/'];
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'quarryProgram';
        },
      ];
      args: [
        {
          name: 'liquidatee';
          type: 'pubkey';
        },
        {
          name: 'positionIdx';
          type: 'u8';
        },
      ];
    },
    {
      name: 'vSolAfterLiquidate';
      discriminator: [255, 120, 183, 3, 68, 191, 186, 179];
      accounts: [
        {
          name: 'liquidator';
          docs: ['The address with authority to the liquidator rewards'];
          writable: true;
          signer: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'lendingPool';
          docs: ['The pool to be created'];
          writable: true;
        },
        {
          name: 'collateralPool';
          docs: ['The pool to be created'];
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'collateralMint';
          docs: ['The collateral token'];
        },
        {
          name: 'borrowMint';
          docs: ['The borrrow token'];
        },
        {
          name: 'leverageMint';
          docs: ['The leverage token'];
        },
        {
          name: 'collateralPriceOracle';
          writable: true;
        },
        {
          name: 'borrowPriceOracle';
          writable: true;
        },
        {
          name: 'leveragePriceOracle';
          writable: true;
        },
        {
          name: 'solPriceOracle';
        },
        {
          name: 'liquidatorCollateralMintAccount';
          writable: true;
        },
        {
          name: 'liquidatorBorrowMintAccount';
          writable: true;
        },
        {
          name: 'liquidateeBorrowMintAccount';
          writable: true;
        },
        {
          name: 'poolBorrowVault';
          writable: true;
        },
        {
          name: 'instructions';
        },
        {
          name: 'tokenProgram';
          docs: ['Solana ecosystem accounts'];
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'liquidatee';
          type: 'pubkey';
        },
        {
          name: 'positionIdx';
          type: 'u8';
        },
      ];
    },
    {
      name: 'vSolWithdrawPoint';
      discriminator: [170, 55, 18, 162, 237, 240, 233, 249];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'withdrawer';
          docs: ['The address with authority to position'];
          signer: true;
        },
        {
          name: 'nxMarket';
        },
        {
          name: 'marketAuthority';
        },
        {
          name: 'vPointMint';
          docs: ['Mint of the rewards token.'];
          writable: true;
        },
        {
          name: 'poolPointVault';
          writable: true;
        },
        {
          name: 'withdrawerPointAccount';
          writable: true;
        },
        {
          name: 'positionAccount';
          writable: true;
        },
        {
          name: 'vSolPool';
          writable: true;
        },
        {
          name: 'collateralMint';
          docs: ['The collateral token'];
        },
        {
          name: 'borrowMint';
          docs: ['The borrrow token'];
        },
        {
          name: 'leverageMint';
          docs: ['The leverage token'];
        },
        {
          name: 'tokenProgram';
          docs: ['***************** Solana ecosystem accounts *****************/'];
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'positionIdx';
          type: 'u8';
        },
      ];
    },
  ];
  accounts: [
    {
      name: 'collateralPool';
      discriminator: [153, 1, 163, 22, 159, 181, 167, 192];
    },
    {
      name: 'lendingAccount';
      discriminator: [222, 247, 220, 107, 250, 84, 231, 75];
    },
    {
      name: 'lendingPool';
      discriminator: [133, 92, 58, 179, 55, 161, 97, 15];
    },
    {
      name: 'leveragePool';
      discriminator: [28, 188, 215, 210, 11, 91, 160, 11];
    },
    {
      name: 'nxMarket';
      discriminator: [165, 16, 17, 249, 253, 204, 213, 213];
    },
    {
      name: 'position';
      discriminator: [162, 191, 156, 34, 151, 131, 65, 140];
    },
    {
      name: 'fragmetricPosition';
      discriminator: [162, 191, 156, 34, 151, 131, 65, 140];
    },
    {
      name: 'fragmetricUser';
      discriminator: [162, 191, 156, 34, 151, 131, 65, 140];
    },
    {
      name: 'fragmetricPool';
      discriminator: [162, 191, 156, 34, 151, 131, 65, 140];
    },
    {
      name: 'solayerPool';
      discriminator: [176, 9, 239, 43, 75, 236, 171, 169];
    },
    {
      name: 'solayerUser';
      discriminator: [250, 222, 249, 242, 97, 13, 156, 140];
    },
    {
      name: 'vSolPool';
      discriminator: [190, 15, 227, 51, 3, 161, 188, 83];
    },
    {
      name: 'vSolPosition';
      discriminator: [206, 117, 82, 140, 191, 170, 132, 138];
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'invalidPositionIndex';
      msg: 'Invalid index of position';
    },
    {
      code: 6001;
      name: 'positionIndexMismatch';
      msg: 'Inconsistent position index';
    },
    {
      code: 6002;
      name: 'notAuthorized';
      msg: 'Not authorized user';
    },
    {
      code: 6003;
      name: 'notEnoughTokens';
      msg: 'Pool is in full use';
    },
    {
      code: 6004;
      name: 'leverageTooHigh';
      msg: 'Leverage too high';
    },
    {
      code: 6005;
      name: 'invalidFee';
      msg: 'Invalid fee';
    },
    {
      code: 6006;
      name: 'invalidLiquidation';
      msg: 'Invalid liquidation';
    },
    {
      code: 6007;
      name: 'liquidateTooMuch';
      msg: 'Liquidate too much';
    },
    {
      code: 6008;
      name: 'invalidOperation';
      msg: 'Operation leads to liquidation';
    },
    {
      code: 6009;
      name: 'invalidAmount';
      msg: 'Invalid operation amount';
    },
    {
      code: 6010;
      name: 'insufficientLiquidity';
      msg: 'Insufficient liquidity';
    },
    {
      code: 6011;
      name: 'noCollateral';
      msg: 'No collateral deposited';
    },
    {
      code: 6012;
      name: 'mathOverflow';
      msg: 'Math operation overflow';
    },
    {
      code: 6013;
      name: 'tryToSerializePriceAccount';
      msg: 'Failed to serialize price account';
    },
    {
      code: 6014;
      name: 'notStakePool';
      msg: 'Failed to deserialize stake pool account';
    },
    {
      code: 6015;
      name: 'invalidArgument';
      msg: 'Invalid argument provided';
    },
    {
      code: 6016;
      name: 'invalidLoanType';
      msg: 'Only one type of loan asset per account';
    },
    {
      code: 6017;
      name: 'invalidCollateralType';
      msg: 'Only one type of collateral asset per account';
    },
    {
      code: 6018;
      name: 'positionTypeMismatch';
      msg: 'Wrong position type provided';
    },
    {
      code: 6019;
      name: 'invalidArgumentType';
      msg: 'Invalid argument type';
    },
    {
      code: 6020;
      name: 'pythError';
      msg: 'Could not load price account';
    },
    {
      code: 6021;
      name: 'switchboardError';
      msg: 'Invalid switchboard account';
    },
    {
      code: 6022;
      name: 'invalidOracle';
      msg: 'Invalid pool oracle';
    },
    {
      code: 6023;
      name: 'invalidExpoChange';
      msg: 'Price expo cannot be smaller than original or become positive';
    },
    {
      code: 6024;
      name: 'addressMismatch';
      msg: 'Address Mismatch';
    },
    {
      code: 6025;
      name: 'addressNotWhiteListed';
      msg: 'Address not in white list';
    },
    {
      code: 6026;
      name: 'programMismatch';
      msg: 'Program Mismatch';
    },
    {
      code: 6027;
      name: 'discriminatorMismatch';
      msg: 'Discriminator mismatch';
    },
    {
      code: 6028;
      name: 'unknownInstruction';
      msg: 'Unknown Instruction';
    },
    {
      code: 6029;
      name: 'missingSwapInstruction';
      msg: 'Missing swap ix';
    },
    {
      code: 6030;
      name: 'missingBeforeInstruction';
      msg: 'Missing pre-swap ix';
    },
    {
      code: 6031;
      name: 'missingAfterInstruction';
      msg: 'Missing post-swap ix';
    },
    {
      code: 6032;
      name: 'incorrectAccount';
      msg: 'Incorrect account';
    },
    {
      code: 6033;
      name: 'invalidAfterAmount';
      msg: 'Invalid post amount to after ix';
    },
    {
      code: 6034;
      name: 'paused';
      msg: 'Protocol paused';
    },
    {
      code: 6035;
      name: 'invalidAccountDiscriminator';
      msg: 'Invalid account discriminator';
    },
    {
      code: 6036;
      name: 'unableToDeserializeAccount';
      msg: 'Unable to deserialize account';
    },
    {
      code: 6037;
      name: 'stillHasLoans';
      msg: 'Still has loans';
    },
    {
      code: 6038;
      name: 'notJlp';
      msg: 'Can only withdraw all for JLP';
    },
    {
      code: 6039;
      name: 'stalePrice';
      msg: 'Stale price';
    },
    {
      code: 6040;
      name: 'needRefreshedPoint';
      msg: 'The point has not been refreshed yet';
    },
    {
      code: 6041;
      name: 'noPointReward';
      msg: 'No points reward';
    },
  ];
  types: [
    {
      name: 'marketUpdateData';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'admin';
            docs: ['Account that has admin authority over the nxLend'];
            type: 'pubkey';
          },
          {
            name: 'feeTo';
            docs: ['Developer fee receiving address'];
            type: 'pubkey';
          },
          {
            name: 'paused';
            docs: ['Disable all protocol operations'];
            type: 'bool';
          },
          {
            name: 'bumpSeed';
            type: 'u8';
          },
          {
            name: 'withdrawFeeRate';
            docs: [
              'jlp withdraw fee rate for taking profit。 The denominator is a constant: DENOMINATOR',
            ];
            type: 'u16';
          },
          {
            name: 'protocolFeeRate';
            docs: ['interest fee rate。 The denominator is a constant: DENOMINATOR'];
            type: 'u16';
          },
          {
            name: 'swapSlippageRate';
            docs: [
              'Maximum slippage supported for all swap transactions。 The denominator is a constant: DENOMINATOR',
            ];
            type: 'u16';
          },
          {
            name: 'liquidationRewardRate';
            type: 'u16';
          },
          {
            name: 'penaltyInterestRate';
            docs: ['Penalty interest point。 The denominator is a constant: DENOMINATOR'];
            type: 'u16';
          },
          {
            name: 'vsolPointFeeRate';
            type: 'u16';
          },
        ];
      };
    },
    {
      name: 'interestRateConfig';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'utilizationRate';
            type: 'i32';
          },
          {
            name: 'kValue';
            type: 'i32';
          },
          {
            name: 'bValue';
            type: 'i32';
          },
        ];
      };
    },
    {
      name: 'initMarketParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'swapSlippageRate';
            type: 'u16';
          },
          {
            name: 'penaltyInterestRate';
            type: 'u16';
          },
          {
            name: 'liquidationRewardRate';
            type: 'u16';
          },
          {
            name: 'withdrawFeeRate';
            type: 'u16';
          },
          {
            name: 'protocolFeeRate';
            type: 'u16';
          },
          {
            name: 'vsolPointFeeRate';
            type: 'u16';
          },
        ];
      };
    },
    {
      name: 'amount';
      docs: ['Represent an amount of some value (like tokens, or notes)'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'kind';
            type: {
              defined: {
                name: 'amountKind';
              };
            };
          },
          {
            name: 'value';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'interestRateData';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'utilizationRate';
            docs: ['y=kx+b x=utilization_rate y=interest_rate'];
            type: 'i32';
          },
          {
            name: 'kValue';
            type: 'i32';
          },
          {
            name: 'bValue';
            type: 'i32';
          },
        ];
      };
    },
    {
      name: 'positionTokenMintParam';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'collateralMint';
            docs: ['The collateral token'];
            type: 'pubkey';
          },
          {
            name: 'borrowMint';
            docs: ['The borrrow token'];
            type: 'pubkey';
          },
          {
            name: 'leverageMint';
            docs: ['The leverage token'];
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'positionDetail';
      docs: ['collateral detailed state'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'collateralMint';
            docs: ['The collateral token'];
            type: 'pubkey';
          },
          {
            name: 'borrowMint';
            docs: ['The borrrow token'];
            type: 'pubkey';
          },
          {
            name: 'leverageMint';
            docs: ['The leverage token'];
            type: 'pubkey';
          },
          {
            name: 'collateralNote';
            docs: [
              "A note about the user's deposit tokens, used to calculate the amount of collateral deposited by the user",
            ];
            type: 'u64';
          },
          {
            name: 'collateralTokens';
            docs: ['collateral token amount'];
            type: 'u64';
          },
          {
            name: 'borrowNote';
            docs: [
              'Note about user borrow tokens, used to calculate the number of tokens the user borrows',
            ];
            type: 'u64';
          },
          {
            name: 'borrowTokens';
            docs: ['Borrowed token amount'];
            type: 'u64';
          },
          {
            name: 'leverageNote';
            docs: [
              'A note about user leverage tokens, used to calculate the number of user leverage tokens',
            ];
            type: 'u64';
          },
          {
            name: 'leverageTokens';
            docs: ['leverage token amount'];
            type: 'u64';
          },
          {
            name: 'liquidationFlag';
            docs: ['0 - healthy, not liquidatable; 1 - unhealthy, liquidatable'];
            type: 'u64';
          },
          {
            name: 'leverageMultiples';
            docs: ['The leverage ratio of the current position'];
            type: 'u64';
          },
          {
            name: 'positionType';
            type: {
              defined: {
                name: 'positionType';
              };
            };
          },
        ];
      };
    },
    {
      name: 'swapTemp';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'beforeAmount';
            type: 'u64';
          },
          {
            name: 'expected';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'stakePoolWithdrawal';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'stakeAccount';
            type: 'pubkey';
          },
          {
            name: 'solAmount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'tokenInfo';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'mintPk';
            type: 'pubkey';
          },
          {
            name: 'decimals';
            type: 'i32';
          },
          {
            name: 'priceOracle';
            type: 'pubkey';
          },
          {
            name: 'oracleKind';
            type: {
              defined: {
                name: 'priceKind';
              };
            };
          },
          {
            name: 'lstMint';
            type: {
              option: 'pubkey';
            };
          },
        ];
      };
    },
    {
      name: 'vSolPositionTokenParam';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'collateralToken';
            docs: ['The collateral token'];
            type: {
              defined: {
                name: 'tokenInfo';
              };
            };
          },
          {
            name: 'borrowToken';
            docs: ['The borrrow token'];
            type: {
              defined: {
                name: 'tokenInfo';
              };
            };
          },
          {
            name: 'leverageToken';
            docs: ['The leverage token'];
            type: {
              defined: {
                name: 'tokenInfo';
              };
            };
          },
        ];
      };
    },
    {
      name: 'vSolPositionDetail';
      docs: ['collateral detailed state'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'collateralMint';
            docs: ['The collateral token'];
            type: 'pubkey';
          },
          {
            name: 'borrowMint';
            docs: ['The borrrow token'];
            type: 'pubkey';
          },
          {
            name: 'leverageMint';
            docs: ['The leverage token'];
            type: 'pubkey';
          },
          {
            name: 'collateralNote';
            docs: [
              "A note about the user's deposit tokens, used to calculate the amount of collateral deposited by the user",
            ];
            type: 'u64';
          },
          {
            name: 'collateralTokens';
            docs: ['collateral token amount'];
            type: 'u64';
          },
          {
            name: 'borrowNote';
            docs: [
              'Note about user borrow tokens, used to calculate the number of tokens the user borrows',
            ];
            type: 'u64';
          },
          {
            name: 'borrowTokens';
            docs: ['Borrowed token amount'];
            type: 'u64';
          },
          {
            name: 'leverageNote';
            docs: [
              'A note about user leverage tokens, used to calculate the number of user leverage tokens',
            ];
            type: 'u64';
          },
          {
            name: 'leverageTokens';
            docs: ['leverage token amount'];
            type: 'u64';
          },
          {
            name: 'leverageMultiples';
            docs: ['The leverage ratio of the current position'];
            type: 'u64';
          },
          {
            name: 'lastPointsAndLeverageNotesRate';
            docs: [
              'The number of points that can be received for each note at the time of settlement of the last operation',
            ];
            type: 'u64';
          },
          {
            name: 'pointReward';
            docs: ['The number of points rewarded'];
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'amountKind';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'tokens';
          },
          {
            name: 'notes';
          },
        ];
      };
    },
    {
      name: 'poolAction';
      docs: [
        'Represents the primary pool actions, used in determining the',
        'rounding direction between tokens and notes.',
      ];
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'borrow';
          },
          {
            name: 'deposit';
          },
          {
            name: 'repay';
          },
          {
            name: 'withdraw';
          },
          {
            name: 'liquidate';
          },
        ];
      };
    },
    {
      name: 'roundingDirection';
      docs: [
        'Represents the direction in which we should round when converting',
        'between tokens and notes.',
      ];
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'down';
          },
          {
            name: 'up';
          },
        ];
      };
    },
    {
      name: 'positionType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'normal';
          },
          {
            name: 'solayer';
          },
        ];
      };
    },
    {
      name: 'priceKind';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'pyth';
          },
          {
            name: 'switchboard';
          },
          {
            name: 'liquidateStakeToken';
          },
        ];
      };
    },
    {
      name: 'nxSolayerError';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'invalidTime';
          },
          {
            name: 'withdrawalRequestLimit';
          },
          {
            name: 'stakeAccountMismatch';
          },
          {
            name: 'invalidWithdrawalIndex';
          },
          {
            name: 'invalidWithdrawalAmount';
          },
          {
            name: 'invalidOperation';
          },
          {
            name: 'noLstFound';
          },
          {
            name: 'invalidPosition';
          },
        ];
      };
    },
    {
      name: 'collateralPool';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'nxMarket';
            docs: ["Market's pubkey"];
            type: 'pubkey';
          },
          {
            name: 'marketAuthority';
            docs: ['The pool authority to act'];
            type: 'pubkey';
          },
          {
            name: 'tokenMint';
            docs: ['The token the pool allows lending and borrowing on'];
            type: 'pubkey';
          },
          {
            name: 'depositTokens';
            docs: ["The total amount of tokens available in the pool's vault"];
            type: 'u64';
          },
          {
            name: 'depositNotes';
            docs: ['The total amount of notes issued to depositors of tokens.'];
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'lendingAccount';
      docs: ['User margin state, with collateral & loan details'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'nxMarket';
            docs: ["Market's pubkey"];
            type: 'pubkey';
          },
          {
            name: 'owner';
            docs: ['Owner authority which can borrow liquidity'];
            type: 'pubkey';
          },
          {
            name: 'depositNotes';
            type: 'u64';
          },
          {
            name: 'depositTokens';
            type: 'u64';
          },
          {
            name: 'lastNoteRate';
            type: 'u64';
          },
          {
            name: 'totalReward';
            docs: ['The total amount of notes issued to depositors of tokens.'];
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'lendingPool';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'nxMarket';
            docs: ["Market's pubkey"];
            type: 'pubkey';
          },
          {
            name: 'tokenMint';
            docs: [
              'The pool authority to act',
              'The token the pool allows lending and borrowing on',
            ];
            type: 'pubkey';
          },
          {
            name: 'borrowTokens';
            docs: ['The total amount of tokens borrowed, that need to be repaid to', 'the pool.'];
            type: 'u64';
          },
          {
            name: 'borrowNotes';
            docs: ['The total amount of notes issued to borrowers of tokens'];
            type: 'u64';
          },
          {
            name: 'depositTokens';
            docs: ["The total amount of tokens available in the pool's vault"];
            type: 'u64';
          },
          {
            name: 'depositNotes';
            docs: ['The total amount of notes issued to depositors of tokens.'];
            type: 'u64';
          },
          {
            name: 'depositInterest';
            type: 'u64';
          },
          {
            name: 'borrowInterest';
            docs: [
              'Amount of unrepaid interest by borrowers, for loan note exchange rate calculation',
            ];
            type: 'u64';
          },
          {
            name: 'protocolFee';
            docs: ['10% of interest goes to the protocol,'];
            type: 'u64';
          },
          {
            name: 'accruedUntil';
            docs: ['The time the interest was last accrued up to'];
            type: 'i64';
          },
          {
            name: 'utilizationFlag';
            docs: ['If the utilization rate is flagged as full'];
            type: 'u16';
          },
          {
            name: 'interestRateConfigs';
            type: {
              vec: {
                defined: {
                  name: 'interestRateData';
                };
              };
            };
          },
        ];
      };
    },
    {
      name: 'leveragePool';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'nxMarket';
            docs: ["Market's pubkey"];
            type: 'pubkey';
          },
          {
            name: 'marketAuthority';
            docs: ['The pool authority to act'];
            type: 'pubkey';
          },
          {
            name: 'tokenMint';
            docs: ['The token the pool allows lending and borrowing on'];
            type: 'pubkey';
          },
          {
            name: 'depositTokens';
            docs: ["The total amount of tokens available in the pool's vault"];
            type: 'u64';
          },
          {
            name: 'depositNotes';
            docs: ['The total amount of notes issued to depositors of tokens.'];
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'nxMarket';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'admin';
            docs: ['Account that has admin authority over the nxLend'];
            type: 'pubkey';
          },
          {
            name: 'feeTo';
            docs: ['Developer fee receiving address'];
            type: 'pubkey';
          },
          {
            name: 'paused';
            docs: ['Disable all protocol operations'];
            type: 'bool';
          },
          {
            name: 'bumpSeed';
            type: 'u8';
          },
          {
            name: 'withdrawFeeRate';
            docs: [
              'jlp withdraw fee rate for taking profit。 The denominator is a constant: DENOMINATOR',
            ];
            type: 'u16';
          },
          {
            name: 'protocolFeeRate';
            docs: ['interest fee rate。 The denominator is a constant: DENOMINATOR'];
            type: 'u16';
          },
          {
            name: 'swapSlippageRate';
            docs: [
              'Maximum slippage supported for all swap transactions。 The denominator is a constant: DENOMINATOR',
            ];
            type: 'u16';
          },
          {
            name: 'liquidationRewardRate';
            type: 'u16';
          },
          {
            name: 'penaltyInterestRate';
            docs: ['Penalty interest point。 The denominator is a constant: DENOMINATOR'];
            type: 'u16';
          },
          {
            name: 'vsolPointFeeRate';
            type: 'u16';
          },
        ];
      };
    },
    {
      name: 'position';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'nxMarket';
            docs: ["Market's pubkey"];
            type: 'pubkey';
          },
          {
            name: 'owner';
            docs: ['Data owner'];
            type: 'pubkey';
          },
          {
            name: 'positions';
            docs: ["Record the user's position information list"];
            type: {
              vec: {
                defined: {
                  name: 'positionDetail';
                };
              };
            };
          },
          {
            name: 'swapTemp';
            type: {
              defined: {
                name: 'swapTemp';
              };
            };
          },
        ];
      };
    },
    {
      name: 'fragmetricUser';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'nxMarket';
            docs: ["Market's pubkey"];
            type: 'pubkey';
          },
          {
            name: 'owner';
            type: 'pubkey';
          },
          {
            name: 'receiptToken';
            docs: ['Mint address of LRT'];
            type: 'pubkey';
          },
          {
            name: 'amount';
            docs: ['Amount of LRT user has/contributed, can be sum of multiple positions'];
            type: 'u64';
          },
          {
            name: 'nxFragmetricPoints';
            docs: ['Amount of NX Fragmetric points owned'];
            type: 'u64';
          },
          {
            name: 'lastUpdateTime';
            docs: ['Last timestamp points is updated'];
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'fragmetricPosition';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'nxMarket';
            docs: ["Market's pubkey"];
            type: 'pubkey';
          },
          {
            name: 'owner';
            docs: ['Data owner'];
            type: 'pubkey';
          },
          {
            name: 'positions';
            docs: ["Record the user's position information list"];
            type: {
              vec: {
                defined: {
                  name: 'positionDetail';
                };
              };
            };
          },
          {
            name: 'swapTemp';
            type: {
              defined: {
                name: 'swapTemp';
              };
            };
          },
        ];
      };
    },
    {
      name: 'solayerPool';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'nxMarket';
            docs: ["Market's pubkey"];
            type: 'pubkey';
          },
          {
            name: 'lrtMint';
            docs: ['Mint address of LRT'];
            type: 'pubkey';
          },
          {
            name: 'amount';
            docs: ['Amount of LRT currently held by NX'];
            type: 'u64';
          },
          {
            name: 'totalNxSolayerPoints';
            docs: ["Total NX Solayer points 'created'"];
            type: 'u64';
          },
          {
            name: 'lastUpdateTime';
            docs: ['Last timestamp points is updated'];
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'solayerUser';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'nxMarket';
            docs: ["Market's pubkey"];
            type: 'pubkey';
          },
          {
            name: 'lrtMint';
            docs: ['Mint address of LRT'];
            type: 'pubkey';
          },
          {
            name: 'amount';
            docs: ['Amount of LRT user has/contributed, can be sum of multiple positions'];
            type: 'u64';
          },
          {
            name: 'nxSolayerPoints';
            docs: ['Amount of NX Solayer points owned'];
            type: 'u64';
          },
          {
            name: 'lastUpdateTime';
            docs: ['Last timestamp points is updated'];
            type: 'i64';
          },
          {
            name: 'withdrawals';
            type: {
              vec: {
                vec: {
                  defined: {
                    name: 'stakePoolWithdrawal';
                  };
                };
              };
            };
          },
        ];
      };
    },
    {
      name: 'vSolPool';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'nxMarket';
            docs: ["Market's pubkey"];
            type: 'pubkey';
          },
          {
            name: 'vsolLeverageTokens';
            docs: ['The number of VSOls pledged by leverage'];
            type: 'u64';
          },
          {
            name: 'vsolLeverageNotes';
            type: 'u64';
          },
          {
            name: 'vsolPoints';
            docs: ['Every time the pool collects points, it will be added to this value'];
            type: 'u64';
          },
          {
            name: 'lastVsolPointPerLeverageNote';
            docs: ['rate = (vsol_points_new - vsol_points_old)/vsol_leverage_notes'];
            type: 'u64';
          },
          {
            name: 'vsolPointsFeeClaimable';
            type: 'u64';
          },
          {
            name: 'lastVsolPointUpdateTime';
            docs: ['The time when the point was last updated'];
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'vSolPosition';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'nxMarket';
            docs: ["Market's pubkey"];
            type: 'pubkey';
          },
          {
            name: 'owner';
            docs: ['Data owner'];
            type: 'pubkey';
          },
          {
            name: 'positions';
            docs: ["Record the user's position information list"];
            type: {
              vec: {
                defined: {
                  name: 'vSolPositionDetail';
                };
              };
            };
          },
          {
            name: 'swapTemp';
            type: {
              defined: {
                name: 'swapTemp';
              };
            };
          },
        ];
      };
    },
  ];
  constants: [
    {
      name: 'admin';
      type: 'pubkey';
      value: 'pubkey ! ("9zqhJSecBS2ya3BW5wBQk3T56CZcDZaeh5Ks1QEqafei")';
    },
    {
      name: 'feeReceiver';
      type: 'pubkey';
      value: 'pubkey ! ("EBX8D2YkyqU2xZYj2x9HqYify5ZXX4t7qgzkxfDe3puw")';
    },
    {
      name: 'liquidateThreshold';
      type: 'u64';
      value: '95';
    },
    {
      name: 'stalenessThreshold';
      type: 'u64';
      value: '180';
    },
    {
      name: 'maxLeverage';
      type: 'u64';
      value: '10000000';
    },
    {
      name: 'aMinutesSeconds';
      type: 'i64';
      value: '60';
    },
    {
      name: 'aHourSeconds';
      type: 'i64';
      value: '60 * A_MINUTES_SECONDS';
    },
    {
      name: 'aDaySeconds';
      type: 'i64';
      value: '24 * A_HOUR_SECONDS';
    },
    {
      name: 'aWeekSeconds';
      type: 'i64';
      value: '7 * A_DAY_SECONDS';
    },
    {
      name: 'nxSolayerPointPerSec';
      type: 'u64';
      value: '1000';
    },
    {
      name: 'sanctumStakePool';
      type: 'pubkey';
      value: 'pubkey ! ("SP12tWFxD9oJsVWNavTTBZvMbA6gkAmxtVgxdqvyvhY")';
    },
    {
      name: 'usdc';
      type: {
        defined: {
          name: 'tokenInfo';
        };
      };
      value: 'TokenInfo :: new (pubkey ! ("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v") , 6 , pubkey ! ("Dpw1EAVrSB1ibxiDQyTAW6Zip3J4Btk2x4SgApQCeFbX") , PriceKind :: Pyth , None)';
    },
    {
      name: 'sol';
      type: {
        defined: {
          name: 'tokenInfo';
        };
      };
      value: 'TokenInfo :: new (pubkey ! ("So11111111111111111111111111111111111111112") , 9 , pubkey ! ("7UVimffxr9ow1uXYxsr4LHAcV58mLzhmwaeKvJ1pjLiE") , PriceKind :: Pyth , None)';
    },
    {
      name: 'vsol';
      type: {
        defined: {
          name: 'tokenInfo';
        };
      };
      value: 'TokenInfo :: new (pubkey ! ("vSoLxydx6akxyMD9XEcPvGYNGq6Nn66oqVb3UkGkei7") , 9 , pubkey ! ("Fu9BYC6tWBo1KMKaP3CFoKfRhqv9akmy3DuYwnCyWiyC") , PriceKind :: LiquidateStakeToken , None)';
    },
    {
      name: 'jlp';
      type: {
        defined: {
          name: 'tokenInfo';
        };
      };
      value: 'TokenInfo :: new (pubkey ! ("27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4") , 6 , pubkey ! ("2TTGSRSezqFzeLUH8JwRUbtN66XLLaymfYsWRTMjfiMw") , PriceKind :: Pyth , None)';
    },
    {
      name: 'ssol';
      type: {
        defined: {
          name: 'tokenInfo';
        };
      };
      value: 'TokenInfo :: new (pubkey ! ("sSo14endRuUbvQaJS3dq36Q829a3A6BEfoeeRGJywEh") , 9 , pubkey ! ("po1osKDWYF9oiVEGmzKA4eTs8eMveFRMox3bUKazGN2") , PriceKind :: LiquidateStakeToken , Some (pubkey ! ("sSo1wxKKr6zW2hqf5hZrp2CawLibcwi1pMBqk5bg2G4")))';
    },
    {
      name: 'sbbsol';
      type: {
        defined: {
          name: 'tokenInfo';
        };
      };
      value: 'TokenInfo :: new (pubkey ! ("bybitpqC3RRzTmf3PNYd76c9CiUz1DXtsjvuhLKjsbA") , 9 , pubkey ! ("2aMLkB5p5gVvCwKkdSo5eZAL1WwhZbxezQr1wxiynRhq") , PriceKind :: LiquidateStakeToken , Some (pubkey ! ("Bybit2vBJGhPF52GBdNaQfUJ6ZpThSgHBobjWZpLPb4B")))';
    },
    {
      name: 'shubsol';
      type: {
        defined: {
          name: 'tokenInfo';
        };
      };
      value: 'TokenInfo :: new (pubkey ! ("sHUBzCzkGZqpKmSLVLtTk2ViHwZ6wCS9FRvuq3g2uSx") , 9 , pubkey ! ("ECRqn7gaNASuvTyC5xfCUjehWZCSowMXstZiM5DNweyB") , PriceKind :: LiquidateStakeToken , Some (pubkey ! ("HUBsveNpjo5pWqNkH57QzxjQASdTVXcSK7bVKTSZtcSX")))';
    },
    {
      name: 'lendingPoolTokens';
      type: {
        array: [
          {
            defined: {
              name: 'tokenInfo';
            };
          },
          1,
        ];
      };
      value: '[SOL]';
    },
    {
      name: 'vSolCollateralTokens';
      type: {
        array: [
          {
            defined: {
              name: 'tokenInfo';
            };
          },
          1,
        ];
      };
      value: '[VSOL]';
    },
    {
      name: 'vSolBorrowTokens';
      type: {
        array: [
          {
            defined: {
              name: 'tokenInfo';
            };
          },
          1,
        ];
      };
      value: '[SOL]';
    },
    {
      name: 'vSolLeverageTokens';
      type: {
        array: [
          {
            defined: {
              name: 'tokenInfo';
            };
          },
          1,
        ];
      };
      value: '[VSOL]';
    },
    {
      name: 'tokens';
      type: {
        array: [
          {
            defined: {
              name: 'tokenInfo';
            };
          },
          4,
        ];
      };
      value: '[SOL , JLP , USDC , SSOL]';
    },
    {
      name: 'solayerTokens';
      type: {
        array: [
          {
            defined: {
              name: 'tokenInfo';
            };
          },
          3,
        ];
      };
      value: '[SSOL , SBBSOL , SHUBSOL]';
    },
  ];
};
