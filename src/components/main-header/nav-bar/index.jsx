import React, { Component, Fragment } from "react";
import { eventPushMenu } from "../../../events/pushmenu";

// import { Container } from './styles';

export default class MainHeaderNavBar extends Component {
  componentDidMount() {
    eventPushMenu();
  }

  render() {
    return (
      <Fragment>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#pushmenu">
              <i className="fas fa-bars"></i>
            </a>
          </li>
          {this.props.children}
        </ul>
      </Fragment>
    );
  }
}
