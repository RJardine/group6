import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../store/actions/authActions";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.register(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <div className="container">
          {/* <button type="button" className="btn btn-link offset-md-6"> 
            <Link to="/auth/login">Click Here To Login</Link>
    </button>*/}
          <div className="col-md-4 offset-md-4">
            <h3 className="text-left">Register </h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  onChange={this.handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  onChange={this.handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  onChange={this.handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  onChange={this.handleChange}
                  className="form-control"
                  required
                />
              </div>
              <button className="btn btn-primary btn-lg btn-block">
                Register
              </button>
              <div className="center red-text">
                {authError ? <p>{authError}</p> : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: newUser => dispatch(register(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
