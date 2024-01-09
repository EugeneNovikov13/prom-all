import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	wasLogin: false,
	modal: {
		isOpen: false,
		text: '',
		onConfirm: null,
		onCancel: null,
	},
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setUser(state) {
			state.wasLogin = true;
		},
	},
});

export default appSlice.reducer;
