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
  &:focus {
    outline: none;
  }
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
  &:focus {
    outline: none;
  }
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
  &:focus {
    outline: none;
  }
`;

const AllTransactionsButton = styled(ActionButton).attrs({
  icon: "fa-align-justify",
  type: "",
  size: "16px"
})`
  font-size: 35px;
  width: 35px;
  height: 35px;
  background-color: white;
  &:focus {
    outline: none;
  }
`;

const AddButton = styled(ActionButton).attrs({
  icon: "fa-plus",
  type: "",
  size: "16px"
})`
  font-size: 40px;
  border: solid 1px;
  background-color: white;
  &:focus {
    outline: none;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -25px;
`;

const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-top: solid 1px;
  position: relative;
  align-items: center;
  justify-items: center;
`;

const FooterLink = styled(Link)`
  text-align: center;
  text-decoration: none;
`;

function FooterNavigation({ links }) {
  return (
    <StyledFooter>
      <FooterLink to={links.toCryptofolio}>
        <PortfolioButton />
      </FooterLink>
      <FooterLink to={links.toInsights}>
        <InsightsButton />
      </FooterLink>
      <FooterLink to={links.toMarkets}>
        <MarketsButton />
      </FooterLink>
      <FooterLink to={links.toAllTransactions}>
        <AllTransactionsButton />
      </FooterLink>
      <StyledDiv>
        <FooterLink to={links.toAddTransaction}>
          <AddButton />
        </FooterLink>
      </StyledDiv>
    </StyledFooter>
  );
}

FooterNavigation.propTypes = {
  links: PropTypes.object
};

export default FooterNavigation;