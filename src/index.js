// react core
// import React from "react"; // not needed for react 17 ?!
import ReactDOM from "react-dom";

// react 3p add-ons
import { BrowserRouter } from "react-router-dom";

// child components
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app-root")
);
