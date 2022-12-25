import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getAllCoins } from "../../common/cryptoSlice/coinsSlice";
import { setPrice_s } from "../../common/cryptoSlice/cryptoSlice";
import { setPrice_b } from "../../common/cryptoSlice/cryptoSlice";
import { convertExchangeRates } from "../../common/miscelleneous/exchangeRate";

import DropDown from "./DropDown";

const Exchange = () => {
  const coins = useSelector(getAllCoins);
  const [amount, setAmount] = useState();

  const sellPrice = useSelector((state) => state.currencyFilter.price_s);
  console.log(
    "🚀 ~ file: Exchange.jsx:14 ~ sellPrice",
    sellPrice.current_price
  );

  const buyPrice = useSelector((state) => state.currencyFilter.price_b);
  console.log("🚀 ~ file: Exchange.jsx:17 ~ buyPrice", buyPrice.current_price);

  const exchangeResult = convertExchangeRates(
    sellPrice.current_price,
    buyPrice.current_price,
    amount
  );

  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <h1 className="p-4 font-bold">Exchange Coins</h1>
        <p className="font-semibold text-xs pr-12 pt-8 text-slate-600">
          Enter value
        </p>
      </div>
      <div className="relative grid grid-cols-6 gap-4 items-center px-4 pb-12">
        <h3 className="col-span-1 text-red-500 font-semibold">Sell</h3>
        <DropDown coins={coins} setPrice={setPrice_s} search={true} />
        <input
          type="number"
          className=" col-span-2 block w- flex-1 py-2 px-3 bg-white text-sm border-2 "
          placeholder="Avl: 0.05btc"
          id="search"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="relative grid grid-cols-6 gap-4 items-center px-4 pb-12">
        <h3 className="col-span-1 text-green-500 font-semibold">Buy</h3>

        <DropDown coins={coins} setPrice={setPrice_b} search={true} />

        <p className="col-span-1 place-self-center text-red-400 font-semibold">
          {isNaN(exchangeResult) ? 0 : exchangeResult} {buyPrice?.symbol}
        </p>
      </div>
    </Fragment>
  );
};

export default Exchange;
