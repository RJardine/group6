import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const BookingDetails = props => {
  const { booking, auth } = props;
  if (!auth.uid) return <Redirect to="/auth/login" />;
  if (booking) {
    return (
      <div className="container section booking-details ">
        <div className="card z-depth-0 ">
          <div className="card-content">
            <span className="card-title">{booking.jobType}</span>
            <p>{booking.jobDescription}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Receipt to {booking.authorFirstName} {booking.authorLastName}
            </div>
            <div>{moment(booking.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading booking...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const bookings = state.firestore.data.bookings;
  const booking = bookings ? bookings[id] : null;
  return {
    booking: booking,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "bookings"
    }
  ])
)(BookingDetails);
