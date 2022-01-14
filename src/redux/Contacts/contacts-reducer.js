//created by Irina Shushkevych
//https://connections-api.herokuapp.com

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsReducer = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61d437968df81200178a8b2f.mockapi.io/contacts/contacts',
  }),
  tagTypes: ['contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => '/',
      providesTags: (result) =>
        result
          ? [
              ...result.map((el) => ({ type: 'contacts', id: el.id })),
              'contacts',
            ]
          : ['contacts'],
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url: '/',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result) =>
        result ? [{ type: 'contacts', id: result.id }] : ['contacts'],
    }),
    editContact: builder.mutation({
      query: (contact) => ({
        url: `/${contact.id}`,
        method: 'PUT',
        body: contact,
      }),
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
