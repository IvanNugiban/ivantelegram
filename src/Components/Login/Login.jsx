import React from 'react'
import { useSelector } from 'react-redux'
import MyButton from '../../UI/MyButton/MyButton'
import cl from './Login.module.css'
import firebase from 'firebase/compat/app'


const Login = () => {
	const auth = useSelector(state => state.firebaseStore.auth)

	async function loginWithGoogle() {
		const provider = await new firebase.auth.GoogleAuthProvider();
		const { user } = auth.signInWithPopup(provider);
	}

	return (
		<div className={cl.Login} >
			<h1>Alpha v1</h1>
			<MyButton onClick={loginWithGoogle}>Login by google</MyButton>

		</div>

	)
}

export default Login