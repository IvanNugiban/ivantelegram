import React from 'react'
import UseInput from '../../../../Hooks/useInput'
import MyInput from '../../../../UI/MyInput/MyInput'
import cl from "./Chat.module.css"
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useSelector } from "react-redux"
import Loader from '../../../../UI/Loader/Loader'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase/compat/app'
import ChatItem from './ChatItem/ChatItem'

const Chat = () => {
	const auth = useSelector(state => state.firebaseStore.auth);
	const firestore = useSelector(state => state.firebaseStore.firestore);
	const [user] = useAuthState(auth)
	const { bind, clear } = UseInput('')


	// useEffect(() => {
	// 	document.body.addEventListener("keydown", addMessage)


	// 	return () => {
	// 		document.body.removeEventListener("keydown", addMessage)
	// 	}
	// }, [])

	const [messages, loading] = useCollectionData(
		firestore.collection("messages").orderBy("createdAt")
	)

	async function addMessage() {
		if (bind.value) {
			firestore.collection("messages").add({
				uid: user.uid,
				displayName: user.displayName,
				photoURl: user.photoURL,
				text: bind.value,
				createdAt: firebase.firestore.FieldValue.serverTimestamp()
			}
			)
		}
		clear()


	}

	if (loading) return <Loader />

	return (
		<div className={cl.container}>
			<div className={cl.Chat}>
				{
					messages.map(message => <ChatItem key={message.text} message={message} user={user} />)
				}
				<form onSubmit={(e) => e.preventDefault()} className={cl.Chat__form}>
					<MyInput placeholder="Message" {...bind}></MyInput>
				</form>
			</div>
		</div >
	)
}

export default Chat