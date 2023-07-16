const { utils } = require('ethers');
const Ganache = require("ganache-core");
require('dotenv').config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const INITIAL_BALANCE = utils.parseEther('10');

// create our test account from the private key, initialize it with 10 ether
const accounts = [].concat([{
    balance: INITIAL_BALANCE.toHexString(),
    secretKey: PRIVATE_KEY,
}]);

const ganacheProvider = Ganache.provider({ accounts });

module.exports = {
    INITIAL_BALANCE,
    PRIVATE_KEY,
    ganacheProvider,
}