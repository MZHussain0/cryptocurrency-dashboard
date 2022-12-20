import { Fragment } from "react";
import { useSelector } from "react-redux";

// components import
import Currency from "./components/Currency/Currency";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import TopCoins from "./components/TrendingSection/TopCoins";

function App() {
  const currency = useSelector((state) => state.currencyFilter.currency);
  const symbol = useSelector((state) => state.currencyFilter.symbol);
  const coinId = useSelector((state) => state.currencyFilter.id);
  console.log("coinId", coinId);

  return (
    <Fragment>
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
                charts
              </section>
            </div>
            {/* ------------------------------------------------- */}

            {/* portfolio and exchange section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3">
              <section className="bg-white rounded-lg shadow-xl min-h-[3rem]">
                Portfolio
              </section>
              {/* ------------------------------------------------- */}

              <section className="bg-white rounded-lg shadow-xl min-h-[3rem]">
                exchange
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
