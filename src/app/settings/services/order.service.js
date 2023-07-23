import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../endpoint/baseUrl";
import { headerApi } from "../endpoint/header";

export const orderApiSlice = createApi({
  reducerPath: "orderApiSlice",
  keepUnusedDataFor: 0,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  baseQuery: fetchBaseQuery({
    baseUrl: api,
    headers: headerApi,
  }),
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: ({ ...data }) => {
        return {
          url: "/order/create",
          method: "POST",
          body: data,
        };
      },
      providesTags: ["Order"],
    }),

    getAllOrders: builder.query({
      query: () => `/order/AllOrder`,
      providesTags: ["Order"],
    }),

    getOrderById: builder.query({
      query: (orderId) => `/order/actionOrder/${orderId}`,
      invalidatesTags: ["Order"],
    }),

    deleteOrderById: builder.mutation({
      query: (id) => {
        return {
          url: `/order/actionOrder/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrdersQuery,
  useGetOrderByIdQuery,
  useAddAddressMutation,
  useDeleteOrderByIdMutation,
} = orderApiSlice;
