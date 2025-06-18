import React from "react";
import Chart from 'react-apexcharts';
import { lineChartData } from "../../data/dummy";

const Linedata = [{
  name:'Graph A',
  data:lineChartData[0]
},{
  name:'Graph B',
  data:lineChartData[1]
},{
  name:'Graph A',
  data:lineChartData[2]
},]
const options = {
    chart: {
      type: 'line',
      zoom: { enabled: false },
    },
    xaxis: {
      type: 'datetime',
    },
    stroke: {
      curve: 'straight',
    },
  };
function LineChart() {
  return (
    <div className="text-black">
      <Chart
        options={options}
        series={Linedata}
        type="line"
        height={450}
        width={1000}
      />
    </div>
  );
}

export default LineChart;
