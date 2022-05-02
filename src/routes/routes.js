import { Navigate } from "react-router-dom";
import About from "../Components/About/About";
import Login from "../Components/Login/Login";
import Main from "../Components/Main/Main";
import { ABOUT_ROUTE, LOGIN_ROUTE, MAIN_ROTE } from "../utils/constants";

export const PublicRoutes = [
	{
		path: LOGIN_ROUTE,
		element: <Login />
	},
	{
		path: "*",
		element: <Navigate replace to="/login" />
	}
]

export const PrivateRoutes = [
	{
		path: MAIN_ROTE,
		element: <Main />
	},
	{
		path: "*",
		element: <Navigate replace to="/" />
	},

	{
		path: ABOUT_ROUTE,
		element: < About />
	}
]