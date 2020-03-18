import React, { Fragment } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Starter from "../view/starter";

// import { Container } from './styles';

const RouterGeneral = () => (
  <Fragment>
    <Router>
      <Route path="/">
        <Starter />
      </Route>
    </Router>
  </Fragment>
);

export default RouterGeneral;
