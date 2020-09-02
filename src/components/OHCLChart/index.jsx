import React from "react";
import { arrayOf, shape } from "prop-types";

import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const OHCLChart = ({ dataPoints }) => {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    zoomEnabled: true,
    theme: "light2",
    exportFileName: "UpStocks Stocks History",
    title: {
      text: "UpStocks Stocks History",
    },
    axisX: {
      interval: 1,
      intervalType: "month",
      valueFormatString: "MMM",
    },
    axisY: {
      includeZero: false,
      prefix: "$",
      title: "Price (in USD)",
    },
    data: [
      {
        type: "ohlc",
        yValueFormatString: "$###0.00",
        xValueFormatString: "MMM YYYY",
        dataPoints,
      },
    ],
  };

  return (
    <div>
      <h1>Stocks Overview</h1>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};

OHCLChart.propTypes = {
  dataPoints: arrayOf(shape({})),
};

OHCLChart.defaultProps = {
  dataPoints: [],
};

export default OHCLChart;
