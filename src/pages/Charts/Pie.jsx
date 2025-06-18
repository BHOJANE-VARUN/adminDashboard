import React from "react";
import Chart from "react-apexcharts";

import { pieChartData } from "../../data/dummy";
import Header from "../../components/Header";
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
  return(
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pie" title="Project Cost Breakdown"  />
      <Chart options={options} series={series} type="pie" height={500} />
      </div>
  )
   
}

export default Pie;
