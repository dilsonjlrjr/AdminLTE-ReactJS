import React, { Component, Fragment } from "react";

// import { Container } from './styles';

export default class MainHeaderSearch extends Component {
  constructor(props) {
    super(props);
    this.eventButtonSubmit = null;
  }

  componentWillMount() {
    //Valid event props buttonSubmit
    this.eventButtonSubmit = this.props.buttonSubmit;
    if (this.eventButtonSubmit === undefined) this.eventButtonSubmit = null;
  }

  render() {
    return (
      <Fragment>
        <div className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input
              className="form-control form-control-navbar"
              type="search"
              placeholder="Search"
              aria-label="Search"

              {...this.props}
            />
            <div className="input-group-append">
              <button
                className="btn btn-navbar"
                onClick={this.eventButtonSubmit}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
