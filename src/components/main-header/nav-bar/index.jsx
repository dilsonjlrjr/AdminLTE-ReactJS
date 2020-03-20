import React, { Fragment } from "react";
import PropTypes from "prop-types";

// import { Container } from './styles';

const NavBar = props => (
  <Fragment>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#">
          <i className="fas fa-bars"></i>
        </a>
      </li>
      {props.children}
    </ul>
  </Fragment>
);

NavBar.propTypes = {
  children: PropTypes.element.isRequired
};

export default NavBar;
