import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import ActionButton from "./ActionButton";

const PortfolioButton = styled(ActionButton).attrs({
  icon: "fa-chart-pie",
  type: "Portfolio",
  size: "16px"
})`
  font-size: 40px;
  color: green;
`;

const InsightsButton = styled(ActionButton).attrs({
  icon: "fa-stethoscope",
  type: "Insights",
  size: "16px"
})`
  font-size: 40px;
  color: green;
`;

const MarketsButton = styled(ActionButton).attrs({
  icon: "fa-search-dollar",
  type: "Markets",
  size: "16px"
})`
  font-size: 40px;
  color: green;
`;

const NewsButton = styled(ActionButton).attrs({
  icon: "fa-rss",
  type: "News",
  size: "16px"
})`
  font-size: 40px;
  color: green;
`;

const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border: solid 1px;
`;

function FooterNavigation({ links }) {
  return (
    <StyledFooter>
      <PortfolioButton />
      <InsightsButton />
      <MarketsButton />
      <NewsButton />
    </StyledFooter>
  );
}

FooterNavigation.propTypes = {
  links: PropTypes.array
};

export default FooterNavigation;
