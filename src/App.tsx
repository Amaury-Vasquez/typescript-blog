import React, { Fragment } from "react";
import { Router } from "@reach/router";

import { GlobalStyles } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        <Router>
          <Home path="/React-Layout" />
        </Router>
      </Layout>
    </Fragment>
  );
}

export default App;
