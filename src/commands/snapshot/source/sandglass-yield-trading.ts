import {
  BorshAccountsCoder,
  IdlAccounts,
  Program,
  AnchorProvider,
  Wallet,
} from '@coral-xyz/anchor-29';
import { PublicKey, Connection, Keypair, ConfirmOptions } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import Decimal from 'decimal.js';
import { bs58 } from '@coral-xyz/anchor/dist/cjs/utils/bytes';
import { SourceStreamFactory } from './index';
import { IDL, Sandglass } from './sandglass.idl';
import { RPCClient } from '../../../rpc';

const SANDGLASS_PROGRAM_ID = new PublicKey('SANDsy8SBzwUE8Zio2mrYZYqL52Phr2WQb9DDKuXMVK');

const confirmOpts = {
  commitment: 'processed',
  preflightCommitment: 'processed',
  skipPreflight: true,
} as ConfirmOptions;
const coder = new BorshAccountsCoder(IDL);
type MarketState = IdlAccounts<Sandglass>['market'];
type SGState = IdlAccounts<Sandglass>['sandglassAccount'];

type ResultListState = {
  userAddress: string;
  ytTokenAmount: Decimal;
};

export const sandglassYieldTrading: SourceStreamFactory = async (opts) => {
  const rpc = new RPCClient(opts.rpc);
  const sandglassProgram = new Program(
    IDL,
    SANDGLASS_PROGRAM_ID,
    new AnchorProvider(rpc.v1, new Wallet(Keypair.generate()), confirmOpts),
  );

  const market = new PublicKey(opts.args[0]);
  const _ = new PublicKey(opts.args[1]);

  const sandglassMarket = await getMarket(sandglassProgram.provider.connection, market);

  const ytPoolAmount = await getTokenAmount(
    sandglassProgram.provider.connection,
    sandglassMarket.poolYtTokenAccount,
  );
  const lpMintSupply = await getMintSupply(
    sandglassProgram.provider.connection,
    sandglassMarket.tokenLpMintAddress,
  );

  let resultList: ResultListState[] = [];

  resultList = await getSandglassAccount(
    sandglassProgram.provider.connection,
    market,
    resultList,
    sandglassMarket.marketSigner,
    ytPoolAmount,
    lpMintSupply,
    Number(sandglassMarket.marketConfig.priceBase.toString()),
  );
  resultList = await getYtTokenAmount(
    sandglassProgram.provider.connection,
    resultList,
    sandglassMarket.marketSigner,
    sandglassMarket.tokenYtMintAddress,
  );
  resultList = await getLpTokenAmount(
    sandglassProgram.provider.connection,
    resultList,
    sandglassMarket.marketSigner,
    sandglassMarket.tokenLpMintAddress,
    ytPoolAmount,
    lpMintSupply,
    Number(sandglassMarket.marketConfig.priceBase.toString()),
  );

  resultList = await updateFeeAccount(
    sandglassProgram.provider.connection,
    resultList,
    sandglassMarket.feeLpTokenAccount,
    ytPoolAmount,
    lpMintSupply,
    Number(sandglassMarket.marketConfig.priceBase.toString()),
  );

  process.nextTick(() => {
    try {
      for (const resItem of resultList) {
        opts.produceSnapshot({
          owner: resItem.userAddress,
          baseTokenBalance: resItem.ytTokenAmount.toNumber(),
        });
      }
    } catch (error) {
      opts.close(error as Error);
      return;
    }
    opts.close();
  });
};

function setResultData(
  data: ResultListState[],
  userAddress: string,
  amount: Decimal,
  update: boolean = false,
) {
  const index = data.findIndex((result) => result.userAddress === userAddress);

  if (update) {
    if (index === -1) {
      return data;
    }
    data[index].ytTokenAmount = amount;
  } else {
    if (index === -1) {
      data = [
        {
          userAddress: userAddress,
          ytTokenAmount: amount,
        },
        ...data,
      ];
    } else {
      data[index].ytTokenAmount = data[index].ytTokenAmount.add(amount);
    }
  }

  return data;
}

function removeResultData(data: ResultListState[], userAddress: string) {
  const index = data.findIndex((result) => result.userAddress === userAddress);
  data.splice(index, 1);
  return data;
}

