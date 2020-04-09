import React, { Fragment } from "react";

import MainHeader from "../components/main-header";
import MainHeaderNavBar from "../components/main-header/nav-bar";

import MainSideBar from "../components/main-sidebar";
import NavItemSideBar from "../components/main-sidebar/sidebar/navitem-sidebar";
import NavBarSideBar from "../components/main-sidebar/sidebar/navbar-sidebar";
import MainHeaderNavItem from "../components/main-header/nav-bar/nav-item";

// import { Container } from './styles';

const Starter = () => (
  <Fragment>
    <div className="wrapper">
      <MainHeader>
        <MainHeaderNavBar>
          <MainHeaderNavItem name="Home" />
          <MainHeaderNavItem name="Contact" />
        </MainHeaderNavBar>
      </MainHeader>

      <MainSideBar>
        <NavBarSideBar>
          <NavItemSideBar />
        </NavBarSideBar>
      </MainSideBar>

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Starter Page</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Starter Page</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid"></div>
        </div>
      </div>

      <aside className="control-sidebar control-sidebar-dark">
        <div className="p-3">
          <h5>Title</h5>
          <p>Sidebar content</p>
        </div>
      </aside>

      <footer className="main-footer">
        <div className="float-right d-none d-sm-inline">Anything you want</div>
        <strong>
          Copyright &copy; 2014-2019{" "}
          <a href="https://adminlte.io">AdminLTE.io</a>.
        </strong>{" "}
        All rights reserved.
      </footer>
    </div>
  </Fragment>
);

export default Starter;
