//rcc + tab to create initial template

//Imports
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class ChangePassword extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/auth/login" />;
    return (
      <div>
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

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(ChangePassword);
