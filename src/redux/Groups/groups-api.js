import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const groupsReducer = createApi({
  reducerPath: "groups",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://app-my-phonebook.herokuapp.com/api/groups",
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
  tagTypes: ["groups"],
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: (...prop) => "/",
      providesTags: (result) => {
        console.log(result);
        return result.data
          ? [
              ...result.data.map((el) => ({ type: "groups", id: el.id })),
              "groups",
            ]
          : ["groups"];
      },
    }),
    addGroup: builder.mutation({
      query: (group) => {
        return { url: "/", method: "POST", body: group };
      },
      invalidatesTags: ["groups"],
    }),
    deleteGroup: builder.mutation({
      query: (id) => ({ url: `/${id}`, method: "DELETE" }),
      invalidatesTags: ["groups"],
    }),
    editGroup: builder.mutation({
      query: (id, group) => ({ url: `/${id}`, method: "PATCH", body: group }),
      invalidatesTags: (result) =>
        result?.data ? [{ type: "groups", id: result.data.id }] : ["groups"],
    }),
  }),
});

export const getGroups = groupsReducer.endpoints.getGroups.useQuerySubscription;

export const {
  useGetGroupsQuery,
  useAddGroupMutation,
  useDeleteGroupMutation,
  useEditGroupMutation,
} = groupsReducer;
