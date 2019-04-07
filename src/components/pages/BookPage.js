import React, { Component } from "react";
import { connect } from "react-redux";
import { createBooking } from "../../store/actions/bookActions";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class BookPage extends Component {
  state = {
    title: "",
    content: "",
    fName: "",
    lName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createBooking(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth, profile } = this.props;
    console.log(profile.email);
    if (!auth.uid) return <Redirect to="/auth/login" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Booking</h5>
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">Booking Title</label>
          </div>
          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="content">Booking Content</label>
          </div>
          <div className="input-field">
            <input type="text" id="fName" onChange={this.handleChange} />
            <label htmlFor="title">First Name</label>
          </div>
          <div className="input-field">
            <input type="text" id="lName" onChange={this.handleChange} />
            <label htmlFor="title">Last Name</label>
          </div>
          <div className="input-field">
            <input type="text" id="email" onChange={this.handleChange} />
            <label htmlFor="title">Email</label>
          </div>
          <div className="input-field">
            <input type="text" id="phone" onChange={this.handleChange} />
            <label htmlFor="title">Phone Number</label>
          </div>
          <div className="input-field">
            <input type="text" id="street" onChange={this.handleChange} />
            <label htmlFor="title">Street</label>
          </div>
          <div className="input-field">
            <input type="text" id="city" onChange={this.handleChange} />
            <label htmlFor="title">City</label>
          </div>
          <div className="input-field">
            <input type="text" id="zip" onChange={this.handleChange} />
            <label htmlFor="title">ZIP code</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
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
    createBooking: booking => dispatch(createBooking(booking))
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
)(BookPage);
