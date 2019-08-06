import React from "react";
import PropTypes from "prop-types";
import Title from "../components/Title";
import PortfolioCards from "./PortfolioCards";

function CryptofolioPage({ transactions, coinData }) {
  return (
    <>
      <Title size="L">Cryptofolio</Title>
      <PortfolioCards transactions={transactions} coinData={coinData} />
    </>
  );
}

CryptofolioPage.propTypes = {
  transactions: PropTypes.array.isRequired,
  coinData: PropTypes.object.isRequired
};

export default CryptofolioPage;