async function getSandglassAccount(
  connection: Connection,
  market: PublicKey,
  result: ResultListState[],
  marketSigner: PublicKey,
  ytPoolAmount: Decimal,
  lpMintSupply: Decimal,
  tokenDecimals: number,
) {
  const accounts = await connection.getProgramAccounts(SANDGLASS_PROGRAM_ID, {
    commitment: 'processed',
    filters: [
      {
        memcmp: {
          offset: 0,
          bytes: bs58.encode([20, 60, 39, 121, 197, 179, 157, 220]),
        },
      },
      {
        memcmp: {
          offset: 9,
          bytes: market.toBase58(),
        },
      },
    ],
  });

  for (const account of accounts) {
    const sandglassAccount: SGState = coder.decode('sandglassAccount', account.account.data);

    if (sandglassAccount.userAddress.toString() === marketSigner.toString()) continue;

    if (Number(sandglassAccount.stakeInfo.stakeYtAmount.toString()) !== 0) {
      const userYtStakeAmount = new Decimal(sandglassAccount.stakeInfo.stakeYtAmount.toString());
      result = setResultData(
        result,
        sandglassAccount.userAddress.toString(),
        userYtStakeAmount.div(tokenDecimals),
      );
    }
    if (Number(sandglassAccount.stakeInfo.stakeLpAmount.toString()) !== 0) {
      const userLpStakeAmount = new Decimal(sandglassAccount.stakeInfo.stakeLpAmount.toString());
      const withdrawYtTokenAmount = ytPoolAmount.mul(userLpStakeAmount).div(lpMintSupply).floor();

      result = setResultData(
        result,
        sandglassAccount.userAddress.toString(),
        withdrawYtTokenAmount.div(tokenDecimals),
      );
    }
  }

  return result;
}

async function getYtTokenAmount(
  connection: Connection,
  result: ResultListState[],
  marketSigner: PublicKey,
  mintAddress: PublicKey,
) {
  const tokenProgramAccounts = await connection.getParsedProgramAccounts(TOKEN_PROGRAM_ID, {
    commitment: 'processed',
    filters: [
      {
        dataSize: 165,
      },
      {
        memcmp: {
          offset: 0,
          bytes: mintAddress.toString(),
        },
      },
    ],
  });

  for (const account of tokenProgramAccounts) {
    //@ts-ignore
    if (account.account.data.parsed.info.tokenAmount.uiAmount !== 0) {
      //@ts-ignore
      const ownerAddress = account.account.data.parsed.info.owner;
      if (ownerAddress === marketSigner.toString()) continue;
      //@ts-ignore
      const tokenAmount = new Decimal(account.account.data.parsed.info.tokenAmount.uiAmount);

      result = setResultData(result, ownerAddress, tokenAmount);
    }
  }

  return result;
}

async function getLpTokenAmount(
  connection: Connection,
  result: ResultListState[],
  marketSigner: PublicKey,
  mintAddress: PublicKey,
  ytPoolAmount: Decimal,
  lpMintSupply: Decimal,
  tokenDecimals: number,
) {
  const tokenProgramAccounts = await connection.getParsedProgramAccounts(TOKEN_PROGRAM_ID, {
    commitment: 'processed',
    filters: [
      {
        dataSize: 165,
      },
      {
        memcmp: {
          offset: 0,
          bytes: mintAddress.toString(),
        },
      },
    ],
  });

  for (const account of tokenProgramAccounts) {
    //@ts-ignore
    if (account.account.data.parsed.info.tokenAmount.uiAmount !== 0) {
      //@ts-ignore
      const ownerAddress = account.account.data.parsed.info.owner;
      if (ownerAddress === marketSigner.toString()) continue;
      //@ts-ignore
      const tokenAmount = new Decimal(account.account.data.parsed.info.tokenAmount.uiAmount);
      const withdrawYtTokenAmount = ytPoolAmount
        .mul(tokenAmount.mul(tokenDecimals))
        .div(lpMintSupply)
        .floor();

      result = setResultData(result, ownerAddress, withdrawYtTokenAmount.div(tokenDecimals));
    }
  }

  return result;
}

async function updateFeeAccount(
  connection: Connection,
  result: ResultListState[],
  feeLpTokenAccount: PublicKey,
  ytPoolAmount: Decimal,
  lpMintSupply: Decimal,
  tokenDecimals: number,
) {
  const accountInfo = await connection.getParsedAccountInfo(feeLpTokenAccount);

  //@ts-ignore
  const feeAccountOwner = accountInfo.value?.data.parsed.info.owner;

  for (const data of result) {
    if (data.userAddress === feeAccountOwner.toString()) {
      const initYtTokenAmount = ytPoolAmount
        .mul(new Decimal(1).mul(tokenDecimals))
        .div(lpMintSupply)
        .floor();
      const newAmount = new Decimal(data.ytTokenAmount).minus(initYtTokenAmount.div(tokenDecimals));
      if (newAmount.eq(0)) {
        removeResultData(result, data.userAddress);
      } else {
        result = setResultData(result, data.userAddress, newAmount, true);
      }
      break;
    }
  }

  return result;
}

async function getMarket(connection: Connection, address: PublicKey) {
  const accountInfo = await connection.getAccountInfo(address);
  const data = Buffer.from(accountInfo!.data);
  const coder = new BorshAccountsCoder(IDL);
  const market: MarketState = coder.decode('market', data);

  return market;
}

async function getTokenAmount(connection: Connection, address: PublicKey) {
  const tokenAmount = await connection.getTokenAccountBalance(address);
  if (tokenAmount.value.amount) {
    return new Decimal(tokenAmount.value.amount);
  } else {
    return new Decimal(0);
  }
}

async function getMintSupply(connection: Connection, address: PublicKey) {
  const mintAmount = await connection.getTokenSupply(address);
  if (mintAmount.value.amount) {
    return new Decimal(mintAmount.value.amount);
  } else {
    return new Decimal(0);
  }
}
