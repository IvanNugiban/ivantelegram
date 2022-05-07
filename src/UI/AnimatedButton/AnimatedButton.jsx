import React from 'react';
import cl from './AnimatedButton.module.css'

const AnimatedButton = (props) => {
	return (
		<div {...props} className={cl["button_container"]}>
			<button className={cl.btn}><span> {props.children}</span></button>
		</div>
	)
}

export default AnimatedButton;