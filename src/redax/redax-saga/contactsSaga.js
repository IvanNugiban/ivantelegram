import {put, takeEvery} from "redux-saga/effects";
import {getDocument, getFirebaseCollection} from "../../utils/functions";
import {changeContactsAction, initializeSearchedContactsAction, setChosenContact} from "../reducers/contacts";
import {GET_CHOSEN_CONTACT, GET_USERS} from "../../utils/constants";

function* getUsersWorker() {
    const users = yield getFirebaseCollection("users");
    yield put(changeContactsAction(users));
    yield put(initializeSearchedContactsAction())
}

function* getCurrentUserWorker({payload}) {
    const currentUser = yield  getDocument("users", payload.currentUserId );
    yield put(setChosenContact(currentUser));
    payload.setLoadingState(false)
}


export default function* usersWatcher() {
    yield takeEvery(GET_USERS, getUsersWorker);
    yield takeEvery(GET_CHOSEN_CONTACT, getCurrentUserWorker);
}