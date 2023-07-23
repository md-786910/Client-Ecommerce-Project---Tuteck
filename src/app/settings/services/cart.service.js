import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../endpoint/baseUrl";
import { headerApi } from "../endpoint/header";

export const cartApiSlice = createApi({
  reducerPath: "cartApiSlice",
  keepUnusedDataFor: 0,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  baseQuery: fetchBaseQuery({
    baseUrl: api,
    headers: headerApi,
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: ({ ...data }) => {
        console.log(data);
        return {
          url: "/cart/add",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Cart"],
    }),

    getAllCart: builder.query({
      query: () => `/cart/getAll`,
      providesTags: ["Cart"],
    }),

    getCartById: builder.query({
      query: (id) => `/cart/cartAction/${id}`,
      invalidatesTags: ["Cart"],
    }),

    deleteCartById: builder.mutation({
      query: (id) => {
        return {
          url: `/cart/cartAction/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Cart"],
    }),
    updateCartById: builder.mutation({
      query: ({ id, ...rest }) => {
        return {
          url: `/cart/cartAction/${id}`,
          method: "PUT",
          body: rest,
        };
      },
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetAllCartQuery,
  useGetCartByIdQuery,
  useDeleteCartByIdMutation,
  useUpdateCartByIdMutation,
} = cartApiSlice;
