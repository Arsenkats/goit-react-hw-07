import { createSlice } from "@reduxjs/toolkit";
import contactsJson from '../../src/contacts.json';

const initialState = {
    items:  contactsJson
 };

const slice = createSlice({
	name: 'contacts',
	initialState: initialState,
	reducers: {
		deleteContact: (state, action) => {
			state.items = state.items.filter(item => item.id !== action.payload);
		}, addContact: (state, action) => {
		state.items.push(action.payload);
		},
	},
}); 


export const selectContacts = (state) => state.contacts.items;

export const contactsReducer = slice.reducer;

export const { deleteContact, addContact } = slice.actions;