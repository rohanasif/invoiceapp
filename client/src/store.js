import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "./slice/invoicesSlice";
import usersReducer from "./slice/usersSlice";
import { usersApi } from "./slice/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";

const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    users: usersReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);
export default store;
