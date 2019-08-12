import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: rgb(240, 240, 240);
`;

const StyledDescription = styled.span`
  font-size: ${props => props.size};
  color: ${props => props.color};
  margin: 0;
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function ActionButton({ icon, active, onClick, className, type, size, color }) {
  return (
    <StyledGroup>
      <StyledButton className={className} active={active} onClick={onClick}>
        <i className={`fas ${icon}`} />
      </StyledButton>
      <StyledDescription size={size} color={color}>
        {type}
      </StyledDescription>
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
