import { useSelector } from "react-redux";
import Charts from "./components/Charts/Charts";

// components import
import Currency from "./components/Currency/Currency";
import Exchange from "./components/Exchange/Exchange";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import SearchBar from "./components/SearchBar/SearchBar";
import TopCoins from "./components/TrendingSection/TopCoins";

function App() {
  const currency = useSelector((state) => state.globalStore.currency);
  const symbol = useSelector((state) => state.globalStore.symbol);

  return (
    <div className="max-h-screen bg-light-fill dark:bg-dark-fill text-light-base dark:text-dark-base">
      {/* Header Component */}
      <header className="">
        <Header />
      </header>

      {/* Main content Area */}
      <div className="p-4 ">
        <div className="dashboard bg-light-muted dark:bg-dark-muted duration-100 rounded-lg py-4 px-8  m-auto p-4 grid sm:grid-cols-1 xl:grid-cols-4 gap-4 ">
          <main className="dashboard col-span-1 xl:col-span-3 sm:grid-cols-3 md:grid-cols-4">
            {/* Currency Selector */}
            {/* ----------------------------------------------- */}
            <section className=" md:col-span-1 col-span-1 sm:col-span-1">
              <Currency />
            </section>
            {/* ----------------------------------------------- */}

            {/* SearchBar Section */}
            <section className=" md:col-span-3 sm:col-span-2 ">
              <SearchBar currency={currency} symbol={symbol} />
            </section>
            {/* ----------------------------------------------- */}

            {/*CHART SECTION */}
            <section className="dashboard_item md:col-span-full sm:col-span-full">
              <Charts currency={currency} symbol={symbol} />
            </section>
            {/* ------------------------------------------------- */}

            {/* Portfolio Section */}
            <section className="dashboard_item md:col-span-2 sm:col-span-full bg-light-fill dark:bg-dark-fill">
              <Portfolio />
            </section>

            {/* Exchange Section */}
            {/* ------------------------------------------------- */}
            <section className="dashboard_item md:col-span-2 sm:col-span-full bg-light-fill dark:bg-dark-fill text-light-base dark:text-dark-base">
              <Exchange />
            </section>

            {/* ----------------------------------------------- */}
            {/* --------------------------------------------------- */}
          </main>
          {/* Trending Section */}
          <aside className="dashboard_item col-span-full xl:col-span-1 bg-light-fill dark:bg-dark-fill text-light-base dark:text-dark-base">
            <TopCoins currency={currency} />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
