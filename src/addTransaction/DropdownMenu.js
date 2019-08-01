import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Select from "react-dropdown-select";

const StyledSelect = styled(Select)`
  .react-dropdown-select-content {
    width: 270px;
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
