import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const StyledDropdown = styled(Dropdown)`
  width: 100vw;

  .Dropdown-control {
    border: 1px solid white;
  }
`;

function DropdownMenu({ coinOptions, onDropdownChange }) {
  const [value, setValue] = React.useState();

  function handleChange(value) {
    onDropdownChange(value.value);
    setValue(value);
  }

  return (
    <StyledDropdown
      options={coinOptions}
      onChange={handleChange}
      value={value}
      placeholder="Select Coin"
    />
  );
}

DropdownMenu.propTypes = {
  coinOptions: PropTypes.array.isRequired,
  onDropdownChange: PropTypes.func.isRequired
};

export default DropdownMenu;
