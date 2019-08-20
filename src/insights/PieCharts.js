import React from "react";
import PropTypes from "prop-types";
import PieChart from "../components/PieChart";
import styled from "styled-components";
import { getPieData } from "../utils/portfolioServices";
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
    portfolios
      .filter(portfolio => portfolio.confirmed === true)
      .map(portfolio => (
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

PieCharts.propTypes = {
  coinData: PropTypes.object.isRequired
};

export default PieCharts;
