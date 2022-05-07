import React from 'react'
import { NavLink } from 'react-router-dom'
import cl from "./About.module.css"

const About = () => {
	return (
		<div className={cl.About}>
			<div className={cl.About__wrapper}>

				{<div className={cl.About__message}>Hi! My name is Ivan. It's alpha version of my site, so please, do'nt judge me strictly. Also, i don't know server side now, thats why interaction with server is impromtu. Hope u enjoy this site! See you later!</div>}
				< NavLink className={cl.About__link} to="/">Return</NavLink>
			</div>
		</div >
	)
}

export default About