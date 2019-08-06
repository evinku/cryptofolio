import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PortfolioCardsHeadlines from "./PortfolioCardsHeadlines";

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

function findPriceByName(coins, name) {
  const coin = coins[name];
  return coin && coin.current_price;
}
function findImageByName(coins, name) {
  const coin = coins[name];
  return coin && coin.image;
}

function calculateHoldings(price, amount) {
  const holdings = price * amount;

  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "USD"
  }).format(holdings);
}

function totalHoldings(total, coinData) {
  return Object.keys(total)
    .map(key => {
      const amount = total[key];
      const price = findPriceByName(coinData, key);
      return amount * price;
    })
    .reduce((acc, amount) => acc + amount);
}

function PortfolioCards({ transactions, coinData }) {
  const total = transactions.reduce((acc, transaction) => {
    const { coin, type, quantity } = transaction;
    const previousQuantity = acc[coin] || 0;
    return {
      ...acc,
      [coin]: previousQuantity + quantity * (type === "buy" ? 1 : -1)
    };
  }, {});

  function renderPortfolioCards(key) {
    return (
      <div key={key}>
        <StyledCard>
          <StyledGroup>
            <StyledGroupInGroup>
              <StyledImg alt={key} src={findImageByName(coinData, key)} />
              <span>{key}</span>
            </StyledGroupInGroup>
            <StyledQuantity>{total[key]}</StyledQuantity>
          </StyledGroup>
          <span>
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "USD"
            }).format(findPriceByName(coinData, key))}
          </span>
          <span>
            {calculateHoldings(findPriceByName(coinData, key), total[key])}
          </span>
        </StyledCard>
        <hr />
      </div>
    );
  }

  return (
    <StyledSection>
      <StyledTotal>
        Total:
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "USD"
        }).format(totalHoldings(total, coinData))}
      </StyledTotal>
      <PortfolioCardsHeadlines />
      {Object.keys(total).map(renderPortfolioCards)}
    </StyledSection>
  );
}

PortfolioCards.propTypes = {
  transactions: PropTypes.array.isRequired,
  coinData: PropTypes.object.isRequired
};

export default PortfolioCards;
