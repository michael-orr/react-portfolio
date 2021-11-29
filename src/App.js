import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Subtitle from "./components/Subtitle";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Subtitle />
        <Switch>
          <Route path="/">
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
