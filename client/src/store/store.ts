import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/app-slice';
import catalogReducer from './reducers/catalog-slice';
import { brandAPI, productAPI, promoAPI, userAPI } from './services';

export const rootReducer = combineReducers({
	app: appReducer,
	catalog: catalogReducer,
	[promoAPI.reducerPath]: promoAPI.reducer,
	[brandAPI.reducerPath]: brandAPI.reducer,
	[productAPI.reducerPath]: productAPI.reducer,
	[userAPI.reducerPath]: userAPI.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			promoAPI.middleware,
			brandAPI.middleware,
			productAPI.middleware,
			userAPI.middleware,
		),
});

export type AppDispatch = typeof store.dispatch;
