import * as web3 from '@solana/web3.js';
import { SourceStreamFactory } from '.';
import { RPCClient } from '../../../rpc';
import { AnchorProvider, BN, Program, ProgramAccount, Wallet } from '@coral-xyz/anchor';
import LoopscaleIDLFile from './loopscale.idl.json';
import { Loopscale } from './loopscale.idl';
import * as orca from '@orca-so/whirlpools';
import * as orcaClient from '@orca-so/whirlpools-client';
// @ts-ignore
import { getMint } from '@solana/spl-token';
import { calculateBaseTokenBalanceFromPosition } from './orca-liquidity';

// There’s no on-chain field that uniquely identifies a looping instance.
// We pass a synthetic identifier via the snapshot arguments to distinguish
// between LP-token looping and normal-token looping.
type VirtualMarketIdentifier =
  | 'loopscaleLoopingWfragsol11111111111111111OWP'
  | 'loopscaleLoopingWfragbtc11111111111111111OWP';

const orcaLiquidityPoolAddress: Record<VirtualMarketIdentifier, web3.PublicKey> = {
  loopscaleLoopingWfragsol11111111111111111OWP: new web3.PublicKey(
    '5xfKkFmhzNhHKTFUkh4PJmHSWB6LpRvhJcUMKzPP6md2',
  ),
  loopscaleLoopingWfragbtc11111111111111111OWP: new web3.PublicKey(
    'H6gUYo94dMyhaT4Zm94DRSuH931atRcdAVdMCu3aAwze',
  ),
};

export const loopscaleLooping: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);
  const virtualMarketIdentifier = opts.args[0];
  const inputToken = new web3.PublicKey(opts.args[1]);

  const loopscaleProgram = new Program(
    LoopscaleIDLFile as Loopscale,
    new AnchorProvider(rpc.v1, new Wallet(web3.Keypair.generate())),
  );

  const loans = await getLoansByMarketOrMint({
    loopscaleProgram,
    virtualMarketIdentifier,
    mint: inputToken,
  });

  const userCollateralBalance: { [user: string]: number } = {};

  if (
    virtualMarketIdentifier == 'loopscaleLoopingWfragsol11111111111111111OWP' ||
    virtualMarketIdentifier == 'loopscaleLoopingWfragbtc11111111111111111OWP'
  ) {
    // LP-token looping
    const poolInfo = await orcaClient.fetchWhirlpool(
      rpc.v2,
      orcaLiquidityPoolAddress[virtualMarketIdentifier].toString() as any,
    );
    const poolTokenA = poolInfo.data.tokenMintA;
    const poolTokenB = poolInfo.data.tokenMintB;
    const poolTokenADecimals = (await getMint(rpc.v1, new web3.PublicKey(poolTokenA))).decimals;
    const poolTokenBDecimals = (await getMint(rpc.v1, new web3.PublicKey(poolTokenB))).decimals;

    const currentPrice = 1.0001 ** poolInfo.data.tickCurrentIndex;
    const currentPriceBackend = currentPrice / 10 ** (poolTokenBDecimals - poolTokenADecimals);

    for (let i = 0; i < loans.length; i++) {
      const borrower = loans[i].account.borrower.toString();
      const positions = await orca.fetchPositionsForOwner(
        rpc.v2,
        loans[i].publicKey.toString() as any,
      );

      if (positions.length > 1) {
        throw new Error('loan has more than one position');
      }

      const baseTokenBalance = calculateBaseTokenBalanceFromPosition(
        inputToken.toString() as any,
        poolTokenA,
        poolTokenB,
        poolTokenADecimals,
        poolTokenBDecimals,
        currentPriceBackend,
        currentPrice,
        positions[0].data as orcaClient.Position,
      );

      userCollateralBalance[borrower] = (userCollateralBalance[borrower] ?? 0) + baseTokenBalance;
    }
  } else {
    // normal-token looping
    for (let i = 0; i < loans.length; i++) {
      const borrower = loans[i].account.borrower.toString();
      const collateralData = loans[i].account.collateral[0];
      const totalCollateral = new BN(collateralData.amount[0].reverse()).toNumber();

      userCollateralBalance[borrower] = (userCollateralBalance[borrower] ?? 0) + totalCollateral;
    }
  }
  process.nextTick(() => {
    try {
      for (const [key, value] of Object.entries(userCollateralBalance)) {
        opts.produceSnapshot({
          owner: key,
          baseTokenBalance: Math.floor(value),
        });
      }
    } catch (error) {
      opts.close(error as Error);
      return;
    }
    opts.close();
  });
};

async function getLoansByMarketOrMint({
  loopscaleProgram,
  virtualMarketIdentifier,
  mint,
}: {
  loopscaleProgram: Program<Loopscale>;
  virtualMarketIdentifier: string;
  mint: web3.PublicKey;
}) {
  const loanFilter = [];

  if (
    virtualMarketIdentifier == 'loopscaleLoopingWfragsol11111111111111111OWP' ||
    virtualMarketIdentifier == 'loopscaleLoopingWfragbtc11111111111111111OWP'
  ) {
    loanFilter.push({
      memcmp: {
        // collateral.data.asset_identifier (pool address)
        offset:
          8 + 1 + 1 + 1 + 32 + 8 + 8 + 5 * (1 + 3 * 32 + 4 * 8 + 5 + 24 + 3 * 8) + (32 + 8 + 1),
        bytes: orcaLiquidityPoolAddress[virtualMarketIdentifier].toBase58(),
      },
    });
  } else {
    loanFilter.push({
      memcmp: {
        // collateral.data.asset_mint (token mint)
        offset: 8 + 1 + 1 + 1 + 32 + 8 + 8 + 5 * (1 + 3 * 32 + 4 * 8 + 5 + 24 + 3 * 8),
        bytes: mint.toBase58(),
      },
    });
  }

  const loans = await loopscaleProgram.account.loan.all(loanFilter);
  return loans;
}
