/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/ratex_contracts.json`.
 */
export type RatexContracts = {
  address: 'RaTeUhvvohYGErSb2Sy3RA5EdMv9A9jtiJe8FHTg7uK';
  metadata: {
    name: 'ratexContracts';
    version: '0.1.0';
    spec: '0.1.0';
  };
  instructions: [
    {
      name: 'initializeUser';
      discriminator: [111, 17, 185, 250, 60, 122, 38, 254];
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
        },
        {
          name: 'systemProgram';
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
          signer: true;
        },
        {
          name: 'authority';
          writable: true;
        },
      ];
      args: [];
    },
    {
      name: 'initializeLp';
      discriminator: [110, 252, 116, 251, 81, 191, 57, 96];
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
        },
        {
          name: 'systemProgram';
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
          signer: true;
        },
        {
          name: 'authority';
          writable: true;
        },
      ];
      args: [];
    },
    {
      name: 'initializeUserStats';
      discriminator: [254, 243, 72, 98, 251, 130, 168, 213];
      accounts: [
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
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'rent';
        },
        {
          name: 'systemProgram';
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
              name: 'orderParams';
            };
          };
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
      name: 'cancelIsolatedOrder';
      discriminator: [204, 114, 199, 244, 169, 90, 175, 233];
      accounts: [
        {
          name: 'state';
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
          name: 'tokenProgram';
        },
        {
          name: 'systemProgram';
        },
        {
          name: 'lp';
          writable: true;
        },
        {
          name: 'authority';
          writable: true;
          signer: true;
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
        {
          name: 'lowerRate';
          type: 'u64';
        },
        {
          name: 'upperRate';
          type: 'u64';
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
      name: 'fillOrder';
      discriminator: [232, 122, 115, 25, 199, 143, 136, 162];
      accounts: [
        {
          name: 'state';
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
      name: 'initializeEarnVault';
      discriminator: [250, 227, 213, 86, 49, 121, 53, 231];
      accounts: [
        {
          name: 'earnVault';
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
          name: 'ptMint';
          writable: true;
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
        },
        {
          name: 'rent';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'tokenMetadataProgram';
        },
        {
          name: 'systemProgram';
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
          name: 'feeVault';
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
          name: 'feeVault';
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
        {
          name: 'sqrtPriceLimit';
          type: 'u128';
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
      name: 'updateYieldMarket';
      discriminator: [104, 236, 82, 238, 56, 49, 132, 152];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateFeesAndRewards';
      discriminator: [154, 230, 250, 13, 236, 209, 75, 223];
      accounts: [
        {
          name: 'yieldMarket';
          writable: true;
        },
        {
          name: 'authority';
          signer: true;
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
      name: 'collectFees';
      discriminator: [164, 152, 207, 99, 30, 186, 19, 182];
      accounts: [
        {
          name: 'yieldMarket';
        },
        {
          name: 'marginMarket';
        },
        {
          name: 'state';
        },
        {
          name: 'authority';
          signer: true;
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
      name: 'collectProtocolFees';
      discriminator: [22, 67, 23, 98, 150, 178, 70, 220];
      accounts: [
        {
          name: 'state';
        },
        {
          name: 'marginMarket';
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
      ];
      returns: {
        defined: {
          name: 'swapResult';
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
      name: 'calculateLpValue';
      discriminator: [196, 205, 9, 32, 168, 164, 116, 101];
      accounts: [
        {
          name: 'yieldMarket';
        },
        {
          name: 'lp';
        },
      ];
      args: [];
      returns: 'i64';
    },
    {
      name: 'calculateLpQuotaRatio';
      discriminator: [132, 102, 33, 139, 75, 61, 64, 71];
      accounts: [
        {
          name: 'yieldMarket';
        },
        {
          name: 'lp';
        },
      ];
      args: [];
      returns: 'i128';
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
        },
        {
          name: 'systemProgram';
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
      name: 'initializeMarginMarket';
      discriminator: [188, 92, 253, 198, 89, 179, 165, 83];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
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
      name: 'initializeYieldMarketTokenAccountA';
      discriminator: [202, 175, 124, 235, 234, 83, 219, 218];
      accounts: [
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
        },
        {
          name: 'systemProgram';
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
        },
        {
          name: 'systemProgram';
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
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'rent';
        },
        {
          name: 'systemProgram';
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
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'rent';
        },
        {
          name: 'systemProgram';
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
      name: 'initializeYieldMarket';
      discriminator: [108, 101, 35, 38, 98, 214, 231, 231];
      accounts: [
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
          name: 'yieldMarket';
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
        },
        {
          name: 'tokenVaultQuote';
          writable: true;
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'ammpoolsConfig';
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
        },
        {
          name: 'systemProgram';
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
      name: 'updateYieldMarketStatus';
      discriminator: [177, 3, 6, 192, 64, 227, 170, 23];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketActiveRatioCoef';
      discriminator: [26, 248, 248, 245, 225, 104, 225, 118];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketOrderStepSize';
      discriminator: [176, 26, 197, 18, 43, 13, 98, 4];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketMinOrderSize';
      discriminator: [232, 8, 157, 233, 67, 254, 41, 69];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketStartTs';
      discriminator: [64, 30, 124, 204, 254, 161, 237, 169];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketExpireTs';
      discriminator: [34, 253, 131, 199, 30, 185, 230, 184];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketMinLpAmount';
      discriminator: [53, 233, 252, 220, 209, 173, 5, 243];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketNetQuoteAmount';
      discriminator: [124, 18, 201, 112, 55, 134, 176, 116];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketNetBaseAmount';
      discriminator: [25, 67, 64, 221, 78, 132, 229, 152];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketOracle';
      discriminator: [184, 214, 121, 145, 119, 111, 171, 186];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketCollateralRatioMaintenance';
      discriminator: [166, 76, 158, 8, 206, 18, 235, 199];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketCollateralRatioInitialPreExpiry';
      discriminator: [245, 255, 224, 236, 15, 173, 92, 250];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketLiqFeeRate';
      discriminator: [12, 249, 151, 236, 81, 119, 111, 212];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketLpAccountsProcessed';
      discriminator: [107, 251, 36, 15, 100, 110, 246, 36];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
          name: 'lpAccountsProcessed';
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
      name: 'updateYieldMarketNumberOfProcessedUsers';
      discriminator: [116, 170, 60, 63, 31, 207, 180, 242];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketExpireTotalPosQuoteAmount';
      discriminator: [120, 213, 112, 169, 145, 83, 143, 67];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketNumberOfActiveUsers';
      discriminator: [62, 9, 100, 169, 25, 112, 78, 130];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketSocialLoss';
      discriminator: [188, 137, 141, 51, 72, 241, 194, 43];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketInsurance';
      discriminator: [140, 16, 164, 75, 14, 201, 179, 20];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateUserPosition';
      discriminator: [55, 141, 157, 156, 105, 153, 183, 153];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketPoolLiquidity';
      discriminator: [131, 180, 171, 119, 73, 129, 11, 199];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'transferQuoteToken';
      discriminator: [193, 247, 26, 0, 0, 46, 73, 80];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'transferBaseToken';
      discriminator: [143, 16, 107, 107, 245, 66, 255, 68];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateTickLiquidity';
      discriminator: [48, 5, 202, 102, 110, 60, 133, 49];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'updateYieldMarketKeeperFee';
      discriminator: [60, 162, 17, 133, 29, 167, 164, 78];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'epochUpdateRemove';
      discriminator: [116, 253, 6, 150, 75, 48, 176, 168];
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
      name: 'epochUpdateAdd';
      discriminator: [245, 55, 200, 120, 79, 247, 146, 137];
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
      name: 'epochUpdateExpiryCheck';
      discriminator: [99, 200, 237, 96, 245, 113, 213, 36];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
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
      name: 'epochUpdateExpiryApply';
      discriminator: [44, 61, 49, 72, 123, 218, 79, 6];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
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
      name: 'epochUpdateBegin';
      discriminator: [91, 166, 232, 37, 88, 175, 78, 243];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
          name: 'isExpired';
          type: 'bool';
        },
      ];
    },
    {
      name: 'epochUpdateChangePrice';
      discriminator: [89, 16, 55, 172, 43, 74, 200, 11];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
          name: 'admin';
          writable: true;
          signer: true;
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
          name: 'tokenProgram';
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
          name: 'isExpired';
          type: 'bool';
        },
      ];
    },
    {
      name: 'addKeeper';
      discriminator: [73, 181, 232, 2, 99, 47, 150, 179];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'removeKeeper';
      discriminator: [193, 167, 169, 215, 44, 36, 88, 247];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
      name: 'initializeOracle';
      discriminator: [144, 223, 131, 120, 196, 253, 181, 99];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
        },
        {
          name: 'oracle';
          writable: true;
        },
        {
          name: 'state';
        },
        {
          name: 'systemProgram';
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
      name: 'updateOracle';
      discriminator: [112, 41, 209, 18, 248, 226, 252, 188];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
        },
        {
          name: 'oracle';
          writable: true;
        },
        {
          name: 'state';
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
      name: 'rollbackOracle';
      discriminator: [229, 81, 205, 92, 162, 102, 13, 135];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
        },
        {
          name: 'oracle';
          writable: true;
        },
        {
          name: 'state';
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
      name: 'setTwapDuration';
      discriminator: [27, 9, 151, 243, 72, 166, 22, 226];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
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
      name: 'setKeeperFee';
      discriminator: [70, 15, 64, 136, 169, 67, 173, 168];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
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
        },
        {
          name: 'admin';
          writable: true;
          signer: true;
        },
        {
          name: 'state';
        },
        {
          name: 'systemProgram';
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
        },
        {
          name: 'systemProgram';
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
      name: 'claimInsurance';
      discriminator: [96, 254, 157, 145, 19, 96, 95, 55];
      accounts: [
        {
          name: 'admin';
          signer: true;
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
  ];
  accounts: [
    {
      name: 'ammpoolsConfig';
      discriminator: [231, 149, 203, 83, 71, 11, 230, 197];
    },
    {
      name: 'feeTier';
      discriminator: [56, 75, 159, 76, 142, 68, 190, 105];
    },
    {
      name: 'tickArray';
      discriminator: [69, 97, 189, 190, 110, 7, 66, 187];
    },
    {
      name: 'observationState';
      discriminator: [122, 174, 197, 53, 129, 9, 165, 132];
    },
    {
      name: 'earnVault';
      discriminator: [50, 118, 31, 24, 200, 163, 174, 156];
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
      name: 'oracle';
      discriminator: [139, 194, 131, 179, 140, 179, 229, 244];
    },
    {
      name: 'state';
      discriminator: [216, 146, 107, 94, 104, 75, 182, 177];
    },
    {
      name: 'keeperFeeVault';
      discriminator: [178, 173, 210, 193, 249, 49, 248, 17];
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
      name: 'deleteTickArrayEvent';
      discriminator: [218, 143, 2, 251, 195, 26, 158, 109];
    },
    {
      name: 'increaseLiquidityEvent';
      discriminator: [49, 79, 105, 212, 32, 34, 30, 84];
    },
    {
      name: 'decreaseLiquidityEvent';
      discriminator: [58, 222, 86, 58, 68, 50, 85, 56];
    },
    {
      name: 'swapEvent';
      discriminator: [64, 198, 205, 232, 38, 8, 113, 226];
    },
    {
      name: 'initializeMarginMarketRecord';
      discriminator: [52, 90, 159, 67, 116, 13, 141, 113];
    },
    {
      name: 'initializeYieldMarketRecord';
      discriminator: [182, 200, 13, 213, 20, 93, 127, 44];
    },
    {
      name: 'newUserRecord';
      discriminator: [236, 186, 113, 219, 42, 51, 149, 249];
    },
    {
      name: 'newEarnVaultRecord';
      discriminator: [246, 224, 114, 89, 166, 9, 116, 187];
    },
    {
      name: 'earnRecord';
      discriminator: [72, 177, 156, 61, 83, 203, 22, 6];
    },
    {
      name: 'collectEarnProtocolFeeRecord';
      discriminator: [177, 123, 86, 117, 25, 15, 102, 60];
    },
    {
      name: 'newUserOrdersRecord';
      discriminator: [55, 238, 97, 45, 255, 102, 54, 230];
    },
    {
      name: 'newLpRecord';
      discriminator: [49, 100, 102, 111, 204, 158, 224, 179];
    },
    {
      name: 'deleteUserRecord';
      discriminator: [71, 111, 190, 118, 7, 3, 132, 222];
    },
    {
      name: 'deleteLpRecord';
      discriminator: [192, 157, 152, 50, 196, 226, 66, 209];
    },
    {
      name: 'deleteUserOrdersRecord';
      discriminator: [155, 10, 59, 253, 193, 39, 166, 137];
    },
    {
      name: 'depositRecord';
      discriminator: [180, 241, 218, 207, 102, 135, 44, 134];
    },
    {
      name: 'orderRecord';
      discriminator: [104, 19, 64, 56, 89, 21, 2, 90];
    },
    {
      name: 'fillOrderRecord';
      discriminator: [244, 224, 137, 180, 16, 96, 69, 144];
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
      name: 'epochUpdateLpRecord';
      discriminator: [87, 125, 161, 56, 10, 234, 181, 184];
    },
    {
      name: 'settleUserRecord';
      discriminator: [146, 47, 119, 244, 16, 163, 64, 24];
    },
    {
      name: 'transferLpRecord';
      discriminator: [204, 226, 62, 99, 194, 23, 242, 221];
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
      name: 'epochUpdateAddSocialLossRecord';
      discriminator: [254, 53, 70, 131, 83, 242, 176, 41];
    },
    {
      name: 'socialLossTransferPositionRecord';
      discriminator: [128, 84, 218, 67, 154, 208, 187, 177];
    },
    {
      name: 'socialLossChangeRecord';
      discriminator: [109, 188, 133, 140, 202, 122, 220, 15];
    },
    {
      name: 'insuranceTransferPositionRecord';
      discriminator: [10, 82, 193, 149, 4, 0, 24, 74];
    },
    {
      name: 'transferPositionRecord';
      discriminator: [188, 125, 111, 105, 220, 7, 170, 228];
    },
    {
      name: 'insuranceLiquidationRecord';
      discriminator: [5, 109, 249, 71, 130, 140, 251, 90];
    },
    {
      name: 'liquidationRecord';
      discriminator: [127, 17, 0, 108, 182, 13, 231, 53];
    },
    {
      name: 'cancelOrderRecord';
      discriminator: [167, 200, 248, 214, 88, 169, 36, 199];
    },
    {
      name: 'updateOracleRecord';
      discriminator: [19, 185, 218, 90, 23, 244, 14, 11];
    },
    {
      name: 'lpRecord';
      discriminator: [101, 22, 54, 38, 178, 13, 142, 111];
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
      name: 'initializeTickArrayEvent';
      discriminator: [179, 254, 236, 82, 79, 126, 74, 24];
    },
    {
      name: 'collectFeesRecord';
      discriminator: [237, 208, 140, 137, 219, 180, 26, 185];
    },
    {
      name: 'collectProtocolFeesRecord';
      discriminator: [251, 123, 34, 82, 12, 173, 90, 219];
    },
    {
      name: 'initializePositionEvent';
      discriminator: [85, 19, 123, 191, 85, 221, 47, 87];
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
  ];
  types: [
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
      name: 'ammpool';
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
            name: 'rewardLastUpdatedTimestamp';
            type: 'u64';
          },
          {
            name: 'rewardInfos';
            type: {
              array: [
                {
                  defined: {
                    name: 'ammpoolRewardInfo';
                  };
                },
                3,
              ];
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
      name: 'ammpoolRewardInfo';
      docs: [
        'Stores the state relevant for tracking liquidity mining rewards at the `Ammpool` level.',
        'These values are used in conjunction with `PositionRewardInfo`, `Tick.reward_growths_outside`,',
        'and `Ammpool.reward_last_updated_timestamp` to determine how many rewards are earned by open',
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
      name: 'tick';
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
            name: 'rewardGrowthsOutside';
            type: {
              array: ['u128', 3];
            };
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
            name: 'ammpool';
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
            name: 'lowerRate';
            type: 'u64';
          },
          {
            name: 'upperRate';
            type: 'u64';
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
      name: 'observation';
      docs: ['The element of observations in ObservationState'];
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
      name: 'insuranceFund';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'vault';
            type: 'pubkey';
          },
          {
            name: 'depositBalance';
            type: 'u128';
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
      name: 'order';
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
      name: 'marginPosition';
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
      name: 'yieldPosition';
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
      name: 'lpStatus';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'active';
          },
          {
            name: 'updating';
          },
        ];
      };
    },
    {
      name: 'collateralRequirementType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'initial';
          },
          {
            name: 'maintenance';
          },
        ];
      };
    },
    {
      name: 'orderStatus';
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
      name: 'positionDirection';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'long';
          },
          {
            name: 'short';
          },
        ];
      };
    },
    {
      name: 'marketStatus';
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
      name: 'epochUpdateStatus';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'begin';
          },
          {
            name: 'remove';
          },
          {
            name: 'changePrice';
          },
          {
            name: 'expiry';
          },
          {
            name: 'expiryApply';
          },
          {
            name: 'add';
          },
          {
            name: 'end';
          },
        ];
      };
    },
    {
      name: 'marginType';
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
      name: 'marketType';
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
      name: 'marginCalculationMode';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'standard';
          },
          {
            name: 'liquidation';
          },
          {
            name: 'base';
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
      name: 'tickArray';
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
      name: 'observationState';
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
      name: 'earnVault';
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
      name: 'lp';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            docs: ['The owner/authority of the account'];
            type: 'pubkey';
          },
          {
            name: 'ammPosition';
            docs: ["The user's liquidity"];
            type: {
              defined: {
                name: 'position';
              };
            };
          },
          {
            name: 'reserveQuoteAmount';
            docs: ["The user's yield positions"];
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
            name: 'state';
            type: {
              defined: {
                name: 'lpStatus';
              };
            };
          },
          {
            name: 'padding1';
            type: {
              array: ['u8', 7];
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
      name: 'marginMarket';
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
            name: 'padding';
            type: {
              array: ['u8', 64];
            };
          },
        ];
      };
    },
    {
      name: 'oracle';
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
      name: 'state';
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
      name: 'keeperFeeVault';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'keeperFee';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'user';
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
      name: 'yieldMarket';
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
            name: 'socialLoss';
            type: 'i64';
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
            name: 'lpAccountsProcessed';
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
            name: 'totalReserveBaseAmount';
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
            name: 'totalBaseQuota';
            type: 'i64';
          },
          {
            name: 'epochUpdateEndTs';
            type: 'i64';
          },
          {
            name: 'padding';
            type: {
              array: ['u8', 42];
            };
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
      name: 'newUserRecord';
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
            name: 'subAccountId';
            type: 'u16';
          },
          {
            name: 'isIsolated';
            type: 'bool';
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
      name: 'newUserOrdersRecord';
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
            name: 'subAccountId';
            type: 'u16';
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
            type: 'i64';
          },
          {
            name: 'lpAuthority';
            type: 'pubkey';
          },
          {
            name: 'lp';
            type: 'pubkey';
          },
          {
            name: 'subAccountId';
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
            name: 'subAccountId';
            type: 'u16';
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
            type: 'i64';
          },
          {
            name: 'lpAuthority';
            type: 'pubkey';
          },
          {
            name: 'lp';
            type: 'pubkey';
          },
          {
            name: 'subAccountId';
            type: 'u16';
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
            name: 'subAccountId';
            type: 'u16';
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
            type: {
              defined: {
                name: 'depositDirection';
              };
            };
          },
          {
            name: 'marketIndex';
            type: 'u32';
          },
          {
            name: 'depositRecordId';
            type: 'u64';
          },
          {
            name: 'amount';
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
      name: 'orderRecord';
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
      name: 'fillOrderRecord';
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
            type: 'u32';
          },
          {
            name: 'filler';
            type: {
              option: 'pubkey';
            };
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
            name: 'baseAmountHeld';
            type: 'i64';
          },
          {
            name: 'quoteAmountHeld';
            type: 'i64';
          },
          {
            name: 'tradePrice';
            type: 'i64';
          },
          {
            name: 'fee';
            type: 'i64';
          },
          {
            name: 'rate';
            type: 'u64';
          },
          {
            name: 'realizedPnl';
            type: 'i64';
          },
          {
            name: 'orderIsClose';
            type: 'bool';
          },
          {
            name: 'totalBalance';
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
            type: 'i32';
          },
          {
            name: 'tickUpper';
            type: 'i32';
          },
          {
            name: 'rateLower';
            type: 'u64';
          },
          {
            name: 'rateUpper';
            type: 'u64';
          },
          {
            name: 'liquidityAmount';
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
            name: 'baseAmountHeld';
            type: 'i64';
          },
          {
            name: 'quoteAmountHeld';
            type: 'i64';
          },
          {
            name: 'rate';
            type: 'u64';
          },
          {
            name: 'realizedPnl';
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
            type: 'i32';
          },
          {
            name: 'tickUpper';
            type: 'i32';
          },
          {
            name: 'rateLower';
            type: 'u64';
          },
          {
            name: 'rateUpper';
            type: 'u64';
          },
          {
            name: 'liquidityAmount';
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
      name: 'epochUpdateEndRecord';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'totalQuoteAssetAmount';
            type: 'i64';
          },
          {
            name: 'keeperFee';
            type: 'u64';
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
            name: 'baseAmountHeld';
            type: 'i64';
          },
          {
            name: 'quoteAmountHeld';
            type: 'i64';
          },
          {
            name: 'tradePrice';
            type: 'i64';
          },
          {
            name: 'realizedPnl';
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
            name: 'baseAmountHeld';
            type: 'i64';
          },
          {
            name: 'quoteAmountHeld';
            type: 'i64';
          },
          {
            name: 'tradePrice';
            type: 'i64';
          },
          {
            name: 'fee';
            type: 'i64';
          },
          {
            name: 'rate';
            type: 'u64';
          },
          {
            name: 'realizedPnl';
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
      name: 'cancelOrderRecord';
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
            type: 'u32';
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
            type: {
              defined: {
                name: 'lpDirection';
              };
            };
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
            name: 'deltaBaseAssetAmount';
            type: 'i64';
          },
          {
            name: 'deltaQuoteAssetAmount';
            type: 'i64';
          },
          {
            name: 'tickLower';
            type: 'i32';
          },
          {
            name: 'tickUpper';
            type: 'i32';
          },
          {
            name: 'rateLower';
            type: 'u64';
          },
          {
            name: 'rateUpper';
            type: 'u64';
          },
          {
            name: 'marginAmount';
            type: 'i64';
          },
          {
            name: 'mintedQuoteAmount';
            type: 'i64';
          },
          {
            name: 'liquidityAmount';
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
            name: 'totalQuoteAssetAmount';
            type: 'i64';
          },
          {
            name: 'totalMarginAmount';
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
            type: 'i32';
          },
          {
            name: 'rateLower';
            type: 'u64';
          },
          {
            name: 'rateUpper';
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
  ];
};
