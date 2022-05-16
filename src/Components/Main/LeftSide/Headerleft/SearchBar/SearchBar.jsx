import React, {useCallback, useEffect} from 'react';
import cl from './SearchBar.module.css';
import MyInput from '../../../../../UI/MyInput/MyInput';
import UseInput from '../../../../../Hooks/useInput';
import searchIcon from '../../../../../svg/search.svg';
import {useDispatch, useSelector} from 'react-redux';
import {searchContactsAction} from '../../../../../redax/reducers/contacts';
import {ifIncludes} from "../../../../../utils/functions";

const SearchBar = ({ theme }) => {
	const { bind} = UseInput("");
	const dispatch = useDispatch();
	const contacts = useSelector(state => state.contacts.contacts);

	const search = useCallback(() => {
		return	contacts.filter(contact => ifIncludes.call(null, contact.text, bind.value) || ifIncludes.call(null, contact.displayName, bind.value))
	}, [bind.value]);


	useEffect(()=> {
			dispatch(searchContactsAction(search()))
		},
	[dispatch, search])

	return (
		<div className={cl.wrapper} >
			<form className={`${cl.Form} ${cl[theme]}`} >
				<label className={cl.searchIcon} htmlFor="search"><img src={searchIcon} alt="" /></label>
				<MyInput {...bind} name="search" placeholder="Search" type="text" />
			</form >
		</div>
	)
}

export default SearchBar;