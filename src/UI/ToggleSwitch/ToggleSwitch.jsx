import React, { useEffect } from 'react';
import cl from './ToggleSwitch.module.css';

const ToggleSwitch = ({ theme, text, togglerState, func, click, dispatch }) => {




	useEffect(() => {
		dispatch(func(togglerState))
		localStorage.setItem(text, togglerState)
	}, [dispatch, func, text, togglerState])




	return (
		< div className={cl.wrapper} >
			<label className={cl.switch}>
				<input onChange={click} className={cl[theme]} checked={togglerState} type="checkbox"></input>
				<span className={[cl.slider, cl.round, cl[theme]].join(' ')}></span>
			</label>
		</ div >

	)
}

export default ToggleSwitch;