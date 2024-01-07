import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: null,
	login: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export default userSlice.reducer;
