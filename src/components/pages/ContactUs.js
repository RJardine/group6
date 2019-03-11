import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    return (
      <div>
        <div className="container offset-md-1 col-md-4 contactus1">
          <h2 className=" text-left">
            <b> Get in Touch</b>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae
            consequuntur laudantium incidunt! Dolor laudantium iusto aliquid
            nihil corporis repellendus provident consequatur enim ea nam? Magnam
            nesciunt libero quaerat?
          </p>
          <br />
          <div className="form-group">
            <input
              type="text"
              id="Name"
              className="form-control"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              type="textarea"
              id="message"
              className="form-control"
              rows="4"
              placeholder="Message"
              required
            />
          </div>
          <button className="btn btn-primary btn-lg btn-block">Submit</button>
        </div>
        <div>
          <div className="container col-md-4 offset-md-7 cstmCI">
            <h2>
              <b> Contact Information</b>
            </h2>
            <div className="cstmCI2">
              <p>
                For any other queries please contact us at:
                <a href=""> queries@knockknock.com</a>
              </p>
              <br />
              <label>Address:</label>
              <br />
              <a href="https://www.google.com/maps/place/University+of+Bedfordshire/@51.8769745,-0.4113219,16.25z/data=!4m5!3m4!1s0x487648412f849b6f:0x62ef34e0d59a13ad!8m2!3d51.8778604!4d-0.4092917">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                minus liberoturi necessitatibus porro similibus optio
                repudiandae facilis ipsum? Voluptatem, iure!
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
