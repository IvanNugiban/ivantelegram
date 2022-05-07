import React from 'react'
import cl from './PopUpItem.module.css';
import ToggleSwitch from '../../../../../../UI/ToggleSwitch/ToggleSwitch';
import {useDispatch} from 'react-redux';
import useToggle from '../../../../../../Hooks/useToggle';

const PopUpItem = ({ theme, logo, text, func, switcherNeeded }) => {

	const dispatch = useDispatch()


	const [toggled, toggle] = useToggle(() => JSON.parse((localStorage.getItem(text))));


	function clicked() {
		dispatch(func(toggled))
		if (switcherNeeded) toggle()
	}


	return (
		<div onClick={clicked} className={`${cl.PopUpItem} ${cl[theme]}`} >
			<span className={cl.logo}><img src={logo} alt="" /></span>
			<span className={cl.text}>{text}</span>

			{(switcherNeeded) ? < ToggleSwitch dispatch={dispatch} click={clicked} text={text} theme={theme} func={func} togglerState={toggled} /> : <span></span>}

		</div >
	)
}

export default PopUpItem