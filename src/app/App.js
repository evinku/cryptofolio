import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import MarketsPage from "../markets/MarketsPage";
import GlobalStyles from "./GlobalStyle";

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Grid>
        <Switch>
          <Route path="/markets" render={props => <MarketsPage {...props} />} />
        </Switch>
      </Grid>
    </Router>
  );
}

export default App;
