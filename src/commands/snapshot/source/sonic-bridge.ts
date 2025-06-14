import * as web3 from '@solana/web3.js';
import { SourceStreamFactory } from '.';
import { RPCClient } from '../../../rpc';
import Decimal from 'decimal.js';
const { Sega } = require('@sega-so/sega-sdk'); // avoid loading mjs bundle

export const SONIC_SVM_MAINNET_RPC = 'https://rpc.mainnet-alpha.sonic.game';
export const SONIC_SVM_WFRAGSOL_MINT_ADDRESS = new web3.PublicKey(
  'ApsE83FeU6NhRh1xYHiN2JmF2oDecNXZxn5ihXHFNWWL',
);

export const sonicBridge: SourceStreamFactory = async (opts) => {
  const segaLiquidityPool = new web3.PublicKey(opts.args[0]);
  const inputToken = new web3.PublicKey(opts.args[1]);
  if (!inputToken.equals(new web3.PublicKey('WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U'))) {
    throw new Error(
      `invalid input address: ${inputToken.toString()} is not a valid wfragSOL mint address`,
    );
  }
  const bridgedInputToken = SONIC_SVM_WFRAGSOL_MINT_ADDRESS;

  const rpc = new RPCClient(SONIC_SVM_MAINNET_RPC);
  const sega = await Sega.load({
    cluster: 'mainnet',
    connection: rpc.v1,
    owner: undefined,
    apiRequestInterval: 5 * 60 * 1000,
    apiRequestTimeout: 10 * 1000,
    apiCacheTime: 5 * 60 * 1000,
    blockhashCommitment: 'confirmed',
  });

  const pool = await sega.cpmm.getPoolInfoFromRpc(segaLiquidityPool);
  const lpMint = new web3.PublicKey(pool.poolInfo.lpMint.address);
  const lpSupply = new Decimal(pool.poolInfo.lpAmount);
  const lpTokenAccounts = await rpc.getTokenAccountsOfMint(lpMint);
  let baseTokenAmount: Decimal;
  if (pool.poolInfo.mintA.address == bridgedInputToken.toString()) {
    baseTokenAmount = new Decimal(pool.poolInfo.mintAmountA).mul(
      Decimal.pow(10, pool.poolInfo.mintA.decimals),
    );
  } else if (pool.poolInfo.mintB.address == bridgedInputToken.toString()) {
    baseTokenAmount = new Decimal(pool.poolInfo.mintAmountB).mul(
      Decimal.pow(10, pool.poolInfo.mintB.decimals),
    );
  } else {
    throw new Error('invalid input address');
  }

  process.nextTick(() => {
    try {
      for (const account of lpTokenAccounts) {
        const lpShareInBaseTokenAmount = lpSupply.isZero()
          ? 0
          : baseTokenAmount
              .mul(2)
              .mul(new Decimal(account.amount.toString()))
              .div(lpSupply)
              .floor()
              .toNumber();
        opts.produceSnapshot({
          owner: account.tokenOwner,
          baseTokenBalance: lpShareInBaseTokenAmount,
        });
      }
    } catch (error) {
      opts.close(error as Error);
      return;
    }
    opts.close();
  });
};
