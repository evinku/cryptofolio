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
import InsightsPage from "../insights/InsightsPage";
import Confirm from "../components/Confirm";

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
  const [coinDataNormalizedID, setCoinDataNormalizedID] = React.useState({});
  const [coinCardClickValue, setCoinCardClickValue] = React.useState("");

  React.useEffect(() => {
    setToLocal("transactions", transactions);
  }, [transactions]);

  React.useEffect(() => {
    getCoinData().then(coinData => {
      setCoinDataNormalizedID(
        coinData.reduce((acc, coin) => {
          return {
            ...acc,
            [coin.id]: coin
          };
        }, {})
      );
    });
  }, []);

  function handleNewTransaction(transaction) {
    setTransactions([transaction, ...transactions]);
  }

  function handleTransactionDelete(id) {
    const index = transactions.findIndex(transaction => transaction.id === id);
    const newTransactions = transactions
      .slice(0, index)
      .concat(transactions.slice(index + 1, transactions.length));
    setTransactions(newTransactions);
  }

  function handleCardClick(id) {
    setCoinCardClickValue(id);
  }

  const totalQuantities = transactions.reduce((acc, transaction) => {
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
              render={props => (
                <MarketsPage
                  {...props}
                  coinData={coinDataNormalizedID}
                  onCardClick={handleCardClick}
                />
              )}
            />
            <Route
              path="/add-transaction"
              exact
              render={props => (
                <AddTransactionPage
                  {...props}
                  onNewTransaction={handleNewTransaction}
                  coinData={coinDataNormalizedID}
                  totalQuantities={totalQuantities}
                  coinCardClickValue={coinCardClickValue}
                />
              )}
            />
            <Route
              exact
              path="/all-transactions"
              render={props => (
                <AllTransactionsPage
                  {...props}
                  transactions={transactions}
                  totalQuantities={totalQuantities}
                  coinData={coinDataNormalizedID}
                  onTransactionDelete={handleTransactionDelete}
                />
              )}
            />
            <Route
              exact
              path="/cryptofolio"
              render={props => (
                <CryptofolioPage
                  {...props}
                  totalQuantities={totalQuantities}
                  coinData={coinDataNormalizedID}
                />
              )}
            />
            <Route
              exact
              path="/insights"
              render={props => (
                <InsightsPage
                  {...props}
                  totalQuantities={totalQuantities}
                  coinData={coinDataNormalizedID}
                />
              )}
            />
            <Route exact path="/confirm/:id" component={Confirm} />
          </Switch>
        </ContentCointainer>
        <FooterNavigation
          links={{
            toCryptofolio: "/cryptofolio",
            toMarkets: "/markets",
            toAddTransaction: "/add-transaction",
            toAllTransactions: "/all-transactions",
            toInsights: "/insights"
          }}
        />
      </Grid>
    </Router>
  );
}

export default App;
