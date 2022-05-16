import {put, takeEvery} from 'redux-saga/effects';
import {userExit} from "../../utils/functions";
import {exit} from "../reducers/menuOptions";
import {ASYNC_EXIT} from "../../utils/constants";

function* logoutWorker({payload}) {
    yield userExit(payload);
    yield put(exit())
}

export default function* loginWatcher() {
    yield takeEvery(ASYNC_EXIT, logoutWorker)
}