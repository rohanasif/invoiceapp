import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "appApi",
  tagTypes: [
    "signup",
    "login",
    "customers",
    "orders",
    "customer_orders",
    "order_items",
  ],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
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
    logOut: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: "POST",
      }),
      invalidatesTags: ["login"],
    }),
    getCustomers: builder.query({
      query: () => `/customers`,
      providesTags: ["customers"],
    }),
    createCustomer: builder.mutation({
      query: (customer) => ({
        url: `/customers`,
        method: "POST",
        body: customer,
      }),
      invalidatesTags: ["customers"],
    }),
    deleteCustomer: builder.mutation({
      query: (id) => ({
        url: `/customers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["customers"],
    }),
    getCustomerOrders: builder.query({
      query: (customerID) => `/orders/${customerID}`,
      providesTags: ["customer_orders"],
    }),
    getAllOrders: builder.query({
      query: () => `/orders`,
      providesTags: ["orders"],
    }),
    createOrder: builder.mutation({
      query: (order, customerID) => ({
        url: `/orders/${customerID}`,
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["orders", "customer_orders"],
    }),
    deleteOrder: builder.mutation({
      query: (order, customerID) => ({
        url: `/orders/${customerID}/${order.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["orders", "customer_orders"],
    }),
    deleteAllCustomerOrders: builder.mutation({
      query: (customerID) => ({
        url: `/customers/${customerID}/orders`,
        method: "DELETE",
      }),
      invalidatesTags: ["orders", "customer_orders"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useLogInMutation,
  useLogOutMutation,
  useGetCustomersQuery,
  useCreateCustomerMutation,
  useDeleteCustomerMutation,
  useGetCustomerOrdersQuery,
  useGetAllOrdersQuery,
  useCreateOrderMutation,
  useDeleteOrderMutation,
  useDeleteAllCustomerOrdersMutation,
} = appApi;
