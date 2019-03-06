//rcc + tab to create initial template

//Imports
import React, { Component } from "react";
//Import Navigation bar
import AppNavbar from "../layout/AppNavbar";

export default class ChangePassword extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <div className="container">
          <div className="text-center">
            <h2>Change Password</h2>
          </div>
          <div className="col-md-6 offset-md-3">
            <form action="">
              <div className="form-group">
                <label htmlFor="inputPassword">New Password:</label>
                <input type="password" className="form-control" />
                <br />
                <label htmlFor="inputPassword">Confirm new password:</label>
                <input type="password" className="form-control" />
                <br />
                <button className="btn btn-secondary btn-sm">Cancel</button>
                <button className="btn btn-primary btn-sm offset-md-8">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
