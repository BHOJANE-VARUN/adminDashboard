import Header from "../../components/Header";
import React from "react";
import Chart from "react-apexcharts";
import { lineChartData } from "../../data/dummy";

const Linedata = [
  {
    name: "Graph A",
    data: lineChartData[0],
  },
  {
    name: "Graph B",
    data: lineChartData[1],
  },
  {
    name: "Graph C",
    data: lineChartData[2],
  },
];
const options = {
  chart: {
    type: "area",
    height: 350,
    stacked: true,
    events: {
      selection: function (chart, e) {
        console.log(new Date(e.xaxis.min));
      },
    },
  },
  colors: ["#008FFB", "#00E396", "#CED4DC"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "monotoneCubic",
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.8,
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
  },
  xaxis: {
    type: "datetime",
  },
};

function Area() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category={"Chart"} title={"Line Chart"} />
      <div className="text-black">
        <Chart
          options={options}
          series={Linedata}
          type="line"
          height={450}
          width={1000}
        />
      </div>
    </div>
  );
}

export default Area;
