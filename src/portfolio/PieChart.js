import React from "react";
import Chart from "react-apexcharts";
import PropTypes from "prop-types";

function PieChart({ pieData }) {
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

PieChart.propTypes = {
  pieData: PropTypes.object.isRequired
};

export default PieChart;
