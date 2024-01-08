import { createSlice } from "@reduxjs/toolkit";

export const invoicesSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: [],
  },
  reducers: {
    setInvoices: (state, action) => {
      state.invoices = action.payload;
    },
  },
});

export const { setInvoice } = invoicesSlice.actions;

export default invoicesSlice.reducer;
