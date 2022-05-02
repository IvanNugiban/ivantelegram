import React, { useEffect } from 'react'
import UseInput from '../../../../Hooks/useInput'
import MyInput from '../../../../UI/MyInput/MyInput'
import cl from "./Chat.module.css"
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useSelector } from "react-redux"
import Loader from '../../../../UI/Loader/Loader'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase/compat/app'
import ChatItem from './ChatItem/ChatItem'
import MyButton from "../../../../UI/MyButton/MyButton"

const Chat = () => {
	const auth = useSelector(state => state.firebaseStore.auth);
	const firestore = useSelector(state => state.firebaseStore.firestore);
	const [user] = useAuthState(auth)
	const { value, onChange, setValue } = UseInput('')


	// useEffect(() => {
	// 	document.body.addEventListener("keydown", addMessage)


	// 	return () => {
	// 		document.body.removeEventListener("keydown", addMessage)
	// 	}
	// }, [])

	const [messages, loading] = useCollectionData(
		firestore.collection("messages").orderBy("createdAt")
	)

	async function addMessage(e) {
		if (value) {
			firestore.collection("messages").add({
				uid: user.uid,
				displayName: user.displayName,
				photoURl: user.photoURL,
				text: value,
				createdAt: firebase.firestore.FieldValue.serverTimestamp()
			}
			)
		}
		setValue('')


	}

	if (loading) return <Loader />

	return (
		<div className={cl.container}>
			<div className={cl.Chat}>
				{
					messages.map(message => <ChatItem key={message.text} message={message} user={user} />)
				}
				<form onSubmit={(e) => e.preventDefault()} className={cl.Chat__form}>
					<MyInput value={value} onChange={onChange} style={{ height: 55 }}></MyInput>
					<MyButton onClick={addMessage}>Send</MyButton>
				</form>
			</div>
		</div>
	)
}

export default Chat