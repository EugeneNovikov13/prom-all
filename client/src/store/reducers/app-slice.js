import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	fixedHeader: false,
	isLoading: false,
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
		changeLoading(state, action) {
			state.isLoading = action.payload;
		},
	},
});

export const { changeLoading, setFixedHeader } = appSlice.actions;

export default appSlice.reducer;
