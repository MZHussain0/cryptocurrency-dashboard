import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { HistoricalChart } from "../../common/APIs/Api";
import { fetchAsyncHistoricData } from "../../common/cryptoSlice/chartSlice";

const Charts = ({ symbol }) => {
  const [historicalData, setHistoricalData] = useState();
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(1);

  const currency = useSelector((state) => state.currencyFilter.currency);
  const coinId = useSelector((state) => state.currencyFilter.id);

  const dispatch = useDispatch();

  // const fetchHistoricalData = async () => {
  //   const { data } = await axios.get(HistoricalChart(coinId, days, currency));
  //   setHistoricalData(data.market_caps);
  //   console.log(data);
  // };

  useEffect(() => {
    setLoading(true);
    // fetchHistoricalData();
    dispatch(fetchAsyncHistoricData({ coinId, currency, days }));
    setLoading(false);
  }, [currency, coinId, days]);

  console.log("Historical data", historicalData);

  return loading ? <div>Loading...</div> : <div>Fetched</div>;
};

export default Charts;
