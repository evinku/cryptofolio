import React from "react";
import Chart from "react-apexcharts";
import PropTypes from "prop-types";
import styled from "styled-components";
import Moment from "react-moment";

const StyledPie = styled.div`
  border: solid 0.5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 74px -54px rgba(0, 0, 0, 0.64);
`;

const StyledDate = styled.span`
  font-size: 12px;
  padding: 4px;
`;

function PieChart({ pieData, date }) {
  if (Object.keys(pieData).length === 0) {
    return null;
  }
  return (
    <StyledPie>
      <Chart
        options={pieData.options}
        series={pieData.series}
        type="pie"
        width="355"
        height="250"
      />
      {date && (
        <StyledDate>
          <Moment format="YYYY/MM/DD, h:mm:ss a">{date}</Moment>
        </StyledDate>
      )}
    </StyledPie>
  );
}

PieChart.propTypes = {
  pieData: PropTypes.object.isRequired,
  date: PropTypes.string
};

export default PieChart;
