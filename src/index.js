import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { rootReducer } from "./reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log("store", store.getState());
});

function Index() {
  return (
    <div className="App">
      <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  rootElement
);
