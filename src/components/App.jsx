// LIBRARIES
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

// COMPONENTS
import NavBar from "./NavBar";
import Home from "./Home";
import Vote from "./Vote";
import Result from "./Result";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/vote"}>
            <Vote />
          </Route>
          <Route exact path={"/result"}>
            <Result />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
