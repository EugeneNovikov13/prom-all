import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { closeModal } from './app-slice';

/**
 * Данные заказа
 */
interface IOrderState {
	/**
	 * Текст заказа
	 */
	orderData: string;
}

const initialState: IOrderState = {
	orderData: '',
};

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		setOrderData(state, action: PayloadAction<string>) {
			state.orderData = action.payload;
		},
	},
	extraReducers: builder => {
		// Очищаем данные для заказа после закрытия модального окна
		builder.addCase(closeModal, () => {
			return initialState;
		});
	},
	selectors: {
		selectOrderData: state => state.orderData,
	},
});

export const {
	/**
	 * Установить текст заказа
	 */
	setOrderData,
} = orderSlice.actions;

export const {
	/**
	 * Текст заказа
	 */
	selectOrderData,
} = orderSlice.selectors;

export default orderSlice.reducer;
