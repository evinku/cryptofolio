import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Select from "react-dropdown-select";

const StyledSelect = styled(Select)`
  width: 250px;
  height: 30px;
  border-radius: 10px;
  font-size: 20px;
  padding: 0px;
  margin: 0px;

  .react-dropdown-select-input {
    width: 200px;
    height: 50px;
  }
  .react-dropdown-select-item {
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
    <StyledSelect
      options={coinOptions}
      values={[]}
      onChange={handleChange}
      placeholder="Select coin..."
    />
  );
}

DropdownMenu.propTypes = {
  coinOptions: PropTypes.array.isRequired,
  onDropdownChange: PropTypes.func.isRequired
};

export default DropdownMenu;
