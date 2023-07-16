const { providers } = require('ethers');
const { ganacheProvider } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

/**
 * Given an ethereum address find all the addresses
 * that were sent ether from that address
 * @param {string} address - The hexadecimal address for the sender
 * @async
 * @returns {Array} all the addresses that received ether
 */
async function findEther(address) {
    const latestBlock = await provider.getBlockNumber();
    const result = [];
    for (let i = 0; i <= latestBlock; i++) {
        const block = await provider.getBlockWithTransactions(i);
        block.transactions.forEach((tx) => {
            if (tx.from === address) {
                result.push(tx.to)
            }
        })
    }
    return result;
}

module.exports = findEther;