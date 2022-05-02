import React from 'react'
import AddContactWindow from './AddContactWindow/AddContactWindow'

const FeautureList = ({ choosenElement, setChoosenElement }) => {
	return (
		<div>
			<AddContactWindow setChoosenElement={setChoosenElement} choosenElement={choosenElement} />
		</div>
	)
}

export default FeautureList