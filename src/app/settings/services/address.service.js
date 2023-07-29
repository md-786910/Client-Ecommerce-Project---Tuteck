import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../endpoint/baseUrl";
import { headerApi } from "../endpoint/header";

export const addressApiSlice = createApi({
  reducerPath: "addressApiSlice",
  keepUnusedDataFor: 0,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  baseQuery: fetchBaseQuery({
    baseUrl: api,
    headers: headerApi,
  }),
  tagTypes: ["Address"],
  endpoints: (builder) => ({
    createAddress: builder.mutation({
      query: ({ ...data }) => {
        return {
          url: "/address/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Address"],
    }),

    getAddress: builder.query({
      query: () => `/address/getAddress`,
      providesTags: ["Address"],
    }),
  }),
});

export const { useCreateAddressMutation, useGetAddressQuery } = addressApiSlice;
