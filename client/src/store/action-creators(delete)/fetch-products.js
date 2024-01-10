import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// ОСТАВЛЕН ДЛЯ ПРИМЕРА РАБОТЫ СО СЛАЙСАМИ и createAsyncThunk

// export const fetchProducts = id => async dispatch => {
// 	try {
// 		dispatch(productsSlice.actions.productsFetching());
// 		const response = await axios.get(`products/section/${id}`)
//
// 		dispatch(productsSlice.actions.productsFetchingSuccess(response.data.data));
// 	} catch (e) {
// 		dispatch(productsSlice.actions.productsFetchingError(e.response.data));
// 	}
// };

export const fetchProducts = createAsyncThunk(
	'products/fetchBySectionId',
	async (id, thunkAPI) => {
		try {
			const response = await axios.get(`products/section/${id}`);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.response.data)
		}
	}
)
