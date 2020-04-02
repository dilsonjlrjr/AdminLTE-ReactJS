import React, { Component, Fragment } from "react";

// import { Container } from './styles';

import { eventTreeView } from "../../../../events/treeview";

export default class NavBarSideBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    eventTreeView('[data-widget="treeview"]');
  }

  render() {
    return (
      <Fragment>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item has-treeview menu-open">
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Starter Pages
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link active">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Active Page</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Inactive Page</p>
                  </a>
                </li>
              </ul>
            </li>
            {this.props.children}
          </ul>
        </nav>
      </Fragment>
    );
  }
}
