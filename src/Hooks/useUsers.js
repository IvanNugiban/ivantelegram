import firebase from 'firebase/compat/app';
import { useSelector } from "react-redux"
import { useAuthState } from 'react-firebase-hooks/auth'

const useUsers = () => {

	const auth = useSelector(state => state.firebaseStore.auth);
	const firestore = useSelector(state => state.firebaseStore.firestore);
	const [user] = useAuthState(auth)


}