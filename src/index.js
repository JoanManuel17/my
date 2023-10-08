import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FirstApp from "./components/FirstApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirstApp p={10} title="My First App" />
    <App />
  </React.StrictMode>
);
