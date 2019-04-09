import React, { Component } from "react";

export class Faq extends Component {
  state = {
    showContactInfo: false
  };

  // onclick event
  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    return (
      <div>
        <h2 className="">Frequently Asked Questions</h2>
        <br />
        {/* side 2 */}
        <div className="card">
          <div className="card-body">
            <div className="card-title">What Cities do you Cover?</div>
            <div className="container">
              For the moment, only Luton (UK), hopefully in the future we will
              be able to spread out to more cities or countries.
            </div>
          </div>
        </div>
        <br />
        {/* side 2 */}
        <div className="card">
          <div className="card-body">
            <div className="card-title">Why do I have to pay beforehand?</div>
            <div className="container">
              We require you to pay beforehand to make sure that someone is at
              home to open the door for our professionals. It's unfortunate when
              our professionals travel all the way to your home just to find
              that no one is home to let him work.
            </div>
          </div>
        </div>
        <br />
        {/* side 2 */}
        <div className="card">
          <div className="card-body">
            <div className="card-title">How long does the repair take?</div>
            <div className="container">
              The repair time depends on what needs repairing. Average repair
              time is indicated in each service description.
            </div>
          </div>
        </div>
        <br />
        {/* side 2 */}
        <div className="card">
          <div className="card-body">
            <div className="card-title">Do you Accept Food?</div>
            <div className="container">
              We only hire repairers that are disciplined and have nothing but
              respect towards our customers, so normally all repairers will
              decline any food or drink offered to them out of respect and
              security as well.
            </div>
          </div>
        </div>
        {/* <!-- footer --> */}
        <footer>
          <hr />
          <p>KNOCK KNOCK SERVICES &copy; 2019</p>
        </footer>
      </div>
    );
  }
}

export default Faq;
