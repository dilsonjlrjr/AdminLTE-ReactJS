import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

// import { Container } from './styles';

export default class MainHeaderNavItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  static defaultProps = {
    link: '#'
  };

  render() {
    return (
      <li className="nav-item d-none d-sm-inline-block">
        <Link to={this.props.link} className="nav-link">
          {this.props.name}
        </Link>
      </li>
    );
  }
}