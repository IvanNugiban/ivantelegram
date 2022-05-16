import React, {useMemo} from 'react';
import CreateContact from './CreateContact/CreateContact';
import cl from "./Contact.module.css";
import {shallowEqual, useDispatch} from "react-redux";
import {setChosenContactIdAction} from "../../../../redax/reducers/contacts";
import Loader from "../../../../UI/Loader/Loader";

const Contact = ({ contacts,chosenContactId ,  theme, user }) => {
const sortedContacts = contacts.filter((contact) => contact.uid !== user.uid);
const dispatch = useDispatch();

const selectActiveContact = useMemo(() => {
	let previousId;
	return (id) => {
		if (shallowEqual(previousId, id)) return;
		dispatch(setChosenContactIdAction(id));
		previousId=id;
	}
}, [])


	if (!sortedContacts) return <Loader/>

	return (
		<div className={theme}>
 			<div onClick={(e) => {
				 const element = e.target.closest('div[class*=Contact_item]');
				 if (element) selectActiveContact(element.id)
			}}
				 className={cl.wrapper}  >
				{
					(sortedContacts.length) ?
						sortedContacts.map((contact, index) => {

							return <CreateContact chosenContactId={chosenContactId } theme={theme} id={contact.uid}  key={index} contact={contact}   />
						}) : <h3>There are no contacts yet</h3>
				}
			</div >
		</div>
	)
}
export default Contact;