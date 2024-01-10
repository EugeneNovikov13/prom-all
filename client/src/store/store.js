import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/app-slice';
import { adminAPI, brandAPI, productAPI, promoAPI } from './services';

const rootReducer = combineReducers({
	appReducer,
	[promoAPI.reducerPath]: promoAPI.reducer,
	[brandAPI.reducerPath]: brandAPI.reducer,
	[productAPI.reducerPath]: productAPI.reducer,
	[adminAPI.reducerPath]: adminAPI.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(
				promoAPI.middleware,
				brandAPI.middleware,
				productAPI.middleware,
				adminAPI.middleware,
			),
	});
};
