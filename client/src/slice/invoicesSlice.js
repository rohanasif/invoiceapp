import { createSlice } from "@reduxjs/toolkit";

export const invoicesSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: [],
  },
  reducers: {
    getInvoices: (state, action) => {
      state.invoices = action.payload;
    },
  },
});

export const { getInvoice } = invoicesSlice.actions;

export default invoicesSlice.reducer;
