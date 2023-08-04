import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer, applyMiddleware(thunk, logger));
const logger = createLogger();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <App />
      </>
    </BrowserRouter>
  </Provider>
);
