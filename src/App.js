import React from "react";
import './index.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/Router/AppRouter";
import { HashRouter } from 'react-router-dom'

function App() {

	return (

		<HashRouter >
			<AppRouter />
		</HashRouter >
	)

}

export default App;