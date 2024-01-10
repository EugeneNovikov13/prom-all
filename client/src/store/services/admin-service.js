import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminAPI = createApi({
	reducerPath: 'adminAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: '/',
	}),
	tagTypes: ['User'],
	endpoints: builder => ({
		fetchUser: builder.query({
			query: () => ({
				url: 'users',
			})
		}),
		providesTags: () => ['User'],
		fetchRegister: builder.mutation({
			query: (userData) => ({
				url: 'register',
				method: 'POST',
				body: userData,
			}),
			invalidatesTags: ['User'],
		}),
		fetchAuth: builder.mutation({
			query: userData => ({
				url: 'login',
				method: 'POST',
				body: userData,
			}),
			invalidatesTags: ['User'],
		}),
		fetchLogout: builder.mutation({
			query: () => ({
				url: `logout`,
				method: 'POST',
			}),
			invalidatesTags: ['User'],
		}),
	}),
});

export const {useFetchUserQuery, useFetchRegisterMutation, useFetchAuthMutation, useFetchLogoutMutation} = adminAPI;
