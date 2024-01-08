import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["users"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`,
      providesTags: ["users"],
    }),
    signUp: builder.mutation({
      query: (user) => ({
        url: `/users`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["users"],
    }),
    logIn: builder.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PATCH",
        body: { ...user, isLoggedIn: true },
      }),
      invalidatesTags: ["users"],
    }),
    getLoggedInUser: builder.query({
      query: () => `/users?isLoggedIn=true`,
      providesTags: ["users"],
    }),
    logOut: builder.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PATCH",
        body: { ...user, isLoggedIn: false },
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useSignUpMutation,
  useLogInMutation,
  useGetLoggedInUserQuery,
  useLogOutMutation,
} = usersApi;
