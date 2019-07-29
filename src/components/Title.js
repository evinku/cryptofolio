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

const StyledTitle = styled.h1`
  margin: 0;
  font-size: ${props => getSize(props.size)};
  text-align: center;
`;

function Title({ size, children, className }) {
  return (
    <>
      <StyledTitle size={size} className={className}>
        {children}
      </StyledTitle>
      <hr />
    </>
  );
}

Title.propTypes = {
  size: PropTypes.oneOf(["S", "M", "L"]),
  className: PropTypes.string,
  children: PropTypes.node
};

export default Title;
