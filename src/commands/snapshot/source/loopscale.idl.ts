/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/loopscale.json`.
 */
export type Loopscale = {
  address: '1oopBoJG58DgkUVKkEzKgyG9dvRmpgeEm1AVjoHkF78';
  metadata: {
    name: 'loopscale';
    version: '0.1.0';
    spec: '0.1.0';
    description: 'Created with Anchor';
  };
  instructions: [
    {
      name: 'borrowPrincipal';
      docs: ['principal instructions', '6.', '6.1. borrow principal'];
      discriminator: [106, 10, 38, 204, 139, 188, 124, 50];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'borrower';
          signer: true;
        },
        {
          name: 'loan';
          writable: true;
        },
        {
          name: 'strategy';
          writable: true;
        },
        {
          name: 'marketInformation';
        },
        {
          name: 'principalMint';
        },
        {
          name: 'borrowerTa';
          writable: true;
        },
        {
          name: 'strategyTa';
          writable: true;
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'borrowPrincipalParams';
            };
          };
        },
      ];
    },
    {
      name: 'cancelTimelock';
      docs: ['9.2.3 timelock cancel'];
      discriminator: [158, 180, 47, 81, 133, 231, 168, 238];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'manager';
          signer: true;
        },
        {
          name: 'vault';
          writable: true;
        },
        {
          name: 'timelock';
          writable: true;
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [];
    },
    {
      name: 'claimVaultFee';
      docs: ['9.1.2 vault manager actions'];
      discriminator: [38, 40, 51, 195, 130, 248, 134, 247];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'manager';
          signer: true;
        },
        {
          name: 'vault';
          writable: true;
        },
        {
          name: 'strategy';
          writable: true;
        },
        {
          name: 'principalMint';
        },
        {
          name: 'managerPrincipalTa';
          writable: true;
        },
        {
          name: 'strategyPrincipalTa';
          writable: true;
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
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'claimVaultFeeParams';
            };
          };
        },
      ];
    },
    {
      name: 'closeLoop';
      docs: ['1.3 close loop'];
      discriminator: [98, 248, 86, 17, 177, 225, 29, 138];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'borrower';
          signer: true;
        },
        {
          name: 'loan';
          writable: true;
        },
        {
          name: 'strategy';
          writable: true;
        },
        {
          name: 'principalMint';
        },
        {
          name: 'collateralMint';
        },
        {
          name: 'borrowerCollateralTa';
          writable: true;
        },
        {
          name: 'loanCollateralTa';
          writable: true;
        },
        {
          name: 'borrowerPrincipalTa';
          writable: true;
        },
        {
          name: 'strategyPrincipalTa';
          writable: true;
        },
        {
          name: 'principalTokenProgram';
        },
        {
          name: 'collateralTokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'closeLoopParams';
            };
          };
        },
      ];
    },
    {
      name: 'closeStrategy';
      docs: ['8.5 close strategy'];
      discriminator: [56, 247, 170, 246, 89, 221, 134, 200];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'lender';
          signer: true;
        },
        {
          name: 'strategy';
          writable: true;
        },
        {
          name: 'principalMint';
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
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [];
    },
    {
      name: 'createLoan';
      docs: ['creditbook instructionss', '', '1. loan instructions', '1.1 create loan'];
      discriminator: [166, 131, 118, 219, 138, 218, 206, 140];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'borrower';
          writable: true;
          signer: true;
        },
        {
          name: 'loan';
          writable: true;
        },
        {
          name: 'strategy';
          writable: true;
        },
        {
          name: 'marketInformation';
        },
        {
          name: 'principalMint';
        },
        {
          name: 'collateralMint';
        },
        {
          name: 'borrowerPrincipalTa';
          writable: true;
        },
        {
          name: 'strategyPrincipalTa';
          writable: true;
        },
        {
          name: 'borrowerCollateralTa';
          writable: true;
        },
        {
          name: 'loanCollateralTa';
          writable: true;
        },
        {
          name: 'principalTokenProgram';
        },
        {
          name: 'collateralTokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'createLoanParams';
            };
          };
        },
      ];
    },
    {
      name: 'createMarketInformation';
      docs: ['7. oracle instructions', '7.1 create market information account'];
      discriminator: [246, 45, 227, 173, 15, 51, 85, 1];
      accounts: [
        {
          name: 'marketInformation';
          writable: true;
        },
        {
          name: 'systemProgram';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'createMarketInformationParams';
            };
          };
        },
      ];
    },
    {
      name: 'createStrategy';
      docs: ['8. strategy instructions', '8.1 create strategy'];
      discriminator: [152, 160, 107, 148, 245, 190, 127, 224];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'nonce';
          signer: true;
        },
        {
          name: 'strategy';
          writable: true;
        },
        {
          name: 'marketInformation';
        },
        {
          name: 'principalMint';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'createStrategyParams';
            };
          };
        },
      ];
    },
    {
      name: 'createTimelock';
      docs: ['9.2 timelock instructions', '9.2.1 timelock create'];
      discriminator: [243, 10, 110, 170, 71, 251, 210, 87];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'manager';
          signer: true;
        },
        {
          name: 'vault';
          writable: true;
        },
        {
          name: 'timelock';
          writable: true;
          signer: true;
        },
        {
          name: 'marketInformation';
          writable: true;
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'timelockUpdateParams';
            };
          };
        },
      ];
    },
    {
      name: 'createVault';
      docs: ['9.3 create vault'];
      discriminator: [29, 237, 247, 208, 193, 82, 54, 135];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'nonce';
          signer: true;
        },
        {
          name: 'principalMint';
        },
        {
          name: 'lpMint';
          writable: true;
          signer: true;
        },
        {
          name: 'vault';
          writable: true;
        },
        {
          name: 'strategy';
          writable: true;
        },
        {
          name: 'marketInformation';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'createVaultParams';
            };
          };
        },
      ];
    },
    {
      name: 'depositCollateral';
      docs: ['collateral instructions', '5.', '5.1. deposit collateral'];
      discriminator: [156, 131, 142, 116, 146, 247, 162, 120];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'borrower';
          signer: true;
        },
        {
          name: 'loan';
          writable: true;
        },
        {
          name: 'borrowerCollateralTa';
          writable: true;
        },
        {
          name: 'loanCollateralTa';
          writable: true;
        },
        {
          name: 'depositMint';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'depositCollateralParams';
            };
          };
        },
      ];
    },
    {
      name: 'depositStrategy';
      docs: ['8.2 deposit strategy'];
      discriminator: [246, 82, 57, 226, 131, 222, 253, 249];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'lender';
          writable: true;
          signer: true;
        },
        {
          name: 'strategy';
          writable: true;
        },
        {
          name: 'principalMint';
        },
        {
          name: 'lenderTa';
          writable: true;
        },
        {
          name: 'strategyTa';
          writable: true;
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
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
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
      name: 'depositUserVault';
      docs: [
        '9. vault instructions',
        '9.1 vault actions',
        '9.1.1 vault user actions',
        '9.1.1.1 vault user deposit',
      ];
      discriminator: [204, 190, 182, 224, 15, 219, 247, 121];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'vault';
          writable: true;
        },
        {
          name: 'strategy';
          writable: true;
        },
        {
          name: 'lpMint';
          writable: true;
        },
        {
          name: 'userLpTa';
          writable: true;
        },
        {
          name: 'userPrincipalTa';
          writable: true;
        },
        {
          name: 'strategyPrincipalTa';
          writable: true;
        },
        {
          name: 'principalMint';
        },
        {
          name: 'principalTokenProgram';
        },
        {
          name: 'token2022Program';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'lpParams';
            };
          };
        },
      ];
    },
    {
      name: 'executeTimelock';
      docs: ['9.2.2 timelock execute'];
      discriminator: [160, 194, 240, 8, 212, 93, 157, 221];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'vault';
          writable: true;
        },
        {
          name: 'timelock';
          writable: true;
        },
        {
          name: 'strategy';
          writable: true;
        },
        {
          name: 'marketInformation';
          writable: true;
        },
        {
          name: 'strategyTa';
          writable: true;
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'principalMint';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [];
    },
    {
      name: 'liquidateLedger';
      docs: ['2. liquidate ledger'];
      discriminator: [5, 124, 101, 85, 254, 175, 184, 249];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'liquidator';
          writable: true;
          signer: true;
        },
        {
          name: 'borrower';
          writable: true;
        },
        {
          name: 'loan';
          writable: true;
        },
        {
          name: 'strategy';
          writable: true;
        },
        {
          name: 'marketInformation';
        },
        {
          name: 'liquidatorTa';
          writable: true;
        },
        {
          name: 'strategyTa';
          writable: true;
        },
        {
          name: 'principalMint';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'token2022Program';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'liquidateLedgerParams';
            };
          };
        },
      ];
    },
    {
      name: 'manageCollateralClaimOrcaFee';
      docs: ['manage collateral instructions', '5.3', '5.3.1 orca claim fee'];
      discriminator: [242, 48, 127, 91, 24, 187, 211, 234];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'borrower';
          signer: true;
        },
        {
          name: 'loan';
        },
        {
          name: 'whirlpool';
          writable: true;
        },
        {
          name: 'tokenVaultA';
          writable: true;
        },
        {
          name: 'tokenVaultB';
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
          name: 'position';
          writable: true;
        },
        {
          name: 'positionTokenAccount';
          writable: true;
        },
        {
          name: 'borrowerTaA';
          writable: true;
        },
        {
          name: 'borrowerTaB';
          writable: true;
        },
        {
          name: 'loanTaA';
          writable: true;
        },
        {
          name: 'loanTaB';
          writable: true;
        },
        {
          name: 'mintA';
        },
        {
          name: 'mintB';
        },
        {
          name: 'whirlpoolProgram';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'token2022Program';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'memoProgram';
        },
      ];
      args: [
        {
          name: 'closeTa';
          type: 'bool';
        },
      ];
    },
    {
      name: 'manageCollateralIncreaseOrcaLiquidity';
      docs: ['5.3.2 orca increase liquidity'];
      discriminator: [173, 62, 204, 113, 206, 27, 147, 128];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'borrower';
          signer: true;
        },
        {
          name: 'loan';
        },
        {
          name: 'whirlpool';
          writable: true;
        },
        {
          name: 'position';
          writable: true;
        },
        {
          name: 'positionTokenAccount';
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
          name: 'tokenVaultA';
          writable: true;
        },
        {
          name: 'tokenVaultB';
          writable: true;
        },
        {
          name: 'borrowerTaA';
          writable: true;
        },
        {
          name: 'borrowerTaB';
          writable: true;
        },
        {
          name: 'loanTaA';
          writable: true;
        },
        {
          name: 'loanTaB';
          writable: true;
        },
        {
          name: 'mintA';
        },
        {
          name: 'mintB';
        },
        {
          name: 'whirlpoolProgram';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'token2022Program';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'memoProgram';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'manageOrcaLiquidityParams';
            };
          };
        },
      ];
    },
    {
      name: 'manageCollateralTransferOrcaPosition';
      docs: ['5.3.4 orca transfer position'];
      discriminator: [85, 151, 110, 243, 164, 41, 62, 238];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'borrower';
          signer: true;
        },
        {
          name: 'loan';
          writable: true;
        },
        {
          name: 'whirlpool';
          writable: true;
        },
        {
          name: 'position';
          writable: true;
        },
        {
          name: 'positionTokenAccount';
          writable: true;
        },
        {
          name: 'positionMint';
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
          name: 'newTickArrayLower';
          writable: true;
        },
        {
          name: 'newTickArrayUpper';
          writable: true;
        },
        {
          name: 'tokenVaultA';
          writable: true;
        },
        {
          name: 'tokenVaultB';
          writable: true;
        },
        {
          name: 'borrowerTaA';
          writable: true;
        },
        {
          name: 'borrowerTaB';
          writable: true;
        },
        {
          name: 'loanTaA';
          writable: true;
        },
        {
          name: 'loanTaB';
          writable: true;
        },
        {
          name: 'newPosition';
          writable: true;
        },
        {
          name: 'newPositionMint';
          writable: true;
          signer: true;
        },
        {
          name: 'newPositionTokenAccount';
          writable: true;
        },
        {
          name: 'mintA';
        },
        {
          name: 'mintB';
        },
        {
          name: 'metadataUpdateAuth';
        },
        {
          name: 'whirlpoolProgram';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'token2022Program';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'memoProgram';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'transferOrcaPositionParams';
            };
          };
        },
      ];
    },
    {
      name: 'manageCollateralWithdrawOrcaLiquidity';
      docs: ['5.3.3 orca withdraw liquidity'];
      discriminator: [219, 89, 35, 158, 224, 12, 200, 90];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'borrower';
          signer: true;
        },
        {
          name: 'loan';
        },
        {
          name: 'whirlpool';
          writable: true;
        },
        {
          name: 'position';
          writable: true;
        },
        {
          name: 'positionTokenAccount';
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
          name: 'tokenVaultA';
          writable: true;
        },
        {
          name: 'tokenVaultB';
          writable: true;
        },
        {
          name: 'borrowerTaA';
          writable: true;
        },
        {
          name: 'borrowerTaB';
          writable: true;
        },
        {
          name: 'loanTaA';
          writable: true;
        },
        {
          name: 'loanTaB';
          writable: true;
        },
        {
          name: 'mintA';
        },
        {
          name: 'mintB';
        },
        {
          name: 'whirlpoolProgram';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'token2022Program';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'memoProgram';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'manageOrcaLiquidityParams';
            };
          };
        },
      ];
    },
    {
      name: 'openLoop';
      docs: ['1.2 open loop'];
      discriminator: [153, 236, 150, 30, 36, 2, 246, 20];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'borrower';
          signer: true;
        },
        {
          name: 'loan';
          writable: true;
        },
        {
          name: 'strategy';
          writable: true;
        },
        {
          name: 'marketInformation';
        },
        {
          name: 'principalMint';
        },
        {
          name: 'collateralMint';
        },
        {
          name: 'borrowerPrincipalTa';
          writable: true;
        },
        {
          name: 'strategyPrincipalTa';
          writable: true;
        },
        {
          name: 'borrowerCollateralTa';
          writable: true;
        },
        {
          name: 'loanCollateralTa';
          writable: true;
        },
        {
          name: 'principalTokenProgram';
        },
        {
          name: 'collateralTokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'openLoopParams';
            };
          };
        },
      ];
    },
    {
      name: 'refinanceLedger';
      docs: ['3. refinance ledger'];
      discriminator: [103, 41, 134, 43, 140, 152, 253, 74];
      accounts: [
        {
          name: 'bsAuth';
          signer: true;
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'loan';
          writable: true;
        },
        {
          name: 'oldStrategy';
          writable: true;
        },
        {
          name: 'newStrategy';
          writable: true;
        },
        {
          name: 'oldStrategyTa';
          writable: true;
        },
        {
          name: 'newStrategyTa';
          writable: true;
        },
        {
          name: 'oldStrategyMarketInformation';
        },
        {
          name: 'newStrategyMarketInformation';
        },
        {
          name: 'principalMint';
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
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'refinanceLedgerParams';
            };
          };
        },
      ];
    },
    {
      name: 'repayPrincipal';
      docs: ['6.2. repay principal'];
      discriminator: [229, 67, 83, 65, 77, 84, 80, 141];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'borrower';
          signer: true;
        },
        {
          name: 'loan';
          writable: true;
        },
        {
          name: 'strategy';
          writable: true;
        },
        {
          name: 'principalMint';
        },
        {
          name: 'borrowerTa';
          writable: true;
        },
        {
          name: 'strategyTa';
          writable: true;
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'repayPrincipalParams';
            };
          };
        },
      ];
    },
    {
      name: 'sellLedger';
      docs: ['4. sell ledger'];
      discriminator: [55, 17, 153, 148, 120, 242, 80, 5];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'lenderAuth';
          signer: true;
        },
        {
          name: 'loan';
          writable: true;
        },
        {
          name: 'newStrategyTa';
          writable: true;
        },
        {
          name: 'lenderAuthTa';
          writable: true;
        },
        {
          name: 'oldStrategy';
          writable: true;
        },
        {
          name: 'newStrategy';
          writable: true;
        },
        {
          name: 'oldStrategyMarketInformation';
        },
        {
          name: 'newStrategyMarketInformation';
        },
        {
          name: 'principalMint';
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
        {
          name: 'vault';
          writable: true;
          optional: true;
        },
        {
          name: 'oldStrategyTa';
          writable: true;
          optional: true;
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'sellLedgerParams';
            };
          };
        },
      ];
    },
    {
      name: 'stakeUserVaultLp';
      docs: ['9.1.1.3 vault user stake'];
      discriminator: [114, 132, 194, 209, 208, 149, 43, 136];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'user';
          signer: true;
        },
        {
          name: 'nonce';
          signer: true;
        },
        {
          name: 'vault';
          writable: true;
        },
        {
          name: 'vaultStake';
          writable: true;
        },
        {
          name: 'lpMint';
        },
        {
          name: 'userLpTa';
          writable: true;
        },
        {
          name: 'vaultStakeLpTa';
          writable: true;
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
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'vaultStakeParams';
            };
          };
        },
      ];
    },
    {
      name: 'unstakeUserVaultLp';
      docs: ['9.1.1.4 vault user unstake'];
      discriminator: [83, 78, 230, 123, 226, 40, 158, 97];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'user';
          signer: true;
        },
        {
          name: 'vault';
          writable: true;
        },
        {
          name: 'lpMint';
          writable: true;
        },
        {
          name: 'vaultStake';
          writable: true;
        },
        {
          name: 'userLpTa';
          writable: true;
        },
        {
          name: 'vaultStakeLpTa';
          writable: true;
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
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [];
    },
    {
      name: 'updateMarketInformation';
      docs: ['7.2 update market information account'];
      discriminator: [186, 195, 82, 187, 196, 199, 135, 158];
      accounts: [
        {
          name: 'authority';
          signer: true;
        },
        {
          name: 'marketInformation';
          writable: true;
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            vec: {
              defined: {
                name: 'updateMarketInformationParams';
              };
            };
          };
        },
      ];
    },
    {
      name: 'updateStrategy';
      docs: ['8.3 update strategy'];
      discriminator: [16, 76, 138, 179, 171, 112, 196, 21];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'lender';
          signer: true;
        },
        {
          name: 'strategy';
          writable: true;
        },
        {
          name: 'principalMint';
        },
        {
          name: 'strategyTa';
          writable: true;
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'collateralTerms';
          type: {
            vec: {
              defined: {
                name: 'multiCollateralTermsUpdateParams';
              };
            };
          };
        },
        {
          name: 'params';
          type: {
            option: {
              defined: {
                name: 'updateStrategyParams';
              };
            };
          };
        },
      ];
    },
    {
      name: 'updateVault';
      docs: ['9.4 toggle vault deposits'];
      discriminator: [67, 229, 185, 188, 226, 11, 210, 60];
      accounts: [
        {
          name: 'manager';
          signer: true;
        },
        {
          name: 'vault';
          writable: true;
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'updateVaultParams';
            };
          };
        },
      ];
    },
    {
      name: 'withdrawCollateral';
      docs: ['5.2. withdraw collateral'];
      discriminator: [115, 135, 168, 106, 139, 214, 138, 150];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'borrower';
          writable: true;
          signer: true;
        },
        {
          name: 'loan';
          writable: true;
        },
        {
          name: 'borrowerTa';
          writable: true;
        },
        {
          name: 'loanTa';
          writable: true;
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'assetMint';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'withdrawCollateralParams';
            };
          };
        },
      ];
    },
    {
      name: 'withdrawStrategy';
      docs: ['8.4 withdraw strategy'];
      discriminator: [31, 45, 162, 5, 193, 217, 134, 188];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'lender';
          writable: true;
          signer: true;
        },
        {
          name: 'strategy';
          writable: true;
        },
        {
          name: 'principalMint';
        },
        {
          name: 'lenderTa';
          writable: true;
        },
        {
          name: 'strategyTa';
          writable: true;
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'withdrawAll';
          type: 'bool';
        },
      ];
    },
    {
      name: 'withdrawUserVault';
      docs: ['9.1.1.2 vault user withdraw'];
      discriminator: [9, 80, 134, 138, 212, 20, 61, 42];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'vault';
          writable: true;
        },
        {
          name: 'strategy';
          writable: true;
        },
        {
          name: 'lpMint';
          writable: true;
        },
        {
          name: 'userLpTa';
          writable: true;
        },
        {
          name: 'userPrincipalTa';
          writable: true;
        },
        {
          name: 'strategyPrincipalTa';
          writable: true;
        },
        {
          name: 'principalMint';
        },
        {
          name: 'principalTokenProgram';
        },
        {
          name: 'token2022Program';
        },
        {
          name: 'associatedTokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'eventAuthority';
        },
        {
          name: 'program';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'lpParams';
            };
          };
        },
      ];
    },
  ];
  accounts: [
    {
      name: 'loan';
      discriminator: [20, 195, 70, 117, 165, 227, 182, 1];
    },
    {
      name: 'marketInformation';
      discriminator: [194, 154, 190, 99, 64, 111, 37, 205];
    },
    {
      name: 'position';
      discriminator: [170, 188, 143, 228, 122, 64, 247, 208];
    },
    {
      name: 'strategy';
      discriminator: [174, 110, 39, 119, 82, 106, 169, 102];
    },
    {
      name: 'timelock';
      discriminator: [189, 33, 78, 75, 205, 31, 4, 177];
    },
    {
      name: 'vault';
      discriminator: [211, 8, 232, 43, 2, 152, 117, 119];
    },
    {
      name: 'vaultStake';
      discriminator: [225, 34, 128, 53, 167, 239, 182, 107];
    },
    {
      name: 'whirlpool';
      discriminator: [63, 149, 209, 12, 225, 128, 99, 9];
    },
  ];
  events: [
    {
      name: 'timelockCanceledEvent';
      discriminator: [67, 213, 255, 46, 1, 27, 230, 3];
    },
    {
      name: 'timelockCreatedEvent';
      discriminator: [152, 153, 7, 180, 31, 147, 228, 201];
    },
    {
      name: 'timelockExecutedEvent';
      discriminator: [163, 211, 23, 234, 156, 203, 136, 240];
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'invalidCollateralMintOrIdentifier';
      msg: 'The collateral mint specified does not match identifier according to type';
    },
    {
      code: 6001;
      name: 'maintanenceCollateralNotMet';
      msg: 'Loan doesnt have enough collateral for maintenance';
    },
    {
      code: 6002;
      name: 'arithmeticOverflow';
      msg: 'Arithmetic overflow';
    },
    {
      code: 6003;
      name: 'invalidTimestamp';
      msg: 'Invalid timestamp';
    },
    {
      code: 6004;
      name: 'maxCollateralReached';
      msg: 'Max Collateral reached';
    },
    {
      code: 6005;
      name: 'partialWithdrawsNotAllowedForOrcaPositions';
      msg: 'Partial withdraws not allowed for orca positions';
    },
    {
      code: 6006;
      name: 'invalidLedgerStatusForRefinance';
      msg: 'Invalid ledger status for refinance';
    },
    {
      code: 6007;
      name: 'invalidLedgerStatusForLedgerSale';
      msg: 'Invalid ledger status for ledger sale';
    },
    {
      code: 6008;
      name: 'invalidMarketInformation';
      msg: 'Invalid market information';
    },
    {
      code: 6009;
      name: 'loanSizeExceedsMaxOriginationSize';
      msg: 'Loan size exceeds max origination size';
    },
    {
      code: 6010;
      name: 'invalidManager';
      msg: 'Invalid manager';
    },
    {
      code: 6011;
      name: 'noOpenLedgers';
      msg: 'No open ledgers';
    },
    {
      code: 6012;
      name: 'invalidDurationIndex';
      msg: 'Invalid duration index';
    },
    {
      code: 6013;
      name: 'invalidAssetIdentifier';
      msg: 'Invalid asset identifier';
    },
    {
      code: 6014;
      name: 'apyDisabled';
      msg: 'APY is disabled';
    },
    {
      code: 6015;
      name: 'collateralNotPresent';
      msg: 'Collateral not present';
    },
    {
      code: 6016;
      name: 'invalidPrincipalMint';
      msg: 'Invalid principal mint';
    },
    {
      code: 6017;
      name: 'invalidLedgerStrategy';
      msg: 'Invalid ledger strategy';
    },
    {
      code: 6018;
      name: 'invalidLedgerIndex';
      msg: 'Invalid ledger index';
    },
    {
      code: 6019;
      name: 'noSupportedCollateralFound';
      msg: 'No supported collateral found';
    },
    {
      code: 6020;
      name: 'cannotSellToSameStrategy';
      msg: 'Cannot sell to same strategy';
    },
    {
      code: 6021;
      name: 'invalidOracleAccount';
      msg: 'Invalid Oracle account';
    },
    {
      code: 6022;
      name: 'invalidLegacyPythAccount';
      msg: 'Invalid Legacy Pyth account';
    },
    {
      code: 6023;
      name: 'invalidPriceExpo';
      msg: 'Invalid price exponent';
    },
    {
      code: 6024;
      name: 'stalePythPrice';
      msg: 'Stale Pyth price';
    },
    {
      code: 6025;
      name: 'priceUncertainityExceeded';
      msg: 'Price uncertainilty is more than max uncertainity';
    },
    {
      code: 6026;
      name: 'negativePrice';
      msg: 'Price cannot be negative';
    },
    {
      code: 6027;
      name: 'priceOverflow';
      msg: 'Price overflow';
    },
    {
      code: 6028;
      name: 'missingMarketInformationAccount';
      msg: 'Missing Oracle Information account in remaining accounts';
    },
    {
      code: 6029;
      name: 'missingOracleAccount';
      msg: 'Missing Oracle account in remaining accounts';
    },
    {
      code: 6030;
      name: 'invalidSeeds';
      msg: 'Invalid seeds provided';
    },
    {
      code: 6031;
      name: 'invalidLoanVault';
      msg: 'Invalid loan vault';
    },
    {
      code: 6032;
      name: 'loanNotInDefault';
      msg: 'Loan not in default';
    },
    {
      code: 6033;
      name: 'orderStatusMismatch';
      msg: 'Order status must be filled';
    },
    {
      code: 6034;
      name: 'lstOracleInvalid';
      msg: 'LST Oracle invalid';
    },
    {
      code: 6035;
      name: 'lstOraclePriceNotFound';
      msg: 'Could not get price per LST';
    },
    {
      code: 6036;
      name: 'staleLstPrice';
      msg: 'Stale LST price';
    },
    {
      code: 6037;
      name: 'invalidDecimal';
      msg: 'value could not be converted to Decimal';
    },
    {
      code: 6038;
      name: 'invalidConversionOracleQuote';
      msg: 'Invalid quote mint for conversion oracle';
    },
    {
      code: 6039;
      name: 'missingConversionRate';
      msg: 'Missing conversion rate';
    },
    {
      code: 6040;
      name: 'notEnoughRemainingAccounts';
      msg: 'Not enough remaining accounts passed in. Each lockbox asset requires at least 2 remaining accounts';
    },
    {
      code: 6041;
      name: 'invalidQuoteMintForMeteoraVault';
      msg: 'Invalid quote mint for vault oracle. Must be the same as vault base token';
    },
    {
      code: 6042;
      name: 'invalidBaseMintForMeteoraVault';
      msg: 'Invalid base mint for vault oracle. Must be the same as vault LP token';
    },
    {
      code: 6043;
      name: 'invalidDecimalsForMeteoraVault';
      msg: 'Invalid decimals for vault oracle. Must be the same as vault LP token';
    },
    {
      code: 6044;
      name: 'meteoraVaultTotalAmountErr';
      msg: 'Could not calculate total amount for meteroa vault';
    },
    {
      code: 6045;
      name: 'invalidExtraAccounts';
      msg: 'Not enough extra accounts';
    },
    {
      code: 6046;
      name: 'invalidSwitchboardAccountOwner';
      msg: 'Invalid switchboard account owner';
    },
    {
      code: 6047;
      name: 'invalidSwitchboardAccount';
      msg: 'Invalid switchboard account';
    },
    {
      code: 6048;
      name: 'invalidOrcaAccountOwner';
      msg: 'Invalid orca account owner';
    },
    {
      code: 6049;
      name: 'invalidOrcaPosition';
      msg: 'Invalid orca position';
    },
    {
      code: 6050;
      name: 'invalidOrcaWhirlpool';
      msg: 'Invalid orca whirlpool';
    },
    {
      code: 6051;
      name: 'invalidOrcaTickArray';
      msg: 'Invalid orca tick array';
    },
    {
      code: 6052;
      name: 'positionDoesNotMatchWhirlpool';
      msg: 'Position does not match whirlpool';
    },
    {
      code: 6053;
      name: 'positionDoesNotMatchMint';
      msg: 'Position does not match mint';
    },
    {
      code: 6054;
      name: 'tickArrayDoesNotMatchWhirlpool';
      msg: 'Tick array does not match whirlpool';
    },
    {
      code: 6055;
      name: 'mintDoesNotMatchWhirlpool';
      msg: 'Mint does not match whirlpool';
    },
    {
      code: 6056;
      name: 'invalidPythAccount';
      msg: 'Invalid Pyth account';
    },
    {
      code: 6057;
      name: 'invalidLtvData';
      msg: 'Invalid LTV data';
    },
    {
      code: 6058;
      name: 'ltvDataNotFound';
      msg: 'Ltv data not found';
    },
    {
      code: 6059;
      name: 'invalidMintType';
      msg: 'Invalid mint type for oracle';
    },
    {
      code: 6060;
      name: 'invalidMeteoraPool';
      msg: 'Invalid meteora pool';
    },
    {
      code: 6061;
      name: 'invalidLpAccount';
      msg: 'Invalid LP account';
    },
    {
      code: 6062;
      name: 'unsupportedCurveType';
      msg: 'Unsupported curve type';
    },
    {
      code: 6063;
      name: 'swapSimulationFailed';
      msg: 'Swap simulation failed';
    },
    {
      code: 6064;
      name: 'invalidBaseMintForFlp';
      msg: 'Invalid base mint for FLP';
    },
    {
      code: 6065;
      name: 'flpPoolNotSupported';
      msg: 'FLP pool not supported';
    },
    {
      code: 6066;
      name: 'invalidAssetIndex';
      msg: 'Invalid asset index';
    },
    {
      code: 6067;
      name: 'invalidAssetIndexGuidance';
      msg: 'Invalid asset index guidance';
    },
    {
      code: 6068;
      name: 'priceNotFound';
      msg: 'Quote price not found in cache';
    },
    {
      code: 6069;
      name: 'duplicateCollateralMintsInMarketInformation';
      msg: 'Duplicate collateral mints in market information';
    },
    {
      code: 6070;
      name: 'marketInformationFull';
      msg: 'Market information is full';
    },
    {
      code: 6071;
      name: 'assetNotFoundInMarketInformation';
      msg: 'Asset not found in market information';
    },
    {
      code: 6072;
      name: 'marketInformationAlreadyExists';
      msg: 'Market information already exists';
    },
    {
      code: 6073;
      name: 'invalidVaultStrategy';
      msg: 'Invalid vault strategy';
    },
    {
      code: 6074;
      name: 'ledgerHealthy';
      msg: 'Cannot liquidate a healthy ledger';
    },
    {
      code: 6075;
      name: 'invalidLiquidation';
      msg: 'Invalid liquidation';
    },
    {
      code: 6076;
      name: 'insufficientLiquidity';
      msg: 'Liquidity buffer has been exceeded';
    },
    {
      code: 6077;
      name: 'interestNotAccrued';
      msg: 'Interest not accrued';
    },
    {
      code: 6078;
      name: 'invalidInterestPerSecondForClose';
      msg: 'Invalid interest per second. Must be 0';
    },
    {
      code: 6079;
      name: 'invalidExternalYieldAmountForClose';
      msg: 'Invalid external yield amount. Must be 0';
    },
    {
      code: 6080;
      name: 'invalidCurrentDeployedAmountForClose';
      msg: 'Invalid current deployed amount. Must be 0';
    },
    {
      code: 6081;
      name: 'invalidTokenBalanceForClose';
      msg: 'Invalid token balance. Must be 0';
    },
    {
      code: 6082;
      name: 'invalidFeeClaimableForClose';
      msg: 'Invalid fee claimable. Must be 0';
    },
    {
      code: 6083;
      name: 'invalidLender';
      msg: 'Invalid lender';
    },
    {
      code: 6084;
      name: 'saleSlippageExceeded';
      msg: 'Sale slippage exceeded';
    },
    {
      code: 6085;
      name: 'expectedLtvMismatch';
      msg: 'Expected LTV mismatch';
    },
    {
      code: 6086;
      name: 'expectedLqtMismatch';
      msg: 'Expected LQT mismatch';
    },
    {
      code: 6087;
      name: 'expectedApyMismatch';
      msg: 'Expected APY mismatch';
    },
    {
      code: 6088;
      name: 'lpSlippageToleranceExceeded';
      msg: 'Lp slippage tolerance exceeded';
    },
    {
      code: 6089;
      name: 'invalidStartTime';
      msg: 'Invalid start time. Loan start time must be within 5 minutes of current time';
    },
    {
      code: 6090;
      name: 'invalidWeightMatrix';
      msg: 'Invalid weight matrix';
    },
    {
      code: 6091;
      name: 'loanPastEndTime';
      msg: 'Loan is past end time';
    },
    {
      code: 6092;
      name: 'invalidCollateralWithdrawalWeightMatrixAssignment';
      msg: 'Invalid collateral withdrawal weight matrix assignment';
    },
    {
      code: 6093;
      name: 'tooMuchCollateralWithdrawn';
      msg: 'Too much collateral withdrawn';
    },
    {
      code: 6094;
      name: 'invalidPrincipalWithdrawalWeightMatrixAssignment';
      msg: 'Invalid principal withdrawal weight matrix assignment';
    },
    {
      code: 6095;
      name: 'ledgerInRefinanceGracePeriodCannotBeWithdrawn';
      msg: 'Ledger in refinance grace period cannot be withdrawn';
    },
    {
      code: 6096;
      name: 'onlyBorrowerCanRefinanceBeforeEnd';
      msg: 'Only borrower can refinance before end';
    },
    {
      code: 6097;
      name: 'invalidDurationForLedgerSale';
      msg: 'Invalid duration for ledger sale';
    },
    {
      code: 6098;
      name: 'stakedSolCurrentlyUnsupported';
      msg: 'Staked sol is currently unsupported';
    },
    {
      code: 6099;
      name: 'loanNotFullyRepaid';
      msg: 'Loan has not been fully repaid';
    },
    {
      code: 6100;
      name: 'invalidLiquidationThreshold';
      msg: 'Liquidation threshold must be >= ltv + buffer';
    },
    {
      code: 6101;
      name: 'maxAmountInExceeded';
      msg: 'Max amount in exceeded';
    },
    {
      code: 6102;
      name: 'minAmountOutNotMet';
      msg: 'Min amount out not met';
    },
    {
      code: 6103;
      name: 'missingAccount';
      msg: 'Missing account';
    },
    {
      code: 6104;
      name: 'lqtWeightedCollateralValueGreaterThanTotalDebt';
      msg: 'LQT weighted collateral value is greater than total debt';
    },
    {
      code: 6105;
      name: 'strategyOriginationsDisabled';
      msg: 'Strategy originations are disabled';
    },
    {
      code: 6106;
      name: 'timelockDelayNotMet';
      msg: 'Timelock delay not met';
    },
    {
      code: 6107;
      name: 'vaultDepositsDisabled';
      msg: 'Vault deposits are disabled';
    },
    {
      code: 6108;
      name: 'invalidLpParams';
      msg: 'Invalid LP params';
    },
    {
      code: 6109;
      name: 'invalidVaultAccount';
      msg: 'Invalid Met Vault account';
    },
    {
      code: 6110;
      name: 'invalidCpiProgram';
      msg: 'Invalid CPI program';
    },
  ];
  types: [
    {
      name: 'addCollateralTimeLockArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'collateralTerms';
            type: {
              defined: {
                name: 'collateralTerms';
              };
            };
          },
          {
            name: 'updateMarketInformationParams';
            type: {
              defined: {
                name: 'updateMarketInformationParams';
              };
            };
          },
        ];
      };
    },
    {
      name: 'assetData';
      serialization: 'bytemuck';
      repr: {
        kind: 'c';
        packed: true;
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'assetIdentifier';
            type: 'pubkey';
          },
          {
            name: 'quoteMint';
            type: 'pubkey';
          },
          {
            name: 'oracleAccount';
            type: 'pubkey';
          },
          {
            name: 'oracleType';
            type: 'u8';
          },
          {
            name: 'maxUncertainty';
            type: {
              defined: {
                name: 'podU32cbps';
              };
            };
          },
          {
            name: 'maxAge';
            type: {
              defined: {
                name: 'podU16';
              };
            };
          },
          {
            name: 'decimals';
            type: 'u8';
          },
          {
            name: 'ltv';
            type: {
              defined: {
                name: 'podU32cbps';
              };
            };
          },
          {
            name: 'liquidationThreshold';
            type: {
              defined: {
                name: 'podU32cbps';
              };
            };
          },
        ];
      };
    },
    {
      name: 'borrowPrincipalParams';
      docs: [
        'Remaining accounts:\n\nnum ledgers = L\n\n 1. LTV Write:\n    0: Ledger[ledger_index] Market Information\n\n 2. Healthcheck:\n    For each ledger:\n    Ledger market information\n    Principal oracle accounts + conversion oracle accounts\n    Then for each collateral in the loan:\n    Collateral oracle accounts + conversion oracle accounts\n\nAsset index guidance:\n\n1. LTV write:\n   For ledger[ledger_index]:\n    Collateral index for each collateral\n2. Healthcheck:\n    For each ledger:\n        For each collateral in the loan:\n            Principal index\n            Collateral index',
      ];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amount';
            type: 'u64';
          },
          {
            name: 'weightMatrix';
            type: {
              array: [
                {
                  array: ['u32', 5];
                },
                5,
              ];
            };
          },
          {
            name: 'assetIndexGuidance';
            type: {
              vec: 'u64';
            };
          },
          {
            name: 'duration';
            type: 'u8';
          },
          {
            name: 'expectedLoanValues';
            type: {
              defined: {
                name: 'expectedLoanValues';
              };
            };
          },
        ];
      };
    },
    {
      name: 'claimVaultFeeParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'closeLoopParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ledgerIndex';
            type: 'u8';
          },
          {
            name: 'collateralIndex';
            type: 'u8';
          },
          {
            name: 'swapCpiData';
            type: {
              vec: {
                defined: {
                  name: 'swapCpiData';
                };
              };
            };
          },
        ];
      };
    },
    {
      name: 'collateralData';
      serialization: 'bytemuck';
      repr: {
        kind: 'c';
        packed: true;
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'assetMint';
            type: 'pubkey';
          },
          {
            name: 'amount';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'assetType';
            type: 'u8';
          },
          {
            name: 'assetIdentifier';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'collateralTerms';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'assetIdentifier';
            type: 'pubkey';
          },
          {
            name: 'terms';
            type: {
              array: ['u64', 5];
            };
          },
        ];
      };
    },
    {
      name: 'collateralTermsIndices';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'collateralIndex';
            type: 'u64';
          },
          {
            name: 'durationIndex';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'createLoanParams';
      docs: [
        "Remaining accounts:\n\n\n1. LTV Write:\n    0: Ledger Market Information\n\n2. Healthcheck:\n    Principal oracle accounts + conversion oracle accounts\n    Collateral oracle accounts + conversion oracle accounts\n\n\nAsset index guidance:\n1. LTV write:\n   For ledger[ledger_index]:\n    Collateral index for each collateral\n2. Healthcheck: -> don't need market information for healthcheck. Market information is already loaded in the accounts.\n    Principal index\n    Collateral index",
      ];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'principalAmount';
            type: 'u64';
          },
          {
            name: 'collateralAmount';
            type: 'u64';
          },
          {
            name: 'collateralIdentifier';
            type: 'pubkey';
          },
          {
            name: 'collateralType';
            type: 'u8';
          },
          {
            name: 'loanType';
            type: 'u8';
          },
          {
            name: 'expectedApy';
            type: 'u64';
          },
          {
            name: 'expectedLtv';
            type: 'u32';
          },
          {
            name: 'expectedLiquidationThreshold';
            type: 'u32';
          },
          {
            name: 'durationIndex';
            type: 'u8';
          },
          {
            name: 'assetIndexGuidance';
            type: {
              vec: 'u64';
            };
          },
          {
            name: 'nonce';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'createMarketInformationParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'principalMint';
            type: 'pubkey';
          },
          {
            name: 'authority';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'createStrategyParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'lender';
            type: 'pubkey';
          },
          {
            name: 'originationCap';
            type: 'u64';
          },
          {
            name: 'liquidityBuffer';
            type: 'u64';
          },
          {
            name: 'interestFee';
            type: 'u64';
          },
          {
            name: 'originationFee';
            type: 'u64';
          },
          {
            name: 'principalFee';
            type: 'u64';
          },
          {
            name: 'originationsEnabled';
            type: 'bool';
          },
          {
            name: 'externalYieldSourceArgs';
            type: {
              option: {
                defined: {
                  name: 'externalYieldSourceArgs';
                };
              };
            };
          },
        ];
      };
    },
    {
      name: 'createVaultParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'tokenName';
            type: 'string';
          },
          {
            name: 'tokenSymbol';
            type: 'string';
          },
          {
            name: 'tokenUri';
            type: 'string';
          },
          {
            name: 'manager';
            type: 'pubkey';
          },
          {
            name: 'createStrategyParams';
            type: {
              defined: {
                name: 'createStrategyParams';
              };
            };
          },
        ];
      };
    },
    {
      name: 'depositCollateralParams';
      docs: [
        'Remaining accounts:\n\nnum ledgers = L\n\n1. LTV Write:\n    0 -> (L-1): Ledger Market Information\n\nAsset index guidance:\n1. LTV Write:\n    0 -> (L-1): Collateral index for deposited collateral on the ledger market information',
      ];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amount';
            type: 'u64';
          },
          {
            name: 'assetType';
            type: 'u8';
          },
          {
            name: 'assetIdentifier';
            type: 'pubkey';
          },
          {
            name: 'assetIndexGuidance';
            type: {
              vec: 'u64';
            };
          },
          {
            name: 'weightMatrix';
            type: {
              array: [
                {
                  array: ['u32', 5];
                },
                5,
              ];
            };
          },
          {
            name: 'expectedLoanValues';
            type: {
              defined: {
                name: 'expectedLoanValues';
              };
            };
          },
        ];
      };
    },
    {
      name: 'duration';
      serialization: 'bytemuck';
      repr: {
        kind: 'c';
        packed: true;
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'duration';
            type: {
              defined: {
                name: 'podU32';
              };
            };
          },
          {
            name: 'durationType';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'exactInParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amountIn';
            type: 'u64';
          },
          {
            name: 'minAmountOut';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'exactOutParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amountOut';
            type: 'u64';
          },
          {
            name: 'maxAmountIn';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'expectedLoanValues';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'expectedApy';
            type: 'u64';
          },
          {
            name: 'expectedLtv';
            type: {
              array: ['u32', 5];
            };
          },
          {
            name: 'expectedLiquidationThreshold';
            type: {
              array: ['u32', 5];
            };
          },
        ];
      };
    },
    {
      name: 'externalYieldSourceArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'newExternalYieldSource';
            type: 'u8';
          },
          {
            name: 'createExternalYieldAccount';
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'ledger';
      serialization: 'bytemuck';
      repr: {
        kind: 'c';
        packed: true;
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'status';
            type: 'u8';
          },
          {
            name: 'strategy';
            type: 'pubkey';
          },
          {
            name: 'principalMint';
            type: 'pubkey';
          },
          {
            name: 'marketInformation';
            type: 'pubkey';
          },
          {
            name: 'principalDue';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'principalRepaid';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'interestDue';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'interestRepaid';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'duration';
            type: {
              defined: {
                name: 'duration';
              };
            };
          },
          {
            name: 'interestPerSecond';
            type: {
              defined: {
                name: 'podDecimal';
              };
            };
          },
          {
            name: 'startTime';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'endTime';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'apy';
            type: {
              defined: {
                name: 'podU64cbps';
              };
            };
          },
        ];
      };
    },
    {
      name: 'liquidateLedgerParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ledgerIndex';
            type: 'u8';
          },
          {
            name: 'assetIndexGuidance';
            type: {
              vec: 'u64';
            };
          },
        ];
      };
    },
    {
      name: 'loan';
      serialization: 'bytemuck';
      repr: {
        kind: 'c';
        packed: true;
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'version';
            type: 'u8';
          },
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'loanType';
            type: 'u8';
          },
          {
            name: 'borrower';
            type: 'pubkey';
          },
          {
            name: 'nonce';
            type: 'u64';
          },
          {
            name: 'startTime';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'ledgers';
            type: {
              array: [
                {
                  defined: {
                    name: 'ledger';
                  };
                },
                5,
              ];
            };
          },
          {
            name: 'collateral';
            type: {
              array: [
                {
                  defined: {
                    name: 'collateralData';
                  };
                },
                5,
              ];
            };
          },
          {
            name: 'weightMatrix';
            type: {
              array: [
                {
                  array: [
                    {
                      defined: {
                        name: 'podU32cbps';
                      };
                    },
                    5,
                  ];
                },
                5,
              ];
            };
          },
          {
            name: 'ltvMatrix';
            type: {
              array: [
                {
                  array: [
                    {
                      defined: {
                        name: 'podU32cbps';
                      };
                    },
                    5,
                  ];
                },
                5,
              ];
            };
          },
          {
            name: 'lqtMatrix';
            type: {
              array: [
                {
                  array: [
                    {
                      defined: {
                        name: 'podU32cbps';
                      };
                    },
                    5,
                  ];
                },
                5,
              ];
            };
          },
        ];
      };
    },
    {
      name: 'lpParams';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'exactIn';
            fields: [
              {
                defined: {
                  name: 'exactInParams';
                };
              },
            ];
          },
          {
            name: 'exactOut';
            fields: [
              {
                defined: {
                  name: 'exactOutParams';
                };
              },
            ];
          },
        ];
      };
    },
    {
      name: 'manageOrcaLiquidityParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'liquidityAmount';
            type: 'u128';
          },
          {
            name: 'amountA';
            type: 'u64';
          },
          {
            name: 'amountB';
            type: 'u64';
          },
          {
            name: 'assetIndexGuidance';
            type: {
              vec: 'u64';
            };
          },
        ];
      };
    },
    {
      name: 'marketInformation';
      serialization: 'bytemuck';
      repr: {
        kind: 'c';
        packed: true;
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            type: 'pubkey';
          },
          {
            name: 'delegate';
            type: 'pubkey';
          },
          {
            name: 'principalMint';
            type: 'pubkey';
          },
          {
            name: 'assetData';
            type: {
              array: [
                {
                  defined: {
                    name: 'assetData';
                  };
                },
                200,
              ];
            };
          },
        ];
      };
    },
    {
      name: 'multiCollateralTermsUpdateParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'apy';
            type: 'u64';
          },
          {
            name: 'indices';
            type: {
              vec: {
                defined: {
                  name: 'collateralTermsIndices';
                };
              };
            };
          },
        ];
      };
    },
    {
      name: 'openLoopParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'principalAmount';
            type: 'u64';
          },
          {
            name: 'collateralAmount';
            type: 'u64';
          },
          {
            name: 'expectedApy';
            type: 'u64';
          },
          {
            name: 'expectedLtv';
            type: 'u32';
          },
          {
            name: 'expectedLiquidationThreshold';
            type: 'u32';
          },
          {
            name: 'depositMint';
            type: 'pubkey';
          },
          {
            name: 'depositAmount';
            type: 'u64';
          },
          {
            name: 'durationIndex';
            type: 'u8';
          },
          {
            name: 'assetIndexGuidance';
            type: {
              vec: 'u64';
            };
          },
          {
            name: 'nonce';
            type: 'u64';
          },
          {
            name: 'externalYieldEndIndex';
            type: 'u8';
          },
          {
            name: 'swapCpiData';
            type: {
              vec: {
                defined: {
                  name: 'swapCpiData';
                };
              };
            };
          },
        ];
      };
    },
    {
      name: 'podBool';
      docs: ['Represents a bool stored as a byte'];
      repr: {
        kind: 'transparent';
      };
      type: {
        kind: 'struct';
        fields: ['u8'];
      };
    },
    {
      name: 'podDecimal';
      docs: [
        'this is the scaled representation of a whole number. The whole number is scaled by 10^18 to avoid floating point errors when performing arithmetic operations.',
      ];
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            array: ['u8', 24];
          },
        ];
      };
    },
    {
      name: 'podU128';
      docs: ['Represents a 128-bit unsigned integer stored as bytes (little-endian)'];
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            array: ['u8', 16];
          },
        ];
      };
    },
    {
      name: 'podU16';
      docs: ['Represents a 16-bit unsigned integer stored as bytes (little-endian)'];
      repr: {
        kind: 'transparent';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            array: ['u8', 2];
          },
        ];
      };
    },
    {
      name: 'podU32';
      docs: ['Represents a 32-bit unsigned integer stored as bytes (little-endian)'];
      repr: {
        kind: 'transparent';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            array: ['u8', 4];
          },
        ];
      };
    },
    {
      name: 'podU32cbps';
      docs: ['helper type to store u32 cbps values'];
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            array: ['u8', 4];
          },
        ];
      };
    },
    {
      name: 'podU64';
      docs: ['Represents a 64-bit unsigned integer stored as bytes (little-endian)'];
      repr: {
        kind: 'transparent';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            array: ['u8', 8];
          },
        ];
      };
    },
    {
      name: 'podU64cbps';
      docs: ['helper type to store u64 cbps values'];
      repr: {
        kind: 'c';
      };
      type: {
        kind: 'struct';
        fields: [
          {
            array: ['u8', 8];
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
            name: 'whirlpool';
            type: 'pubkey';
          },
          {
            name: 'positionMint';
            type: 'pubkey';
          },
          {
            name: 'liquidity';
            type: 'u128';
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
            name: 'feeGrowthCheckpointA';
            type: 'u128';
          },
          {
            name: 'feeOwedA';
            type: 'u64';
          },
          {
            name: 'feeGrowthCheckpointB';
            type: 'u128';
          },
          {
            name: 'feeOwedB';
            type: 'u64';
          },
          {
            name: 'rewardInfos';
            type: {
              array: [
                {
                  defined: {
                    name: 'positionRewardInfo';
                  };
                },
                3,
              ];
            };
          },
        ];
      };
    },
    {
      name: 'positionRewardInfo';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'growthInsideCheckpoint';
            type: 'u128';
          },
          {
            name: 'amountOwed';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'refinanceLedgerParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ledgerIndex';
            type: 'u8';
          },
          {
            name: 'durationIndex';
            type: 'u8';
          },
          {
            name: 'assetIndexGuidance';
            type: {
              vec: 'u64';
            };
          },
        ];
      };
    },
    {
      name: 'repayPrincipalParams';
      docs: [
        'No remaining accounts or asset index guidance needed. In full repayment, we zero out the matrix for the specific ledger using default loan values.',
      ];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amount';
            type: 'u64';
          },
          {
            name: 'ledgerIndex';
            type: 'u8';
          },
          {
            name: 'repayAll';
            type: 'bool';
          },
          {
            name: 'weightMatrix';
            type: {
              array: [
                {
                  array: ['u32', 5];
                },
                5,
              ];
            };
          },
        ];
      };
    },
    {
      name: 'sellLedgerParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ledgerIndex';
            type: 'u8';
          },
          {
            name: 'expectedSalePrice';
            type: 'u64';
          },
          {
            name: 'buyerDurationIndex';
            type: 'u8';
          },
          {
            name: 'assetIndexGuidance';
            type: {
              vec: 'u64';
            };
          },
        ];
      };
    },
    {
      name: 'strategy';
      serialization: 'bytemuck';
      repr: {
        kind: 'c';
        packed: true;
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'version';
            type: 'u8';
          },
          {
            name: 'nonce';
            type: 'pubkey';
          },
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'principalMint';
            type: 'pubkey';
          },
          {
            name: 'lender';
            type: 'pubkey';
          },
          {
            name: 'originationsEnabled';
            type: {
              defined: {
                name: 'podBool';
              };
            };
          },
          {
            name: 'externalYieldSource';
            type: 'u8';
          },
          {
            name: 'interestPerSecond';
            type: {
              defined: {
                name: 'podDecimal';
              };
            };
          },
          {
            name: 'lastAccruedTimestamp';
            docs: ["timestamp interest per second's interest was last accrued"];
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'liquidityBuffer';
            docs: ['the is the amount of liquidity % that always needs to be in the strategy'];
            type: {
              defined: {
                name: 'podU64cbps';
              };
            };
          },
          {
            name: 'tokenBalance';
            docs: ['amount of principal in the strategy'];
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'interestFee';
            docs: [
              'this is the fee charged by and accrued to the manager on the interest accrued via external yield and loans',
            ];
            type: {
              defined: {
                name: 'podU64cbps';
              };
            };
          },
          {
            name: 'principalFee';
            docs: ['this is the fee charged by and accrued to the manager on the origination fee'];
            type: {
              defined: {
                name: 'podU64cbps';
              };
            };
          },
          {
            name: 'originationFee';
            docs: ['fee charged on origination of new loans'];
            type: {
              defined: {
                name: 'podU64cbps';
              };
            };
          },
          {
            name: 'originationCap';
            docs: ['the maximum size of a loan that can be originated'];
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'externalYieldAmount';
            docs: [
              'this is the amount of principal currently in external yield. has to always be updated on any new nav action',
            ];
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'currentDeployedAmount';
            docs: ['this is the amount of principal currently deployed in loans'];
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'outstandingInterestAmount';
            docs: ['this is the interest that has not been repaid yet but accrued'];
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'feeClaimable';
            docs: ['this is the amount that has accrued to the manager'];
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'cumulativePrincipalOriginated';
            type: {
              defined: {
                name: 'podU128';
              };
            };
          },
          {
            name: 'cumulativeInterestAccrued';
            type: {
              defined: {
                name: 'podU128';
              };
            };
          },
          {
            name: 'cumulativeLoanCount';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'activeLoanCount';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'marketInformation';
            type: 'pubkey';
          },
          {
            name: 'collateralMap';
            type: {
              array: [
                {
                  array: [
                    {
                      defined: {
                        name: 'podU64';
                      };
                    },
                    5,
                  ];
                },
                200,
              ];
            };
          },
        ];
      };
    },
    {
      name: 'swapCpiData';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'numSwapRemainingAccounts';
            type: 'u8';
          },
          {
            name: 'cpiData';
            type: 'bytes';
          },
        ];
      };
    },
    {
      name: 'timelock';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'vault';
            type: 'pubkey';
          },
          {
            name: 'initTimestamp';
            type: 'i64';
          },
          {
            name: 'executionDelay';
            type: 'i64';
          },
          {
            name: 'params';
            type: {
              defined: {
                name: 'timelockUpdateParams';
              };
            };
          },
        ];
      };
    },
    {
      name: 'timelockCanceledEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'timelock';
            type: 'string';
          },
        ];
      };
    },
    {
      name: 'timelockCreatedEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'timelockAddress';
            type: 'string';
          },
          {
            name: 'vaultAddress';
            type: 'string';
          },
          {
            name: 'timelockParams';
            type: {
              defined: {
                name: 'timelockUpdateParams';
              };
            };
          },
          {
            name: 'timelockInitTimestamp';
            type: 'i64';
          },
          {
            name: 'timelockExecutionDelay';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'timelockExecutedEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'timelock';
            type: 'string';
          },
        ];
      };
    },
    {
      name: 'timelockUpdateParams';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'updateMarketInformation';
            fields: ['pubkey'];
          },
          {
            name: 'addCollateral';
            fields: [
              {
                defined: {
                  name: 'addCollateralTimeLockArgs';
                };
              },
            ];
          },
          {
            name: 'updateLtv';
            fields: [
              {
                defined: {
                  name: 'updateMarketInformationParams';
                };
              },
            ];
          },
          {
            name: 'removeCollateral';
            fields: [
              {
                defined: {
                  name: 'collateralTerms';
                };
              },
            ];
          },
          {
            name: 'updateApy';
            fields: [
              {
                defined: {
                  name: 'collateralTerms';
                };
              },
            ];
          },
          {
            name: 'updateStrategy';
            fields: [
              {
                defined: {
                  name: 'updateStrategyParams';
                };
              },
            ];
          },
          {
            name: 'updateVault';
            fields: ['u64'];
          },
        ];
      };
    },
    {
      name: 'transferOrcaPositionParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'liquidityAmount';
            type: 'u128';
          },
          {
            name: 'tokenMaxA';
            type: 'u64';
          },
          {
            name: 'tokenMaxB';
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
          {
            name: 'assetIndexGuidance';
            type: {
              vec: 'u64';
            };
          },
        ];
      };
    },
    {
      name: 'updateMarketInformationParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'assetIdentifier';
            type: 'pubkey';
          },
          {
            name: 'quoteMint';
            type: {
              option: 'pubkey';
            };
          },
          {
            name: 'oracleAccount';
            type: {
              option: 'pubkey';
            };
          },
          {
            name: 'oracleType';
            type: {
              option: 'u8';
            };
          },
          {
            name: 'maxUncertainty';
            type: {
              option: 'u32';
            };
          },
          {
            name: 'maxAge';
            type: {
              option: 'u16';
            };
          },
          {
            name: 'decimals';
            type: {
              option: 'u8';
            };
          },
          {
            name: 'ltv';
            type: {
              option: 'u32';
            };
          },
          {
            name: 'liquidationThreshold';
            type: {
              option: 'u32';
            };
          },
          {
            name: 'remove';
            type: {
              option: 'bool';
            };
          },
        ];
      };
    },
    {
      name: 'updateStrategyParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'originationsEnabled';
            type: {
              option: 'bool';
            };
          },
          {
            name: 'liquidityBuffer';
            type: {
              option: 'u64';
            };
          },
          {
            name: 'interestFee';
            type: {
              option: 'u64';
            };
          },
          {
            name: 'originationFee';
            type: {
              option: 'u64';
            };
          },
          {
            name: 'principalFee';
            type: {
              option: 'u64';
            };
          },
          {
            name: 'originationCap';
            type: {
              option: 'u64';
            };
          },
          {
            name: 'marketInformation';
            type: {
              option: 'pubkey';
            };
          },
          {
            name: 'externalYieldSourceArgs';
            type: {
              option: {
                defined: {
                  name: 'externalYieldSourceArgs';
                };
              };
            };
          },
        ];
      };
    },
    {
      name: 'updateVaultParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'depositsEnabled';
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'vault';
      serialization: 'bytemuck';
      repr: {
        kind: 'c';
        packed: true;
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'manager';
            type: 'pubkey';
          },
          {
            name: 'nonce';
            type: 'pubkey';
          },
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'lpSupply';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'lpMint';
            type: 'pubkey';
          },
          {
            name: 'principalMint';
            type: 'pubkey';
          },
          {
            name: 'cumulativePrincipalDeposited';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'depositsEnabled';
            type: {
              defined: {
                name: 'podBool';
              };
            };
          },
          {
            name: 'maxEarlyUnstakeFee';
            type: {
              defined: {
                name: 'podU64cbps';
              };
            };
          },
        ];
      };
    },
    {
      name: 'vaultStake';
      serialization: 'bytemuck';
      repr: {
        kind: 'c';
        packed: true;
      };
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'vault';
            type: 'pubkey';
          },
          {
            name: 'nonce';
            type: 'pubkey';
          },
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'amount';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'duration';
            type: {
              defined: {
                name: 'duration';
              };
            };
          },
          {
            name: 'startTime';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'endTime';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'unstakeTime';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
          {
            name: 'unstakeFeeApplied';
            type: {
              defined: {
                name: 'podU64';
              };
            };
          },
        ];
      };
    },
    {
      name: 'vaultStakeParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amount';
            type: 'u64';
          },
          {
            name: 'stakeAll';
            type: {
              option: 'bool';
            };
          },
          {
            name: 'duration';
            type: 'u32';
          },
          {
            name: 'durationType';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'whirlpool';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'whirlpoolsConfig';
            type: 'pubkey';
          },
          {
            name: 'whirlpoolBump';
            type: {
              array: ['u8', 1];
            };
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
            name: 'liquidity';
            type: 'u128';
          },
          {
            name: 'sqrtPrice';
            type: 'u128';
          },
          {
            name: 'tickCurrentIndex';
            type: 'i32';
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
            name: 'tokenMintA';
            type: 'pubkey';
          },
          {
            name: 'tokenVaultA';
            type: 'pubkey';
          },
          {
            name: 'feeGrowthGlobalA';
            type: 'u128';
          },
          {
            name: 'tokenMintB';
            type: 'pubkey';
          },
          {
            name: 'tokenVaultB';
            type: 'pubkey';
          },
          {
            name: 'feeGrowthGlobalB';
            type: 'u128';
          },
          {
            name: 'rewardLastUpdatedTimestamp';
            type: 'u64';
          },
          {
            name: 'rewardInfos';
            type: {
              array: [
                {
                  defined: {
                    name: 'whirlpoolRewardInfo';
                  };
                },
                3,
              ];
            };
          },
        ];
      };
    },
    {
      name: 'whirlpoolRewardInfo';
      docs: [
        'Stores the state relevant for tracking liquidity mining rewards at the `Whirlpool` level.',
        'These values are used in conjunction with `PositionRewardInfo`, `Tick.reward_growths_outside`,',
        'and `Whirlpool.reward_last_updated_timestamp` to determine how many rewards are earned by open',
        'positions.',
      ];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'mint';
            docs: ['Reward token mint.'];
            type: 'pubkey';
          },
          {
            name: 'vault';
            docs: ['Reward vault token account.'];
            type: 'pubkey';
          },
          {
            name: 'authority';
            docs: [
              'Authority account that has permission to initialize the reward and set emissions.',
            ];
            type: 'pubkey';
          },
          {
            name: 'emissionsPerSecondX64';
            docs: [
              'Q64.64 number that indicates how many tokens per second are earned per unit of liquidity.',
            ];
            type: 'u128';
          },
          {
            name: 'growthGlobalX64';
            docs: [
              'Q64.64 number that tracks the total tokens earned per unit of liquidity since the reward',
              'emissions were turned on.',
            ];
            type: 'u128';
          },
        ];
      };
    },
    {
      name: 'withdrawCollateralParams';
      docs: [
        'Remaining accounts:\n\nnum ledgers = L\n\n1. 0 -> 2L-1: Strategy + MarketInformation for ledger L_i\n\n2. Healthcheck:\n    For each ledger:\n    Ledger market information\n    Principal oracle accounts + conversion oracle accounts\n    Then again for each ledger and collateral:\n        Collateral oracle accounts + conversion oracle accounts\n\n\nAsset index guidance:\n1. Healthcheck:\n    For each ledger:\n        For each collateral in the loan:\n            Principal index\n            Collateral index',
      ];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amount';
            type: 'u64';
          },
          {
            name: 'collateralIndex';
            type: 'u8';
          },
          {
            name: 'weightMatrix';
            type: {
              array: [
                {
                  array: ['u32', 5];
                },
                5,
              ];
            };
          },
          {
            name: 'assetIndexGuidance';
            type: {
              vec: 'u64';
            };
          },
          {
            name: 'expectedLoanValues';
            type: {
              defined: {
                name: 'expectedLoanValues';
              };
            };
          },
        ];
      };
    },
  ];
};
