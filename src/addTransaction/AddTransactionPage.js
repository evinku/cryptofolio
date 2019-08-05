import React from "react";
import Title from "../components/Title";
import Form from "./Form";
import PropTypes from "prop-types";

function AddTransactionPage({ history, onNewTransaction, coinData }) {
  // prepare for dropdown in Form
  const coinOptions = coinData.map(coin => ({
    label: (
      <>
        <img alt="" src={coin.image} height="20px" width="20px" /> {coin.name}
      </>
    ),
    value: coin.name
  }));

  return (
    <>
      <Title size="L">Add Transaction</Title>
      <Form
        onSubmit={onNewTransaction}
        coinOptions={coinOptions}
        history={history}
      />
    </>
  );
}

AddTransactionPage.propTypes = {
  onNewTransaction: PropTypes.func,
  coinOptions: PropTypes.array
};

export default AddTransactionPage;
