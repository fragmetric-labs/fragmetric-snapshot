import * as web3 from '@solana/web3.js';
import * as kit from '@solana/kit';
import { logger } from './logger';
import retry from 'promise-retry';

export class RPCClient {
  public readonly v2: kit.Rpc<any>;
  public readonly v1: web3.Connection;
  public readonly cluster: 'mainnet' | 'devnet';

  private readonly retryOptions = {
    retries: 5,
    minTimeout: 500,
    maxTimeout: 10000,
  };

  constructor(private readonly endpoint: string) {
    this.v2 = kit.createSolanaRpc(endpoint);
    this.v1 = new web3.Connection(endpoint);
    this.cluster = endpoint.includes('mainnet') ? 'mainnet' : 'devnet';
  }

  async getNFTOwnerByMintAddress(mintAddress: string): Promise<string | null> {
    const data = await retry(this.retryOptions, async () => {
      const res = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 'RPCClient.getNFTOwnerByMintAddress',
          method: 'getTokenAccounts',
          params: {
            mint: mintAddress,
            page: 1,
            limit: 1,
            options: {},
          },
        }),
      });
      if (res.status == 429 || res.status > 500) {
        const msg = `rpc server error: ${res.status}`;
        logger.warn(msg);
        throw new Error(msg);
      }
      const result = await res.json();
      if (result?.error?.message.includes('Method not found')) {
        logger.warn(`NFT mint ${mintAddress} owner not found`, result);
        return null;
      }
      return result;
    });

    if (data?.error) {
      const msg = `rpc server error: ${data.error.message ?? JSON.stringify(data.error)}`;
      logger.error(`rpc server error`, { ...data });
      throw new Error(msg);
    }
    if (data?.result.token_accounts) {
      for (const tokenAccount of data.result.token_accounts) {
        if (tokenAccount.amount == 1) {
          return tokenAccount.owner;
        }
      }
      logger.warn(`NFT mint ${mintAddress} owner not found`);
    }
    return null;
  }

  async getTokenSupply(mintAddress: web3.PublicKey): Promise<web3.TokenAmount> {
    return retry(this.retryOptions, () => {
      return this.v1.getTokenSupply(mintAddress).then((res) => res.value);
    });
  }
}
