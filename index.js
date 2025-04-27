const { Alchemy, Network } = require("@alchemy-sdk");
require("dotenv").config(); // Load environment variables from alchemy.env

// Configure the Alchemy SDK
const settings = {
  apiKey: process.env.ALCHEMY_API_KEY, // Load API key from .env file
  network: Network.ETH_GOERLI,        // Use Goerli testnet
};

const alchemy = new Alchemy(settings);

// Example: Get the latest block number
async function getLatestBlock() {
  try {
    const blockNumber = await alchemy.core.getBlockNumber();
    console.log("Latest block number:", blockNumber);
  } catch (error) {
    console.error("Error fetching block number:", error);
  }
}

getLatestBlock();