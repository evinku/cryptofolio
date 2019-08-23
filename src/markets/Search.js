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

function Search({ onFilterChange }) {
  function handleChange(event) {
    const value = event.target.value.toLowerCase();
    onFilterChange(value);
  }

  return (
    <StyledDiv>
      <StyledInput
        data-cy="input-search"
        onChange={handleChange}
        placeholder="Search coin"
      />
    </StyledDiv>
  );
}

Search.propTypes = {
  onFilterChange: PropTypes.func.isRequired
};

export default Search;
