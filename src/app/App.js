import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import MarketsPage from "../markets/MarketsPage";
import GlobalStyles from "./GlobalStyle";
import AddTransactionPage from "../addTransaction/AddTransactionPage";

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
`;

function App() {
  const [transactions, setTransactions] = React.useState([]);

  function handleOnClick(transaction) {
    setTransactions([transaction, ...transactions]);
  }

  console.log(transactions);

  return (
    <Router>
      <GlobalStyles />
      <Grid>
        <Switch>
          <Route path="/markets" render={props => <MarketsPage {...props} />} />
          <Route
            path="/add_transaction"
            render={props => (
              <AddTransactionPage {...props} onClick={handleOnClick} />
            )}
          />
        </Switch>
      </Grid>
    </Router>
  );
}

export default App;
