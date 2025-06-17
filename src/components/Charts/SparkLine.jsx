import React from 'react'

// function SparkLine({ id, height, width, color, data, type, currentColor }) {
//   return (
//     <div>SparkLine</div>
//   )
// }

// export default SparkLine
// import React from 'react';
import Chart from 'react-apexcharts';
import { SparklineAreaData } from '../../data/dummy';

const Sparkline = () => {

  const options = {
    chart: {
      type: 'line',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    tooltip: {
    custom: function({ series, seriesIndex, dataPointIndex, w }) {
      const x = w.globals.labels[dataPointIndex];
      const y = series[seriesIndex][dataPointIndex];
      return `<div  style="padding: 6px 10px;">at ${x} data is ${y}</div>`;
    },
  },
    colors: ['#00BFFF'],
  };

 const series =  [{
    data: SparklineAreaData,
    }, 
  ]

  return (
    <div className='text-black'>
      <Chart options={options} series={series} type="line" height={80} width={200} />
    </div>
  );
};

export default Sparkline;
