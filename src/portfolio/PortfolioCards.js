import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PortfolioCardsHeadlines from "./PortfolioCardsHeadlines";
import {
  findPriceByName,
  findImageByName,
  calculateHoldings,
  totalHoldings
} from "../utils/portfolioServices";

const StyledSection = styled.section`
  margin: 5px;
`;

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 5px;
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImageGroup = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 3px;
`;

const StyledQuantity = styled.span`
  font-size: 14px;
`;

const StyledTotal = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
`;

const StyledTitle = styled.h3`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
`;

const StyledAmountUsd = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin: 0;
`;

const StyledAmountBtc = styled.span`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
`;

function PortfolioCards({ coinData, totalQuantities }) {
  function renderPortfolioCards(key) {
    return (
      <div key={key}>
        <StyledCard>
          <StyledGroup>
            <StyledImageGroup>
              <StyledImg alt={key} src={findImageByName(coinData, key)} />
              <span>{coinData[key] && coinData[key].name}</span>
            </StyledImageGroup>
            <StyledQuantity>
              {Math.round(totalQuantities[key] * 100) / 100}
            </StyledQuantity>
          </StyledGroup>
          <span>
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "USD"
            }).format(findPriceByName(coinData, key))}
          </span>
          <span>
            {calculateHoldings(
              findPriceByName(coinData, key),
              totalQuantities[key]
            )}
          </span>
        </StyledCard>
        <hr />
      </div>
    );
  }

  console.log();

  return (
    <StyledSection>
      <StyledTotal>
        <StyledTitle>Total:</StyledTitle>
        <StyledAmountUsd>
          {new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "USD"
          }).format(totalHoldings(totalQuantities, coinData))}
        </StyledAmountUsd>
        <StyledAmountBtc>
          ~
          {(
            totalHoldings(totalQuantities, coinData) /
            (coinData["bitcoin"] && coinData["bitcoin"].current_price)
          ).toFixed(3)}{" "}
          BTC
        </StyledAmountBtc>
      </StyledTotal>
      <PortfolioCardsHeadlines />
      {Object.keys(totalQuantities).map(renderPortfolioCards)}
    </StyledSection>
  );
}

PortfolioCards.propTypes = {
  totalQuantities: PropTypes.object.isRequired,
  coinData: PropTypes.object.isRequired
};

export default PortfolioCards;
