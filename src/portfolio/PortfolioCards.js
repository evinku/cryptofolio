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
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledGroupInGroup = styled.div`
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

function PortfolioCards({ coinData, totalQuantities }) {
  function renderPortfolioCards(key) {
    return (
      <div key={key}>
        <StyledCard>
          <StyledGroup>
            <StyledGroupInGroup>
              <StyledImg alt={key} src={findImageByName(coinData, key)} />
              <span>{key}</span>
            </StyledGroupInGroup>
            <StyledQuantity>
              {Math.round(totalQuantities[key] * 100) / 100}
            </StyledQuantity>
          </StyledGroup>
          <span>
            {new Intl.NumberFormat("de-DE", {
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

  return (
    <StyledSection>
      <StyledTotal>
        <div>Total:</div>
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "USD"
        }).format(totalHoldings(totalQuantities, coinData))}
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
