import React from "react";
import ReactDOM from "react-dom";
// REACT_SPLIDE
import "@splidejs/splide/dist/css/splide.min.css";
import "./index.css";
import App from "./App";
// REDUX
import store from "./Redux/store";
import { Provider } from "react-redux";
// REACT_ROUTER_DOM //
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
