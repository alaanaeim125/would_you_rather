import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import Store from "./store/Store";
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>

    <React.StrictMode>

      <Provider store={Store}>

        <App />
      </Provider>
    </React.StrictMode>,
   </BrowserRouter>
  , document.getElementById("root")
);

serviceWorker.unregister();
