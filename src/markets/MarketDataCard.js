import React from "react";
import styled from "styled-components";
import numeral from "numeral";
import { getMarketData } from "../utils/coinGecko";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  margin: 5px;
  margin-bottom: 20px;
  padding: 9px;
  box-shadow: 0px 6px 29px -25px rgba(0, 0, 0, 0.64);
  border-radius: 10px;
  border: solid 0.5px rgba(0, 0, 0, 0.5);
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
`;

const StyledData = styled.span`
  font-size: 20px;
`;

const StyledTitle = styled.span`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.64);
  margin-bottom: 5px;
`;

function MarketDataCard() {
  const [marketData, setMarketData] = React.useState({});

  React.useEffect(() => {
    getMarketData().then(marketData => setMarketData(marketData));
  }, []);

  return (
    <StyledSection>
      <StyledGroup>
        <StyledTitle>Total Marketcap</StyledTitle>
        <StyledData>
          {numeral(marketData.total_market_cap_usd).format("($ 0.00 a)")}
        </StyledData>
      </StyledGroup>
      <StyledGroup>
        <StyledTitle>24h Volume</StyledTitle>
        <StyledData>
          {numeral(marketData.total_volume_usd).format("($ 0.00 a)")}
        </StyledData>
      </StyledGroup>
      <StyledGroup>
        <StyledTitle>₿-Dominanz</StyledTitle>
        <StyledData>{marketData.market_cap_percentage_btc}%</StyledData>
      </StyledGroup>
    </StyledSection>
  );
}

export default MarketDataCard;
