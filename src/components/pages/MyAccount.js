import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { deleteU } from "../../store/actions/authActions";

class MyAccount extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.deleteU(this.dispatch);
  };
  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/auth/login" />;
    return (
      <div>
        <div className="container offset-md-1 col-md-4 myaccount1">
          <h2 className=" text-left">
            <b>My Details</b>
          </h2>
          <br />
          <div className="form-group">
            <label>Name:</label>
            <label>{profile.firstName + " " + profile.lastName}</label>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <label>{profile.email}</label>
          </div>
          <div className="form-group">
            <label>Phone No:</label>
            <label>{profile.phone}</label>
          </div>
          <button className="btn btn-secondary btn-sm ">Edit Details</button>
          <div className="form-group">
            <br />
            <a href="/change_password" className="btn btn-secondary btn-md ">
              Change Password
            </a>
          </div>
          <br />
          <br />
          <button
            className="btn btn-primary btn-lg"
            onSubmit={this.handleSubmit}
          >
            Deactivate Account
          </button>
        </div>
        <div>
          <div className="container col-md-3 offset-md-8 ">
            <label>View Bookings:</label>
            <button className="btn btn-secondary btn-sm">View</button>
            <br />
            <br />
            <div className="mybooks">
              <textarea className="form-control" rows="12" />
            </div>
            <br />
            <br />
            <div>
              <a href="/feedback" className="btn btn-primary btn-sm">
                Give Feedback
              </a>
              <a href="/faq">
                <i
                  className="far fa-question-circle icon"
                  style={{ fontSize: "40px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, dispatch) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    deleteU: currentUser => dispatch(deleteU(currentUser))
  };
};

export default connect(mapStateToProps)(MyAccount);
