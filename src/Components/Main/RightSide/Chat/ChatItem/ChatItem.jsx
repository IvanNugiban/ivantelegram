import React from 'react'
import cl from './ChatItem.module.css'

const ChatItem = ({ message, user }) => {



	return (
		<div className={cl.ChatItem} style={{
			marginLeft: user.uid !== message.uid ? 0 : 600
		}}>
			<span>{message.displayName}</span>
			<span>{message.text}</span>

		</div>
	)
}

export default ChatItem;