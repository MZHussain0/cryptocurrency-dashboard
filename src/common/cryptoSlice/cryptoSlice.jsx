import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  currency: "USD",
  symbol: "$",
};

export const cryptoSlice = createSlice({
  name: "currencyFilter",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setSymbol: (state, action) => {
      state.symbol = action.payload;
    },
  },
});

export const { setCurrency } = cryptoSlice.actions;
export const { setSymbol } = cryptoSlice.actions;
export default cryptoSlice.reducer;
