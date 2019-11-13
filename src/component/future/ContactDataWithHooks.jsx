import React from 'react';
import { Api } from '../../api/data';
import { useData } from './hooks/useData';

export const ContactData = props => {
    return (
        <div>
            <h5>Contact Data</h5>
            <Contact requestFunction={Api.getContact}/>
            <Contact requestFunction={Api.getOtherContact}/>
            <Contact requestFunction={Api.getContact}/>
            <Contact requestFunction={Api.getOtherContact}/>
            <Contact requestFunction={Api.getContact}/>
        </div>
    );
};

const Contact = props => {
    const { data, loading } = useData(props.requestFunction);
    if (loading) {
        return <div>Loading...</div>;
    }
    const { name, email } = data;
    return (
        <section>
            <div>name: {name}</div>
            <div>email: {email}</div>
        </section>
    );
}

export default ContactData;