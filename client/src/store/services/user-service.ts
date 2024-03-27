import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SETTINGS } from 'settings';
import {
	IAuthorizationRequest,
	IAuthorizationSecondRequest,
	IRegistrationRequest,
	IUpdateUserRequest,
} from 'http/models/request';
import { IUser } from 'types';

export const userAPI = createApi({
	reducerPath: 'userAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: SETTINGS.API_URL,
	}),
	tagTypes: ['User'],
	endpoints: builder => ({
		fetchRegister: builder.mutation<IUser, IRegistrationRequest>({
			query: data => ({
				url: '/register',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['User'],
		}),
		fetchAuth: builder.mutation<'admin' | IUser, IAuthorizationRequest>({
			query: data => ({
				url: '/login',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['User'],
		}),
		fetchAuthSecondStep: builder.mutation<IUser, IAuthorizationSecondRequest>({
			query: data => ({
				url: '/two-factor-auth',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['User'],
		}),
		fetchLogout: builder.mutation<{}, ''>({
			query: () => ({
				url: `/logout`,
				method: 'POST',
			}),
			invalidatesTags: ['User'],
		}),
		updateUser: builder.mutation<IUser, IUpdateUserRequest>({
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
	useUpdateUserMutation,
} = userAPI;
