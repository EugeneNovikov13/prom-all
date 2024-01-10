import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './fetch-products';

const initialState = {
	products: [],
	isLoading: false,
	error: '',
};

// ОСТАВЛЕН ДЛЯ ПРИМЕРА РАБОТЫ СО СЛАЙСАМИ

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		// productsFetching(state) {
		// 	state.isLoading = true;
		// 	state.error = '';
		// },
		// productsFetchingSuccess(state, action) {
		// 	state.isLoading = false;
		// 	state.error = '';
		// 	state.products = action.payload;
		// },
		// productsFetchingError(state, action) {
		// 	state.isLoading = false;
		// 	state.error = action.payload;
		// 	state.products = [];
		// },
	},
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
