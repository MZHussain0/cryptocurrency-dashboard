import React from "react";

import { portfolioDetails } from "./Data";
import PieChart from "./PieChart";

const Portfolio = () => {
  // Total value of the portfolio
  const totalValue = portfolioDetails
    .map((d) => d.amount)
    .reduce((sum, amount) => sum + amount, 0);

  const labels = portfolioDetails.map((p) => p.name);
  const data = portfolioDetails.map((p) => p.amount);

  return (
    <div>
      <div className="flex items-center justify-between pt-4 px-8">
        <h1 className="font-bold">Portfolio</h1>
        <p className="font-semibold text-slate-500 text-sm">
          Total value :{" "}
          <span className="font-semibold text-black text-base">
            ${totalValue}
          </span>{" "}
        </p>
      </div>
      <PieChart labels={labels} data={data} />
    </div>
  );
};

export default Portfolio;
