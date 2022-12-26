import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: "USD",
  symbol: "$",
  id: "bitcoin",
  price_s: 0,
  price_b: 0,
  price_symbol: "",
  days: 365,
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
    setPrice_s: (state, action) => {
      state.price_s = action.payload;
    },
    setPrice_b: (state, action) => {
      state.price_b = action.payload;
    },
    setPrice_symbol: (state, action) => {
      state.price_symbol = action.payload;
    },
    setDays: (state, action) => {
      state.days = action.payload;
    },
  },
});

export const { setCurrency } = cryptoSlice.actions;
export const { setSymbol } = cryptoSlice.actions;
export const { setId } = cryptoSlice.actions;
export const { setPrice_s } = cryptoSlice.actions;
export const { setPrice_b } = cryptoSlice.actions;
export const { setPrice_symbol } = cryptoSlice.actions;
export const { setDays } = cryptoSlice.actions;
export default cryptoSlice.reducer;
