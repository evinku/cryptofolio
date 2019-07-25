import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import trenner from "../utils/trenner";
import CoinCardHeadlines from "./CoinCardHeadlines";

const StyledSection = styled.section``;

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2.5fr;
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 3px;
`;

const StyledGroup = styled.div`
  display: flex;
  align-items: center;
`;

function CoinCards({ coinData }) {
  function renderCoinCard(coinData) {
    return (
      <div key={coinData.id}>
        <StyledCard>
          <span>{coinData.market_cap_rank}</span>
          <StyledGroup>
            <StyledImg alt={coinData.name} src={coinData.image} />
            <span>{coinData.name}</span>
          </StyledGroup>
          <span>${trenner(coinData.current_price)}</span>
          <span>${trenner(coinData.market_cap)}</span>
        </StyledCard>
        <hr />
      </div>
    );
  }

  return (
    <StyledSection>
      <CoinCardHeadlines />
      {coinData && coinData.map(renderCoinCard)}
    </StyledSection>
  );
}

CoinCards.propTypes = {
  coinData: PropTypes.array.isRequired
};

export default CoinCards;
