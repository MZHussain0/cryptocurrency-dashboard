import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  currency: "USD",
  symbol: "$",
  coinId: "",
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
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setCurrency } = cryptoSlice.actions;
export const { setSymbol } = cryptoSlice.actions;
export const { setId } = cryptoSlice.actions;
export default cryptoSlice.reducer;
