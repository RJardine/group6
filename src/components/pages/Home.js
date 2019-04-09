import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Welcome</h1>
          <section className="top-container">
            <header className="showcase">
              <h1>Knock Knock</h1>
              <p>
                We supply a wide range of services directly to your home. We
                take care of everything for you from plumbing to engineering.
                Book now and leave the rest to us!
              </p>
              <a href="/about_us" className="btn btn-primary">
                Read More
              </a>
            </header>
            {/* <!-- book now  --> */}
            <div className="top-box top-box-a">
              {/* <h4>Request Service</h4> */}
              <p className="price">Request Service</p>
              <a href="/bookpage" className="btn btn-primary">
                Book Now
              </a>
            </div>
            {/* <!-- Upfront  --> */}
            <div className="top-box top-box-b">
              <h4>Upfront Payment</h4>
              {/* <p className="price">30%</p> */}
              <a href="/faq" className="btn btn-primary">
                Why do I have to pay upfront?
              </a>
            </div>
            <br />
          </section>
          {/* <!-- boxes section --> */}
          <section className="boxes">
            {/* <!-- time box --> */}
            <div className="box">
              <i className="far fa-4x fa-clock" />
              <h3>Quick Time</h3>
              <p>
                We pride ourselves in our ability to always be on time and get
                quickly to your home.
              </p>
            </div>
            {/* <!-- tools box --> */}
            <div className="box">
              <i className="fas fa-tools fa-4x" />
              <h3>Best Tools</h3>
              <p>
                Our repairers are equiped with high end tools to ensure all your
                repairs go smoothly.
              </p>
            </div>
            {/* <!-- contact us box--> */}
            <div className="box">
              <i className="fas fa-headset fa-4x" />
              <h3>Contact Us</h3>
              <p>
                Have a question? Maybe you would like to give us some feedback.
                Don't hesitate to contact us.
                <br />
                <br />
                <a href="/contact_us">Contact us</a>
              </p>
            </div>
            {/* <!-- Customer Satisfactory box--> */}
            <div className="box">
              <i className="fas fa-smile-beam fa-4x" />
              <h3>Customer Satisfaction</h3>
              <p>
                Customers are the most important part of our business, so we try
                to follow high standards regarding their satisfaction
              </p>
            </div>
          </section>
          <br />
          {/* <!-- footer --> */}
          <footer>
            <hr />
            <p>KNOCK KNOCK SERVICES &copy; 2019</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Home;
