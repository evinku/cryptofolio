import React from "react";
import Title from "../components/Title";
import Form from "./Form";

function AddTransactionPage({ onClick }) {
  return (
    <>
      <Title size="L">Add Transaction</Title>
      <Form onClick={onClick} />
    </>
  );
}

export default AddTransactionPage;
