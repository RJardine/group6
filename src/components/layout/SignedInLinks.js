import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <div>
      <ul className="navbar-nav auto">
        <li className="nav-item">
          <NavLink to="/bookpage" className="nav-link">
            Book Service
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/my_account" className="nav-link">
            My Account
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/faq" className="nav-link">
            FAQ
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/receipts" className="nav-link">
            Receipts
          </NavLink>
        </li>
        <li className="nav-item">
          <a onClick={props.logout} className="nav-link">
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
