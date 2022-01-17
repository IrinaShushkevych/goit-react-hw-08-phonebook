//created by Irina Shushkevych
//https://connections-api.herokuapp.com

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsReducer = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/contacts',
  }),
  tagTypes: ['contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: ({ token }) => {
        return {
          url: '/',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map((el) => ({ type: 'contacts', id: el.id })),
              'contacts',
            ]
          : ['contacts'],
    }),
    addContact: builder.mutation({
      query: ({ contact, token }) => {
        return {
          url: '/',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: contact,
        }
      },
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: ({ id, token }) => ({
        url: `/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: (result) =>
        result ? [{ type: 'contacts', id: result.id }] : ['contacts'],
    }),
    editContact: builder.mutation({
      query: ({ contact, id, token }) => {
        return {
          url: `/${id}`,
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: contact,
        }
      },
      invalidatesTags: (result) =>
        result
          ? [...result.map((el) => ({ type: 'contacts', id: el.id }))]
          : ['contacts'],
    }),
  }),
})

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactMutation,
} = contactsReducer
