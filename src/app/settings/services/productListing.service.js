import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productUrl } from "../endpoint/baseUrl";

export const productListingApiSlice = createApi({
  reducerPath: "productListingApiSlice",
  keepUnusedDataFor: 0,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  baseQuery: fetchBaseQuery({
    baseUrl: productUrl,
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
  productListingApiSlice;
