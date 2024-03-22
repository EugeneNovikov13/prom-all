import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SETTINGS } from 'settings';
import { IPromo } from 'types';

export const promoAPI = createApi({
	reducerPath: 'promoAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: SETTINGS.API_URL,
	}),
	tagTypes: ['Promo'],
	endpoints: builder => ({
		/**
		 * Запрос всех промо-акций
		 */
		fetchAllPromo: builder.query<IPromo[], ''>({
			query: () => ({
				url: '/promos',
			}),
			providesTags: () => ['Promo'],
		}),
		/**
		 * Добавление новой промо-акции
		 */
		createPromo: builder.mutation<IPromo, Omit<IPromo, 'id'>>({
			query: promo => ({
				url: '/promos',
				method: 'POST',
				body: promo,
			}),
			invalidatesTags: ['Promo'],
		}),
		/**
		 * Редактирование промо-акции
		 */
		upgradePromo: builder.mutation<IPromo, IPromo>({
			query: promo => ({
				url: `/promos/${promo.id}`,
				method: 'PATCH',
				body: promo,
			}),
			invalidatesTags: ['Promo'],
		}),
		/**
		 * Удаление промо-акции
		 */
		removePromo: builder.mutation<string, string>({
			query: id => ({
				url: `/promos/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Promo'],
		}),
	}),
});


export const {
	/**
	 * Запрос всех промо-акций
	 */
	useFetchAllPromoQuery,
	/**
	 * Добавление новой промо-акции
	 */
	useCreatePromoMutation,
	/**
	 * Редактирование промо-акции
	 */
	useUpgradePromoMutation,
	/**
	 * Удаление промо-акции
	 */
	useRemovePromoMutation,
} = promoAPI;
