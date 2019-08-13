import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { fadeIn } from "../utils/animations";

const StyledSection = styled.section`
  margin: 20px;
`;

const StyledCard = styled.div`
  border: solid 0.5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 20px;
  background-color: ${props => props.color};
  animation: ${fadeIn} 0.5s ease-out;
`;

const StyledTransactions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledSpan = styled.span`
  opacity: 0.6;
  margin-right: 5px;
`;

function TransactionCards({ transactions, coinData }) {
  function renderTransactionCard(transaction) {
    return (
      <div key={transaction.id}>
        <StyledCard
          color={
            transaction.type === "buy"
              ? "rgba(177,213,184,0.5)"
              : "rgba(233,164,156,0.7)"
          }
        >
          <span>
            Date: <Moment format="YYYY/MM/DD">{transaction.date}</Moment>
          </span>
          <hr />
          <StyledTransactions>
            <StyledGroup>
              <StyledSpan>Coin:</StyledSpan>
              <span>
                {coinData[transaction.coin] && coinData[transaction.coin].name}
              </span>
            </StyledGroup>
            <StyledGroup>
              <StyledSpan>Price:</StyledSpan>
              <span>
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "USD"
                }).format(transaction.price)}
              </span>
            </StyledGroup>
            <StyledGroup>
              <StyledSpan>Amount:</StyledSpan>
              <span>{transaction.quantity}</span>
            </StyledGroup>
            <StyledGroup>
              <StyledSpan>Type:</StyledSpan>
              <span>{transaction.type}</span>
            </StyledGroup>
          </StyledTransactions>
        </StyledCard>
      </div>
    );
  }

  return (
    <StyledSection>
      {transactions &&
        transactions
          .sort(function(a, b) {
            a = new Date(a.date);
            b = new Date(b.date);
            return a > b ? -1 : a < b ? 1 : 0;
          })
          .map(renderTransactionCard)}
    </StyledSection>
  );
}

TransactionCards.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default TransactionCards;
