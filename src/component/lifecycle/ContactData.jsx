import React, { Component } from 'react';
import { Api } from '../../api/data';

export default class ContactData extends Component {
    render() {
        return (
            <div>
                <h5>Contact Data</h5>
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
            </div>
        );
    }
}

export class Contact extends Component {
    constructor(props, ctx) {
        super(props, ctx);
        this.state = {
            name: '',
            email: '',
            loading: true
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        Api.getContact().then(({ name, email }) => this.setState({ name, email, loading: false }));
    }

    renderLoading() {
        return <section>Loading...</section>;
    }

    renderForm() {
        const { name, email } = this.state;
        return (
            <section>
                <div>name: {name}</div>
                <div>email: {email}</div>
            </section>
        );
    }
    render() {
        const { loading } = this.state;
        return loading ? this.renderLoading() : this.renderForm();
    }
}
