import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	fixedHeader: false,
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
		setFixedHeader(state, action) {
			state.fixedHeader = action.payload;
		},
	},
});

export default appSlice.reducer;
