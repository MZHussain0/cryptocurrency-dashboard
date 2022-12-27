import React, { useState, useRef, useEffect } from "react";

function Dropdownn({ coins }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredOptions = coins.filter((coin) =>
    coin?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={ref} className={"relative"}>
      <button
        className="w-56 bg-slate-300 hover:bg-slate-400 font-semibold text-sm flex items-center
         justify-between shadow-lg focus:outline-none"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <p>
          {selectedOptions.length > 0
            ? selectedOptions.join(", ")
            : "Select Coins"}
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

      {isOpen && (
        <div className="absolute h-60 overflow-auto border border-black left-0 z-30 mt-2 py-2 w-full flex flex-col rounded-md bg-white shadow-xl">
          <input
            className={`bg-white p-2 outline-none `}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search coins..."
          />
          <div className="border-b-2 border-red-300 flex flex-col bg-slate-200">
            {selectedOptions.map((option) => (
              <label
                className={`w-full py-2 text-sm leading-5 text-left text-gray-500  focus:outline-none focus:bg-slate-400  transition duration-150 ease-in-out`}
                key={option}
              >
                <input
                  className="mx-4"
                  type="checkbox"
                  checked
                  onChange={(event) => {
                    if (!event.target.checked) {
                      setSelectedOptions(
                        selectedOptions.filter(
                          (selectedOption) => selectedOption !== option
                        )
                      );
                    }
                  }}
                />
                {option}
              </label>
            ))}
          </div>

          {filteredOptions.map((coin) => (
            <label
              className={`w-full py-2 text-l leading-5 text-left focus:outline-none focus:bg-slate-400 hover:bg-red-400 transition duration-150 ease-in-out ${
                selectedOptions.includes(coin?.name) ||
                selectedOptions.length >= 2
                  ? "text-gray-500 cursor-not-allowed"
                  : ""
              }`}
              key={coin?.id}
            >
              <input
                className="mx-4"
                type="checkbox"
                disabled={
                  selectedOptions.length >= 2 &&
                  !selectedOptions.includes(coin?.name)
                }
                checked={selectedOptions.includes(coin?.name)}
                onChange={(event) => {
                  if (event.target.checked) {
                    setSelectedOptions([...selectedOptions, coin?.name]);
                  } else {
                    setSelectedOptions(
                      selectedOptions.filter(
                        (selectedOption) => selectedOption !== coin?.name
                      )
                    );
                  }
                }}
                onClick={() => setSearchTerm("")}
              />
              {coin?.name}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdownn;
