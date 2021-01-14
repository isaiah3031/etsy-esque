import React from "react";
import ReactDOM from "react-dom";
import configureStore from '../../../frontend/store/store'
import Root from '../../../frontend/components/root.jsx'

import { login, logout, signup } from '../../../frontend/actions/session_actions'
window.login = login;
window.logout = logout;
window.signup = signup;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
