import React from 'react';
import Chart from 'react-apexcharts';
import { barChartData } from '../../data/dummy';


const Bar = () => {
  const series = [
    {
      name: 'Gold',
      data: barChartData[0],
    },
    {
      name: 'Silver',
      data: barChartData[1],
    },
    {
      name: 'Bronze',
      data: barChartData[2],
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      stacked: false,
    },
    xaxis: {
      type: 'category',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Olympic Medals by Country',
      align: 'left',
    },
  };

  return <Chart options={options} series={series} type="bar" height={500} />;
};

export default Bar;
