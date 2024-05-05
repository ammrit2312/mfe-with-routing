import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import MainRouter from "./routes";

const App = () => (
  <Router>
    <div className="container">
      <MainRouter/>
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
