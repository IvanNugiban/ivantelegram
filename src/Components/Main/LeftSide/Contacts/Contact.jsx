import React, { useRef } from 'react'
import CreateContact from './CreateContact/CreateContact';
import cl from "./Contact.module.css"

const Contact = ({ contacts, choosenContactSetter, theme }) => {

	const prevId = useRef(undefined)

	function click(e) {
		const id = e.target.closest("div[id]").id;
		if (contacts[id].active) return;
		else if (contacts[prevId.current]) contacts[prevId.current].active = false;
		contacts[id].active = true;
		prevId.current = id;
		choosenContactSetter(contacts[id])
	}
	return (
		<div className={theme}>
			<div className={cl.wrapper}  >
				{
					(contacts.length) ?
						contacts.map((contact, index) => {

							return <CreateContact theme={theme} active={contact.active} key={index} contact={contact} index={index} click={click} />
						}) : <h3>There are no contacts yet</h3>
				}
			</div >
		</div>
	)
}

export default Contact;