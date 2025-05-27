import { Readable } from 'stream';
import { orcaLiquidity } from './orca-liquidity';
import { kaminoLiquidity } from './kamino-liquidity';
import { exponentYieldTrading } from './exponent-yield-trading';
import { sandglassYieldTrading } from './sandglass-yield-trading';
import { ratexYieldTrading } from './ratex-yield-trading';
import { kaminoLending } from './kamino-lending';
import { nxfinanceLooping } from './nxfinance-looping';
import { logger } from '../../../logger';
import { banxLooping } from './banx-looping';
import { soonBridge } from './soon-bridge';
import { textureLending } from './texture-lending';

export const sources = {
  'orca-liquidity': orcaLiquidity,
  'kamino-liquidity': kaminoLiquidity,
  'exponent-yield-trading': exponentYieldTrading,
  'sandglass-yield-trading': sandglassYieldTrading,
  'ratex-yield-trading': ratexYieldTrading,
  'kamino-lending': kaminoLending,
  'nxfinance-looping': nxfinanceLooping,
  'banx-looping': banxLooping,
  'soon-bridge': soonBridge,
  'texture-lending': textureLending,
};

export type Snapshot = {
  owner: string;
  baseTokenBalance: number;
};

export type CreateSourceStreamOptions = {
  rpc: string;
  source: keyof typeof sources;
  args: string[];
};

export type SourceStreamFactory = (opts: SourceStreamOptions) => Promise<void>;

export type SourceStreamOptions = CreateSourceStreamOptions & {
  produceSnapshot: (snapshot: Snapshot) => void;
  close: (error?: Error) => void;
};

export function createSourceStream(opts: CreateSourceStreamOptions): Promise<Readable> {
  return JSONReadableStream.create(opts);
}

class JSONReadableStream extends Readable {
  private readonly initialized: Promise<boolean>;

  public static async create(opts: CreateSourceStreamOptions) {
    const stream = new JSONReadableStream(opts);
    await stream.initialized;
    return stream;
  }

  private constructor(opts: CreateSourceStreamOptions) {
    super({ objectMode: true });

    let totalBaseTokenBalance = 0n;
    let snapshotCount = 0;
    const options: SourceStreamOptions = {
      ...opts,
      produceSnapshot: (snapshot) => {
        totalBaseTokenBalance += BigInt(snapshot.baseTokenBalance);
        snapshotCount++;
        this.push(JSON.stringify(snapshot) + '\n');
      },
      close: (err) => {
        if (err) {
          this.destroy(err);
        } else {
          this.push(null);
          process.on('exit', () => {
            logger.info({
              totalBaseTokenBalance,
              snapshotCount,
            });
          });
        }
      },
    };

    this.initialized = new Promise(async (resolve) => {
      try {
        const source = sources[options.source];
        if (source) {
          await source(options);
        } else {
          throw new Error('not supported source: ' + options.source);
        }
      } catch (err) {
        this.destroy(err as Error);
      } finally {
        resolve(true);
      }
    });
  }

  _read() {
    // no-op
  }
}
