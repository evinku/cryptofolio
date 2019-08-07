import React from "react";
import Title from "../components/Title";
import styled from "styled-components";
import PropTypes from "prop-types";
import ActionButton from "../components/ActionButton";
import TransactionCards from "./TransactionCards";
import SearchTransactions from "./SearchTransactions";

const AddMoreButton = styled(ActionButton).attrs({
  icon: "fa-plus",
  type: "Add more",
  size: "20px"
})``;

function AllTransactionsPage({ history, transactions }) {
  const [filteredTransactions, setFilteredTransactions] = React.useState(null);

  function handleSearchTransactionsChange(filteredTransactions) {
    setFilteredTransactions(filteredTransactions);
  }

  function handleClick() {
    history.push("/add-transaction");
  }

  //prepare for dropdown in SearchTransactions
  const transactionOptions = [
    ...transactions
      .map(transaction => ({
        label: transaction.coin,
        value: transaction.coin
      }))
      .filter(
        (option, index, self) =>
          index ===
          self.findIndex(
            t => t.label === option.label && t.value === option.value
          )
      ),
    {
      label: "All Transactions",
      value: null
    }
  ];

  return (
    <>
      <Title size="L">All Transactions</Title>
      <SearchTransactions
        transactionOptions={transactionOptions}
        transactions={transactions}
        onSearchTransactionsChange={handleSearchTransactionsChange}
      />
      <TransactionCards
        transactions={
          filteredTransactions === null ? transactions : filteredTransactions
        }
      />
      <AddMoreButton onClick={handleClick} />
    </>
  );
}

AllTransactionsPage.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default AllTransactionsPage;
