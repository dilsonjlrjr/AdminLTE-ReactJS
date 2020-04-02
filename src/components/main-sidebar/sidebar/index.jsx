import React, { Fragment } from "react";

// import { Container } from './styles';

import User2_160_160 from "admin-lte/dist/img/user2-160x160.jpg";

const Sidebar = (props) => (
  <div className="sidebar">
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img
          src={User2_160_160}
          className="img-circle elevation-2"
          alt="User Image"
        />
      </div>
      <div className="info">
        <a href="#" className="d-block">
          Alexander Pierce
        </a>
      </div>
    </div>

    {props.children}
  </div>
);

export default Sidebar;
