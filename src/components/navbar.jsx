import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.countLength}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
