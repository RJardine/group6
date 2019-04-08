import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { deleteU, updateDetails } from "../../store/actions/authActions";
import BookingList from "../bookings/BookingList";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class MyAccount extends Component {
  handleDeleteSubmit = e => {
    e.preventDefault();
    this.props.deleteU(this.dispatch);
    this.props.history.push("/");
    window.location.reload();
  };

  handleModalSubmit = x => {
    x.preventDefault();
    this.props.updateDetails(this.dispatch);
  };

  render() {
    const { auth, profile, bookings } = this.props;

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
            <label className="form-control">
              {profile.firstName + " " + profile.lastName}
            </label>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <label className="form-control">{profile.email}</label>
          </div>
          <div className="form-group">
            <label>Phone No:</label>
            <label className="form-control">{profile.phone}</label>
          </div>
          <div>
            <button
              className="btn btn-secondary btn-sm"
              data-toggle="modal"
              data-target="#editDetails-modal"
            >
              Edit Details
            </button>
          </div>

          {/* <!-- Details Modal --> */}
          <div
            className="modal fade"
            id="editDetails-modal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Edit Details
                  </h5>

                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <form id="editDetails-form">
                  <div className="modal-body">
                    <label>First Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      id="firstName-modal"
                      required
                      defaultValue={profile.firstName}
                    />
                    <br />
                    <label>Last Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      id="lastName-modal"
                      required
                      defaultValue={profile.lastName}
                    />
                    <br />
                    <label>Email:</label>
                    <input
                      className="form-control"
                      type="text"
                      id="email-modal"
                      required
                      readOnly
                      defaultValue={profile.email}
                    />
                    <br />
                    <label>Phone No:</label>
                    <input
                      className="form-control"
                      type="text"
                      id="phone-modal"
                      required
                      defaultValue={profile.phone}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onClick={this.handleModalSubmit}
                      data-dismiss="modal"
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="form-group">
            <br />
            <a href="/change_password" className="btn btn-secondary btn-md ">
              Change Password
            </a>
            <a
              href="/change_password"
              className="btn btn-secondary btn-md offset-md-1 "
            >
              Change Email
            </a>
          </div>
          <br />
          <button
            className="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#deleteAccount-modal"
          >
            Deactivate Account
          </button>
          <div
            className="modal fade"
            id="deleteAccount-modal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="deleteAccountLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Warning!</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    You are about to delete your account. Are you sure you want
                    to proceed?
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    No
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleDeleteSubmit}
                  >
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container col-md-3 offset-md-8 ">
            <h5>My Bookings:</h5>
            <div className="mybooks" id="Bookings-textArea">
              <div className="row">
                <div className="col s12 m6">
                  <BookingList bookings={bookings} />
                </div>
              </div>
            </div>
            <br />
            <div>
              <a href="/contact_us" className="btn btn-primary btn-sm">
                Give Feedback
              </a>
              <a href="/faq">
                <i
                  className="far fa-question-circle icon"
                  style={{ fontSize: "40px" }}
                />
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    bookings: state.firestore.ordered.bookings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteU: currentUser => dispatch(deleteU(currentUser)),
    updateDetails: currentUser => dispatch(updateDetails(currentUser))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => [
    { collection: "bookings", where: [["authorId", "==", props.auth.uid]] }
  ])
)(MyAccount);
