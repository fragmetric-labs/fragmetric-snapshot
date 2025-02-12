import {program} from "commander";
import {logger} from "./logger";
import {createSourceStream} from "./source";
import {createOutputStream} from "./output";

program
    .name("fragmetric-snapshot")
    .description("CLI to take arbitrary onchain snapshots for Fragmetric platform")
    .version(require('../package.json').version as string)
    .option("-s, --silent", "Turn off stdout logging")
    .option("-r, --rpc <url>", "Solana RPC URL")
    .option("-o, --output <path>", "Output path: - (stdout), ./fragmetric-snapshot.json, /tmp/fragmetric-snapshot.sock, ...")
    .argument("source [source-args]", "orca-liquidity pool tokenA tokenB, ...")
    .allowExcessArguments(true)
    .showHelpAfterError()
    .parse();

export type ProgramOptions = {
    rpc: string;
    output: string;
    source: string;
    sourceArgs: string[];
};

const rawOptions = program.opts();
const options: ProgramOptions  = {
    rpc: rawOptions.rpc || "https://api.mainnet-beta.solana.com",
    output: rawOptions.output || "-",
    source: program.args[0] || "",
    sourceArgs: program.args.slice(1),
};
logger.level = !!rawOptions.silent ? "error" : "debug";

logger.info("creating a snapshot stream", { options, version: program.version() });
Promise.all([
    createOutputStream({
        path: options.output,
    }),
    createSourceStream({
        rpc: options.rpc,
        source: options.source,
        args: options.sourceArgs,
    }),
])
.then(([outputStream, sourceStream]) => {
    sourceStream.pipe(outputStream);
    sourceStream.on("error", (error: any) => {
        logger.error("exception occurred from source stream", {error});
        process.exit(1);
    });
    sourceStream.on("close", () => {
        logger.info("source stream closed");
        process.exit(0);
    })
    outputStream.on("error", (error: any) => {
        logger.error("exception occurred from output stream", {error});
        process.exit(1);
    })
    outputStream.on("close", () => {
        logger.info("output stream closed");
        process.exit(0);
    })
}).catch((error) => {
    logger.error("exception occurred while initializing source/output streams", {error});
});
