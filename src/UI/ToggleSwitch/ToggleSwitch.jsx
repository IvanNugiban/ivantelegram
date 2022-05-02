import React, { useEffect } from 'react';
import cl from './ToggleSwitch.module.css';
import { useDispatch } from 'react-redux';

const ToggleSwitch = ({ theme, switcherNeeded, togglerState, setTogglerState, func }) => {

	const dispatch = useDispatch();

	useEffect(() => {
		localStorage.setItem("theme", togglerState)

		if (switcherNeeded) dispatch(func(togglerState))

	}, [togglerState])



	return (
		<div>
			{(switcherNeeded) ?
				< div className={cl.wrapper} >
					<label className={cl.switch}>
						<input className={cl[theme]} readOnly checked={togglerState} type="checkbox"></input>
						<span className={[cl.slider, cl.round, cl[theme]].join(' ')}></span>
					</label>
				</ div > : <span></span>
			}
		</div >
	)
}

export default ToggleSwitch;