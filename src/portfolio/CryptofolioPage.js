import React from "react";
import PropTypes from "prop-types";
import Title from "../components/Title";

function CryptofolioPage({ transactions }) {
  return (
    <>
      <Title size="L">Cryptofolio</Title>
    </>
  );
}

CryptofolioPage.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default CryptofolioPage;
