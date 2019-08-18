import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "unistore/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { store } from "./store";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dummy from "./pages/dummy";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dummy" component={Dummy} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
