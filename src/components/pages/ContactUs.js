import React, { Component } from "react";
import { submitMessage } from "../../store/actions/contactUsActions";
import { connect } from "react-redux";

export class ContactUs extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  //onChange
  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //onSubmit
  onSubmit = e => {
    e.preventDefault();
    this.props.submitMessage(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <i className="fa fa-envelope" /> Contact us
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  {/* name */}
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      onChange={this.onChange}
                      aria-describedby="emailHelp"
                      placeholder="Enter name"
                      required
                    />
                  </div>
                  {/* email */}
                  <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      onChange={this.onChange}
                      aria-describedby="emailHelp"
                      placeholder="Enter Email"
                      required
                    />
                  </div>
                  {/* message */}
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      onChange={this.onChange}
                      rows="6"
                      placeholder="Enter Message"
                      required
                    />
                  </div>
                  <div className="mx-auto">
                    <button type="submit" className="btn btn-dark text-right">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* side 2 Address */}
          <div className="col-12 col-sm-5">
            <div className="card bg-light mb-3">
              <div className="card-header bg-success text-white text-uppercase">
                <i className="fa fa-home" /> Address
              </div>
              <div className="card-body">
                <p>Vicarage St</p>
                <p>Luton LU1 3JU</p>
                <p>UK</p>
                <p>Email : staff@knockknock.com</p>
                <p>Tel. +44 (0)1582 489399</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39397.5322801289!2d-0.4629550552478652!3d51.89115382472011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876360018f62c49%3A0x33fa5303edefd681!2sLuton!5e0!3m2!1sen!2suk!4v1554572912386!5m2!1sen!2suk"
                  width="400"
                  height="300"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <br />
          <div className="col-12 copyright mt-3">
            <p className="text-right text-muted">
              created with <i className="fa fa-heart" /> by{" "}
              <a href="/">
                <i>knock knock</i>
              </a>{" "}
              | <span>v. 1.0</span>
            </p>
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

const mapDispatchToProps = dispatch => {
  return {
    submitMessage: contactus => dispatch(submitMessage(contactus))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ContactUs);
