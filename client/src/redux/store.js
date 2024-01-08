import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/app-slice';
import productsReducer from './reducers/products-slice';
import userReducer from './reducers/user-slice';
import { promoAPI } from '../services/promo-service';

const rootReducer = combineReducers({
	appReducer,
	productsReducer,
	[promoAPI.reducerPath]: promoAPI.reducer,
	userReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(promoAPI.middleware),
	});
};
