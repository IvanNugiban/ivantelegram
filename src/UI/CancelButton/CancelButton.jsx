import React from 'react'
import cl from './CancelButton.module.css'

const CancelButton = (props) => {
	return (
		<div {...props} className={cl.CancelButton}></div>
	)
}

export default CancelButton;