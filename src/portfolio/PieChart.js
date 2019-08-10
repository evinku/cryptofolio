import React from "react";
import Chart from "react-apexcharts";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPie = styled.div`
  border: solid 0.5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 74px -54px rgba(0, 0, 0, 0.64);
`;

function PieChart({ pieData }) {
  return (
    <StyledPie>
      <Chart
        options={pieData.options}
        series={pieData.series}
        type="pie"
        width="355"
      />
    </StyledPie>
  );
}

PieChart.propTypes = {
  pieData: PropTypes.object.isRequired
};

export default PieChart;
