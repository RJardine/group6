import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BookService extends Component {
  render() {
    return (
      <div className="card-columns">
        <Link to="/" className="card">
          <img
            src={require("../layout/images/sink.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Fix sink</h5>
            <p className="card-text">For basic sink problems.</p>
          </div>
        </Link>
        <Link to="/" className="card">
          <img
            src={require("../layout/images/sink.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Handyman</h5>
            <p className="card-text">For any basic assembling or lifting.</p>
          </div>
        </Link>
        <Link to="/" className="card">
          <img
            src={require("../layout/images/sink.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Male stripper</h5>
            <p className="card-text">5$ lap dance.</p>
          </div>
        </Link>
        <Link to="/" className="card">
          <img
            src={require("../layout/images/locksmith.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Locksmith</h5>
            <p className="card-text">For any lock issues.</p>
          </div>
        </Link>
        <Link to="/" className="card">
          <img
            src={require("../layout/images/sink.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Electric repairs</h5>
            <p className="card-text">For any electric problems.</p>
          </div>
        </Link>
        <Link to="/" className="card">
          <img
            src={require("../layout/images/sink.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Plumber</h5>
            <p className="card-text">Mario bros up in this bitch.</p>
          </div>
        </Link>
        <Link to="/" className="card">
          <img
            src={require("../layout/images/appliances.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Home Appliances</h5>
            <p className="card-text">
              This bitch can arrange IKEA furniture in seconds.
            </p>
          </div>
        </Link>
        <Link to="/" className="card">
          <img
            src={require("../layout/images/sink.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Junk removal</h5>
            <p className="card-text">For a junk-free home.</p>
          </div>
        </Link>
        <Link to="/" className="card">
          <img
            src={require("../layout/images/sink.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Cleaning</h5>
            <p className="card-text">Cleans home</p>
          </div>
        </Link>
      </div>
    );
  }
}
