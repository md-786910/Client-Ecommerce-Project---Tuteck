import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../endpoint/baseUrl";

export const authApiSlice = createApi({
  reducerPath: "authApiSlice",
  keepUnusedDataFor: 30,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  baseQuery: fetchBaseQuery({
    baseUrl: api,
  }),
  tagTypes: ["userAuth"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: ({ ...data }) => {
        console.log(data);
        return {
          url: "/user/register",
          method: "POST",
          body: data,
        };
      },
      providesTags: ["userAuth"],
    }),
    loginUser: builder.mutation({
      query: ({ ...data }) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      providesTags: ["userAuth"],
    }),
    resetPasswordUser: builder.mutation({
      query: ({ ...data }) => ({
        url: "/user/resetPassword",
        method: "POST",
        body: data,
      }),
      providesTags: ["userAuth"],
    }),
    forgotPasswordUser: builder.mutation({
      query: ({ ...data }) => ({
        url: "/user/forgotPassword",
        method: "POST",
        body: data,
      }),
      providesTags: ["userAuth"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useForgotPasswordUserMutation,
  useLoginUserMutation,
  useResetPasswordUserMutation,
} = authApiSlice;
