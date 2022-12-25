import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const DropDown = ({ coins, setPrice, search }) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  console.log("searchF", search);

  const dispatch = useDispatch();
  return (
    <Fragment>
      <button
        className="col-span-3 bg-slate-300 hover:bg-slate-400 font-semibold text-sm flex items-center
         justify-between shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="px-4">
          {selected
            ? selected?.length > 25
              ? selected?.substring(0, 25) + "..."
              : selected
            : "Select Coin"}
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

      <ul
        className={` absolute bg-white overflow-y-auto border z-10 top-12 left-16 border-black ${
          isOpen ? "max-h-60" : "hidden"
        } `}
      >
        {search && (
          <div className="flex items-center px-2  bg-white   min-w-min">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Search currency..."
              className={`bg-white p-2 outline-none`}
            />
          </div>
        )}

        {coins?.map((coin) => (
          <li
            key={coin?.name}
            className={`py-2 px-4 text-sm hover:bg-red-400 hover:text-white bg-slate-100 border-b-2 rounded
          ${
            coin?.name?.toLowerCase() === selected?.toLowerCase() &&
            "bg-red-400 text-red-400"
          }
          ${
            coin?.name?.toLowerCase().startsWith(inputValue)
              ? "block"
              : "hidden"
          }`}
            onClick={() => {
              if (coin?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(coin?.name);
                setIsOpen(false);
                setInputValue("");
                dispatch(setPrice(coin));
              }
            }}
          >
            {coin?.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default DropDown;
