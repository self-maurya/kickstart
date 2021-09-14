import Header from "./Header";
import {Container} from "semantic-ui-react";
import Head from "next/head";

const Layout = (props) => {
    return (
        <Container>
            <Head>
                <link
                    rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />
                <title>{props.title}</title>
            </Head>

            <Header/>

            <h3>{props.title}</h3>
            { props.children }
        </Container>
    )
}

export default Layout;