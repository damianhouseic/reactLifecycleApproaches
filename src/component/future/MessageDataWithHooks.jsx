import React from 'react';
import { Api } from '../../api/data';
import { useData } from './hooks/useData';

export const MessageData = props => {
    return (
        <div>
            <h5>Message Data</h5>
            <Message requestFunction={Api.getMessage} />
            <Message requestFunction={Api.getOtherMessage} />
            <Message requestFunction={Api.getMessage} />
            <Message requestFunction={Api.getOtherMessage} />
            <Message requestFunction={Api.getMessage} />
        </div>
    );
};

const Message = props => {
    const { data, loading } = useData(props.requestFunction);
    if (loading) {
        return <div>Loading...</div>;
    }
    const { subject, recipients } = data;
    return (
        <section>
            <div>subject: {subject}</div>
            <div>recipients: {recipients}</div>
        </section>
    );
};

export default MessageData;
