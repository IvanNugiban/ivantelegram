import React, { useEffect } from 'react'
import PopUpItem from './PopUpItem/PopUpItem'
import cl from './PopUpWindow.module.css'
import { useSelector } from 'react-redux'

const PopUpWindow = ({ setClicked, theme }) => {

	const options = useSelector(state => state.options.options);
	const logined = useSelector(state => state.options.logined)
	const auth = useSelector(state => state.firebaseStore.auth)

	function closePopUpWindow(e) {
		if (!e.target.closest("#PopUpWindow")) setClicked(false)
	}


	useEffect(() => {
		document.body.addEventListener("click", closePopUpWindow)
		return () => {
			document.body.removeEventListener("click", closePopUpWindow)
		}
	}, [])

	useEffect(() => {
		if (!logined) auth.signOut()
	}, [logined])


	return (
		<div id='PopUpWindow' className={`${cl.wrapper} ${cl[theme]}`}>
			<div className={cl.PopUpWindow}>
				{
					options.map((object, index) => <PopUpItem theme={theme} key={index} logo={object.logo} text={object.text} func={object.func} switcherNeeded={object.SwitcherNeeded} />)
				}
			</div>
		</div>
	)
}

export default PopUpWindow