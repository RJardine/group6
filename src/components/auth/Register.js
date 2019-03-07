import React, { Component } from "react";
import { Link } from "react-router-dom";
//import AuthNavbar from "./AuthNavbar";

class Register extends Component {
  render() {
    return (
      <div>
        {/* <AuthNavbar /> */}
        <div className="container">
          <button type="button" className="btn btn-link offset-md-6">
            <Link to="/auth/login">Click Here To Login</Link>
          </button>
          <br />
          <div className="col-md-4 offset-md-4">
            <h1 className="text-left">Register </h1>
            <form action="">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">last Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" />
              </div>
              <button className="btn btn-primary btn-lg btn-block">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
