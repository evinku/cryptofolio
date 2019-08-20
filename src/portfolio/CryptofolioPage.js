import React from "react";
import PropTypes from "prop-types";
import Title from "../components/Title";
import PortfolioCards from "./PortfolioCards";
import PieChart from "../components/PieChart";
import { getPieData } from "../utils/portfolioServices";

function CryptofolioPage({ totalQuantities, coinData }) {
  const pieData = getPieData(totalQuantities, coinData);
  return (
    <>
      <Title size="L">Cryptofolio</Title>
      <PieChart pieData={pieData} />
      <PortfolioCards totalQuantities={totalQuantities} coinData={coinData} />
    </>
  );
}

CryptofolioPage.propTypes = {
  totalQuantities: PropTypes.object.isRequired,
  coinData: PropTypes.object.isRequired
};

export default CryptofolioPage;
