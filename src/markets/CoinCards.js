import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import numeral from "numeral";
import CoinCardHeadlines from "./CoinCardHeadlines";

const StyledSection = styled.section`
  margin: 5px;
`;

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 30px 4fr 3fr 3fr;
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 3px;
`;

const StyledGroupImage = styled.div`
  display: flex;
  align-items: center;
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledSpan = styled.span`
  color: ${props => props.color};
`;

function CoinCards({ coinData }) {
  function renderCoinCard(coinData) {
    return (
      <div key={coinData.id}>
        <StyledCard>
          <StyledGroup>{coinData.market_cap_rank}</StyledGroup>
          <StyledGroupImage>
            <StyledImg alt={coinData.name} src={coinData.image} />
            <span>{coinData.name}</span>
          </StyledGroupImage>
          <StyledGroup>
            <span>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "USD"
              }).format(coinData.current_price)}
            </span>
            <StyledSpan
              color={
                coinData.price_change_percentage_24h.toString().startsWith("-")
                  ? "#F5A099"
                  : "#A8D7B6"
              }
            >
              {Math.round(coinData.price_change_percentage_24h * 100) / 100} %
            </StyledSpan>
          </StyledGroup>
          <StyledGroup>
            <span>{numeral(coinData.market_cap).format("($ 0.00 a)")}</span>
            <StyledSpan
              color={
                coinData.market_cap_change_percentage_24h
                  .toString()
                  .startsWith("-")
                  ? "#F5A099"
                  : "#A8D7B6"
              }
            >
              {Math.round(coinData.market_cap_change_percentage_24h * 100) /
                100}{" "}
              %
            </StyledSpan>
          </StyledGroup>
        </StyledCard>
        <hr />
      </div>
    );
  }

  return (
    <StyledSection>
      <CoinCardHeadlines />
      {coinData.length === 0 && <div>Loading...</div>}
      {coinData && coinData.map(renderCoinCard)}
    </StyledSection>
  );
}

CoinCards.propTypes = {
  coinData: PropTypes.array.isRequired
};

export default CoinCards;
