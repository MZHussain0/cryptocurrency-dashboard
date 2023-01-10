import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const FilteredSearch = ({ coin, setIsOpen }) => {
  const symbol = useSelector((state) => state.globalStore.symbol);
  return (
    <div
      className="cursor-pointer py-4 px-4 hover:bg-light-list-hover dark:hover:bg-dark-list-hover rounded-lg font-semibold flex justify-around items-center"
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <img src={coin?.image} alt={coin?.name} width="40px" />
      <div className="">{coin?.name}</div>
      <div className="">
        {symbol}
        {coin?.current_price}
      </div>
    </div>
  );
};

export default FilteredSearch;
