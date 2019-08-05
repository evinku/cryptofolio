import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import ActionButton from "./ActionButton";
import { Link } from "react-router-dom";

const PortfolioButton = styled(ActionButton).attrs({
  icon: "fa-chart-pie",
  type: "",
  size: "16px"
})`
  font-size: 35px;
  width: 35px;
  height: 35px;
  background-color: white;
`;

const InsightsButton = styled(ActionButton).attrs({
  icon: "fa-stethoscope",
  type: "",
  size: "16px"
})`
  font-size: 35px;
  width: 35px;
  height: 35px;
  background-color: white;
`;

const MarketsButton = styled(ActionButton).attrs({
  icon: "fa-search-dollar",
  type: "",
  size: "16px"
})`
  font-size: 35px;
  width: 35px;
  height: 35px;
  background-color: white;
`;

const NewsButton = styled(ActionButton).attrs({
  icon: "fa-rss",
  type: "",
  size: "16px"
})`
  font-size: 35px;
  width: 35px;
  height: 35px;
  background-color: white;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -25px;
`;

const AddButton = styled(ActionButton).attrs({
  icon: "fa-plus",
  type: "",
  size: "16px"
})`
  font-size: 40px;
  border: solid 1px;
  background-color: white;
`;

const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-top: solid 1px;
  position: relative;
  align-items: center;
  justify-items: center;
`;

function FooterNavigation({ links }) {
  return (
    <StyledFooter>
      <PortfolioButton />
      <InsightsButton />
      <MarketsButton />
      <NewsButton />
      <StyledDiv>
        <AddButton />
      </StyledDiv>
    </StyledFooter>
  );
}

FooterNavigation.propTypes = {
  links: PropTypes.array
};

export default FooterNavigation;
