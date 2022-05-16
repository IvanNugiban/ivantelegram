import React from "react";
import './index.css';
import AppRouter from "./Components/Router/AppRouter";
import { HashRouter } from 'react-router-dom'

function App({auth}) {

	return (

		<HashRouter >
			<AppRouter auth={auth} />
		</HashRouter >
	)

}

export default App;