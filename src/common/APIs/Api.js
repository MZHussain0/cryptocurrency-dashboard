import axios from "axios";

export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export default axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
});
