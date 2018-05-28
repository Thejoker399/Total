import React, { Component } from 'react'
import axios from 'axios'
import { Layout, Breadcrumb } from 'antd';
const { Content, Footer } = Layout;

class Fetch extends Component {

    static async getInitialProps(props) {
        console.log(props)
        const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${props.query.id}`)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.log(error)
            })
        return { post }

    }

    state = {
        data: this.props.post
    }

    render() {
        const { data } = this.state
        return (
            <div>
                <Layout className="layout">
                    <Content style={{ padding: '50px ' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            <h2>{data.title}</h2>
                            <p>{data.body}</p>
                            test API
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                       
                    </Footer>
                </Layout>
            </div>
        )
    }
}


export default Fetch