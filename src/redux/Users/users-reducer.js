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
            console.log(response)
            if (response.error) {
              switch (response.error.status) {
                case 400:
                  return {
                    error: { status: 400, data: 'Wrong email or passwird' },
                  }
                // break;
                default:
                  return response.error
              }
            }
            return response.data
          })
          .catch((error) => {
            console.log(error)
            if (error.error.status === 400)
              return {
                ...error,
                error: { status: 400, data: 'Wrong email or passwird' },
              }
            return error
          })
        console.log(res)
        return res
        // console.log(
        //   response.ok
        //     ? { data: await response.json() }
        //     : { error: await response.json() },
        // )
        // return response.ok
        //   ? { data: await response.json() }
        //   : { error: await response.json() }
      },
      // query: (contact) => ({
      //   url: `/login`,
      //   method: 'POST',
      //   body: contact,
      // }),
      // async onQueryStarted(contact, { dispatch, queryFulfilled }) {
      //   // `onStart` side-effect
      //   // dispatch(messageCreated('Fetching posts...'))
      //   console.log('starting!')
      //   console.log(contact)
      //   console.log(queryFulfilled)
      //   try {
      //     const { data } = await queryFulfilled
      //     console.log('success!', data)
      //     // `onSuccess` side-effect
      //     // dispatch(messageCreated('Posts received!'))
      //   } catch (error) {
      //     // `onError` side-effect
      //     // dispatch(messageCreated('Error fetching posts!'))
      //     console.log('error... ', error)
      //   }
      //   console.log('END')
      // },
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
