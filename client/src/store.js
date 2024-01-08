import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "./slice/invoicesSlice";
import usersReducer from "./slice/usersSlice";

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    users: usersReducer,
  },
});
