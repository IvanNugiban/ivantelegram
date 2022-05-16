import React, { useEffect } from 'react'
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import DevConsole from './DevConsole/DevConsole';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redax/reducers/menuOptions';
import {getUsersAction} from "../../redax/reducers/contacts";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../index";
import {setCollectionListener} from "../../utils/functions";

const Main = () => {
	const dispatch = useDispatch();
	const chosenContactId = useSelector(state => state.contacts.chosenContactId)
	const contacts = useSelector(state => state.contacts.searchedContacts)
	const theme = useSelector(state => state.options.theme)
	const [user] = useAuthState(auth);

	useEffect(() => {
		// Get users
		setCollectionListener("users", () => dispatch(getUsersAction()))
		// Background setter
		const toggled  = JSON.parse(localStorage.getItem("Dark Mode"));
		dispatch(changeTheme({toggled}));
	}, [])

	return (
		<div className="wrapper">
			<LeftSide chosenContactId={chosenContactId }  theme={theme} user={user}  contacts={contacts} />
			{
				(chosenContactId) ? <RightSide dispatch={dispatch} currentUserId={chosenContactId} user={user} theme={theme}/> : <span></span>
			}
			<DevConsole contacts={contacts} />
		</div >
	)
}

export default Main;