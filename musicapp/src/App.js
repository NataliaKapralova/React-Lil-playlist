import React from "react";
import "./App";
import Container from "./container";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Container path="/" exact component={Container} />
        <Route path="/About" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
