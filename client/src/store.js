import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "./slice/invoicesSlice";

export default configureStore({
  reducer: {
    invoices: invoicesReducer,
  },
});
