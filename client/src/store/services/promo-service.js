import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SETTINGS } from '../../settings';

export const promoAPI = createApi({
	reducerPath: 'promoAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: SETTINGS.API_URL,
	}),
	tagTypes: ['Promo'],
	endpoints: builder => ({
		fetchAllPromo: builder.query({
			query: () => ({
				url: '/promos',
			}),
			providesTags: () => ['Promo'],
		}),
		createPromo: builder.mutation({
			query: promo => ({
				url: '/promos',
				method: 'POST',
				body: promo,
			}),
			invalidatesTags: ['Promo'],
		}),
		upgradePromo: builder.mutation({
			query: ({ id, ...promo }) => ({
				url: `/promos/${id}`,
				method: 'PATCH',
				body: promo,
			}),
			invalidatesTags: ['Promo'],
		}),
		removePromo: builder.mutation({
			query: id => ({
				url: `/promos/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Promo'],
		}),
	}),
});


export const {
	useFetchAllPromoQuery,
	useCreatePromoMutation,
	useUpgradePromoMutation,
	useRemovePromoMutation,
} = promoAPI;
