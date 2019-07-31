import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Select from "react-dropdown-select";

const StyledSelect = styled(Select)`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  padding: 5px;
`;

function DropdownMenu({ coinOptions }) {
  const coinOptions = [
    { label: "Bitcoin", value: "Bi" },
    { label: "Bitcoi", value: "Bit" }
  ];

  return <StyledSelect options={coinOptions} values={[]} />;
}

DropdownMenu.propTypes = {};

export default DropdownMenu;
