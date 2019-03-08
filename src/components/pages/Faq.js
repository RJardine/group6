import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Faq extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/auth/login" />;
    return (
      <div>
        <div className="top-container text-center">
          <h1>
            <b> Frequently Asked Questions</b>
          </h1>
        </div>
        <div className="container">
          <h2>Do you Accept Tea/Coffee/Drinks?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae
            consequuntur laudantium incidunt! Dolor laudantium iusto aliquid
            nihil corporis repellendus provident consequatur enim ea nam? Magnam
            nesciunt libero quaerat? Ab saepe consequuntur totam similique
            nesciunt nulla obcaecati provident sequi cupiditate. Consequuntur,
            vel ipsam molestiae aspernatur quaerat odio ex id fugit totam, ullam
            accusantium iusto soluta corrupti numquam autem debitis est itaque
            ea. Repellendus illum cum tempore rerum molestiae libero voluptates
            odit sapiente maxime similique a doloremque eius, quas velit
            corporis nesciunt sequi animi dolore ducimus officia placeat quis?
            At temporibus officia sunt possimus facere voluptatem beatae
            asperiores aliquid est odio?
          </p>
          <h2>How Long Does It Take to Complete A Job?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae
            consequuntur laudantium incidunt! Dolor laudantium iusto aliquid
            nihil corporis repellendus provident consequatur enim ea nam? Magnam
            nesciunt libero quaerat? Ab saepe consequuntur totam similique
            nesciunt nulla obcaecati provident sequi cupiditate. Consequuntur,
            vel ipsam molestiae aspernatur quaerat odio ex id fugit totam, ullam
            accusantium iusto soluta corrupti numquam autem debitis est itaque
            ea. Repellendus illum cum tempore rerum molestiae libero voluptates
            odit sapiente maxime similique a doloremque eius, quas velit
            corporis nesciunt sequi animi dolore ducimus officia placeat quis?
            At temporibus officia sunt possimus facere voluptatem beatae
            asperiores aliquid est odio?
          </p>
          <h2>How Do I Contact You?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae
            consequuntur laudantium incidunt! Dolor laudantium iusto aliquid
            nihil corporis repellendus provident consequatur enim ea nam? Magnam
            nesciunt libero quaerat? Ab saepe consequuntur totam similique
            nesciunt nulla obcaecati provident sequi cupiditate. Consequuntur,
            vel ipsam molestiae aspernatur quaerat odio ex id fugit totam, ullam
            accusantium iusto soluta corrupti numquam autem debitis est itaque
            ea. Repellendus illum cum tempore rerum molestiae libero voluptates
            odit sapiente maxime similique a doloremque eius, quas velit
            corporis nesciunt sequi animi dolore ducimus officia placeat quis?
            At temporibus officia sunt possimus facere voluptatem beatae
            asperiores aliquid est odio?
          </p>
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

export default connect(mapStateToProps)(Faq);
