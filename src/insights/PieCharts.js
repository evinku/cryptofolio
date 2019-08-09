import React from "react";
import PieChart from "../portfolio/PieChart";
import styled from "styled-components";
import { getPieData } from "../utils/portfolioServices";
import portfolio from "./__mock__/portfolioData";
import { getPortfolios } from "../services";

const StyledHr = styled.hr`
  width: 80%;
`;

function PieCharts({ coinData }) {
  const [portfolios, setPortfolios] = React.useState([]);

  React.useEffect(() => {
    loadPortfolios();
  }, []);

  function loadPortfolios() {
    getPortfolios().then(result => setPortfolios(result));
  }

  return (
    portfolios &&
    portfolios.map(portfolio => (
      <div key={portfolio.email}>
        <div>{portfolio.name}</div>
        <div>{portfolio.email}</div>
        <div>{portfolio.date}</div>
        <PieChart pieData={getPieData(portfolio.data, coinData)} />
        <StyledHr />
      </div>
    ))
  );
}

export default PieCharts;
