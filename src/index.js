import React from "react";
import ReactDOM from "react-dom";
import "./Stylesheets/style.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
