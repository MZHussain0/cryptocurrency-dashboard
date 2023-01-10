import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getAllCoins } from "../../common/cryptoSlice/coinsSlice";
import { setPrice_s, setPrice_b } from "../../common/cryptoSlice/cryptoSlice";
import { convertExchangeRates } from "../../common/miscelleneous/exchangeRate";

import DropDown from "./DropDown";

const Exchange = () => {
  const coins = useSelector(getAllCoins);
  const [amount, setAmount] = useState("");
  const [exchangeResult, setExchangeResult] = useState("");

  const sellPrice = useSelector((state) => state.globalStore.price_s);

  const buyPrice = useSelector((state) => state.globalStore.price_b);

  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <h1 className="p-4 font-bold">Exchange Coins</h1>
        <p className="font-semibold text-xs pr-12 pt-8 text-light-muted dark:text-dark-muted">
          Enter value
        </p>
      </div>
      <div className="grid grid-cols-6 gap-4 md:gap-2 items-center justify-center px-4 pb-4">
        <h3 className="col-span-1 text-red-500 font-semibold">Sell</h3>
        <div className="relative col-span-3">
          <DropDown coins={coins} setPrice={setPrice_s} search={true} />
        </div>
        <div className=" col-span-2 place-self-center flex-1 py-2 px-2 bg-light-fill dark:bg-dark-fill">
          <input
            type="number"
            min={0}
            required
            className=" col-span-2 w-24 flex-1 py-2 px-2 text-xs border-2 bg-light-fill dark:bg-dark-fill border-black dark:border-white "
            placeholder="Avl: 0.05btc"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 md:gap-2 items-center px-4 pb-4">
        <h3 className="col-span-1 text-green-500 font-semibold">Buy</h3>

        <div className="relative col-span-3">
          <DropDown coins={coins} setPrice={setPrice_b} search={true} />
        </div>

        <p className="col-span-2 place-self-center text-red-400 font-semibold">
          {isNaN(exchangeResult)
            ? "Select currencies and enter the amount"
            : exchangeResult}{" "}
          {buyPrice?.symbol}
        </p>
      </div>
      <div className="flex items-center justify-center pb-2 pt-4">
        <button
          className="bg-light-button-selected dark:bg-dark-button-selected hover:bg-light-button-selected-hover dark:hover:bg-dark-button-selected-hover font-semibold hover:text-white"
          onClick={() =>
            setExchangeResult(convertExchangeRates(sellPrice, buyPrice, amount))
          }
        >
          Exchange
        </button>
      </div>
    </Fragment>
  );
};

export default Exchange;
