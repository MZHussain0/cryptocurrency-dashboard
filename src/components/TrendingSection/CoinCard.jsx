import React from "react";

import { useSelector } from "react-redux";
import upArrow from "../../assets/caret-up.svg";
import downArrow from "../../assets/caret-down.svg";
import { compactNumbers } from "../../common/miscelleneous/compactNumbers";
import { useDispatch } from "react-redux";
import { setId } from "../../common/cryptoSlice/cryptoSlice";

const CoinCard = ({ coin }) => {
  const dispatch = useDispatch();
  const symbol = useSelector((state) => state.currencyFilter.symbol);

  return (
    <div
      className="grid grid-cols-4 justify-between  items-center border-b-2 p-2 hover:border-l-4 hover:border-black cursor-pointer duration-300"
      onClick={() => dispatch(setId(coin.id))}
    >
      <div className="col-span-3">
        <div className="font-bold pb-1 text-sm">{coin?.name}</div>
        <div className="font-semibold text-xs text-slate-600">
          Mkt.Cap: {symbol}
          {compactNumbers(coin?.market_cap)}
        </div>
      </div>
      <div className="col-span-1 flex gap-x-1">
        <img
          src={coin?.price_change_percentage_24h > 0 ? upArrow : downArrow}
          alt="arrow"
        />
        <div
          className={`font-semibold  ${
            coin?.price_change_percentage_24h > 0
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {coin?.price_change_percentage_24h.toFixed(2)} %
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
