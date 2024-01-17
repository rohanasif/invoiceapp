import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./slice/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);
export default store;
