import React from 'react'
import cl from './CreateContact.module.css'

const CreateContact = ({ theme, contact, index, click, active }) => {

	let classes = [cl.Contact, cl[theme]]
	if (active) classes.push(cl.active)
	else classes = [cl.Contact, cl[theme]]
	return (
		<div onClick={click} id={index} className={classes.join(" ")} >
			<img src={contact.logo}></img>
			<div className={cl.Contact__text}>
				<span>{contact.name}</span>
				<span>{contact.text}</span>
			</div>
			<span className={cl.Contact__time}>{contact.time}</span>
		</div>
	)
}

export default CreateContact