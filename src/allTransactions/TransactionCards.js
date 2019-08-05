import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { fadeIn } from "../utils/animations";

const StyledSection = styled.section`
  margin: 20px;
`;

const StyledCard = styled.div`
  border: solid 1px;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
  background-color: ${props => props.color};
  animation: ${fadeIn} 0.5s ease-out;
`;

const StyledTransactions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  justify-items: center;
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSpan = styled.span`
  text-decoration: underline;
  opacity: 0.6;
`;

function TransactionCards({ transactions }) {
  function renderTransactionCard(transaction) {
    return (
      <div key={transaction.transaction_id}>
        <StyledCard color={transaction.type === "buy" ? "#A8D7B6" : "#F5A099"}>
          <span>
            Date: <Moment format="YYYY/MM/DD HH:mm">{transaction.date}</Moment>
          </span>
          <hr />
          <StyledTransactions>
            <StyledGroup>
              <StyledSpan>Coin</StyledSpan>
              <span>{transaction.coin}</span>
            </StyledGroup>
            <StyledGroup>
              <StyledSpan>Price</StyledSpan>
              <span>${transaction.price}</span>
            </StyledGroup>
            <StyledGroup>
              <StyledSpan>Amount</StyledSpan>
              <span>{transaction.quantity}</span>
            </StyledGroup>
            <StyledGroup>
              <StyledSpan>Type</StyledSpan>
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
