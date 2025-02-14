import web3 from "@solana/web3.js-1";
import web3v2 from "@solana/web3.js-2";
import {logger} from "./logger";
import retry from "promise-retry";

export class RPCClient {
    public readonly v2: web3v2.Rpc<any>;
    public readonly v1: web3.Connection;
    public readonly cluster: 'mainnet'|'devnet';

    private readonly retryOptions = {
        retries: 5,
        minTimeout: 500,
        maxTimeout: 10000,
    };

    constructor(private readonly endpoint: string) {
        this.v2 = web3v2.createSolanaRpc(endpoint);
        this.v1 = new web3.Connection(endpoint)
        this.cluster = endpoint.includes('mainnet') ? 'mainnet' : 'devnet';
    }

    async getNFTOwnerByMintAddress(mintAddress: string): Promise<string | null> {
        const res = await retry(this.retryOptions, async () => {
            const res = await fetch(this.endpoint, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "id": "test",
                    "method": "getTokenAccounts",
                    "params": {
                        "mint": mintAddress,
                        "page": 1,
                        "limit": 1,
                        "options": {},
                    },
                }),
            });
            if (res.status == 429 || res.status > 500) throw new Error("rpc server error");
            return res;
        })

        const data = await res.json();
        for (const tokenAccount of data.result.token_accounts) {
            if (tokenAccount.amount == 1) {
                return tokenAccount.owner;
            }
        }

        logger.warn(`NFT mint ${mintAddress} owner not found`);
        return null;
    }

    async getTokenSupply(mintAddress: string) {
        return retry(this.retryOptions, () => {
            return this.v1.getTokenSupply(new web3.PublicKey(mintAddress))
                .then(res => res.value);
        });
    }
}
