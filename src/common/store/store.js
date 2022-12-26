import { configureStore } from "@reduxjs/toolkit";
import cryptoSliceReducer from "../cryptoSlice/cryptoSlice";
import coinsSliceReducer from "../cryptoSlice/coinsSlice";
import chartSliceReducer from "../cryptoSlice/chartSlice";

export const store = configureStore({
  reducer: {
    currencyFilter: cryptoSliceReducer,
    coins: coinsSliceReducer,
    market: chartSliceReducer,
  },
});
