import React, { useState } from "react";
import MyButton from "../../../../../UI/MyButton/MyButton";
import cl from "./AddContactWindow.module.css";
import ReturnButton from "../../../../../UI/ReturnButton/ReturnButton";
import MyInput from "../../../../../UI/MyInput/MyInput";
import { useDispatch } from "react-redux";
import { addContact } from "../../../../../redax/reducers/contacts";

const AddContactWindow = ({ choosenElement, setChoosenElement }) => {

	const [inputStates, setStates] = useState({});

	const dispatch = useDispatch();

	function onChange(e) {
		setStates({ ...inputStates, [e.target.name]: e.target.value })
	}

	function contactsSetter() {
		dispatch(addContact({
			name: inputStates.name,
			text: inputStates.text,
			time: inputStates.time,
			logo: inputStates.logo
		}));
		setChoosenElement(false)
	}

	return (
		<div>
			{(choosenElement === "contacts") ?
				<div className={cl.wrapper} >
					<ReturnButton onClick={() => setChoosenElement(false)} />
					<form className={cl.form} >
						<MyInput name="name" placeholder="name" style={{ marginBottom: 5 }} onChange={onChange} />
						<MyInput name="text" placeholder="text" style={{ marginBottom: 5 }} onChange={onChange} />
						<MyInput name="logo" placeholder="logo" style={{ marginBottom: 5 }} onChange={onChange} />
						<MyInput name="time" placeholder="time" style={{ marginBottom: 5 }} onChange={onChange} />
					</form>
					<MyButton onClick={contactsSetter} >Add contact</MyButton>
				</div > : <div></div>}
		</div>
	)
}
export default AddContactWindow;

