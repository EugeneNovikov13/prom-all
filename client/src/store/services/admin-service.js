import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminAPI = createApi({
	reducerPath: 'adminAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: '/',
	}),
	endpoints: builder => ({
		fetchRegister: builder.mutation({
			query: (userData) => ({
				url: 'register',
				method: 'POST',
				body: userData,
			}),
		}),
		fetchAuth: builder.mutation({
			query: userData => ({
				url: 'login',
				method: 'POST',
				body: userData,
			}),
		}),
		fetchLogout: builder.mutation({
			query: () => ({
				url: `logout`,
				method: 'POST',
			}),
		}),
	}),
});

export const {useFetchRegisterMutation, useFetchAuthMutation, useFetchLogoutMutation} = adminAPI;

console.log(adminAPI);
