import React, { useState, useEffect } from 'react'
import cl from './PopUpItem.module.css';
import ToggleSwitch from '../../../../../../UI/ToggleSwitch/ToggleSwitch';
import { useDispatch } from 'react-redux';

const PopUpItem = ({ theme, logo, text, func, switcherNeeded }) => {

	const dispatch = useDispatch()

	const [togglerState, setTogglerState] = useState(false);


	function clicked() {
		dispatch(func(togglerState))
		if (switcherNeeded) setTogglerState(!togglerState)
	}


	return (
		<div onClick={clicked} className={`${cl.PopUpItem} ${cl[theme]}`} >
			<span className={cl.logo}><img src={logo} alt="" /></span>
			<span className={cl.text}>{text}</span>

			<ToggleSwitch theme={theme} func={func} switcherNeeded={switcherNeeded} togglerState={togglerState} setTogglerState={setTogglerState} />

		</div >
	)
}

export default PopUpItem