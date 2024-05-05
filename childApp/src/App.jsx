import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";


import { ChildRouter } from "./routes";

const App = () => (
  <Router>
    <div className="container">
      <ChildRouter />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
