import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncCoins } from "../../common/cryptoSlice/coinsSlice";
import CoinList from "./CoinList";

const TopCoins = ({ currency }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchAsyncCoins(currency));
    setLoading(false);
  }, [dispatch, currency]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <CoinList />
    </div>
  );
};

export default TopCoins;
