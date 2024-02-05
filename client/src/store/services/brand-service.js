import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SETTINGS } from '../../settings';

export const brandAPI = createApi({
	reducerPath: 'brandAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: SETTINGS.API_URL,
	}),
	tagTypes: ['Brands'],
	endpoints: builder => ({
		fetchAllBrands: builder.query({
			query: () => ({
				url: '/brands',
			}),
			providesTags: () => ['Brands'],
		}),
		createBrand: builder.mutation({
			query: brand => ({
				url: '/brands',
				method: 'POST',
				body: brand,
			}),
			invalidatesTags: ['Brands'],
		}),
		removeBrand: builder.mutation({
			query: id => ({
				url: `/brands/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Brands'],
		}),
	}),
});

export const { useFetchAllBrandsQuery, useCreateBrandMutation, useRemoveBrandMutation } =
	brandAPI;
