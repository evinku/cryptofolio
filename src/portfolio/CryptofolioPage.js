import React from "react";
import PropTypes from "prop-types";
import Title from "../components/Title";

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
      {Object.keys(total).map(key => (
        <div>
          {key}: {total[key]}
        </div>
      ))}
    </>
  );
}

CryptofolioPage.propTypes = {
  transactions: PropTypes.array.isRequired,
  coinData: PropTypes.array.isRequired
};

export default CryptofolioPage;
