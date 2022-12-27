import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //X axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import { compactNumbers } from "../../common/miscelleneous/compactNumbers";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const LineChart = ({ chartData, days, currency }) => {
  const data = {
    labels: chartData?.map((coin) => {
      let date = new Date(coin[0]);
      let time =
        date.getHours() > 12
          ? `${date.getHours() - 12} PM`
          : `${date.getHours()} AM`;
      return days === 1
        ? time
        : date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
    }),
    datasets: [
      {
        data: chartData.map((coin) => coin[1]),
        label: `Mkt.Cap (past ${days} days) in ${currency}`,
        borderColor: "#8A8AFF",
        tension: 0.1,
        pointColor: "aqua",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {},
      },
      y: {
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return "$" + compactNumbers(value);
          },
        },
      },
    },
    plugins: {
      datalabels: {
        display: false,
      },
    },
  };
  return <Line data={data} options={options} />;
};

export default LineChart;
