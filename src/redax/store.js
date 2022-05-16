import {applyMiddleware, createStore} from "redux";
import { combineReducers } from "redux";
import { contactsReducer } from "./reducers/contacts"
import { menuOptions } from "./reducers/menuOptions";
import createSagaMiddleware from "redux-saga"
import rootWatcher from "./redax-saga";
import {composeWithDevTools} from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(
	{
		contacts: contactsReducer,
		options: menuOptions
	}
)

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)

export default store;