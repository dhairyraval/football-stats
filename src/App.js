import React from "react";
// import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import Standings from "./components/Standings";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/standings" component={Standings} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
