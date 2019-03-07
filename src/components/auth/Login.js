import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <div className="container">
          <button type="button" className="btn btn-link offset-md-6">
            <Link to="/auth/register">Create A New Account </Link>
          </button>
          <br />
          <br />
          <div className="col-md-4 offset-md-4">
            <h1 className="text-left">Log in </h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email: </label>
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
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" />
                <label htmlFor="checkbox">Remember Me</label>
              </div>
              <button className="btn btn-primary btn-lg btn-block">
                Login
              </button>
              <div className="center red-text">
                {authError ? <p>{authError}</p> : null}
              </div>
              <button type="button" className="btn btn-link">
                <Link to="/auth/resetpassword">Forgot Password?</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: creds => dispatch(login(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
