import React from 'react'
import cl from "./ReturnButton.module.css"

const ReturnButton = (props) => {
	return (
		<div {...props} className={cl.arrowAnim} >
			<div className={cl.arrowSliding}>
				<div className={cl.arrow}></div>
			</div>
			<div className={[cl.arrowSliding, cl.delay1].join(" ")}>
				<div className={cl.arrow}></div>
			</div>
			<div className={[cl.arrowSliding, cl.delay2].join(" ")}>
				<div className={cl.arrow}></div>
			</div>
			<div className={[cl.arrowSliding, cl.delay3].join(" ")}>
				<div className={cl.arrow}></div>
			</div>
		</div >
	)
}

export default ReturnButton;