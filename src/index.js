import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ComponentApp } from "./ComponentApp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {MainApp}  from "./pages/MainApp";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>

  // <React.StrictMode>
  //   <ComponentApp />
  //   <App />
  // </React.StrictMode>
);
