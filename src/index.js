import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App tab="home" />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
