import React, { Fragment } from "react";
import LayoutAdminLTEReact from "../layouts/layout-adminltereact";

// import { Container } from './styles';

const Starter = () => (
  <Fragment>
    <LayoutAdminLTEReact>
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
    </LayoutAdminLTEReact>
  </Fragment>
);

export default Starter;
