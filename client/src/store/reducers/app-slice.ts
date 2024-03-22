import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModal, IUser } from 'types';

interface IAppState {
	/**
	 * Состояние залипания "шапки"
	 */
	fixedHeader: boolean,
	/**
	 * Состояние лоадера
	 */
	isLoading: boolean,
	/**
	 * Состояние модального окна
	 */
	modal: IModal,
	/**
	 * Пользователь
	 */
	user: IUser,
}

const initialState: IAppState = {
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
		setFixedHeader(state, action: PayloadAction<boolean>) {
			state.fixedHeader = action.payload;
		},
		changeLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
		openModal(state, action: PayloadAction<Partial<IModal>>) {
			state.modal = { ...state.modal, ...action.payload };
			state.modal.isOpen = true;
		},
		closeModal(state) {
			state.modal.isOpen = false;
		},
		setUser(state, action: PayloadAction<IUser>) {
			state.user = action.payload;
		},
		updateUser(state, action: PayloadAction<Partial<IUser>>) {
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
	/**
	 * Изменить состояния лоадера
	 */
	changeLoading,
	/**
	 * Закрыть модальное окно
	 */
	closeModal,
	/**
	 * Открыть модальное окно
	 */
	openModal,
	/**
	 * Изменить состояние залипания "шапки"
	 */
	setFixedHeader,
	/**
	 * Установить данные пользователя
	 */
	setUser,
	/**
	 * Обновить данные пользователя
	 */
	updateUser,
	/**
	 * Логаут пользователя
	 */
	logout,
} = appSlice.actions;

export const {
	/**
	 * Состояние залипания "шапки"
	 */
	selectFixedHeader,
	/**
	 * Состояние лоадера
	 */
	selectIsLoading,
	/**
	 * Открыто или нет модальное окно
	 */
	selectModalIsOpen,
	/**
	 * Название компонента, который должен быть в модальном окне
	 */
	selectModalComponent,
	/**
	 * Фон модального окна
	 */
	selectModalBackgroundColor,
	/**
	 * Содержимое модального окна (HTML-разметка или текст)
	 */
	selectModalContent,
	/**
	 * Заголовок модального окна
	 */
	selectModalTitle,
	/**
	 * Данные текущего зарегистрированного пользователя
	 */
	selectUser,
} = appSlice.selectors;

export default appSlice.reducer;
