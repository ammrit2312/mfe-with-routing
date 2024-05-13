import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { Provider as ReduxProvider } from "react-redux";
import store from "parentApp/store";

import "./index.css";

import MainRouter from "./routes";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <ReduxProvider store={store}>
    <Router>
      <div className="container">
        <nav>
          <ul style={{ fontSize: "1rem", gap: "10px" }} type={""}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/another">About</Link>
            </li>
            <li>
              <Link to="/child">Child</Link>
            </li>
            <li>
              <Link to="/child/anotherChild">Another Child</Link>
            </li>
          </ul>
        </nav>
        <MainRouter />
      </div>
    </Router>
  </ReduxProvider>
);
