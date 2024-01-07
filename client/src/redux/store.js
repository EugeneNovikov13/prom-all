import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/app-slice';
import userReducer from './reducers/user-slice';

const rootReducer = combineReducers({
	appReducer,
	userReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};
