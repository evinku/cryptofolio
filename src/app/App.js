import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import MarketsPage from "../markets/MarketsPage";
import GlobalStyles from "./GlobalStyle";
import AddTransactionPage from "../addTransaction/AddTransactionPage";
import { getCoinData, getMarketData } from "../utils/coinGecko";
import AllTransactionsPage from "../allTransactions/AllTransactionsPage";

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
`;

function App() {
  const [transactions, setTransactions] = React.useState([]);
  const [coinData, setCoinData] = React.useState([]);
  const [marketData, setMarketData] = React.useState({});

  React.useEffect(() => {
    getCoinData().then(coinData => setCoinData(coinData));
    getMarketData().then(marketData => setMarketData(marketData));
  }, []);

  function handleNewTransaction(transaction) {
    setTransactions([transaction, ...transactions]);
  }

  const coinOptions = coinData.map(coin => ({
    label: (
      <>
        <img alt="" src={coin.image} height="20px" width="20px" /> {coin.name}
      </>
    ),
    value: coin.name
  }));

  console.log(transactions);

  return (
    <Router>
      <GlobalStyles />
      <Grid>
        <Switch>
          <Route
            path="/markets"
            render={props => (
              <MarketsPage
                {...props}
                coinData={coinData}
                marketData={marketData}
              />
            )}
          />
          <Route
            path="/add_transaction"
            render={props => (
              <AddTransactionPage
                {...props}
                onNewTransaction={handleNewTransaction}
                coinOptions={coinOptions}
              />
            )}
          />
          <Route
            path="/all_transactions"
            render={props => <AllTransactionsPage {...props} />}
          />
        </Switch>
      </Grid>
    </Router>
  );
}

export default App;
