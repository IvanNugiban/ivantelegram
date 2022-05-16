import {all} from "redux-saga/effects";
import usersWatcher from "./contactsSaga";
import loginWatcher from "./optionsSaga";

export default function* rootWatcher() {
  yield all([usersWatcher(), loginWatcher() ])
}