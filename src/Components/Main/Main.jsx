import React, { useState, useEffect } from 'react'
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import DevConsole from './DevConsole/DevConsole';
import { useSelector } from 'react-redux';

const Main = () => {

	const contacts = useSelector(state => state.contacts.contacts)

	const theme = useSelector(state => state.options.theme)

	const [choosenContact, setChoosenContact] = useState(undefined);


	function choosenContactSetter(contact) {
		setChoosenContact(contact)
	}

	return (
		<div className="wrapper">
			<LeftSide theme={theme} choosenContactSetter={choosenContactSetter} contacts={contacts} />
			{
				(choosenContact) ? <RightSide theme={theme} contact={choosenContact} /> : <span></span>
			}
			<DevConsole contacts={contacts} />
		</div >

	)
}

export default Main;