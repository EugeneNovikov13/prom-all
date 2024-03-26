import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'types';

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
	 * Пользователь
	 */
	user: IUser,
}

const initialState: IAppState = {
	fixedHeader: false,
	isLoading: false,
	user: {
		id: '',
		login: '',
		name: '',
		organization: '',
		email: '',
		phone: '',
		isActivated: false,
		roleId: '2',
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
		selectUser: state => state.user,
	},
});

export const {
	/**
	 * Изменить состояния лоадера
	 */
	changeLoading,
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
	 * Данные текущего зарегистрированного пользователя
	 */
	selectUser,
} = appSlice.selectors;

export default appSlice.reducer;
