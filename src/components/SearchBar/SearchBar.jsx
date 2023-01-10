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

  return (
    <div
      className="relative 
    "
    >
      <form onSubmit={submitHandler}>
        <div
          className={
            "flex justify-between overflow-hidden border-2  rounded-lg shadow-xl"
          }
        >
          <input
            type="text"
            className="block w-full flex-1 py-4 px-4 bg-light-fill dark:bg-dark-fill font-semibold"
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
          className={`absolute w-full z-20 flex flex-col border-2 border-black  overflow-hidden  shadow-xl bg-light-fill dark:bg-dark-fill rounded-lg  ${
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
