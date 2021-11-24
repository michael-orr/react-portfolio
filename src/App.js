import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
