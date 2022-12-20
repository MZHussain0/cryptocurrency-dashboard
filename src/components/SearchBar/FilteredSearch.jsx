import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setId } from "../../common/cryptoSlice/cryptoSlice";

const FilteredSearch = ({ coin, setIsOpen }) => {
  const dispatch = useDispatch();

  const symbol = useSelector((state) => state.currencyFilter.symbol);
  return (
    <div
      className="cursor-pointer py-3 px-4 hover:bg-slate-500 hover:text-white font-semibold flex justify-between items-center hover:border-l-4 hover:border-r-4 border-b border-white"
      onClick={() => {
        dispatch(setId(coin.id));
        setIsOpen(false);
      }}
    >
      <img src={coin?.image} alt={coin?.name} width="30px" />
      <div className="">{coin?.name}</div>
      <div className="">
        {symbol}
        {coin?.current_price}
      </div>
    </div>
  );
};

export default FilteredSearch;
