import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "react-chartjs-2";

const CoinSelection = () => {
  const [coins, setCoins] = useState([]);
  const [selectedCoins, setSelectedCoins] = useState([]);
  const [marketCapData, setMarketCapData] = useState([]);

  useEffect(() => {
    async function getCoins() {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/list"
        );
        setCoins(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getCoins();
  }, []);

  useEffect(() => {
    async function getMarketCapData() {
      try {
        const dataPromises = selectedCoins.map(async (coinId) => {
          const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
            {
              params: {
                vs_currency: "usd",
                days: "max",
              },
            }
          );
          return {
            label: coinId,
            data: response.data.prices.map((item) => item[1]),
          };
        });
        setMarketCapData(await Promise.all(dataPromises));
      } catch (error) {
        console.error(error);
      }
    }
    if (selectedCoins.length > 0) {
      getMarketCapData();
    }
  }, [selectedCoins]);

  console.log(marketCapData);

  // useEffect(() => {
  //   const ctx = document.getElementById("market-cap-chart").getContext("2d");
  //   new Chart(ctx, {
  //     type: "line",
  //     data: {
  //       labels: Array.from(Array(marketCapData[0].data.length).keys()),
  //       datasets: marketCapData,
  //     },
  //   });
  // }, [marketCapData]);

  return (
    <div>
      <canvas id="market-cap-chart" width="400" height="200"></canvas>
      {coins.map((coin) => (
        <div key={coin.id}>
          <input
            type="checkbox"
            checked={selectedCoins.includes(coin.id)}
            onChange={() => {
              if (selectedCoins.includes(coin.id)) {
                setSelectedCoins(
                  selectedCoins.filter(
                    (selectedCoin) => selectedCoin !== coin.id
                  )
                );
              } else if (selectedCoins.length < 2) {
                setSelectedCoins([...selectedCoins, coin.id]);
              }
            }}
          />
          {coin.name}
        </div>
      ))}
    </div>
  );
};

export default CoinSelection;
