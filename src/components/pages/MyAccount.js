import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { deleteU, updateDetails } from "../../store/actions/authActions";
import { viewBookings } from "../../store/actions/bookActions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class MyAccount extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.deleteU(this.dispatch);
  };

  handleModalSubmit = x => {
    x.preventDefault();
    this.props.updateDetails(this.dispatch);
  };

  handleViewBookingsSubmit = y => {
    y.preventDefault();
    this.props.viewBookings(this.dispatch);
  };

  render() {
    const { auth, profile, bookings } = this.props;

    //const bk = console.log(bookings);

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
          <button
            className="btn btn-secondary btn-sm "
            data-toggle="modal"
            data-target="#editDetails-modal"
          >
            Edit Details
          </button>
          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="editDetails-modal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Edit Details
                  </h5>

                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <form id="editDetails-form">
                  <div class="modal-body">
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
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
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
          </div>
          <br />
          <button
            className="btn btn-primary btn-lg"
            onClick={this.handleSubmit}
          >
            Deactivate Account
          </button>
        </div>
        <div>
          <div className="container col-md-3 offset-md-8 ">
            <label>View Bookings:</label>
            <button
              className="btn btn-secondary btn-sm"
              onClick={this.handleViewBookingsSubmit}
            >
              View
            </button>
            <br />
            <br />
            <div className="mybooks">
              <textarea
                id="Bookings-textArea"
                className="form-control"
                rows="12"
                readOnly
              >
                {profile.email}
              </textarea>
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

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    bookings: state.firestore.ordered
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteU: currentUser => dispatch(deleteU(currentUser)),
    updateDetails: currentUser => dispatch(updateDetails(currentUser)),
    viewBookings: currentUser => dispatch(viewBookings(currentUser))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "bookings" }])
)(MyAccount);
