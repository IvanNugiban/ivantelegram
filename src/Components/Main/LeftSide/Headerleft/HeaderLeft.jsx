import React, { useState } from 'react'
import BurgerMenu from '../../../../UI/BurgerMenu/BurgerMenu'
import cl from "./HeaderLeft.module.css"
import UseInput from "../../../../Hooks/useInput";
import MyInput from '../../../../UI/MyInput/MyInput';
import PopUpWindow from './PopUpWindow/PopUpWindow';
import { useSelector } from 'react-redux';
const HeaderLeft = ({ theme }) => {

	const { value, onChange } = UseInput("");

	const [ifClicked, setClickState] = useState(false);

	return (
		<div className={`${cl.HeaderLeft} ${cl[theme]}`} >
			<BurgerMenu theme={theme} setClickState={() => setClickState(true)} />
			<form className={`${cl.Form} ${cl[theme]}`} >
				<MyInput onChange={onChange} type="text" />
			</form >
			{
				(ifClicked) ? <PopUpWindow theme={theme} setClickState={setClickState} /> : <span></span>
			}

		</div>

	)
}

export default HeaderLeft