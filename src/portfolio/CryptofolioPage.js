import React from "react";
import PropTypes from "prop-types";
import Title from "../components/Title";
import PortfolioCards from "./PortfolioCards";
import PieChart from "./PieChart";

function CryptofolioPage({ totalQuantities, coinData, pieData }) {
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
  coinData: PropTypes.object.isRequired,
  pieData: PropTypes.object.isRequired
};

export default CryptofolioPage;
