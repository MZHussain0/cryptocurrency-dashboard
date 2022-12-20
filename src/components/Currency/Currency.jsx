// Library imports
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// File imports
import { setCurrency, setSymbol } from "../../common/cryptoSlice/cryptoSlice";

const Currency = ({ currency, symbol }) => {
  // Selected currency and it's symbol states
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const currencies = ["USD", "INR"];

  return (
    <div className="w-32 relative flex flex-col items-center   rounded-lg ">
      <button
        className="w-full flex items-center justify-between  bg-slate-300 font-bold border-4 border-white border-transparent focus:outline-none text-black rounded-lg hover:bg-slate-400  focus:ring ring-gray-200 shadow-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="px-4">
          {symbol} {currency}
        </p>
        <span>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${isOpen ? "-rotate-180" : ""}`}
          >
            <path
              d="M6.1018 8C5.02785 8 4.45387 9.2649 5.16108 10.0731L10.6829 16.3838C11.3801 17.1806 12.6197 17.1806 13.3169 16.3838L18.8388 10.0731C19.5459 9.2649 18.972 8 17.898 8H6.1018Z"
              fill="#000"
            />
          </svg>
        </span>
      </button>

      <div
        className={`absolute top-full min-w-full w-max bg-white shadow-md mt-1 rounded ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="text-left rounded bg-slate-400 shadow-lg shadow-black">
          {currencies.map((curr) => (
            <li
              key={curr}
              className={`px-3 py-3 cursor-pointer hover:bg-slate-500 text- font-bold border-b hover:text-white border-l-transparent hover:border-l-4 hover:border-white`}
              onClick={() => {
                curr === "USD"
                  ? dispatch(setSymbol("$"))
                  : dispatch(setSymbol("₹"));
                dispatch(setCurrency(curr));
                setIsOpen(false);
              }}
            >
              {`${curr}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Currency;
