import { Router } from "../routes";
import { Component } from "react";
import {Button, Form, Input, Message} from "semantic-ui-react";
import Campaign from '../ethereum/campaign';
import web3 from "../ethereum/web3";

class ContributeForm extends Component {
    state = {
        value: '',
        errorMessage: '',
        loading: false
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading: true, errorMessage: ''});
        try {
            const campaign = Campaign(this.props.address);
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            })
            Router.replaceRoute(`/campaigns/${this.props.address}`);
        } catch (err) {
            this.setState({errorMessage: err.message});
        }
        this.setState({loading: false});
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Amount to contribute</label>
                    <Input 
                        label="ether" 
                        labelPosition="right"
                        value={this.state.value}
                        onChange={event => this.setState({value: event.target.value})}
                    />
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage}/>
                <Button disabled={this.state.loading} loading={this.state.loading} primary>Contribute</Button>
            </Form>
        );
    }
}

export default ContributeForm;