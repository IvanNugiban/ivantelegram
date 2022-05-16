import React from 'react';
import cl from './ChatItem.module.css';

const ChatItem = ({message, sender, user, theme}) => {


    return (
        <div className={(user.uid !== sender.uid)? `${cl.foreignMessage} ${cl[theme]}` : `${cl.MyMessage} ${cl[theme]}`}>
            <span>{message}</span>
        </div>
)
};

export default ChatItem;