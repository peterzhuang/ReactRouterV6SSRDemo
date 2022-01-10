import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";


import "./index.css";
import App from "./App";

ReactDOM.hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app")
);
