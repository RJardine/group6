import React, { Component } from "react";
import AppNavbar from "../layout/AppNavbar";
import { Link } from "react-router-dom";

class BookPage extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
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
              <tr>
                <td>Doyen </td>
                <td>Plumber </td>
                <td>Arcadia</td>
                <td>£100</td>
                <td>
                  <Link to="/" className="btn btn-primary btn-sm">
                    <i className="fas fa-arrow-circle-right" />
                    Details
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Shlippy </td>
                <td>Builder </td>
                <td>Porto</td>
                <td>£0.20</td>
                <td>
                  <Link to="/" className="btn btn-primary btn-sm">
                    <i className="fas fa-arrow-circle-right" />
                    Details
                  </Link>
                </td>
              </tr>
              <tr>
                <td>OneplusOneisSix </td>
                <td>Pole Dancer </td>
                <td>Red District</td>
                <td>10p</td>
                <td>
                  <Link to="/" className="btn btn-primary btn-sm">
                    <i className="fas fa-arrow-circle-right" />
                    Details
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default BookPage;
