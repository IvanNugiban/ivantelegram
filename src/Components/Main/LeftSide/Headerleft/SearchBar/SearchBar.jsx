import React, { useEffect, useMemo, useRef } from 'react';
import cl from './SearchBar.module.css'
import MyInput from '../../../../../UI/MyInput/MyInput';
import UseInput from '../../../../../Hooks/useInput';
import searchIcon from '../../../../../svg/search.svg'
import { useDispatch } from 'react-redux';
import { changeContacts, defaultContactsState } from '../../../../../redax/reducers/contacts';

const SearchBar = ({ theme }) => {
	const { bind, clear } = UseInput("");
	const dispatch = useDispatch();
	const searchedContacts = useRef();
	useMemo(() => {
		searchedContacts.current = defaultContactsState.contacts.filter(contact => (contact.text.toLocaleLowerCase().includes(bind.value.toLocaleLowerCase()) || contact.name.toLocaleLowerCase().includes(bind.value.toLocaleLowerCase())))
	}, [bind.value])

	useEffect(() => {
		dispatch(changeContacts(searchedContacts.current))
	}, [searchedContacts.current])


	return (
		<div >
			<form className={`${cl.Form} ${cl[theme]}`} >
				<label className={cl.searchIcon} htmlFor="search"><img src={searchIcon} alt="" /></label>
				<MyInput {...bind} name="search" placeholder="Search" type="text" />
			</form >
		</div>
	)
}

export default SearchBar;