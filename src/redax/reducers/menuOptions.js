import moonImg from "../../img/moon.png"
import exitImg from "../../img/exit.png"



const changeTheme = (payload) => {
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
		default:
			return state;
	}

}


