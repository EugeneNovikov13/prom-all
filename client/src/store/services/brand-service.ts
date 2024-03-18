import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SETTINGS } from 'settings';
import { IBrand } from 'types';

export const brandAPI = createApi({
	reducerPath: 'brandAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: SETTINGS.API_URL,
	}),
	tagTypes: ['Brands'],
	endpoints: builder => ({
		/**
		 * Запрос всех партнёров
		 */
		fetchAllBrands: builder.query<IBrand[], ''>({
			query: () => ({
				url: '/brands',
			}),
			providesTags: () => ['Brands'],
		}),
		/**
		 * Добавление нового партнёра
		 */
		createBrand: builder.mutation<IBrand, Omit<IBrand, 'id'>>({
			query: brand => ({
				url: '/brands',
				method: 'POST',
				body: brand,
			}),
			invalidatesTags: ['Brands'],
		}),
		/**
		 * Удаление партнёра
		 */
		removeBrand: builder.mutation<string, string>({
			query: id => ({
				url: `/brands/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Brands'],
		}),
	}),
});

export const {
	/**
	 * Запрос всех партнёров
	 */
	useFetchAllBrandsQuery,
	/**
	 * Добавление нового партнёра
	 */
	useCreateBrandMutation,
	/**
	 * Удаление партнёра
	 */
	useRemoveBrandMutation,
} = brandAPI;
