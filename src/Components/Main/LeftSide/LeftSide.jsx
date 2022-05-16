import React from 'react'
import Contact from './Contacts/Contact'
import HeaderLeft from './Headerleft/HeaderLeft'

const LeftSide = ({ contacts,chosenContactId ,  theme, user }) => {
	return (
		<div className={theme}>
			<div className={`LeftSide ${theme}`}>
				<HeaderLeft theme={theme} />
				<Contact chosenContactId={chosenContactId } user={user} theme={theme} contacts={contacts}  />
			</div>
		</div >
	)
}

export default LeftSide