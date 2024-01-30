import { createSlice } from '@reduxjs/toolkit';
import { closeModal } from './app-slice';

const initialState = {
	orderData: '',
};

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		setOrderData(state, action) {
			state.orderData = action.payload;
		},
	},
	extraReducers: builder => {
		// Очищаем данные для заказа после закрытия модального окна
		builder
			.addCase(closeModal, () => {
				return initialState;
			})
	},
});

export const { setOrderData } = orderSlice.actions;

export default orderSlice.reducer;
