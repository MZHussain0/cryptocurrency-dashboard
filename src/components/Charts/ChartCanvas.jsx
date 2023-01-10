import React from "react";
import { Line, Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const ChartCanvas = ({ data, options }) => {
  const chartType = useSelector((state) => state.globalStore.chartType);

  return (
    <div className="h-[250px]">
      {chartType === "Bar Chart" ? (
        <Bar data={data} options={options} />
      ) : (
        <Line data={data} options={options} />
      )}
    </div>
  );
};

export default ChartCanvas;
