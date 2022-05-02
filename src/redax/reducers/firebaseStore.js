import "firebase/compat/auth"
import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app';

firebase.initializeApp({
	apiKey: "AIzaSyDf5mQulErHNR_zbwNgpL-xlomCaxCs-f0",
	authDomain: "react-telegram-acd8b.firebaseapp.com",
	projectId: "react-telegram-acd8b",
	storageBucket: "react-telegram-acd8b.appspot.com",
	messagingSenderId: "741867032720",
	appId: "1:741867032720:web:c0364d920373c20ca88815",
	measurementId: "G-SQSDYZ2VTJ"
})

const InitialState = {
	firebase,
	auth: firebase.auth(),
	firestore: firebase.firestore()
}
export const firebaseStore = (state = InitialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}