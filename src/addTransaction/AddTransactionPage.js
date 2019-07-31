import React from "react";
import Title from "../components/Title";
import Form from "./Form";
import PropTypes from "prop-types";

function AddTransactionPage({ onNewTransaction, coinOptions }) {
  return (
    <>
      <Title size="L">Add Transaction</Title>
      <Form onSubmit={onNewTransaction} coinOptions={coinOptions} />
    </>
  );
}

AddTransactionPage.propTypes = {
  onNewTransaction: PropTypes.func,
  coinOptions: PropTypes.array
};

export default AddTransactionPage;
