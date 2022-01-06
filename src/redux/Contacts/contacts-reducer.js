//ДЗ виконала Шушкевич Ірина

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
      providesTags: ['contacts'],
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
      invalidatesTags: ['contacts'],
    }),
  }),
})

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsReducer
