import React, { useState, useEffect } from 'react'
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import DevConsole from './DevConsole/DevConsole';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redax/reducers/menuOptions';

const Main = () => {
	const [choosenContact, setChoosenContact] = useState(undefined);
	const dispatch = useDispatch();
	const contacts = useSelector(state => state.contacts.contacts)
	const theme = useSelector(state => state.options.theme)

	useEffect(() => {
		// For light theme
		const DarkTheme = JSON.parse(localStorage.getItem("Dark Mode"));
		dispatch(changeTheme(DarkTheme))
	}, [])

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