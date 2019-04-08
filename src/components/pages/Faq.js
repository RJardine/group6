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
            <div className="card-title">
              What Cities do you Cover?
              <i
                onClick={this.onShowClick}
                className="fas fa-sort-down"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              doloribus aliquam sunt consequatur! Distinctio veritatis at
              suscipit assumenda, totam doloribus modi nam, fuga dicta molestias
              quia porro, voluptatibus aut. Facere?
            </div>
          </div>
        </div>
        <br />
        {/* side 2 */}
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              Payment method?
              <i
                onClick={this.onShowClick}
                className="fas fa-sort-down"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              doloribus aliquam sunt consequatur! Distinctio veritatis at
              suscipit assumenda, totam doloribus modi nam, fuga dicta molestias
              quia porro, voluptatibus aut. Facere?
            </div>
          </div>
        </div>
        <br />
        {/* side 2 */}
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              How long does the repair take?
              <i
                onClick={this.onShowClick}
                className="fas fa-sort-down"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              doloribus aliquam sunt consequatur! Distinctio veritatis at
              suscipit assumenda, totam doloribus modi nam, fuga dicta molestias
              quia porro, voluptatibus aut. Facere?
            </div>
          </div>
        </div>
        <br />
        {/* side 2 */}
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              Do you Accept Food?
              <i
                onClick={this.onShowClick}
                className="fas fa-sort-down"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              doloribus aliquam sunt consequatur! Distinctio veritatis at
              suscipit assumenda, totam doloribus modi nam, fuga dicta molestias
              quia porro, voluptatibus aut. Facere?
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
