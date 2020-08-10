// Data layer control
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

// components
import App from "./components/App";

// reducers
import reducers from "./reducers";

// dummy reducer `() => []`
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

console.log("stripe key:", process.env.REACT_APP_STRIPE_KEY);
console.log("env is:", process.env.NODE_ENV);
