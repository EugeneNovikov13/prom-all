import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/app-slice';
import productsReducer from './reducers/products-slice';
import userReducer from './reducers/user-slice';

const rootReducer = combineReducers({
	appReducer,
	productsReducer,
	userReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};
