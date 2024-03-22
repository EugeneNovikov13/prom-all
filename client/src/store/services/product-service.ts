import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SETTINGS } from 'settings';
import { INewProduct, IProduct } from 'types';
import { ProductsBySectionResponse } from 'http/models/response/products-by-section-response';

export const productAPI = createApi({
	reducerPath: 'productAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: SETTINGS.API_URL,
	}),
	tagTypes: ['Product'],
	endpoints: builder => ({
		/**
		 * Запрос конкретного товара
		 */
		fetchProduct: builder.query<IProduct, string>({
			query: id => ({
				url: `/products/${id}`,
			}),
			providesTags: ['Product'],
		}),
		/**
		 * Запрос всех товаров в разделе каталога
		 */
		fetchProductBySection: builder.query<ProductsBySectionResponse, string>({
			query: id => ({
				url: `/products/section/${id}`,
			}),
			providesTags: ['Product'],
		}),
		/**
		 * Поиск товара по названию
		 */
		fetchProductByTitle: builder.query<IProduct[], string>({
			query: title => ({
				url: `/products/search/${title}`,
			}),
			providesTags: ['Product'],
		}),
		/**
		 * Добавление нового товара
		 */
		createProduct: builder.mutation<IProduct, INewProduct>({
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
	/**
	 * Запрос конкретного товара
	 */
	useFetchProductQuery,
	/**
	 * Запрос всех товаров в разделе каталога
	 */
	useFetchProductBySectionQuery,
	/**
	 * Поиск товара по названию
	 */
	useFetchProductByTitleQuery,
	/**
	 * Добавление нового товара
	 */
	useCreateProductMutation,
} = productAPI;
