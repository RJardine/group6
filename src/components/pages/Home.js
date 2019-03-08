import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Home Page</h1>
          <section className="top-container">
            <header className="showcase">
              <h1>Knock Knock</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                eaque non iure sed voluptas eveniet obcaecati quis, praesentium
                doloribus eum.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </header>
            {/* <!-- Upfront  --> */}
            <div className="top-box top-box-a">
              <h4>Upfront</h4>
              <p className="price">£30/2hr</p>
              <a href="#" class="btn btn-primary">
                Search Now
              </a>
            </div>
            {/* <!-- full price  --> */}
            <div className="top-box top-box-b">
              <h4>Full Price</h4>
              <p className="price">£60/2hr</p>
              <a href="#" className="btn btn-primary">
                Search Now
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                mollitia?
              </p>
            </div>
            {/* <!-- tools box --> */}
            <div className="box">
              <i className="fas fa-tools fa-4x" />
              <h3>Best Tools</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                mollitia?
              </p>
            </div>
            {/* <!-- contact us box--> */}
            <div className="box">
              <i className="fas fa-headset fa-4x" />
              <h3>Contact Us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                mollitia?
              </p>
            </div>
            {/* <!-- Customer Satisfactory box--> */}
            <div className="box">
              <i className="fas fa-smile-beam fa-4x" />
              <h3>Customer Satisfactory</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                mollitia?
              </p>
            </div>
          </section>
          <br />
          {/* <!-- footer --> */}
          <footer>
            <p>KNOCK KNOCK &copy; 2019</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              vero eligendi laboriosam repellendus nemo dignissimos id, in eius
              quos quia minima cum officiis voluptate, praesentium accusantium.
              Eos libero ea sed?
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Home;
