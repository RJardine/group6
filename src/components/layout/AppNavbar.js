import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth } = props;
  //console.log(auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            id="brand-image"
            src={require("./images/LogoV4.png")}
            alt="Home"
            // style={{ width: "30", height: "30" }}
            width="30"
            height="30"
          />{" "}
          Knock Knock
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
