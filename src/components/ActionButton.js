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
  color: ${props => (props.active ? "rgb(57, 99, 140)" : "black")};
  &:disabled {
    color: grey;
  }
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

function ActionButton({
  icon,
  active,
  onClick,
  className,
  description,
  descriptionSize,
  descriptionColor,
  ...props
}) {
  return (
    <StyledGroup>
      <StyledButton
        className={className}
        active={active}
        onClick={onClick}
        {...props}
      >
        <i className={`fas ${icon}`} />
      </StyledButton>
      <StyledDescription size={descriptionSize} color={descriptionColor}>
        {description}
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
