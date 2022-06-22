import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import SingleBook from "./pages/SingleBook";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/book/:id">
            <SingleBook />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
