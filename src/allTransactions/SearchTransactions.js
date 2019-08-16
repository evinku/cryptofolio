import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const StyledDropdown = styled(Dropdown)`
  width: 100vw;
  height: 30px;
  font-size: 15px;
  padding: 20px;
  padding-left: 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

function SearchTransactions({
  onFilterTransactionsChange,
  transactionOptions
}) {
  const [value, setValue] = React.useState();

  function handleChange(value) {
    onFilterTransactionsChange(value.value);
    setValue(value);
  }

  return (
    <StyledDiv>
      <StyledDropdown
        options={transactionOptions}
        onChange={handleChange}
        value={value}
        placeholder="Filter transactions"
      />
    </StyledDiv>
  );
}

SearchTransactions.propTypes = {
  onFilterTransactionsChange: PropTypes.func.isRequired,
  transactionOptions: PropTypes.array.isRequired
};

export default SearchTransactions;
