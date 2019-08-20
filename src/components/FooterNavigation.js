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
  const [active, setActive] = React.useState("");

  function handlePortfolioClick() {
    setActive("portfolio");
  }
  function handleInsightsClick() {
    setActive("insights");
  }
  function handleMarketsClick() {
    setActive("markets");
  }
  function handleTransactionsClick() {
    setActive("transactions");
  }
  function handleAddClick() {
    setActive("add");
  }

  return (
    <StyledFooter>
      <FooterLink to={links.toCryptofolio}>
        <PortfolioButton
          active={active === "portfolio"}
          onClick={handlePortfolioClick}
        />
      </FooterLink>
      <FooterLink to={links.toInsights}>
        <InsightsButton
          active={active === "insights"}
          onClick={handleInsightsClick}
        />
      </FooterLink>
      <FooterLink to={links.toMarkets}>
        <MarketsButton
          active={active === "markets"}
          onClick={handleMarketsClick}
        />
      </FooterLink>
      <FooterLink to={links.toAllTransactions}>
        <AllTransactionsButton
          active={active === "transactions"}
          onClick={handleTransactionsClick}
        />
      </FooterLink>
      <StyledDiv>
        <FooterLink to={links.toAddTransaction}>
          <AddButton active={active === "add"} onClick={handleAddClick} />
        </FooterLink>
      </StyledDiv>
    </StyledFooter>
  );
}

FooterNavigation.propTypes = {
  links: PropTypes.object
};

export default FooterNavigation;
