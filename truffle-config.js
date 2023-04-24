const HDWalletProvider = require("@truffle/hdwallet-provider");
// const mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      // provider: new HDWalletProvider({
      //   mnemonic,
      //   providerOrUrl: "http://127.0.0.1:9545/",
      //   numberOfAddresses: 50
      // }),
      network_id: '*',
      gas: 9999999,
      port: 8545,
      host: "127.0.0.1",
    }
  },
  compilers: {
    solc: {
      version: "^0.4.25"
    }
  }
};