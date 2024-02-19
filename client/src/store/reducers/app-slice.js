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
		isActivated: false,
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
	selectors: {
		selectFixedHeader: state => state.fixedHeader,
		selectIsLoading: state => state.isLoading,
		selectModalIsOpen: state => state.modal.isOpen,
		selectModalComponent: state => state.modal.component,
		selectModalBackgroundColor: state => state.modal.backgroundColor,
		selectModalTitle: state => state.modal.title,
		selectModalContent: state => state.modal.content,
		selectUser: state => state.user,
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

export const {
	selectFixedHeader,
	selectIsLoading,
	selectModalIsOpen,
	selectModalComponent,
	selectModalBackgroundColor,
	selectModalContent,
	selectModalTitle,
	selectUser,
} = appSlice.selectors;

export default appSlice.reducer;
