import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Select from "react-dropdown-select";

const StyledSelect = styled(Select)`
  .react-dropdown-select-content {
    width: 270px;
  }

  .react-dropdown-select-item {
    &:hover {
      background: lightgray;
    }
  }
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

function SearchTransactions({
  onSearchTransactionsChange,
  transactions,
  transactionOptions
}) {
  function handleChange(values) {
    let dropdownValue = null;

    if (values.length > 0) {
      dropdownValue = values[0].value;
    }

    if (dropdownValue === null) {
      const filteredTransactions = null;
      return onSearchTransactionsChange(filteredTransactions);
    }

    if (transactions.length > 0) {
      const filteredTransactions = transactions.filter(
        transaction => transaction.coin === dropdownValue
      );
      onSearchTransactionsChange(filteredTransactions);
    }
  }

  return (
    <StyledDiv>
      <StyledSelect
        options={transactionOptions}
        values={[]}
        onChange={handleChange}
        placeholder="Filter coin..."
      />
    </StyledDiv>
  );
}

SearchTransactions.propTypes = {
  onSearchTransactionsChange: PropTypes.func.isRequired
};

export default SearchTransactions;
