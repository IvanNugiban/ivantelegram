// import {useAuthState} from "react-firebase-hooks/auth";
// import {useSelector} from "react-redux";
//
// export async function addUser() {
// 	const auth = useSelector(state => state.firebaseStore.auth);
// 	const firestore = useSelector(state => state.firebaseStore.firestore);
// 	const [user] = useAuthState(auth);
// 	const newUser = {
// 		uid: user.uid,
// 		displayName: user.displayName,
// 		photoURl: user.photoURL,
// 		text: value,
// 		createdAt: firestore.FieldValue.serverTimestamp()
// 	}
// 	firestore.collection("users").add(newUser)
//
// 	return newUser;
// }