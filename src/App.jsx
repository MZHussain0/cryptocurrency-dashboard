import { Fragment } from "react";
import Header from "./components/Header/Header";

function App() {
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
            {/* left top currency and search section */}
            <div className="grid grid-cols-6 min-h-[3rem] gap-x-2 gap-y-3 ">
              <section className=" bg-white col-span-1 rounded-lg shadow-xl">
                USD
              </section>
              <section className="bg-white col-span-5 rounded-lg shadow-xl ">
                Search
              </section>
            </div>
            {/* Middle chart section */}
            <div className="grid grid-cols-1 py-3">
              <section className="bg-white col-span-1 rounded-lg shadow-xl min-h-[3rem]">
                charts
              </section>
            </div>
            {/* portfolio and exchange section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3">
              <section className="bg-white rounded-lg shadow-xl min-h-[3rem]">
                Portfolio
              </section>
              <section className="bg-white rounded-lg shadow-xl min-h-[3rem]">
                exchange
              </section>
            </div>
          </section>
          {/* Trending Section */}
          <section className="bg-white text-black rounded-lg shadow-xl min-h-[3rem] col-span-1">
            Trending
          </section>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
