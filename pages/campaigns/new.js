import React from "react";
import Layout from "../../components/Layout";
import {Button, Form} from "semantic-ui-react";

class CampaignNew extends React.Component {
    render() {
        return (
            <Layout title="Create a Campaign">
                <Form>
                    <Form.Field>
                        <label placeholder="100">Minimum Contribution (wei)</label>
                        <input/>
                    </Form.Field>
                    <Button primary type='submit'>Create</Button>
                </Form>
            </Layout>
        )
    }
}

export default CampaignNew;