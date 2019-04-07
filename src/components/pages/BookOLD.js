import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../config/fbConfig";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class BookPage extends Component {
  handleSubmit = e => {
    //e.preventDefault();
    //this.props.showServices(this.dispatch);
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/auth/login" />;

    this.handleSubmit();

    return (
      <div>
        <div className="row">
          {/*  */}
          <div className="col-md-6">
            <h2>
              {" "}
              <i className="fas fa-tools" /> Services{" "}
            </h2>
          </div>
        </div>

        {/* table */}
        <table className="table table-striped">
          <thead className="thead-inverse">
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Price</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <td>Plumbing</td>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //showServices: () => dispatch(showServices())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookPage);
