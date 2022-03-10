import React, { Component } from "react";
import NavLink from "react-router-dom/NavLink";
import Link from "react-router-dom/NavLink";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Vidly
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-item nav-link" to="/customers">
              Customers
            </NavLink>
            <NavLink className="nav-item nav-link" to="/rentals">
              Rentals
            </NavLink>
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-item nav-link" to="/register">
              Register
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
