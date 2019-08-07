import React from "react";

//Since this class doesn't have a state. You can use a stateless functional component
/* 
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
}; */

//Since you probably don't want to write props. something every time you need an attribute from props,
//You can use object destructuring to do it. Here's how.
const NavBar = ({ totalCounters }) => {
  //Also, in a stateless function, you must pass props. And you can't use this
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
