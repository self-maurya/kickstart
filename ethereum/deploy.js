const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('../ethereum/build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'radio april tourist laptop shop garbage length man rifle object surprise borrow',
    'https://rinkeby.infura.io/v3/799c97b57678462bba1064f7e3f5ec43'
)

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data: compiledFactory.bytecode})
        .send({from: accounts[0], gas: 1000000, gasPrice: '5000000000'});

    console.log('Contract deployed to', result.options.address);
    // 0xDc6E38a8Ea49512d42c8f9755e483C4eD93E2191
}

deploy();
