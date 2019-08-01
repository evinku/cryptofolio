import React from "react";
import Title from "../components/Title";
import Form from "./Form";
import PropTypes from "prop-types";

function AddTransactionPage({ history, onNewTransaction, coinOptions }) {
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
