import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  margin: 3px;
  margin-bottom: 30px;
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px;
  border-radius: 5px;
  padding: 5px;
`;

function MarketDataCard({ marketData }) {
  return (
    <StyledSection>
      <StyledGroup>
        <span>Total Marketcap</span>
        <span>${marketData && marketData.total_market_cap_usd}</span>
        <span>
          {marketData && marketData.market_cap_change_percentage_24h_usd}%
        </span>
      </StyledGroup>
      <StyledGroup>
        <span>24h Volume</span>
        <span>${marketData && marketData.total_volume_usd}</span>
      </StyledGroup>
      <StyledGroup>
        <span>Bitcoin Dominanz</span>
        <span>{marketData && marketData.market_cap_percentage_btc}%</span>
      </StyledGroup>
    </StyledSection>
  );
}

MarketDataCard.propTypes = {
  marketData: PropTypes.object.isRequired
};

export default MarketDataCard;
