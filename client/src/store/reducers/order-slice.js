import { createSlice } from '@reduxjs/toolkit';

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
});

export const { setOrderData } = orderSlice.actions;

export default orderSlice.reducer;
