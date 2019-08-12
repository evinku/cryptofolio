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
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
`;

function Search({ coinData, onSearchChange }) {
  function handlechange(event) {
    const input = event.target.value.toLowerCase();

    if (input === "") {
      const filteredCoins = null;
      return onSearchChange(filteredCoins);
    }

    if (coinData.length > 0) {
      const filteredCoins = coinData.filter(coin =>
        coin.name.toLowerCase().startsWith(input)
      );
      onSearchChange(filteredCoins);
    }
  }

  return (
    <StyledDiv>
      <StyledInput onChange={handlechange} placeholder="Search coin" />
    </StyledDiv>
  );
}

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired
};

export default Search;
