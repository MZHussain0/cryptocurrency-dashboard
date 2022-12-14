// Library imports
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// File imports
import { setCurrency, setSymbol } from "../../common/cryptoSlice/cryptoSlice";

const Currency = () => {
  // Selected currency and it's symbol states
  const dispatch = useDispatch();

  const currency = useSelector((state) => state.currencyFilter.currency);

  const symbol = useSelector((state) => state.currencyFilter.symbol);

  currency === "USD" ? dispatch(setSymbol("$")) : dispatch(setSymbol("₹"));

  const [openList, setOpenList] = useState(false);

  const currencies = ["USD", "INR"];

  return (
    <Fragment>
      <button
        className="w-32 relative flex justify-center  items-center gap-5 bg-white border focus:outline-none text-black rounded hover:bg-slate-300 focus:ring ring-gray-200 border-gray-900 shadow-xl group"
        onClick={() => setOpenList(!openList)}
      >
        <p className="px-4">
          {symbol} {currency}
        </p>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            className={`${openList ? "-rotate-180" : ""}`}
          >
            <path
              d="M5.16108 10.0731C4.45387 9.2649 5.02785 8 6.1018 8H17.898C18.972 8 19.5459 9.2649 18.8388 10.0731L13.3169 16.3838C12.6197 17.1806 11.3801 17.1806 10.6829 16.3838L5.16108 10.0731ZM6.65274 9.5L11.8118 15.396C11.9114 15.5099 12.0885 15.5099 12.1881 15.396L17.3471 9.5H6.65274Z"
              fill="#000"
            />
          </svg>
        </span>

        <div
          className={`absolute hidden top-full min-w-full w-max bg-white shadow-md mt-1 rounded ${
            openList ? "group-focus:block" : "group-focus:hidden"
          }`}
        >
          <ul className="text-left border rounded bg-slate-400 shadow-lg">
            {currencies.map((curr) => (
              <li
                key={curr}
                className={`px-2 py-1 hover:bg-slate-900 border-b hover:text-white`}
                onClick={() => {
                  if (curr !== currency) {
                    dispatch(setCurrency(curr));
                    setOpenList(false);
                  }
                }}
              >
                {`${curr}`}
              </li>
            ))}
          </ul>
        </div>
      </button>
    </Fragment>
  );
};

export default Currency;
