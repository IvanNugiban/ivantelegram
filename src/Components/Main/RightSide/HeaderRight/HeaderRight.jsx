import React from 'react';
import cl from "./HeaderRight.module.css";
import call from "../../../../img/call.png";
import search from "../../../../img/search.png";
import ellipsis from "../../../../img/ellipsis.png";


const HeaderRight = ({ theme, contact }) => {

	return (
		<div className={`${cl.headerRight} ${cl[theme]}`}>
			<div className={cl.info}>
				<img src={contact.photoURL} alt=''></img>
				<div className={cl.header__text}>
					<span className={cl[theme]}>{contact.displayName}</span>
					<span className={cl[theme]}>Online</span>
				</div>
			</div>
			<div >
				<img className={cl.icon} src={call} alt="" />
				<img className={cl.icon} src={search} alt="" />
				<img className={cl.icon} src={ellipsis} alt="" />
			</div>
		</div >
	)
}

export default HeaderRight