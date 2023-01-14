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
    <div className="min-h-screen max-w-screen-2xl bg-light-fill dark:bg-dark-fill text-light-base dark:text-dark-base">
      {/* Header Component */}
      <header className="">
        <Header />
      </header>

      {/* Main content Area */}
      <div className="p-4">
        <div className=" bg-light-muted dark:bg-dark-muted duration-100 rounded p-4  m-auto grid grid-cols-1 lg:grid-cols-4 gap-4 ">
          <main className="grid gap-4 lg:col-span-3">
            {/* Currency Selector */}
            {/* ----------------------------------------------- */}
            <div className="grid gap-4 grid-cols-9 grid-rows-1">
              <section className="col-span-2 text-light-base dark:text-dark-base text-sm sm:text-base ">
                <Currency />
              </section>
              {/* ----------------------------------------------- */}
              {/* SearchBar Section */}
              <section className="col-span-7 bg-light-fill dark:bg-dark-fill text-light-base dark:text-dark-base">
                <SearchBar currency={currency} symbol={symbol} />
              </section>
            </div>
            {/* ----------------------------------------------- */}

            {/*CHART SECTION */}
            <section className="bg-light-fill dark:bg-dark-fill text-light-base dark:text-dark-base">
              <Charts currency={currency} symbol={symbol} />
            </section>
            {/* ------------------------------------------------- */}

            {/* Portfolio Section */}
            <div className="grid md:grid-cols-2 gap-4">
              <section className="md:col-span-1 bg-light-fill dark:bg-dark-fill text-light-base dark:text-dark-base">
                <Portfolio />
              </section>
              {/* Exchange Section */}
              {/* ------------------------------------------------- */}
              <section className="md:col-span-1 bg-light-fill dark:bg-dark-fill text-light-base dark:text-dark-base">
                <Exchange />
              </section>
            </div>

            {/* ----------------------------------------------- */}
            {/* --------------------------------------------------- */}
          </main>
          {/* Trending Section */}
          <aside className="lg:col-span-1 bg-light-fill dark:bg-dark-fill text-light-base dark:text-dark-base">
            <TopCoins currency={currency} />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
