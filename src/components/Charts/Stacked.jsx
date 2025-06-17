import React from "react";
import Chart from "react-apexcharts";

function Stacked() {
  const data = [
    {
      name: "Budget",
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: "Expense",
      data: [13, 23, 20, 8, 13, 27],
    },
  ];

  const labels = [
    "01/01/2011 GMT",
    "01/02/2011 GMT",
    "01/03/2011 GMT",
    "01/04/2011 GMT",
    "01/05/2011 GMT",
    "01/06/2011 GMT",
  ];

  var options = {
    series: [
      {
        color: "#EE6D7A", // when you want to apply series colour directly here
        zIndex: 1, // this option only affects line and area charts
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true,
        tools: {
          download: false,
        },
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 2,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },

    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
      ],
    },
    fill: {
      opacity: 1,
    },
    legend: {
      show: true,
      position: "bottom",
      offsetY: 40,
      fontSize: "14px",
      fontWeight: 400,
      fontFamily: "Arial, sans-serif",
      labels: {
        colors: ["#FFFFFF", "#FFFFFF"], // color per series
        useSeriesColors: false, // set to true to use bar color
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
    },
  };
  return (
    <div className="text-white">
      <Chart
        height={360}
        width={320}
        type="bar"
        options={options}
        series={data}
        labels={labels}
      />
    </div>
  );
}

export default Stacked;
