import React from 'react';
import Chat from './Chat/Chat';
import HeaderRight from './HeaderRight/HeaderRight';

const RightSide = ({ theme, contact }) => {
	return (
		<div className='RightSide'>
			<HeaderRight theme={theme} contact={contact} />
			<Chat />
		</div>
	)
}

export default RightSide