import campaign from './build/Campaign.json'
import web3 from './web3';

export default (address) => {
    return new web3.eth.Contract(JSON.parse(campaign.interface), address);
}