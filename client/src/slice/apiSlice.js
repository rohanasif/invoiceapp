import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["signup"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/signup`,
      providesTags: ["signup"],
    }),
    signUp: builder.mutation({
      query: (user) => ({
        url: `/signup`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["signup"],
    }),
    logIn: builder.mutation({
      query: (user) => ({
        url: `/login`,
        method: "POST",
        body: { email: user.email, password: user.password },
      }),
      invalidatesTags: ["login"],
    }),
    getLoggedInUser: builder.query({
      query: () => `/users?isLoggedIn=true`,
      providesTags: ["login"],
    }),
    logOut: builder.mutation({
      query: (user) => ({
        url: `/login`,
        method: "POST",
        body: { email: user.email, password: user.password },
      }),
      invalidatesTags: ["login"],
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
