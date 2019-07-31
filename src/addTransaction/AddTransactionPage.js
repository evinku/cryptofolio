import React from "react";
import Title from "../components/Title";
import Form from "./Form";

function AddTransactionPage({ onNewTransaction }) {
  return (
    <>
      <Title size="L">Add Transaction</Title>
      <Form onSubmit={onNewTransaction} />
    </>
  );
}

export default AddTransactionPage;
