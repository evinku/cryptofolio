import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function getSize(size) {
  const sizes = {
    S: "18px",
    M: "20px",
    L: "30px"
  };
  return sizes[size] || sizes.M;
}

const StyledDiv = styled.div`
  background: linear-gradient(
    180deg,
    rgba(2, 48, 101, 1) 20%,
    rgba(44, 99, 144, 1) 84%
  );
  margin-bottom: 30px;
  padding: 20px;
`;

const StyledTitle = styled.h1`
  margin: 0;
  font-size: ${props => getSize(props.size)};
  text-align: center;
  color: white;
`;

function Title({ size, children, className, ...props }) {
  return (
    <StyledDiv>
      <StyledTitle size={size} className={className} {...props}>
        {children}
      </StyledTitle>
    </StyledDiv>
  );
}

Title.propTypes = {
  size: PropTypes.oneOf(["S", "M", "L"]),
  className: PropTypes.string,
  children: PropTypes.node
};

export default Title;
