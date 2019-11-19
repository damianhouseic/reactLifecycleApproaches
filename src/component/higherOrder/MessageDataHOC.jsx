import React from 'react';
import { withData } from './HOC/WithData';
import { Api } from '../../api/data';

export const MessageData = props => {
    return (
        <div>
            <h5>Message Data</h5>
            <MessageWithData />
            <MessageWithData />
            <MessageWithOtherData />
            <MessageWithData />
            <MessageWithData />
        </div>
    );
};

const Message = props => {
    const { subject, recipients } = props.data;
    return (
        <section>
            <div>subject: {subject}</div>
            <div>recipients: {recipients}</div>
        </section>
    );
};

const MessageWithData = withData({ requestFunction: Api.getMessage })(Message);
const MessageWithOtherData = withData({ requestFunction: Api.getOtherMessage })(Message);

export default MessageData;
