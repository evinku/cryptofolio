import React from "react";
import Title from "../components/Title";
import Form from "./Form";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSection = styled.section`
  position: relative;
`;

const StyledRain = styled.iframe`
  position: absolute;
  pointer-events: none;
`;

function AddTransactionPage({
  history,
  onNewTransaction,
  totalQuantities,
  coinData
}) {
  const [transactionType, setTransactionType] = React.useState("");

  function handleTransactionSubmit(transaction) {
    setTransactionType(transaction.type);
    onNewTransaction(transaction);
  }

  // prepare for dropdown in Form

  const coinOptions = Object.keys(coinData).map(key => ({
    label: coinData[key].name,
    value: coinData[key].id
  }));

  return (
    <StyledSection>
      <Title size="L">Add Transaction</Title>
      {transactionType === "buy" && (
        <StyledRain
          src="/coin_rain.gif"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        />
      )}
      {transactionType === "sell" && (
        <StyledRain
          src="/money_rain.gif"
          width="480"
          height="480"
          frameBorder="0"
          allowFullScreen
        />
      )}
      <Form
        onTransactionSubmit={handleTransactionSubmit}
        coinOptions={coinOptions}
        history={history}
        totalQuantities={totalQuantities}
        coinData={coinData}
      />
    </StyledSection>
  );
}

AddTransactionPage.propTypes = {
  onNewTransaction: PropTypes.func,
  coinData: PropTypes.array,
  totalQuantities: PropTypes.object,
  coinDataNormalizedID: PropTypes.object,
  history: PropTypes.object
};

export default AddTransactionPage;
