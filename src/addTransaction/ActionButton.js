import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  color: ${props => (props.active ? "goldenrod" : "black")};
  font-size: 20px;
  cursor: pointer;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`;

function ActionButton({ icon, active, onClick, className }) {
  return (
    <StyledButton className={className} active={active} onClick={onClick}>
      <i className={`fas ${icon}`} />
    </StyledButton>
  );
}

ActionButton.propTypes = {
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};

ActionButton.defaultProps = {
  active: false
};

export default ActionButton;
