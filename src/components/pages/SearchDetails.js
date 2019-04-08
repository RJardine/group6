import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

class SearchDetails extends Component {
  render() {
    //   deco
    const { job } = this.props;
    if (job) {
      return (
        <div>
          <div className="row">
            {/*  */}
            <div className="col-md-6">
              <Link to="/dashboard" className="btn btn-link">
                <i className="fas fa-arrow-circle-left" /> Back to Jobs
              </Link>
            </div>
            {/*  */}
            <div className="col-md-6">
              <div className="btn-group float-right">
                <Link to={`/${job.id}/book`} className="btn btn-secondary">
                  Book
                </Link>
                {/* <button className="btn btn-danger" /> */}
              </div>
            </div>
          </div>
          <hr />
          {/* card */}
          <div className="card">
            <h2 className="card-header">
              {job.type} {}
            </h2>
            <div className="card-body">
              <div className="row">
                <div className="col-md-8 col-sm-6">
                  <h4>
                    Job ID: <span className="text-secondary">{job.id}</span>{" "}
                  </h4>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className="pull-right">
                    Price: £{parseFloat(job.price).toFixed(2)}
                  </h3>
                  {/*  */}
                </div>
              </div>
              <hr />
              <ul className="list-group">
                <li className="list-group-item">
                  {" "}
                  <b>Location =></b> {job.location}
                </li>
                <li className="list-group-item">
                  <b>Description =></b> {job.description}
                </li>
                <li className="list-group-item">
                  {" "}
                  <b>Time =></b> {job.time}
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="container">Loading...</div>;
    }
  }
}

// props
SearchDetails.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    { collection: "jobType", storeAs: "job", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    job: ordered.job && ordered.job[0]
  }))
)(SearchDetails);
