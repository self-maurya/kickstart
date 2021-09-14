import campaignFactory from './build/CampaignFactory.json'
import web3 from './web3';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0xDc6E38a8Ea49512d42c8f9755e483C4eD93E2191'
);

export default instance;