import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersReducer = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['user'],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (contact) => ({
        url: '/signup',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['user'],
    }),
    loginUser: builder.mutation({
      queryFn: async (contact, queryApi, extraOptions, baseQuery) => {
        const res = await baseQuery({
          url: `/login`,
          method: 'POST',
          body: contact,
        })
          .then((response) => {
            if (response.error) {
              switch (response.error.status) {
                case 400:
                  return {
                    error: { status: 400, data: 'Wrong email or passwird' },
                  }
                case 404:
                  return {
                    error: { status: 404, data: 'Not found' },
                  }
                default:
                  return response.error
              }
            }
            return response
          })
          .catch((error) => error)
        return res
      },
      invalidatesTags: ['user'],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
})

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = usersReducer
