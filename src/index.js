import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import FirstApp from "./components/FirstApp";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirstApp title="FirstApp" />
    <App />
  </React.StrictMode>
);
