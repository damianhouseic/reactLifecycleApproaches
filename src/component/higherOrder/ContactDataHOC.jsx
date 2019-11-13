import React from 'react';
import { withData } from './HOC/WithData';
import { Api } from '../../api/data';

export const ContactData = props => {
    return (
        <div>
            <h5>Contact Data</h5>
            <ContactWithData />
            <ContactWithData />
            <ContactWithData />
            <ContactWithData />
            <ContactWithOtherData />
        </div>
    );
};

const Contact = props => {
    const { name, email } = props.data;
    return (
        <section>
            <div>name: {name}</div>
            <div>email: {email}</div>
        </section>
    );
}

const ContactWithData = withData({requestFunction: Api.getContact})(Contact);
const ContactWithOtherData = withData({requestFunction: Api.getOtherContact})(Contact);

export default ContactData;