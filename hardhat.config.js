require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv/config");

const { ethers } = require("hardhat/config");

const oklinkapi = process.env.Oklink_Api_key;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  sourcify: {
    enabled: true,
  },
  networks: {
    polygonAmoy: {
      url: process.env.RPC_URL,
      accounts: [process.env.Privatekey],
    },
  },
  etherscan: {
    apiKey: {
      polygonAmoy: oklinkapi,
    },
    customChains: [
      {
        network: "polygonAmoy",
        chainId: 80002,
        urls: {
          apiURL: "https://www.oklink.com/api/explorer/v1/contract/verify/async/api/polygonAmoy",
          browserURL: "https://www.oklink.com/amoy",
        },
      },
    ],
  },
};








