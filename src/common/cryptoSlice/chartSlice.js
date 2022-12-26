import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../APIs/Api";

// Fetching coins historical data

export const fetchAsyncHistoricData = createAsyncThunk(
  "market/fetchAsyncHistoricData",
  async (params) => {
    try {
      const { coinId, currency, days } = params;
      const response = await Api.get(`coins/${coinId}/market_chart`, {
        params: {
          vs_currency: currency,
          days,
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  market: [],
};

const chartSlice = createSlice({
  name: "market",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncHistoricData.pending, (state, action) => {
        console.log("Pending");
      })
      .addCase(fetchAsyncHistoricData.fulfilled, (state, { payload }) => {
        console.log("Fetched chart data successfully");

        return { ...state, market: payload };
      })
      .addCase(fetchAsyncHistoricData.rejected, (state, action) => {
        console.log("Rejected");
      });
  },
});

export const getAllChartData = (state) => state.market.market;
export default chartSlice.reducer;
