import web3v2 from "@solana/web3.js-2";
import web3 from "@solana/web3.js";

export class RPCClient {
    public readonly v2: web3v2.Rpc<any>;
    public readonly cluster: 'mainnet'|'devnet';

    constructor(private readonly endpoint: string) {
        this.v2 = web3v2.createSolanaRpc(endpoint);
        this.cluster = endpoint.includes('mainnet') ? 'mainnet' : 'devnet';
    }

    async getNFTOwnerByMintAddress(mintAddress: string): Promise<string > {
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
        const data = await res.json();
        for (const tokenAccount of data.result.token_accounts) {
            if (tokenAccount.amount == 1) {
                return tokenAccount.owner;
            }
        }
        throw new Error("NTF owner not found");;
    }
}
