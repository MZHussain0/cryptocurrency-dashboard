// Library Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// Files import
import App from "./App";
import { store } from "./common/store/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
