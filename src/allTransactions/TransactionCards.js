import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSection = styled.section`
  margin: 5px;
`;

const StyledCard = styled.div`
  border: solid 1px;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
  background-color: ${props => props.color};
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
          <span>Date: {transaction.date}</span>
          <hr />
          <StyledTransactions>
            <StyledGroup>
              <StyledSpan>Coin</StyledSpan>
              <span>{transaction.coin}</span>
            </StyledGroup>
            <StyledGroup>
              <StyledSpan>Price</StyledSpan>
              <span>{transaction.price}</span>
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
      {transactions && transactions.map(renderTransactionCard)}
    </StyledSection>
  );
}

TransactionCards.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default TransactionCards;
