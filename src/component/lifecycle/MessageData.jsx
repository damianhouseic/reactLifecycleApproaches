import React, { Component } from 'react';
import { Api } from '../../api/data';

export default class MessageData extends Component {
    render() {
        return (
            <div>
                <h3>Message Data</h3>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
        );
    }
}

export class Message extends Component {
    constructor(props, ctx) {
        super(props, ctx);
        this.state = {
            subject: '',
            recipients: 0,
            loading: true
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        Api.getMessage().then(({ subject, recipients}) => this.setState({subject, recipients, loading: false}));
    }   

    renderLoading() {
        return <section>Loading...</section>;
    }

    renderForm() {
        const { subject, recipients } = this.state;
        return (
            <section>
                <div>subject: {subject}</div>
                <div>recipients: {recipients}</div>
            </section>
        );
    }
    render() {
        const { loading } = this.state;
        return loading ? this.renderLoading() : this.renderForm();
    }
}