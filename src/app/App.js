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
import CryptofolioPage from "../portfolio/CryptofolioPage";

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
  const [coinDataNormalized, setCoinDataNormalized] = React.useState({});

  React.useEffect(() => {
    getCoinData().then(coinData => {
      setCoinData(coinData);

      setCoinDataNormalized(
        coinData.reduce((acc, coin) => {
          return {
            ...acc,
            [coin.name]: coin
          };
        }, {})
      );
    });
  }, []);

  React.useEffect(() => {
    setToLocal("transactions", transactions);
  }, [transactions]);

  function handleNewTransaction(transaction) {
    setTransactions([transaction, ...transactions]);
  }

  const total = transactions.reduce((acc, transaction) => {
    const { coin, type, quantity } = transaction;
    const previousQuantity = acc[coin] || 0;
    return {
      ...acc,
      [coin]: previousQuantity + quantity * (type === "buy" ? 1 : -1)
    };
  }, {});

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
                  coinData={coinData}
                  coinDataNormalized={coinDataNormalized}
                  total={total}
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
            <Route
              exact
              path="/cryptofolio"
              render={props => (
                <CryptofolioPage
                  {...props}
                  total={total}
                  coinData={coinDataNormalized}
                />
              )}
            />
          </Switch>
        </ContentCointainer>
        <FooterNavigation
          links={{
            toCryptofolio: "/cryptofolio",
            toMarkets: "/markets",
            toAddTransaction: "/add_transaction",
            toAllTransactions: "/all_transactions",
            toInsights: "/insights"
          }}
        />
      </Grid>
    </Router>
  );
}

export default App;
