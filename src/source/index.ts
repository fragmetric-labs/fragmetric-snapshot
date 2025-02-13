import { Readable } from 'stream';
import {produceOrcaLiquidity} from "./orca";

export type CreateSourceStreamOptions = {
    rpc: string;
    source: string;
    args: string[];
}

export type SourceStreamOptions = CreateSourceStreamOptions & {
    produce: (snapshot: any) => void;
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
            produce: (snapshot: any) => {
                this.push(JSON.stringify(snapshot) + "\n");
            },
        }

        this.initialized = new Promise(async (resolve) => {
            try {
                switch (options.source) {
                    case 'orca-liquidity':
                        await produceOrcaLiquidity(options);
                        break;
                    case 'test':
                        this.intervalId = setInterval(() => {
                            options.produce({ hello: "world", time: new Date() });
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
                this.push(null);
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
