import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const brandAPI = createApi({
	reducerPath: 'brandAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: '/brands',
	}),
	tagTypes: ['Brands'],
	endpoints: builder => ({
		fetchAllBrands: builder.query({
			query: () => ({
				url: '',
			}),
			providesTags: () => ['Brands'],
		}),
		createBrand: builder.mutation({
			query: brand => ({
				url: '',
				method: 'POST',
				body: brand,
			}),
			invalidatesTags: ['Brands'],
		}),
		removeBrand: builder.mutation({
			query: id => ({
				url: `/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Brands'],
		}),
	}),
});

export const { useFetchAllBrandsQuery, useCreateBrandMutation, useRemoveBrandMutation } =
	brandAPI;
