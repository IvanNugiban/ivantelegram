import moonImg from "../../img/moon.png"
import exitImg from "../../img/exit.png"
import {ASYNC_EXIT} from "../../utils/constants";

const LOGIN = "LOGIN";
const CHANGE_THEME = "CHANGE_THEME"
const USER_EXIT ="USER_EXIT";
export const changeTheme = (payload) => {

	if (payload.toggled) document.body.className = "dark"
	else document.body.className = ""
	return { type: CHANGE_THEME, payload }
}

export const exit = (user) => {
	return {type: USER_EXIT, user}
}

export const asyncExit = (payload) => ({type: ASYNC_EXIT, payload })
export const login = (payload) =>({ type: LOGIN, payload });

const InitialState = {
	options: [
		{
			logo: moonImg,
			text: "Dark Mode",
			func: changeTheme,
			SwitcherNeeded: true
		},
		{
			logo: exitImg,
			text: "Exit",
			func: asyncExit,
			SwitcherNeeded: false
		}
	],
	theme: "light",
	logined: true
}
export const menuOptions = (state = InitialState, action) => {
	switch (action.type) {
		case CHANGE_THEME:
			if (action.payload.toggled) return { ...state, theme: "dark" }
			else return { ...state, theme: "light" };
		case USER_EXIT:
			return { ...state, logined: false }
		case LOGIN:
			return { ...state, logined: true }
		default:
			return state;
	}

}



