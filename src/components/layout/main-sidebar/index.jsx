import React, { Component, Fragment } from "react";

// Images
import ImgAdminLTE from "admin-lte/dist/img/AdminLTELogo.png";
import Sidebar from "./sidebar";

// import { Container } from './styles';

export default class MainSideBar extends Component {
  render() {
    return (
      <Fragment>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <a href="index3.html" className="brand-link">
            <img
              src={ImgAdminLTE}
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: 0.8 }}
            />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
          </a>

          <Sidebar>{this.props.children}</Sidebar>
        </aside>
      </Fragment>
    );
  }
}
