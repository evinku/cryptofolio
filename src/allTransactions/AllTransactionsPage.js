import React from "react";
import Title from "../components/Title";
import styled from "styled-components";
import PropTypes from "prop-types";
import ActionButton from "../components/ActionButton";
import TransactionCards from "./TransactionCards";

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
      <TransactionCards transactions={transactions} />
      <AddMoreButton onClick={handleClick} />
    </>
  );
}

AllTransactionsPage.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default AllTransactionsPage;
