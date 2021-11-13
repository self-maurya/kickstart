import campaignFactory from './build/CampaignFactory.json'
import web3 from './web3';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0xE07Ba7892b114D7485fA235a24e41feF699DAD48'
);

export default instance;