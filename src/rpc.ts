import web3v2 from "@solana/web3.js-2";
import web3 from "@solana/web3.js";
import {logger} from "./logger";

export class RPCClient {
    public readonly v2: web3v2.Rpc<any>;
    public readonly cluster: 'mainnet'|'devnet';

    private readonly INITIAL_RPC_MAX_RETRY_COUNT = 10;
    private readonly INITIAL_RPC_RETRY_MS = 3000; // 3s

    constructor(private readonly endpoint: string) {
        this.v2 = web3v2.createSolanaRpc(endpoint);
        this.cluster = endpoint.includes('mainnet') ? 'mainnet' : 'devnet';
    }

    async getNFTOwnerByMintAddress(mintAddress: string): Promise<string | null> {
        let res = await rpcCall(this.endpoint, mintAddress);

        let rpcMaxRetryCount = this.INITIAL_RPC_MAX_RETRY_COUNT;
        let rpcRetryMs = 0;
        while (rpcMaxRetryCount > 0 && res.status === 429) { // deal rate limit
            await sleep(rpcRetryMs += this.INITIAL_RPC_RETRY_MS); // linearly increase by 3s
            logger.warn(`rpc rate limit occured, rpc retry count left ${rpcMaxRetryCount}`);
            res = await rpcCall(this.endpoint, mintAddress); // recall rpc after sleep
            rpcMaxRetryCount--; // countdown rpcMaxRetry
        }

        const data = await res.json();
        for (const tokenAccount of data.result.token_accounts) {
            if (tokenAccount.amount == 1) {
                return tokenAccount.owner;
            }
        }

        logger.warn(`NFT mint ${mintAddress} owner not found`);
        return null;
    }
}

const rpcCall = async (endpoint: string, mintAddress: string) => {
    return await fetch(endpoint, {
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
}

const sleep = (ms: number) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
