import React from "react";
import PropTypes from "prop-types";
import Title from "../components/Title";
import PortfolioCards from "./PortfolioCards";
import PieChart from "./PieChart";

function CryptofolioPage({ total, coinData }) {
  return (
    <>
      <Title size="L">Cryptofolio</Title>
      <PieChart total={total} coinData={coinData} />
      <PortfolioCards total={total} coinData={coinData} />
    </>
  );
}

CryptofolioPage.propTypes = {
  total: PropTypes.object.isRequired,
  coinData: PropTypes.object.isRequired
};

export default CryptofolioPage;
