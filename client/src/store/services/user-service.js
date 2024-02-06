import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SETTINGS } from '../../settings';

export const userAPI = createApi({
	reducerPath: 'userAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: SETTINGS.API_URL,
	}),
	tagTypes: ['User'],
	endpoints: builder => ({
		fetchRegister: builder.mutation({
			query: data => ({
				url: '/register',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['User'],
		}),
		fetchAuth: builder.mutation({
			query: data => ({
				url: '/login',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['User'],
		}),
		fetchAuthSecondStep: builder.mutation({
			query: data => ({
				url: '/two-factor-auth',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['User'],
		}),
		fetchLogout: builder.mutation({
			query: () => ({
				url: `/logout`,
				method: 'POST',
			}),
			invalidatesTags: ['User'],
		}),
		upgradeUser: builder.mutation({
			query: ({ id, ...data }) => ({
				url: `users/${id}`,
				method: 'PATCH',
				body: data,
			}),
			invalidatesTags: ['User'],
		}),
	}),
});

export const {
	useFetchRegisterMutation,
	useFetchAuthMutation,
	useFetchAuthSecondStepMutation,
	useFetchLogoutMutation,
	useUpgradeUserMutation,
} = userAPI;
