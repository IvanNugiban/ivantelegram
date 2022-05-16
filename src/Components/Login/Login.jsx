import React from 'react'
import {useDispatch} from 'react-redux'
import AnimatedButton from '../../UI/AnimatedButton/AnimatedButton'
import cl from './Login.module.css'
import firebase from 'firebase/compat/app'
import {login} from '../../redax/reducers/menuOptions'
import telegramImg from '../../img/telegram.png'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {createNewUser} from "../../utils/functions";
import {auth} from "../../index";
import {firestore} from "../../index";


const Login = () => {

    const dispatch = useDispatch();

    useCollectionData(
        firestore.collection("users").orderBy("createdAt")
    )


    async function loginWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            const {user} = await auth.signInWithPopup(provider);
            dispatch(login());
            createNewUser(user);
        } catch {
            alert("You canceled your registration")
        }
    }

    return (
        <div className={cl.Login}>
            <h1>Telegram copy</h1>
            <h5>By IvanNugiban</h5>
            <img src={telegramImg} alt=""></img>
            <AnimatedButton onClick={loginWithGoogle}>Login</AnimatedButton>

        </div>

    )
}

export default Login