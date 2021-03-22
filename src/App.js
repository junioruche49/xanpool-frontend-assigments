import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import RepositryDetails from "./components/RepositryDetails";
import UserRepositry from "./components/UserRepositry";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/profile/:name">
          <UserRepositry />
        </Route>
        <Route path="/repo/:name/:repo">
          <RepositryDetails />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
