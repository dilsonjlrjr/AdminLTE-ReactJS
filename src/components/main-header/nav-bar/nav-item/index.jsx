import React from "react";
import PropType from "prop-types";

// import { Container } from './styles';

const NavItem = (props) => (
  <li className="nav-item d-none d-sm-inline-block">
    <a href="#" className="nav-link">
      {props.name}
    </a>
  </li>
);

NavItem.propType = {
    name: PropType.string.isRequired,
};

export default NavItem;
