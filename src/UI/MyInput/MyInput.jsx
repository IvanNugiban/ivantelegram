import React from 'react'
import cl from './MyInput.module.css';

const MyInput = (props) => {
	return (
		<input className={cl.MyInput} {...props}></input>
	)
}
export default MyInput;
