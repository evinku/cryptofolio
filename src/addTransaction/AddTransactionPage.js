import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
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
