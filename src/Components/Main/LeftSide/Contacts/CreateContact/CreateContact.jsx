import React from 'react';
import cl from './CreateContact.module.css';

const CreateContact = ({ theme, id, chosenContactId ,  contact }) => {

	return (
		<div  id={id}  className={(chosenContactId === id) ? `${cl.Contact_item} ${cl[theme]} ${cl.active}` : `${cl.Contact_item} ${cl[theme]}`} >
			<img  src={contact.photoURL} alt=''></img>
			<div className={cl.Contact__text}>
				<span>{contact.displayName}</span>
				<span>{contact.text}</span>
			</div>
			<span className={cl.Contact__time}>{`${new Date().getHours()}:${new Date().getMinutes()}`}</span>
		</div>
	)
}

export default CreateContact;