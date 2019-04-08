import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { createBooking } from "../../store/actions/bookActions";

class Book extends Component {
  state = {
    jobType: "",
    jobTime: "",
    jobPrice: "",
    jobDescription: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    street: "",
    city: "",
    postCode: ""
    // cardName: "",
    // cardNumber: "",
    // expiration: "",
    // cvv: ""
  };

  //onChange
  onChange = e => {
    const { job } = this.props;
    const addJobs = {
      jobType: job.type,
      jobPrice: job.price,
      jobTime: job.time,
      jobDescription: job.description
    };
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
      jobType: addJobs.jobType,
      jobPrice: addJobs.jobPrice,
      jobTime: addJobs.jobTime,
      jobDescription: addJobs.jobDescription
    });
  };
  //onSubmit
  onSubmit = e => {
    e.preventDefault();
    this.props.createBooking(this.state);
    this.props.history.push("/");
  };

  render() {
    //destruct props
    const { job } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            {/* sidebar */}
            <div className="col-md-4 order-md-2 mb-4">
              <hr />
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your Cart</span>
                <span className="badge badge-secondary badge-pill">1</span>
              </h4>
              <ul className="list-group mb-3" id="addJobs">
                <li className="list-group-item d-flex justify-content-between 1h-condensed">
                  <div className="">
                    <h6 className="my-0">{job.type}</h6>

                    <small className="text-muted">{job.time}</small>
                  </div>
                  <span className="text-muted">£{job.price}</span>
                </li>
              </ul>
              <hr />
              <button className="btn btn-secondary btn-block btn-large">
                Book
              </button>
            </div>
            <div className="col-md-8 order-md-1">
              <hr />
              <h3 className="mb-3">Check Out Details</h3>
              {/* USER DETAILS*/}

              <div className="row">
                <div className=" col-md-6 mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="surname"> Surname</label>
                  <input
                    type="text"
                    name="surname"
                    className="form-control"
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="street">Street</label>
                  <input
                    type="text"
                    name="street"
                    className="form-control"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="City">City</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="postCode">Zip Code</label>
                  <input
                    type="text"
                    name="postCode"
                    className="form-control"
                    onChange={this.onChange}
                    maxLength="7"
                    required
                  />
                </div>
              </div>

              <hr />
              {/* payment details */}
              <h3 className="md-3">Payment</h3>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cardName">Name on Card</label>
                  <input
                    type="text"
                    name="cardName"
                    className="form-control"
                    // onChange={this.onChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    className="form-control"
                    // onChange={this.onChange}
                    maxLength="12"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <label htmlFor="expiration">Expiration Date</label>
                  <input
                    type="month"
                    name="expiration"
                    className="form-control"
                    // onChange={this.onChange}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    className="form-control"
                    // onChange={this.onChange}
                    maxLength="4"
                    required
                  />
                </div>
              </div>
              <hr />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// props
// Book.propTypes = {
//   firestore: PropTypes.object.isRequired
// };

// const user = firebaseConnect.auth().currentUser.uid

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    bookings: state.firestore.ordered.bookings,
    job: state.firestore.ordered.job && state.firestore.ordered.job[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBooking: booking => dispatch(createBooking(booking))
    // addJobs: () => dispatch(addJobs())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => [
    { collection: "bookings", where: [["authorId", "==", props.auth.uid]] },
    { collection: "jobType", storeAs: "job", doc: props.match.params.id }
  ])
)(Book);
