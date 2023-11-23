import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { Registro } from "./Registro";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Registro />
    </BrowserRouter>
  </Provider>
);
