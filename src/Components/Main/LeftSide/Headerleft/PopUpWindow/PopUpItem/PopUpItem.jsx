import React from 'react'
import cl from './PopUpItem.module.css';
import ToggleSwitch from '../../../../../../UI/ToggleSwitch/ToggleSwitch';
import {useDispatch} from 'react-redux';
import useToggle from '../../../../../../Hooks/useToggle';

const PopUpItem = ({ theme, logo, text, func, switcherNeeded,user }) => {

	const dispatch = useDispatch()


	const [toggled, toggle] = useToggle(() => JSON.parse((localStorage.getItem(text) || false)));


	function clicked() {
		if (switcherNeeded) toggle()
		else dispatch(func(user))
	}


	return (
		<div onClick={clicked} className={`${cl.PopUpItem} ${cl[theme]}`} >
			<span className={cl.logo}><img src={logo} alt="" /></span>
			<span className={cl.text}>{text}</span>
			{(switcherNeeded) ? < ToggleSwitch user={user} dispatch={dispatch} click={clicked} text={text} theme={theme} func={func} toggled={toggled} /> : <span></span>}

		</div >
	)
}

export default PopUpItem