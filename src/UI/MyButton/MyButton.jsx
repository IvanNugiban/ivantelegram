import React from 'react'
import cl from "./MyButton.module.css"

const MyButton = (props) => {
	return (
		<button className={cl.MyButton} {...props}>{props.children}</button>
	)
}

export default MyButton;