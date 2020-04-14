import React, { Component, Fragment } from "react";

// import { Container } from './styles';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="main-footer">
          <div className="float-right d-none d-sm-inline">
            Anything you want
          </div>
          <strong>
            Copyright &copy; 2014-2019{" "}
            <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>{" "}
          All rights reserved.
        </footer>
      </Fragment>
    );
  }
}
