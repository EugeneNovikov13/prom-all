import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { closeModal } from './app-slice';

interface IOrderState {
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

export const { setOrderData } = orderSlice.actions;

export const { selectOrderData } = orderSlice.selectors;

export default orderSlice.reducer;
