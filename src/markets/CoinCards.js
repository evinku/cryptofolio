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
  grid-template-columns: 30px 4fr 2fr 2fr;
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 3px;
`;

const StyledGroupImage = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledRank = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  color: ${props => props.color};
`;

function CoinCards({ coinData, filteredCoins }) {
  function renderCoinCard(filteredCoin) {
    return (
      <div key={coinData[filteredCoin].id}>
        <StyledCard>
          <StyledRank>{coinData[filteredCoin].market_cap_rank}</StyledRank>
          <StyledGroupImage>
            <StyledImg
              alt={coinData[filteredCoin].name}
              src={coinData[filteredCoin].image}
            />
            <span>{coinData[filteredCoin].name}</span>
          </StyledGroupImage>
          <StyledGroup>
            <span>
              {new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "USD"
              }).format(coinData[filteredCoin].current_price)}
            </span>
            <StyledSpan
              color={
                coinData[filteredCoin].price_change_percentage_24h &&
                coinData[filteredCoin].price_change_percentage_24h
                  .toString()
                  .startsWith("-")
                  ? "#F5A099"
                  : "#A8D7B6"
              }
            >
              {Math.round(
                coinData[filteredCoin].price_change_percentage_24h * 100
              ) / 100}{" "}
              %
            </StyledSpan>
          </StyledGroup>
          <StyledGroup>
            <span>
              {numeral(coinData[filteredCoin].market_cap).format("($0.00 a)")}
            </span>
            <StyledSpan
              color={
                coinData[filteredCoin].market_cap_change_percentage_24h &&
                coinData[filteredCoin].market_cap_change_percentage_24h
                  .toString()
                  .startsWith("-")
                  ? "#F5A099"
                  : "#A8D7B6"
              }
            >
              {Math.round(
                coinData[filteredCoin].market_cap_change_percentage_24h * 100
              ) / 100}{" "}
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
      {filteredCoins.length === 0 && <div>No results...</div>}
      {filteredCoins && filteredCoins.map(renderCoinCard)}
    </StyledSection>
  );
}

CoinCards.propTypes = {
  coinData: PropTypes.object.isRequired,
  filteredCoins: PropTypes.array.isRequired
};

export default CoinCards;
