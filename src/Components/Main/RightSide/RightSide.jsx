import React, {useEffect, useState} from 'react';
import HeaderRight from './HeaderRight/HeaderRight';
import Loader from "../../../UI/Loader/Loader";
import {getChosenContact} from "../../../redax/reducers/contacts";
import {useSelector} from "react-redux";
import Chat from "./Chat/Chat";

const RightSide =  ({ dispatch, theme, user, currentUserId }) => {
const [loading, setLoadingState] = useState(true);
const currentUser = useSelector(state => state.contacts.chosenContact)

	useEffect(() => {
		setLoadingState(true)
		dispatch(getChosenContact({currentUserId, setLoadingState}))
	}, [currentUserId, dispatch])

if (loading) return <Loader/>;
	return (
		<div className='RightSide'>
			<HeaderRight contact={currentUser} theme={theme}  />
			<Chat theme={theme} currentUser={currentUser} user={user}/>
		</div>
	)
}

export default RightSide