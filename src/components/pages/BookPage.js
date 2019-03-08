import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../config/fbConfig";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class BookPage extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Specialists");
    this.unsubscribe = null;
    this.state = {
      Specialists: []
    };
  }
  onCollectionUpdate = querySnapshot => {
    const Specialists = [];
    querySnapshot.forEach(doc => {
      const { Name, Speciality, Location, Cost } = doc.data();
      Specialists.push({
        key: doc.id,
        doc, // DocumentSnapshot
        Name,
        Speciality,
        Location,
        Cost
      });
    });
    this.setState({
      Specialists
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/auth/login" />;

    return (
      <div>
        <div className="container">
          <h3>
            Search for Specalist in your Location{" "}
            <i className="fas fa-search" />
          </h3>
          {/* <!-- Search form --> */}
          <form className="form-inline my-2 my-lg-3">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {" "}
                <i className="fas fa-users" /> Specalist's{" "}
              </h2>
            </div>
            <div className="col-md-6">
              <h5 className="text-right text-secondary">
                Available{""}
                <span className="text-primary">
                  {/* £{parseFloat(totalOwed).toFixed(2)} */}
                </span>
              </h5>
            </div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name:</th>
                <th>Specality:</th>
                <th>Location:</th>
                <th>Cost:</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.Specialists.map(spec => (
                <tr>
                  <td>{spec.Name} </td>
                  <td>{spec.Speciality} </td>
                  <td>{spec.Location}</td>
                  <td>£{parseFloat(spec.Cost).toFixed(2)}</td>
                  <td>
                    <Link to="/" className="btn btn-primary btn-sm">
                      <i className="fas fa-arrow-circle-right" />
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default compose(connect(mapStateToProps))(BookPage);
