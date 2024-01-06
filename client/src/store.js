import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "./slice/invoicesSlice";
import usersReducer from "./slice/usersSlice";

export default configureStore({
  reducer: {
    invoices: invoicesReducer,
    users: usersReducer,
  },
});
