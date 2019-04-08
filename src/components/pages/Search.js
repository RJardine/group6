import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

class Search extends Component {
  render() {
    //destruct props
    const { jobType } = this.props;

    if (jobType) {
      return (
        <div>
          <div className="container">
            <div className="row">
              {/*  */}
              <div className="col-md-6">
                <h2>
                  {" "}
                  <i className="fas fa-tools" /> Luton Services{" "}
                </h2>
              </div>
            </div>
            <hr />
            {/* table */}
            <div className="row">
              <div className="col-sm-auto">
                <div
                  className="card-columns"
                  //style={{ columnCount: "", marginLeft: "70px" }}
                >
                  {jobType.map(job => (
                    <div
                      className="card text-white bg-dark mb-3"
                      style={{ maxWidth: "18rem" }}
                      key={job.id}
                    >
                      <img
                        id="brand-image"
                        src={job.image}
                        alt="Home"
                        style={{ width: "30", height: "30" }}
                      />{" "}
                      <div className="card-header">{job.type}</div>
                      <div className="card-body">
                        <h5 className="card-title">{job.location}</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link
                          to={`/job/${job.id}`}
                          className="btn btn-secondary btn-sm"
                        >
                          <i className="fas fa-arrow-circle-right" /> Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1 className="container">Loading....</h1>;
    }
  }
}
// props
Search.propTypes = {
  firestore: PropTypes.object.isRequired,
  jobType: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "jobType" }]),
  connect((state, props) => ({
    jobType: state.firestore.ordered.jobType
  }))
)(Search);
