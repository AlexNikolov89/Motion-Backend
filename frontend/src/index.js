import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme } from "./style";
import { Provider } from "react-redux";
import { Routes } from "./routes";
import { store } from "./store";
const token = localStorage.getItem("token");
if (token) {
  store.dispatch({
    type: "USER_LOGIN",
    payload: token,
  });
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
