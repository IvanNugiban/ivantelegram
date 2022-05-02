import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { contactsReducer } from "./reducers/contacts"
import { menuOptions } from "./reducers/menuOptions";
import { firebaseStore } from "./reducers/firebaseStore";
import thunk from 'redux-thunk'

const rootReducer = combineReducers(
	{
		contacts: contactsReducer,
		options: menuOptions,
		firebaseStore: firebaseStore
	}
)

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)))
export default store;