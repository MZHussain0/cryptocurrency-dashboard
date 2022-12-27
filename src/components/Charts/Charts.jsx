import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchAsyncHistoricData,
  getAllChartData,
} from "../../common/cryptoSlice/chartSlice";
import { getAllCoins } from "../../common/cryptoSlice/coinsSlice";
import { filteredData } from "../../common/miscelleneous/filterData";
import DropDown from "../Exchange/DropDown";
import Dropdownn from "../sample/test";
import BarChart from "./BarChart";
import ButtonGroup from "./ButtonGroup";
import ChartType from "./ChartType";
import { chartDays } from "./days";
import LineChart from "./LineChart";
import MultiCoinSelectionBtn from "./MultiCoinSelectionBtn";

const Charts = () => {
  const dispatch = useDispatch();
  const [days, setDays] = useState(1);
  const [selectedValue, setSelectedValue] = useState(null);

  const currency = useSelector((state) => state.currencyFilter.currency);
  const coinId = useSelector((state) => state.currencyFilter.id);

  useEffect(() => {
    dispatch(fetchAsyncHistoricData({ coinId, currency, days }));
  }, [currency, coinId, days]);

  const mktData = useSelector(getAllChartData);
  const coins = useSelector(getAllCoins);

  const chartData = mktData.market_caps?.length
    ? filteredData(mktData.market_caps)
    : "";

  return (
    <Fragment>
      {chartData && (
        <Fragment>
          <div className="flex flex-wrap justify-around p-4">
            <ButtonGroup
              chartDays={chartDays}
              setDays={setDays}
              setSelectedValue={setSelectedValue}
              selectedValue={selectedValue}
            />

            <div className=" flex gap-1">
              {/* <MultiCoinSelectionBtn coins={coins} /> */}
              <Dropdownn coins={coins} />
              <ChartType />
            </div>
          </div>

          <div className="h-[250px]">
            <LineChart chartData={chartData} days={days} currency={currency} />
            {/* <BarChart chartData={chartData} days={days} currency={currency} /> */}
          </div>

          <div className=""></div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Charts;
