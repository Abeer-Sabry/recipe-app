import React from "react";
import ReactDOM from "react-dom";
// REACT_SPLIDE
import "@splidejs/splide/dist/css/splide.min.css";
import "./index.css";
import App from "./App";
import store from "./Redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
