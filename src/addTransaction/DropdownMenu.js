import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Select from "react-dropdown-select";

const StyledDiv = styled.div`
  background-color: white;
  font-size: 20px;
  padding: 0px;
  box-shadow: -4px 10px 24px -16px rgba(0, 0, 0, 1);
`;

const StyledSelect = styled(Select)`
  .react-dropdown-select {
  }

  .react-dropdown-select-content {
    height: 35px;
    padding: 3px;
    min-width: 100px;
  }

  .react-dropdown-select-item {
    &:hover {
      background: lightgrey;
    }
  }
`;

function DropdownMenu({ coinOptions, onDropdownChange }) {
  function handleChange(values) {
    if (values.length > 0) {
      const dropdownValue = values[0].value;
      onDropdownChange(dropdownValue);
    }
  }

  return (
    <StyledDiv>
      <StyledSelect
        options={coinOptions}
        values={[]}
        onChange={handleChange}
        placeholder="Select coin"
      />
    </StyledDiv>
  );
}

DropdownMenu.propTypes = {
  coinOptions: PropTypes.array.isRequired,
  onDropdownChange: PropTypes.func.isRequired
};

export default DropdownMenu;
