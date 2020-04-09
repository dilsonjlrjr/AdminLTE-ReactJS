import React, { Component, Fragment } from 'react';

// import { Container } from './styles';

export default class MainHeaderNavBar extends Component {
  render() {
    return (
      <Fragment>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#">
            <i className="fas fa-bars"></i>
          </a>
        </li>
        {this.props.children}
      </ul>
    </Fragment>
    );
  }
}
