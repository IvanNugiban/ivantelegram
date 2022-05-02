import React from 'react'
import cl from "./Loader.module.css"

const Loader = () => {
	return (
		<div className={cl.wrapper}>
			<div className={cl["lds-roller"]}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default Loader