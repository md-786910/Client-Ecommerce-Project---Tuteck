import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../endpoint/baseUrl";
import { headerApi } from "../endpoint/header";

export const userApiSlice = createApi({
  reducerPath: "userApiSlice",
  keepUnusedDataFor: 30,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  baseQuery: fetchBaseQuery({
    baseUrl: api,
    headerApi,
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (name) => `/search/${name}`,
      providesTags: ["product"],
    }),

    getProductDetailById: builder.query({
      query: (id) => `/products/${id}`,
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useGetAllProductQuery, useGetProductDetailByIdQuery } =
  userApiSlice;
