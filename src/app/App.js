import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import MarketsPage from "../markets/MarketsPage";
import GlobalStyles from "./GlobalStyle";
import AddTransactionPage from "../addTransaction/AddTransactionPage";
import { getCoinData } from "../utils/coinGecko";
import AllTransactionsPage from "../allTransactions/AllTransactionsPage";
import { setToLocal, getFromLocal } from "../services";

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
`;

function App() {
  const [transactions, setTransactions] = React.useState(
    getFromLocal("transactions") || []
  );
  const [coinData, setCoinData] = React.useState([]);

  React.useEffect(() => {
    getCoinData().then(coinData => setCoinData(coinData));
  }, []);

  React.useEffect(() => {
    setToLocal("transactions", transactions);
  }, [transactions]);

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

  return (
    <Router>
      <GlobalStyles />
      <Grid>
        <Switch>
          <Route
            path="/markets"
            exact
            render={props => <MarketsPage {...props} coinData={coinData} />}
          />
          <Route
            path="/add_transaction"
            exact
            render={props => (
              <AddTransactionPage
                {...props}
                onNewTransaction={handleNewTransaction}
                coinOptions={coinOptions}
              />
            )}
          />
          <Route
            exact
            path="/all_transactions"
            render={props => (
              <AllTransactionsPage {...props} transactions={transactions} />
            )}
          />
        </Switch>
      </Grid>
    </Router>
  );
}

export default App;
