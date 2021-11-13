import React from "react";
import Layout from "../../components/Layout";
import {Card, Grid} from 'semantic-ui-react'
import Campaign from '../../ethereum/campaign'
import web3 from '../../ethereum/web3';
import ContributeForm from "../../components/ContributeForm";

class CampaignShow extends React.Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        return { 
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],
        };
    }

    renderCards() {
        const items = [
            {
                header: this.props.manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and create requests to withdraw money',
                style: {
                    overflowWrap: 'break-word'
                }
            },
            {
                header: this.props.minimumContribution,
                meta: 'Minimum Contribution',
                description: 'You must contrbiute this much wei to become an approver'
            },
            {
                header: this.props.requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from contract. Requests must be approved by the approvers'
            },
            {
                header: this.props.approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign'
            },
            {
                header: web3.utils.fromWei(this.props.balance, 'ether'),
                meta: 'Campaign Balance(ether)',
                description: 'The balance is how much money this campaign has left to spend'
            }
        ]
        return <Card.Group items={items}/>
    }
    
    render() {
        return (
            <Layout title="Show Campaign">
                <Grid>
                    <Grid.Column width={10}>
                        {this.renderCards()}
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <ContributeForm address={this.props.address}/>
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}

export default CampaignShow;