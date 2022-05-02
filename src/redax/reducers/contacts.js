const defaultState = {
	contacts: [
		{
			logo: "data:image/png;base64,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",
			name: "Сана",
			text: "Го в дбд",
			time: "19:00",
			active: false
		},
		{
			logo: "data:image/jpeg;base64,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",
			name: "Бим",
			text: "Гав",
			time: "10:00",
			active: false
		}
	]
};

const ADD_CONTACT = "ADD_CONTACT";

export const contactsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_CONTACT:
			return { ...state, contacts: [...state.contacts, action.payload] }

		default:
			return state;
	}

}

export const addContact = (payload) => {
	return { type: ADD_CONTACT, payload }
};