import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="navbar-nav auto">
      <li className="nav-item">
        <NavLink to="/auth/register" className="nav-link">
          Register
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/auth/login" className="nav-link">
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
