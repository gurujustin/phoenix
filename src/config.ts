import { ChainId } from '@traderjoe-xyz/sdk';

import { Configuration } from './tomb-finance/config';
import { BankInfo } from './tomb-finance';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: ChainId.AVALANCHE,
    networkName: 'Fantom Opera Testnet',
    avaxscanUrl: 'https://testnet.avaxscan.com',
    defaultProvider: 'https://rpc.testnet.fantom.network/',
    deployments: require('./tomb-finance/deployments/deployments.testing.json'),
    externalTokens: {
      WAVAX: ['0xf1277d1ed8ad466beddf92ef448a132661956621', 18],
      FUSDT: ['0xb7f24e6e708eabfaa9e64b40ee21a5adbffb51d6', 6],
      WETH: ['0x14f0C98e6763a5E13be5CE014d36c2b69cD94a1e', 18],
      TOMB: ['0x2317610e609674e53D9039aaB85D8cAd8485A7c5', 0],
      MIM: ['0x39523112753956d19A3d6a30E758bd9FF7a8F3C0', 9],
      'USDT-AVAX-LP': ['0xE7e3461C2C03c18301F66Abc9dA1F385f45047bA', 18],
      'PHOENIX-AVAX-LP': ['0x13Fe199F19c8F719652985488F150762A5E9c3A8', 18],
      'XSHARE-AVAX-LP': ['0x20bc90bB41228cb9ab412036F80CE4Ef0cAf1BD5', 18],
      'PHOENIX-XSHARE-LP': ['0xd9B5f00d183df52D717046521152303129F088DD', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: ChainId.AVALANCHE,
    networkName: 'Avalanche Mainnet',
    avaxscanUrl: 'https://snowtrace.io',
    defaultProvider: 'https://api.avax.network/ext/bc/C/rpc',
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WAVAX: ['0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18],
      FUSDT: ['0xc7198437980c041c805A1EDcbA50c1Ce5db95118', 6], // This is actually usdc on mainnet not fusdt
      USDT: ['0xc7198437980c041c805A1EDcbA50c1Ce5db95118', 6], // This is actually usdc on mainnet not fusdt
      WETH: ['0x74b23882a30290451A17c44f4F05243b6b58C76d', 18], // BOO: 0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE 18
      TOMB: ['0x8F63050417a15B798798A510C1A1b163f59C421e', 18], // ZOO: 0x09e145a1d53c0045f41aeef25d8ff982ae74dd56 0
      MIM: ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18], // SHIBA: 0x9ba3e4f84a34df4e08c112e1a0ff148b81655615 9
      THRONE: ['0x070092b3A985f9E5424351D68730c9A318ad96eb', 18],
      USDC: ['0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664', 6],
      JOE: ['0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd', 18],
      'USDT-AVAX-LP': ['0xeD8CBD9F0cE3C6986b22002F03c6475CEb7a6256', 18],
      'PHOENIX-AVAX-LP': ['0x7F1eBff54fe54a1bA562f99e98D3F7F4a4E429F0', 18], // 
      'XSHARE-AVAX-LP': ['0x0A6f1c50C3745A97F78450aD0ebead071246054B', 18],
      'PHOENIX-XSHARE-LP': ['0xd9B5f00d183df52D717046521152303129F088DD', 18],
    },
    baseLaunchDate: new Date('2022-02-25 00:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const genesisDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding TOMB
        - 2 = LP asset staking rewarding TSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  PhoenixAvaxRewardPool: {
    name: 'Stake WAVAX, earn PHOENIX',
    poolId: 0,
    sectionInUI: 0,
    contract: 'PhoenixAvaxRewardPool',
    depositTokenName: 'WAVAX',
    earnTokenName: 'PHOENIX',
    multiplier: "100x",
    finished: false,
    sort: 1,
    closedForStaking: false,
  },
  PhoenixUsdtRewardPool: {
    name: 'Stake MIM, earn PHOENIX',
    poolId: 1,
    sectionInUI: 0,
    contract: 'PhoenixUsdtGenesisRewardPool',
    depositTokenName: 'MIM',
    earnTokenName: 'PHOENIX',
    multiplier: "100x",
    finished: false,
    sort: 2,
    closedForStaking: false,
  },
  PhoenixWethRewardPool: {
    name: 'Stake wETH, earn PHOENIX',
    poolId: 2,
    sectionInUI: 0,
    contract: 'PhoenixWethGenesisRewardPool',
    depositTokenName: 'WETH',
    earnTokenName: 'PHOENIX',
    multiplier: "50x",
    finished: false,
    sort: 2,
    closedForStaking: false,
  },
  PhoenixShibaRewardPool: {
    name: 'Stake USDC, earn PHOENIX',
    poolId: 3,
    sectionInUI: 0,
    contract: 'PhoenixShibaGenesisRewardPool',
    depositTokenName: 'USDC',
    earnTokenName: 'PHOENIX',
    multiplier: "25x",
    finished: false,
    sort: 3,
    closedForStaking: false,
  },
  // PhoenixPhoenixRewardPool: {
  //   name: 'Stake TOMB, earn PHOENIX',
  //   poolId: 3,
  //   sectionInUI: 0,
  //   contract: 'PhoenixPhoenixGenesisRewardPool',
  //   depositTokenName: 'TOMB',
  //   earnTokenName: 'PHOENIX',
  //   multiplier: "100x",
  //   finished: false,
  //   sort: 4,
  //   closedForStaking: false,
  // },
}

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding TOMB
        - 2 = LP asset staking rewarding TSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  PhoenixAvaxRewardPool: {
    name: 'Stake WAVAX, earn PHOENIX',
    poolId: 0,
    sectionInUI: 0,
    contract: 'PhoenixAvaxRewardPool',
    depositTokenName: 'WAVAX',
    earnTokenName: 'PHOENIX',
    multiplier: "30x",
    finished: false,
    sort: 1,
    closedForStaking: false,
    genesisFinished: false
  },
  PhoenixWethRewardPool: {
    name: 'Stake wETH, earn PHOENIX',
    poolId: 1,
    sectionInUI: 0,
    contract: 'PhoenixWethGenesisRewardPool',
    depositTokenName: 'WETH',
    earnTokenName: 'PHOENIX',
    multiplier: "50x",
    finished: false,
    sort: 2,
    closedForStaking: false,
    genesisFinished: true
  },
  PhoenixUsdcRewardPool: {
    name: 'Stake USDC, earn PHOENIX',
    poolId: 2,
    sectionInUI: 0,
    contract: 'PhoenixUsdcGenesisRewardPool',
    depositTokenName: 'USDC',
    earnTokenName: 'PHOENIX',
    multiplier: "30x",
    finished: false,
    sort: 3,
    closedForStaking: false,
  },
  
  PhoenixMimRewardPool: {
    name: 'Stake MIM, earn PHOENIX',
    poolId: 3,
    sectionInUI: 0,
    contract: 'PhoenixMimGenesisRewardPool',
    depositTokenName: 'MIM',
    earnTokenName: 'PHOENIX',
    multiplier: "25x",
    finished: false,
    sort: 3,
    closedForStaking: false,
    genesisFinished: true
  },
  PhoenixAvaxLPTShareRewardPool: {
    name: 'Earn XSHARE by PHOENIX-AVAX LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'PhoenixAvaxLPTShareRewardPool',
    depositTokenName: 'PHOENIX-AVAX-LP',
    earnTokenName: 'XSHARE',
    multiplier: "100x",
    finished: false,
    sort: 6,
    closedForStaking: false,
  },
  TshareAvaxLPTShareRewardPool: {
    name: 'Earn XSHARE by XSHARE-WAVAX LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'TshareAvaxLPTShareRewardPool',
    depositTokenName: 'XSHARE-AVAX-LP',
    earnTokenName: 'XSHARE',
    multiplier: "100x",
    finished: false,
    sort: 7,
    closedForStaking: false,
  },
};

export default configurations['production'];
