import React, { useContext, useMemo, useState } from 'react'
import CreateContact from './CreateContact/CreateContact';
import cl from "./Contact.module.css"

const Contact = ({ contacts, choosenContactSetter, theme }) => {

	const [prevContactId, setPrevContactId] = useState(undefined);

	function click(e) {
		const id = e.target.closest("div[id]").id;
		if (contacts[id].active) return;
		else if (contacts[prevContactId]) contacts[prevContactId].active = false;
		contacts[id].active = true;
		setPrevContactId(id);
		choosenContactSetter(contacts[id])
	}
	return (
		<div className={theme}>
			<div className={cl.wrapper}  >
				{
					contacts.map((contact, index) => {

						return <CreateContact theme={theme} active={contact.active} key={index} contact={contact} index={index} click={click} />
					})
				}
			</div >
		</div>
	)
}

export default Contact;