require('dotenv').config();
const ethers = require('ethers');
const { Wallet } = ethers;

// create a wallet with a private key
const wallet1 = new Wallet(process.env.PRIVATE_KEY);

// create a wallet from mnemonic
const wallet2 = Wallet.fromMnemonic(process.env.PRIVATE_PHRASE);

module.exports = {
    wallet1,
    wallet2,
}
