import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	error: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		userFetchingSuccess(state, action) {
			state.error = '';
			state.user = action.payload;
		},
		userFetchingError(state, action) {
			state.error = action.payload;
			state.user = initialState.user;
		},
	},
});

export default userSlice.reducer;
