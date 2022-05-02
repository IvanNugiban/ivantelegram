import React, { useState } from 'react'
import cl from './BurgerMenu.module.css'
import img from '../../img/burger.png'

const BurgerMenu = ({ setClickState }) => {


	return (

		<div onClick={() => setClickState()} className={cl.BurgerMenu}>
			<img className={cl.BurgerMenu__img} src={img}></img>
		</div>

	)
}

export default BurgerMenu;