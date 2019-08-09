import React from "react";
import PieChart from "../portfolio/PieChart";
import styled from "styled-components";
import { getPieData } from "../utils/portfolioServices";
import portfolio from "./__mock__/portfolioData";

const StyledHr = styled.hr`
  width: 80%;
`;

function PieCharts({ coinData }) {
  return portfolio.map(data => (
    <div key={data.email}>
      <div>{data.name}</div>
      <div>{data.email}</div>
      <div>{data.date}</div>
      <PieChart pieData={getPieData(data.portfolioData, coinData)} />
      <StyledHr />
    </div>
  ));
}

export default PieCharts;
