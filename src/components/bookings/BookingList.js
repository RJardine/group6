import React from "react";
import BookingSummary from "./BookingSummary";
import { Link } from "react-router-dom";

const BookingList = ({ bookings }) => {
  return (
    <div className="booking-list section">
      {bookings &&
        bookings.map(booking => {
          return (
            <Link to={"/booking/" + booking.id} key={booking.id}>
              <BookingSummary booking={booking} />
            </Link>
          );
        })}
    </div>
  );
};

export default BookingList;
