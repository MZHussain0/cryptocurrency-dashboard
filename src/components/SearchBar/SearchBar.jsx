import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllCoins } from "../../common/cryptoSlice/coinsSlice";
import FilteredSearch from "./FilteredSearch";

const SearchBar = () => {
  const coins = useSelector(getAllCoins);
  // const coinId = useSelector((state) => state.currencyFilter.id);

  const [search, setSearch] = useState([]);
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   let handler = () => {
  //     setIsOpen(false);
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => document.removeEventListener("mousedown", handler);
  // }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const searchChangeHandler = (e) => {
    const searchWord = e.target.value;
    const filteredArray = coins.filter((coin) =>
      coin?.name?.toLowerCase().includes(searchWord.toLowerCase())
    );
    searchWord === "" ? setSearch([]) : setSearch(filteredArray);
  };
  // console.log("search result", search);

  return (
    <div
      className="relative 
    "
    >
      <form onSubmit={submitHandler}>
        <div
          className={
            "flex justify-between overflow-hidden border-4 border-slate-300 h-[72px] rounded-lg shadow-xl"
          }
        >
          <input
            type="text"
            className="block w- flex-1 py-2 px-3 bg-white font-semibold"
            placeholder="Search your favourite cryptocurrencies"
            id="search"
            onChange={searchChangeHandler}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
      </form>

      {search.length != 0 && (
        <div
          className={`absolute mt-2 w-1/2 overflow-hidden rounded-lg shadow-xl shadow- bg-slate-400 border-4 border-slate-300 ${
            isOpen ? "" : "hidden"
          }`}
        >
          {search.slice(0, 3).map((coin) => (
            <FilteredSearch coin={coin} key={coin.id} setIsOpen={setIsOpen} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
