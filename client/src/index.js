import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persistor, store } from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import "./stylesheet/index.scss";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor} loading={null}> */}
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
