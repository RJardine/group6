import React from "react";
import moment from "moment";

const BookingSummary = ({ booking }) => {
  return (
    <div className="card z-depth-0 booking-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{booking.jobType}</span>
        <p>
          Receipt to {booking.authorFirstName} {booking.authorLastName}
        </p>
        <p className="grey-text">
          {moment(booking.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default BookingSummary;
