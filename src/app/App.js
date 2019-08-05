import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import MarketsPage from "../markets/MarketsPage";
import GlobalStyles from "./GlobalStyle";
import AddTransactionPage from "../addTransaction/AddTransactionPage";
import { getCoinData } from "../utils/coinGecko";
import AllTransactionsPage from "../allTransactions/AllTransactionsPage";
import { setToLocal, getFromLocal } from "../services";
import FooterNavigation from "../components/FooterNavigation";

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 55px;
  height: 100vh;
`;

const ContentCointainer = styled.div`
  overflow: auto;
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
  // prepare for dropdown in DropdownMenu
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
        <ContentCointainer>
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
        </ContentCointainer>
        <FooterNavigation />
      </Grid>
    </Router>
  );
}

export default App;
