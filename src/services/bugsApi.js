import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bugsApi = createApi({
  reducerPath: "bugsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9001/api/",
  }),
  tagTypes: ["Bugs"], // this will be used as cache

  endpoints: (builder) => ({
    getBugs: builder.query({
      query: () => ({
        url: "bugs",
        method: "GET",
      }),
      providesTags: ["Bugs"],
    }),

    getSingleBug: builder.query({
      query: (id) => ({
        url: `bugs/${id}`,
        method: "GET",
      }),
      providesTags: ["Bugs"],
    }),

    addBugs: builder.mutation({
      query: (body) => ({
        url: "bugs",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Bugs"],
    }),

    deleteBug: builder.mutation({
      query: (id) => ({
        url: `bugs/${id}`,
        method: "DELETE",
      }),
    }),

    updateBug: builder.mutation({
      query: (updatedData) => {
        const { id, ...data } = updatedData;
        return {
          url: `bugs/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Bugs"],
    }),
    
  }),
});

export const {
  useGetBugsQuery,
  useGetSingleBugQuery,
  useAddBugsMutation,
  useUpdateBugMutation,
  useDeleteBugMutation,
} = bugsApi;
