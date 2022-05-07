import React from 'react'
import cl from './BurgerMenu.module.css'
import img from '../../img/burger.png'

const BurgerMenu = (props) => {


	return (

		<div {...props} className={cl.BurgerMenu}>
			<img className={cl.BurgerMenu__img} src={img} alt=""></img>
		</div>

	)
}

export default BurgerMenu;