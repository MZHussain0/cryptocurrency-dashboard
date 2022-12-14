import { configureStore } from "@reduxjs/toolkit";
import cryptoSliceReducer from "../cryptoSlice/cryptoSlice";

export const store = configureStore({
  reducer: {
    currencyFilter: cryptoSliceReducer,
  },
});
