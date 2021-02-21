import React from 'react'
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { persistor } from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'
import App from "./app";

const Root = ({ store }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
);

export default Root