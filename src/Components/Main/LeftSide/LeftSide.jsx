import React from 'react'
import Contact from './Contacts/Contact'
import HeaderLeft from './Headerleft/HeaderLeft'

const LeftSide = ({ contacts, choosenContactSetter, theme }) => {
	return (
		<div className={theme}>
			<div className={`LeftSide ${theme}`}>
				<HeaderLeft theme={theme} />
				<Contact theme={theme} contacts={contacts} choosenContactSetter={choosenContactSetter} />
			</div>
		</div >
	)
}

export default LeftSide