import React, { Component } from "react";
import { Link } from "react-router-dom";

class AuthNavbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
          <div className="container">
            <Link to="/" className="navbar-brand">
              Home
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collaspe navbar-collapse mr-auto"
            //   justify-content-end
            id="navbarMain"
          >
            <ul className="navbar-nav auto">
              <li className="nav-item">
                <Link to="/auth/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/auth/register" className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default AuthNavbar;
