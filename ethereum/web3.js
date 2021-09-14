import Web3 from 'web3';

let provider;
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    window.ethereum.request({
        method: 'eth_requestAccounts',
    });
    provider = window.ethereum;
} else {
    provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/799c97b57678462bba1064f7e3f5ec43');
}

const web3 = new Web3(provider)
export default web3;