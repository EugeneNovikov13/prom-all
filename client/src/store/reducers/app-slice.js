import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	fixedHeader: false,
	isLoading: false,
	wasLogin: false,
	modal: {
		isOpen: false,
		backgroundColor: '',
		component: '',
		title: '',
		content: '',
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
		openModal(state, action) {
			state.modal = { ...state.modal, ...action.payload };
			state.modal.isOpen = true;
		},
		closeModal(state) {
			state.modal.isOpen = false;
		},
	},
});

export const { changeLoading, closeModal, openModal, setFixedHeader } = appSlice.actions;

export default appSlice.reducer;
