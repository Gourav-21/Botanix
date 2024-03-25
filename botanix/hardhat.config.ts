import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const BOTANIX_TESTNET_PRIVATE_KEY = '';

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  paths:{
    artifacts:"../next-frontend/src/artifacts"
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    botanixTestnet: {
      url: 'https://node.botanixlabs.dev',
      chainId: 3636,
      accounts: [BOTANIX_TESTNET_PRIVATE_KEY]
    },
  },

};

export default config;
