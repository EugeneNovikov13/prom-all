import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/app-slice';
import catalogReducer from './reducers/catalog-slice';
import orderReducer from './reducers/order-slice';
import { userAPI, brandAPI, productAPI, promoAPI } from './services';

const rootReducer = combineReducers({
	appReducer,
	catalogReducer,
	orderReducer,
	[promoAPI.reducerPath]: promoAPI.reducer,
	[brandAPI.reducerPath]: brandAPI.reducer,
	[productAPI.reducerPath]: productAPI.reducer,
	[userAPI.reducerPath]: userAPI.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(
				promoAPI.middleware,
				brandAPI.middleware,
				productAPI.middleware,
				userAPI.middleware,
			),
	});
};
