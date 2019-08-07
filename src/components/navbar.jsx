import React, { Component } from "react";

//Since this class doesn't have a state. You can use a stateless functional component

const NavBar = props => {
  //Also, in a stateless function, you must pass props. And you can't use this
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
