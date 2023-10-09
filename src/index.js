import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ComponentApp } from "./ComponentApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ComponentApp />
    <App />
  </React.StrictMode>
);
