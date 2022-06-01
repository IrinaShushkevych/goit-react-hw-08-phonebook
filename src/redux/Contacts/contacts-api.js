//created by Irina Shushkevych
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsReducer = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://app-my-phonebook.herokuapp.com/api/contacts",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  // refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 0,
  tagTypes: ["contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: (...prop) => "/",
      providesTags: (result) =>
        result.data
          ? [
              ...result.data.map((el) => ({ type: "contacts", id: el.id })),
              "contacts",
            ]
          : ["contacts"],
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url: "/",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["contacts"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) =>
        result.data ? [{ type: "contacts", id: result.data.id }] : ["contacts"],
    }),
    editContact: builder.mutation({
      query: ({ contact, id }) => {
        return {
          url: `/${id}`,
          method: "PATCH",
          body: contact,
        };
      },
      invalidatesTags: (result) =>
        result
          ? [...result.data.map((el) => ({ type: "contacts", id: el.id }))]
          : ["contacts"],
    }),
  }),
});

export const getContacts =
  contactsReducer.endpoints.getContacts.useQuerySubscription;

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactMutation,
} = contactsReducer;
