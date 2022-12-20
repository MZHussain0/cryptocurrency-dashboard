import React from "react";
import { useSelector } from "react-redux";
import { getAllCoins } from "../../common/cryptoSlice/coinsSlice";
import CoinCard from "./CoinCard";

const CoinList = () => {
  const coins = useSelector(getAllCoins);
  console.log("🚀 ~ file: CoinList.jsx:7 ~ coins", coins);

  return (
    <div className="p-4 bg-white overflow-hidden rounded-lg">
      <div className="text-l mb-3 font-semibold">
        Cryptocurrencies by market cap
      </div>
      <div className="">
        {coins?.slice(0, 10).map((coin) => (
          <CoinCard coin={coin} key={coin.id} />
        ))}
      </div>
    </div>
  );
};

export default CoinList;
