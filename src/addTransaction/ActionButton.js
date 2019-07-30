import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  /*color: ${props => (props.active ? "goldenrod" : "black")};*/
  cursor: pointer;
  
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function ActionButton({ icon, active, onClick, className, type }) {
  return (
    <StyledGroup>
      <StyledButton className={className} active={active} onClick={onClick}>
        <i className={`fas ${icon}`} />
      </StyledButton>
      <h3>{type}</h3>
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
