import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Layouts/Header/Header";
import Home from "./views/Home";
import About from "./views/About";
import RegPortal from "./views/Portal";
import _404 from "./views/404";
import "./App.scss";
import User from "./views/User";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/registration" exact component={RegPortal} />
          <Route path="/registration/:id" exact component={RegPortal} />
          <Route path="/user/:id" exact component={User} />
          <Route path="*" component={_404} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
