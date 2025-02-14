import { Readable } from "stream";
import {produceOrcaLiquidity} from "./orca";
import { produceKaminoLiquidity } from './kamino';

export type Snapshot = {
    owner: string;
    baseTokenBalance: number;
}

export type CreateSourceStreamOptions = {
    rpc: string;
    source: string;
    args: string[];
}

export type SourceStreamOptions = CreateSourceStreamOptions & {
    produceSnapshot: (snapshot: Snapshot) => void;
    close: () => void;
}

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
                this.push(JSON.stringify(snapshot) + "\n");
            },
            close: () => {
                this.destroy();
            },
        }

        this.initialized = new Promise(async (resolve) => {
            try {
                switch (options.source) {
                    case 'orca-liquidity':
                        await produceOrcaLiquidity(options);
                        break;
                    case 'kamino-liquidity':
                        await produceKaminoLiquidity(options);
                        break;
                    case 'test':
                        this.intervalId = setInterval(() => {
                            options.produceSnapshot({
                                owner: "owner_public_key",
                                baseTokenBalance: new Date().getTime(),
                            });
                        }, 1000);
                        break;
                    default:
                        process.nextTick(() => {
                            this.destroy(new Error("not supported source: " + options.source));
                        });
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
