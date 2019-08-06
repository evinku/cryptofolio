import React from "react";
import Chart from "react-apexcharts";

function PieChart() {
  const [pieData, setPieData] = React.useState({
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"]
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
