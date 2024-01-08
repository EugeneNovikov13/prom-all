import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const promoAPI = createApi({
	reducerPath: 'promoAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'promos',
	}),
	tagTypes: ['Promo'],
	endpoints: builder => ({
		fetchAllPromo: builder.query({
			query: () => ({
				url: '',
			}),
			providesTags: () => ['Promo'],
		}),
		createPromo: builder.mutation({
			query: (promo) => ({
				url: '',
				method: 'POST',
				body: promo,
			}),
			invalidatesTags: ['Promo'],

		}),
		removePromo: builder.mutation({
			query: (id) => ({
				url: `${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Promo'],
		})
	}),
});

export const { useFetchAllPromoQuery, useCreatePromoMutation, useRemovePromoMutation } = promoAPI;
