import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthNavbar from "./AuthNavbar";

class Login extends Component {
  render() {
    return (
      <div>
        <AuthNavbar />
        <div className="container">
          <button type="button" className="btn btn-link offset-md-6">
            <Link to="/auth/register">Create A New Account </Link>
          </button>
          <br />
          <br />
          <div className="col-md-4 offset-md-4">
            <h1 className="text-left">Log in </h1>
            <form action="">
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" />
                <label htmlFor="checkbox">Remember Me</label>
              </div>
              <button className="btn btn-primary btn-lg btn-block">
                Login
              </button>
              <button type="button" className="btn btn-link">
                <Link to="/auth/resetpassword">Forgot Password?</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
