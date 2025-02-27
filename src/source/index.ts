import { Readable } from 'stream';
import { orcaLiquidity } from './orca-liquidity';
import { kaminoLiquidity } from './kamino-liquidity';
import { exponentYieldTrading } from './exponent-yield-trading';
import { ratexYieldTrading } from './ratex-yield-trading';
import { kaminoLending } from './kamino-lending';

export const sources = {
  'orca-liquidity': orcaLiquidity,
  'kamino-liquidity': kaminoLiquidity,
  'exponent-yield-trading': exponentYieldTrading,
  'ratex-yield-trading': ratexYieldTrading,
  'kamino-lending': kaminoLending,
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
  private intervalId: any;
  private readonly initialized: Promise<boolean>;

  public static async create(opts: CreateSourceStreamOptions) {
    const stream = new JSONReadableStream(opts);
    await stream.initialized;
    return stream;
  }

  private constructor(opts: CreateSourceStreamOptions) {
    super({ objectMode: true });

    const options: SourceStreamOptions = {
      ...opts,
      produceSnapshot: (snapshot) => {
        this.push(JSON.stringify(snapshot) + '\n');
      },
      close: (err) => {
        if (err) {
          this.destroy(err);
        } else {
          this.push(null);
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

  _destroy(error: Error | null, callback: (error?: Error | null) => void) {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    callback(error);
  }
}
