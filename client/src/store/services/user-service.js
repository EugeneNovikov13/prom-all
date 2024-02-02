import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({
	reducerPath: 'userAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: '',
	}),
	tagTypes: ['User'],
	endpoints: builder => ({
		fetchUser: builder.query({
			query: () => ({
				url: '/users',
			})
		}),
		providesTags: () => ['User'],
		fetchRegister: builder.mutation({
			query: (data) => ({
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
	useFetchUserQuery,
	useFetchRegisterMutation,
	useFetchAuthMutation,
	useFetchLogoutMutation,
	useUpgradeUserMutation,
} = userAPI;
