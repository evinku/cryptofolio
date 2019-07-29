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
  border-radius: 3px;
  font-size: 20px;
  padding: 3px;
  margin-bottom: 20px;
`;

function Search({ coinData }) {
  function handlechange() {
    return null;
  }

  return (
    <StyledDiv>
      <StyledInput onChange={handlechange} placeholder="Search coin..." />
    </StyledDiv>
  );
}

export default Search;
