import { Fragment } from "react";
import { useSelector } from "react-redux";
import Charts from "./components/Charts/Charts";

// components import
import Currency from "./components/Currency/Currency";
import Exchange from "./components/Exchange/Exchange";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import MDropdown from "./components/sample/test";
import SearchBar from "./components/SearchBar/SearchBar";
import TopCoins from "./components/TrendingSection/TopCoins";

function App() {
  const currency = useSelector((state) => state.currencyFilter.currency);
  console.log("🚀 ~ file: App.jsx:16 ~ currency", currency);

  const symbol = useSelector((state) => state.currencyFilter.symbol);
  console.log("🚀 ~ file: App.jsx:19 ~ symbol", symbol);

  return (
    <Fragment>
      <MDropdown />
      {/* Header Component */}
      <header className="bg-white">
        <Header />
      </header>

      {/* Main content Area */}
      <div className="py-5">
        <main className="w-11/12 py-5 px-8 bg-gray-200 m-auto grid grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-3 rounded-lg">
          <section className=" text-black  col-span-2">
            {/* CURRENCY FILTER and SEARCH SECTION */}
            <div className="grid grid-cols-6 gap-x-2 gap-y-3 ">
              {/* ----------------------------------------------- */}

              <section className=" col-span-1">
                <Currency currency={currency} symbol={symbol} />
              </section>
              {/* ----------------------------------------------- */}

              <section className="col-span-5  ">
                <SearchBar currency={currency} symbol={symbol} />
              </section>
              {/* ----------------------------------------------- */}
            </div>
            {/*CHART SECTION */}
            <div className="grid grid-cols-1 py-3">
              <section className="bg-white col-span-1 rounded-lg shadow-xl min-h-[3rem]">
                <Charts currency={currency} symbol={symbol} />
              </section>
            </div>
            {/* ------------------------------------------------- */}

            {/* portfolio and exchange section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3">
              <section className="bg-white rounded-lg shadow-xl min-h-[3rem]">
                <Portfolio />
              </section>
              {/* ------------------------------------------------- */}

              <section className="bg-white rounded-lg shadow-xl min-h-[3rem]">
                <Exchange />
              </section>
              {/* ----------------------------------------------- */}
            </div>
          </section>
          {/* Trending Section */}
          <section className="bg-white text-black rounded-lg shadow-xl min-h-[3rem] col-span-1">
            <TopCoins currency={currency} />
          </section>
          {/* --------------------------------------------------- */}
        </main>
      </div>
    </Fragment>
  );
}

export default App;
