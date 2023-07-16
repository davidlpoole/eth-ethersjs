const ethers = require('ethers');
const { utils } = ethers;
const { wallet1 } = require('./wallets');

const oneEther = utils.parseEther('1')
const signaturePromise = wallet1.signTransaction({
    value: oneEther,
    to: "0xdD0DC6FB59E100ee4fA9900c2088053bBe14DE92",
    gasLimit: 21000,
});

module.exports = signaturePromise;