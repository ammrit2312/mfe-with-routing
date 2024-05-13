import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider as ReduxProvider } from "react-redux";
import store from "parentApp/store";

import { ChildRouter } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <ReduxProvider store={store}>
    <Router>
      <div className="container">
        <ChildRouter />
      </div>
    </Router>
  </ReduxProvider>
);
