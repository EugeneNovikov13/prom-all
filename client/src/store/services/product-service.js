import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SETTINGS } from '../../settings';

export const productAPI = createApi({
	reducerPath: 'productAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: SETTINGS.API_URL,
	}),
	tagTypes: ['Product'],
	endpoints: builder => ({
		fetchProduct: builder.query({
			query: id => ({
				url: `/products/${id}`,
			}),
			providesTags: ['Product'],
		}),
		fetchProductBySection: builder.query({
			query: id => ({
				url: `/products/section/${id}`,
			}),
			providesTags: ['Product'],
		}),
		fetchProductByTitle: builder.query({
			query: title => ({
				url: `/products/search/${title}`,
			}),
			providesTags: ['Product'],
		}),
		createProduct: builder.mutation({
			query: product => ({
				url: '/products',
				method: 'POST',
				body: product,
			}),
			invalidatesTags: ['Product'],
		}),
	}),
});

export const {
	useFetchProductQuery,
	useFetchProductBySectionQuery,
	useFetchProductByTitleQuery,
	useCreateProductMutation,
} = productAPI;
