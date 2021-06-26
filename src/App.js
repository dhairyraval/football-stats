import React from "react";
// import "./App.css";

import { HashRouter, Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import Standings from "./components/Standings";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/standings" component={Standings} />
      </Switch>
    </HashRouter>
  );
};

export default App;
