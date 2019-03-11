import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Receipts extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/auth/login" />;
    return (
      <div>
        <div className="container offset-md-1 col-md-4">
          <h2>Receipts</h2>
          <i class="fas fa-plus-circle icon" style={{ fontSize: "60px" }} />
          <label style={{ fontSize: "20px" }}>New Message</label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Receipts);
