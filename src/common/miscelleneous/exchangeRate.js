export const convertExchangeRates = (sellPrice, buyPrice, amount) => {
  if (sellPrice === "" || buyPrice === "") {
    console.log("select both currencies");
  }

  const exchangeRate = Number(sellPrice) / Number(buyPrice);
  return (exchangeRate * amount).toFixed(2);
};
