import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { countLength, itemLength } = this.props;
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {countLength}
          </span>
          <span className="badge badge-pill badge-secondary">{itemLength}</span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
