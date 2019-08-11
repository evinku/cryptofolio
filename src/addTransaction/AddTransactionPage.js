import React from "react";
import Title from "../components/Title";
import Form from "./Form";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSection = styled.section`
  position: relative;
`;

const StyledMoneyRain = styled.iframe`
  position: absolute;
  pointer-events: none;
`;

const StyledCoinRain = styled.iframe`
  position: absolute;
  pointer-events: none;
`;

function AddTransactionPage({
  history,
  onNewTransaction,
  coinData,
  totalQuantities,
  coinDataNormalized
}) {
  const [transactionType, setTransactionType] = React.useState("");

  function handleTransactionSubmit(transaction) {
    setTransactionType(transaction.type);
    onNewTransaction(transaction);
  }

  // prepare for dropdown in Form

  const coinOptions = coinData.map(coin => ({
    label: coin.name,
    value: coin.name
  }));

  return (
    <StyledSection>
      <Title size="L">Add Transaction</Title>
      {transactionType === "sell" ? (
        <StyledMoneyRain
          src="https://giphy.com/embed/Efm4qfreaUsrFMwtre"
          width="480"
          height="480"
          frameBorder="0"
          allowFullScreen
        />
      ) : null}
      {transactionType === "buy" ? (
        <StyledCoinRain
          src="https://giphy.com/embed/NsAXBSpx0MJ6IBDCPY"
          width="480"
          height="480"
          frameBorder="0"
          allowFullScreen
        />
      ) : null}
      <Form
        onTransactionSubmit={handleTransactionSubmit}
        coinOptions={coinOptions}
        history={history}
        totalQuantities={totalQuantities}
        coinDataNormalized={coinDataNormalized}
      />
    </StyledSection>
  );
}

AddTransactionPage.propTypes = {
  onNewTransaction: PropTypes.func,
  coinData: PropTypes.array,
  totalQuantities: PropTypes.object,
  coinDataNormalized: PropTypes.object,
  history: PropTypes.object
};

export default AddTransactionPage;
