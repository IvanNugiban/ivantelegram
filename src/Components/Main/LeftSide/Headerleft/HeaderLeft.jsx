import React, { useState } from 'react'
import BurgerMenu from '../../../../UI/BurgerMenu/BurgerMenu'
import cl from "./HeaderLeft.module.css"
import PopUpWindow from './PopUpWindow/PopUpWindow';
import SearchBar from './SearchBar/SearchBar';
const HeaderLeft = ({ theme }) => {


	const [clicked, setClicked] = useState(false);

	return (
		<div className={`${cl.HeaderLeft} ${cl[theme]}`} >
			<BurgerMenu onClick={() => setClicked(true)} />
			<SearchBar theme={theme} />

			{
				(clicked) ? <PopUpWindow theme={theme} setClicked={setClicked} /> : <span></span>
			}

		</div>

	)
}

export default HeaderLeft