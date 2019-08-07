import React from "react";
import Chart from "react-apexcharts";

function PieChart() {
  const [pieData, setPieData] = React.useState({
    options: {
      labels: [
        "Bitcoin",
        "Ethereum",
        "XRP",
        "Stellar",
        "Siacoin",
        "Digibyte",
        "Peercoin",
        "Test",
        "Test2"
      ]
    },
    series: [44, 55, 41, 17, 15, 55, 41, 17, 15]
  });

  return (
    <div>
      <Chart
        options={pieData.options}
        series={pieData.series}
        type="pie"
        width="380"
      />
    </div>
  );
}

export default PieChart;
