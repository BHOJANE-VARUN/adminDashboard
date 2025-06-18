import React from "react";
import Chart from "react-apexcharts";

import { pieChartData } from "../../data/dummy";
function Pie() {

  const series = pieChartData.map((item) => item.y);
  const labels = pieChartData.map((item) => item.x);

  const options = {
    labels,
    legend: {
      position: 'bottom',
    },
    dataLabels: {
      formatter: (_, { seriesIndex }) => pieChartData[seriesIndex].text,
    },
    chart: {
      type: 'pie',
    },
  };

  return <Chart options={options} series={series} type="pie" height={500} />;;
}

export default Pie;
