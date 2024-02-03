import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	fixedHeader: false,
	isLoading: false,
	modal: {
		isOpen: false,
		backgroundColor: '',
		component: '',
		title: '',
		content: '',
	},
	user: {
		id: '',
		login: '',
		name: '',
		organization: '',
		email: '',
		phone: '',
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
		setUser(state, action) {
			state.user = action.payload;
		},
		updateUser(state, action) {
			state.user = { ...state.user, ...action.payload };
		},
		logout(state) {
			state.user = initialState.user;
		},
	},
});

export const {
	changeLoading,
	closeModal,
	openModal,
	setFixedHeader,
	setUser,
	updateUser,
	logout,
} = appSlice.actions;

export default appSlice.reducer;
