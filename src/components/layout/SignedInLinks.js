import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";

const SignedInLinks = props => {
  const { profile } = props;
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
            {profile.email}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/faq" className="nav-link">
            FAQ
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

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedInLinks);
