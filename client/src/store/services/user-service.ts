import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SETTINGS } from 'settings';
import {
	IAuthorizationRequest,
	IAuthorizationSecondRequest,
	IRegistrationRequest,
	IUpgradeUserRequest,
} from 'http/models/request';
import { IUser } from 'types';

export const userAPI = createApi({
	reducerPath: 'userAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: SETTINGS.API_URL,
	}),
	tagTypes: ['User'],
	endpoints: builder => ({
		/**
		 * Регистрация пользователя
		 */
		fetchRegister: builder.mutation<IUser, IRegistrationRequest>({
			query: data => ({
				url: '/register',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['User'],
		}),
		/**
		 * Авторизация пользователя
		 */
		fetchAuth: builder.mutation<'admin' | IUser, IAuthorizationRequest>({
			query: data => ({
				url: '/login',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['User'],
		}),
		/**
		 * Второй шаг авторизации пользователя
		 */
		fetchAuthSecondStep: builder.mutation<IUser, IAuthorizationSecondRequest>({
			query: data => ({
				url: '/two-factor-auth',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['User'],
		}),
		/**
		 * Логаут пользователя
		 */
		fetchLogout: builder.mutation<{}, ''>({
			query: () => ({
				url: `/logout`,
				method: 'POST',
			}),
			invalidatesTags: ['User'],
		}),
		/**
		 * Изменение данных пользователя
		 */
		upgradeUser: builder.mutation<IUser, IUpgradeUserRequest>({
			query: ({ id, formData }) => ({
				url: `users/${id}`,
				method: 'PATCH',
				body: formData,
			}),
			invalidatesTags: ['User'],
		}),
	}),
});

export const {
	/**
	 * Регистрация пользователя
	 */
	useFetchRegisterMutation,
	/**
	 * Авторизация пользователя
	 */
	useFetchAuthMutation,
	/**
	 * Второй шаг авторизации пользователя
	 */
	useFetchAuthSecondStepMutation,
	/**
	 * Логаут пользователя
	 */
	useFetchLogoutMutation,
	/**
	 * Изменение данных пользователя
	 */
	useUpgradeUserMutation,
} = userAPI;
