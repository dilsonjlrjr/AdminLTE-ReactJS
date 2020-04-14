import React, { Component, Fragment } from "react";

import MainHeader from "../components/layout/main-header";
import MainHeaderNavBar from "../components/layout/main-header/nav-bar";
import MainHeaderNavItem from "../components/layout/main-header/nav-bar/nav-item";
import MainHeaderSearch from "../components/layout/main-header/search";
import MainSideBar from "../components/layout/main-sidebar";
import NavBarSideBar from "../components/layout/main-sidebar/sidebar/navbar-sidebar";
import NavItemSideBar from "../components/layout/main-sidebar/sidebar/navitem-sidebar";
import Footer from "../components/layout/footer";

// import { Container } from './styles';

export default class LayoutAdminLTEReact extends Component {
  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <MainHeader>
            <MainHeaderNavBar>
              <MainHeaderNavItem name="Home" link="/" />
              <MainHeaderNavItem name="Contact" link="#" />
            </MainHeaderNavBar>
            <MainHeaderSearch onKeyPress={() => {}} buttonSubmit={() => {}} />
          </MainHeader>

          <MainSideBar>
            <NavBarSideBar>
              <NavItemSideBar />
            </NavBarSideBar>
          </MainSideBar>

          <div className="content-wrapper">
            {this.props.children}
          </div>

          <Footer />
        </div>        
      </Fragment>
    );
  }
}
