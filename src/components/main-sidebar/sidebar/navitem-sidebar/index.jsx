import React, { Component, Fragment } from "react";

// import { Container } from './styles';

export default class NavItemSideBar extends Component {
  render() {
    return (
      <Fragment>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-th"></i>
            <p>
              Simple Link
              <span className="right badge badge-danger">New</span>
            </p>
          </a>
        </li>
      </Fragment>
    );
  }
}
