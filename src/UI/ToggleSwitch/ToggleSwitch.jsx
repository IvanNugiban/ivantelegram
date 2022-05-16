import React, { useEffect } from 'react';
import cl from './ToggleSwitch.module.css';

const ToggleSwitch = ({ theme, text, toggled, func, click, dispatch, user }) => {


	useEffect(() => {
		dispatch(func({toggled, user}))
		localStorage.setItem(text, toggled)
	
	}, [dispatch, func, text, toggled, user])

	return (
		< div className={cl.wrapper} >
			<label className={cl.switch}>
				<input onChange={click} className={cl[theme]} checked={toggled} type="checkbox"></input>
				<span className={[cl.slider, cl.round, cl[theme]].join(' ')}></span>
			</label>
		</ div >

	)
}

export default ToggleSwitch;