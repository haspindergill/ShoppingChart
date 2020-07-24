import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Shopping Chart
          <span className="m-2 badge badge-pill badge-secondary">
            total Number= {this.props.total}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
