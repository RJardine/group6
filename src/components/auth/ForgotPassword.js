import React, { Component } from "react";
//import AuthNavbar from "./AuthNavbar";
import { Link } from "react-router-dom";

export default class ForgotPassword extends Component {
  render() {
    return (
      <div>
        {/* <AuthNavbar /> */}
        <div className="container">
          <div className="text-center">
            <h2>Password Reset Request</h2>
          </div>
          <br />
          <div className="col-md-6 offset-md-3">
            <form action="">
              <div className="form-group">
                <label htmlFor="email">Please enter your email address:</label>
                <input
                  type="email"
                  placeholder="Email address..."
                  className="form-control"
                />
                <br />
                <button className="btn btn-primary btn-lg btn-block">
                  Reset Password
                </button>
                <br />
                <button className="btn btn-link btn-lg btn-block">
                  <Link to="/auth/login">Back to login</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
