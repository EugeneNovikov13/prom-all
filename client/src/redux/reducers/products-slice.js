import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../action-creators/fetch-products';

const initialState = {
	products: [],
	isLoading: false,
	error: '',
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = '';
				state.products = action.payload.data;
			})
			.addCase(fetchProducts.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
				state.products = [];
			});
	},
});

export default productsSlice.reducer;
