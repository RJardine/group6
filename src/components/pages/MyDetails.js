import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteU, updateDetails } from "../../store/actions/authActions";
import BookingList from "../bookings/BookingList";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class MyDetails extends Component {
  handleDeleteSubmit = e => {
    e.preventDefault();
    this.props.deleteU(this.dispatch);
    this.props.history.push("/auth/login");
    window.location.reload();
  };

  handleModalSubmit = x => {
    x.preventDefault();
    this.props.updateDetails(this.dispatch);
  };

  render() {
    const { profile, bookings } = this.props;

    return (
      <div>
        <div className="row">
          {/* My Details section */}
          <div className="col-sm">
            <div className="card">
              <div className="card-body">
                <h4 className="text-center">My Details</h4>
                {/* Name */}
                <div className="form-group">
                  <label>Name:</label>
                  <label className="form-control">
                    {profile.name + " " + profile.surname}
                  </label>
                </div>
                {/* Email */}
                <div className="form-group">
                  <label>Email:</label>
                  <label className="form-control">{profile.email}</label>
                </div>
                {/* Phone Number */}
                <div className="form-group">
                  <label>Phone No:</label>
                  <label className="form-control">{profile.phone}</label>
                </div>
                {/* Edit Button */}
                <button
                  className="btn btn-secondary btn-block"
                  data-toggle="modal"
                  data-target="#editDetails-modal"
                >
                  Edit Details
                </button>

                {/* Delete Button */}
                <button
                  className="btn btn-primary btn-block"
                  data-toggle="modal"
                  data-target="#deleteAccount-modal"
                >
                  Deactivate Account
                </button>
              </div>
            </div>
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
                      defaultValue={profile.name}
                    />
                    <br />
                    <label>Last Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      id="lastName-modal"
                      required
                      defaultValue={profile.surname}
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
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Delete Modal */}
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
          {/* My Receipts section */}
          <div className="col-sm">
            <div className="card" id="navbar2">
              <div className="card-body">
                <h4 className="card-title">
                  Receipts <i className="fas fa-receipt" />
                </h4>
                <BookingList bookings={bookings} />
              </div>
            </div>
            <hr />
            <a href="/faq">
              <i
                className="far fa-question-circle icon float-right"
                style={{ fontSize: "40px", marginLeft: "40px" }}
              />
            </a>
            <a
              href="/contact_us"
              className="btn btn-primary btn-sm float-right"
            >
              Give Feedback
            </a>
          </div>
        </div>
        {/* <!-- footer --> */}
        <footer>
          <hr />
          <p>KNOCK KNOCK SERVICES &copy; 2019</p>
        </footer>
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
)(MyDetails);
