import React from "react";
import Title from "../components/Title";
import styled from "styled-components";
import PropTypes from "prop-types";
import ActionButton from "../components/ActionButton";

const AddMoreButton = styled(ActionButton).attrs({
  icon: "fa-plus",
  type: "Add more"
})`
  font-size: 20px;
`;

function AllTransactionsPage({ history, transactions }) {
  function handleClick() {
    history.push("/add_transaction");
  }

  return (
    <>
      <Title size="L">All Transactions</Title>
      <div>{JSON.stringify(transactions)}</div>
      <AddMoreButton onClick={handleClick} />
    </>
  );
}

AllTransactionsPage.propTypes = {};

export default AllTransactionsPage;
