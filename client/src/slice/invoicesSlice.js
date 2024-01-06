import { createSlice } from "@reduxjs/toolkit";

export const invoicesSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: [],
  },
  reducers: {
    setInvoice: (state, action) => {
      state.invoices = action.payload;
    },
  },
});

export const { setInvoice } = invoicesSlice.actions;

export default invoicesSlice.reducer;
