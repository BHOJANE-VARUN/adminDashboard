import React from "react";
import Header from "./../../components/Header";
import { financialChartData } from "../../data/dummy";
import Chart from "react-apexcharts"

function Financial() {
  const filterdata = financialChartData.map((item, index) => {
    return {
      x: item.x,
      y: [item.open, item.high, item.low, item.close],
    };
  });

  const [state, setState] = React.useState({
    series: [
      {
        data: filterdata,
      },
    ],
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "CandleStick Chart",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  });
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Financial" title="AAPLE Historical" />
      <Chart options={state.options} series={state.series} type="candlestick" height={350} />
    </div>
  );
}

export default Financial;
