import React from "react";
import Chart from "react-apexcharts";
import { barChartData } from "../../data/dummy";
import Header from "../../components/Header";

const Bar = () => {
  const series = [
    {
      name: "Gold",
      data: barChartData[0],
    },
    {
      name: "Silver",
      data: barChartData[1],
    },
    {
      name: "Bronze",
      data: barChartData[2],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      stacked: false,
    },
    xaxis: {
      type: "category",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Olympic Medals by Country",
      align: "left",
    },
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Bar" title="Olympic Medal Counts - RIO" />
      <Chart options={options} series={series} type="bar" height={500} />
    </div>
  );
};

export default Bar;
