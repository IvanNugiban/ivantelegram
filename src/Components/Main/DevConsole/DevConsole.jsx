import React, { useState } from 'react'
import cl from "./DevConsole.module.css"
import { NavLink } from 'react-router-dom'
import MyButton from '../../../UI/MyButton/MyButton';
import CancelButton from '../../../UI/CancelButton/CancelButton';
import FeautureList from './FeatureList/FeautureList';

const DevConsole = () => {

	const [choosenElement, setChoosenElement] = useState(false)

	const [classes, setClasses] = useState([cl.wrapper]);

	function click(e) {
		setChoosenElement(e.target.id)
	}
	function keyCheck(e) {
		if (e.altKey && e.key === "c") {
			setClasses([...classes, cl.active]);
		}
	}

	document.addEventListener("keydown", keyCheck);

	return (
		<div className={classes.join(" ")}>
			{(!choosenElement) ?
				<div className={cl.DevConsole}>
					<CancelButton onClick={() => setClasses([cl.wrapper])} />
					<h3 className={cl.title}>Developer console</h3>
					<div className={cl.addContact}> <MyButton id="contacts" onClick={click} >Add contact</MyButton>  </div>
					<NavLink className={cl.link} to={"/about"} >About developer</NavLink >
				</div > : <FeautureList setChoosenElement={setChoosenElement} choosenElement={choosenElement} />}
		</div >

	)
}

export default DevConsole;