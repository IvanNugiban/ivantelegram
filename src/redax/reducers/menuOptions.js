import moonImg from "../../img/moon.png"
import exitImg from "../../img/exit.png"

const LOGIN = "LOGIN"

export const changeTheme = (payload) => {
	if (payload === true) {
		document.body.className = "dark"
	}
	else {
		document.body.className = ""
	}
	return { type: changeTheme, payload }
}

const exit = (payload) => {
	return { type: exit, payload }
}

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
			func: exit,
			SwitcherNeeded: false
		}
	],
	theme: "light",
	logined: true
}
export const menuOptions = (state = InitialState, action) => {
	switch (action.type) {
		case changeTheme:
			if (action.payload) return { ...state, theme: "dark" }
			else return { ...state, theme: "light" };
		case exit:
			return { ...state, logined: false }
		case LOGIN:
			return { ...state, logined: true }
		default:
			return state;
	}

}

export const login = (payload) => {
	return { type: LOGIN, payload }
}
