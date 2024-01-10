import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
	'users/fetchAdmin',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('users');
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.response.data)
		}
	}
)
