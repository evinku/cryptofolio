import React from "react";
import PieChart from "../portfolio/PieChart";
import styled from "styled-components";
import { getPieData } from "../utils/portfolioServices";
import portfolio from "./__mock__/portfolioData";
import { getPortfolios } from "../services";

const StyledName = styled.h2`
  text-align: center;
  margin-bottom: 1px;
  margin-top: 40px;
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
      <div key={portfolio._id}>
        <StyledName>{portfolio.name}`s Portfolio</StyledName>
        <PieChart
          pieData={getPieData(portfolio.data, coinData)}
          date={portfolio.date}
        />
      </div>
    ))
  );
}

export default PieCharts;
