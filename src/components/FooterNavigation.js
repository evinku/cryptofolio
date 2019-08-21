import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import ActionButton from "./ActionButton";
import { Link } from "react-router-dom";

const PortfolioButton = styled(ActionButton).attrs({
  icon: "fas fa-chart-pie"
})`
  font-size: 35px;
  &:focus {
    outline: none;
  }
`;

const InsightsButton = styled(ActionButton).attrs({
  icon: "fas fa-stethoscope"
})`
  font-size: 35px;
  &:focus {
    outline: none;
  }
`;

const MarketsButton = styled(ActionButton).attrs({
  icon: "fas fa-search-dollar"
})`
  font-size: 35px;
  &:focus {
    outline: none;
  }
`;

const AllTransactionsButton = styled(ActionButton).attrs({
  icon: "far fa-list-alt"
})`
  font-size: 35px;
  &:focus {
    outline: none;
  }
`;

const AddButton = styled(ActionButton).attrs({
  icon: "fas fa-plus"
})`
  font-size: 40px;
  width: 48px;
  height: 48px;
  border: solid 1px;
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
  links: PropTypes.object.isRequired
};

export default FooterNavigation;
