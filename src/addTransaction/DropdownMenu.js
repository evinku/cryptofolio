import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Select from "react-dropdown-select";

const StyledSelect = styled(Select)`
  height: 30px;
  font-size: 15px;
  padding: 0px;
  margin: 0px;

  .react-dropdown-select-content {
    display: flex;
    align-items: center;
    width: 270px;
    font-size: 15px;
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
