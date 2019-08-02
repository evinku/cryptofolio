import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  margin: 5px;
  border: solid 1px;
  border-radius: 10px;
  font-size: 16px;
  padding: 5px;
  margin-bottom: 20px;
`;

function SearchTransactions({ onSearchTransactionsChange, transactions }) {
  function handlechange(event) {
    const input = event.target.value.toLowerCase();

    if (input === "") {
      const filteredTransactions = null;
      return onSearchTransactionsChange(filteredTransactions);
    }

    if (transactions.length > 0) {
      const filteredTransactions = transactions.filter(transaction =>
        transaction.coin.toLowerCase().startsWith(input)
      );
      onSearchTransactionsChange(filteredTransactions);
    }
  }

  return (
    <StyledDiv>
      <StyledInput
        onChange={handlechange}
        placeholder="Search transactions..."
      />
    </StyledDiv>
  );
}

SearchTransactions.propTypes = {
  onSearchTransactionsChange: PropTypes.func.isRequired
};

export default SearchTransactions;
