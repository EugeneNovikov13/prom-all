import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productAPI = createApi({
	reducerPath: 'productAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: '/products',
	}),
	tagTypes: ['Product'],
	endpoints: builder => ({
		fetchProduct: builder.query({
			query: id => ({
				url: `${id}`,
			}),
			providesTags: ['Product'],
		}),
		fetchProductBySection: builder.query({
			query: id => ({
				url: `/section/${id}`,
			}),
			providesTags: ['Product'],
		}),
		fetchProductByTitle: builder.query({
			query: title => ({
				url: `/search/${title}`,
			}),
			providesTags: ['Product'],
		}),
		createProduct: builder.mutation({
			query: product => ({
				url: '',
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
