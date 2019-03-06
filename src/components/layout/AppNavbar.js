import React, { Component } from "react";
import { Link } from "react-router-dom";

class AppNavbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
          <div className="container">
            <Link to="/home" className="navbar-brand">
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarMain"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collaspe navbar-collapse mr-auto"
              style={{ fontSize: 20 }}
              //   justify-content-end
              id="navbarMain"
            >
              <ul className="navbar-nav auto">
                <li className="nav-item">
                  <Link to="/bookpage" className="nav-link">
                    Search
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/myprofile" className="nav-link">
                    My Account
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/auth/user/inbox" className="nav-link">
                    Inbox
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/faq" className="nav-link">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default AppNavbar;
