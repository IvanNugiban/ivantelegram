import firebase from "firebase/compat/app";
import {deleteDoc, doc, getDoc, setDoc} from "firebase/firestore";
import {firestore} from "../index";

export async function createNewUser(user) {
    const newUser = {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: "afa",
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    await setDoc(doc(firestore, "users", user.uid), newUser);

}

export async function userExit(user) {
    await deleteDoc(doc(firestore, "users", user.uid));
}

export async function getFirebaseCollection(collectionName) {
    const data = await firestore.collection(collectionName).get();
    return data.docs.map(doc => doc.data());
}

export function ifIncludes(text, searchedText) {
    return text.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase());
}

export async function getDocument(collectionName, name) {
    const docRef = doc(firestore, collectionName, name);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return docSnap.data();
}
export async function setDocument(collection, name, data) {
await setDoc(doc(firestore, collection, name), data);
}

export function setCollectionListener(collection, callback) {
    firestore.collection(collection).onSnapshot(callback)
}