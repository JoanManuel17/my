import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ComponentApp } from "./ComponentApp";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import {MainApp}  from "./pages/MainApp";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
