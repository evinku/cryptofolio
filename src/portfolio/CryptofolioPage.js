import React from "react";
import PropTypes from "prop-types";
import Title from "../components/Title";
import PortfolioCards from "./PortfolioCards";
import PieChart from "./PieChart";

function CryptofolioPage({ transactions, coinData }) {
  const total = transactions.reduce((acc, transaction) => {
    const { coin, type, quantity } = transaction;
    const previousQuantity = acc[coin] || 0;
    return {
      ...acc,
      [coin]: previousQuantity + quantity * (type === "buy" ? 1 : -1)
    };
  }, {});

  return (
    <>
      <Title size="L">Cryptofolio</Title>
      <PieChart total={total} coinData={coinData} />
      <PortfolioCards total={total} coinData={coinData} />
    </>
  );
}

CryptofolioPage.propTypes = {
  transactions: PropTypes.array.isRequired,
  coinData: PropTypes.object.isRequired
};

export default CryptofolioPage;
