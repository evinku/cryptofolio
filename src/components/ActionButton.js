import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const StyledDescription = styled.span`
  font-size: ${props => props.size};
  margin: 0;
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function ActionButton({ icon, active, onClick, className, type, size }) {
  return (
    <StyledGroup>
      <StyledButton className={className} active={active} onClick={onClick}>
        <i className={`fas ${icon}`} />
      </StyledButton>
      <StyledDescription size={size}>{type}</StyledDescription>
    </StyledGroup>
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
