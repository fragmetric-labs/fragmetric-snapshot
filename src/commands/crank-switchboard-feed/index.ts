import {Command} from "commander";
import {
  AnchorUtils,
  asV0Tx,
  getDefaultQueue,
  PullFeed,
} from "@switchboard-xyz/on-demand";
import {CrossbarClient} from "@switchboard-xyz/common";
import { PublicKey } from "@solana/web3.js-1";
import {logger} from "../../logger";

const DEFAULT_KEYPAIR_PATH = "/tmp/solana-keypair.json";

export const crankSwitchBoardFeedCommand = new Command()
  .name('crank-switchboard-feed')
  .description('CLI to crank switchboard feed')
  .argument('poolAddress', 'DeFi pool address')
  .argument('feedAddress', 'switchboard oracle feed address')
  .option('-s, --silent', 'Turn off stdout logging')
  .option('-r, --rpc <url>', 'Solana RPC URL')
  .option('-k, --keypair-path <keypairPath>', 'Solana keypair path', DEFAULT_KEYPAIR_PATH)
  .option('-c, --chain <chain>', 'Chain name', 'solana')
  .option('-n --network <network>', 'Network name, devnet|mainnet', 'devnet')
  .showHelpAfterError()
  .action(async (poolAddress: string, feedAddress: string, options, cmd) => {
    logger.level = !!options.silent ? 'error' : 'debug';
    logger.info('crank-switchboard-feed', {poolAddress, feedAddress, options, version: cmd.parent?.version()});

    const rpc: string = options.rpc!;
    const keypairPath: string = options.keypairPath!;
    const chain: string = options.chain!;
    const network: 'devnet' | 'mainnet' = options.network!;

    const queue = await getDefaultQueue(rpc)
    const program = queue.program;
    const connection = program.provider.connection;
    const payer = await AnchorUtils.initKeypairFromFile(keypairPath);
    const crossbarClient = CrossbarClient.default();

    const pullFeed = new PullFeed(program, new PublicKey(feedAddress));

    const initialized = await pullFeed.isInitializedAsync();

    if (!initialized) {
      throw new Error(`Feed "${feedAddress}" is not initialized`);
    }

    const [pullIx, _, __, luts] = await pullFeed.fetchUpdateIx({
      crossbarClient,
      chain,
      network,
    }, false, payer.publicKey);

    const tx = await asV0Tx({
      connection,
      ixs: pullIx!, // after the pullIx you can add whatever transactions you'd like
      signers: [payer],
      // computeUnitPrice: 200_000,
      // computeUnitLimitMultiple: 1.3,
      lookupTables: luts,
    });

    const latestBlockHash = await connection.getLatestBlockhash("confirmed");

    const sig = await connection.sendTransaction(tx, {
      preflightCommitment: "processed",
      skipPreflight: false,
    });

    const isConfirmed = await connection.confirmTransaction({
      signature: sig,
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
    }, "confirmed");

    if (isConfirmed) {
      logger.info(`Transaction ${sig} confirmed`);
    } else {
      throw new Error(`Transaction ${sig} not confirmed`);
    }
  });
