import React from "react";

export default function About() {
  return (
    <div>
      <h1 className="display-4">About Knock Knock</h1>
      <p className="lead">
        We are a business that revolves around providing our customers with home
        services. We strive to help our customers by helping with tasks around
        the house. Knock Knock Services allows you to book one of our many
        services in just seconds.
      </p>
      <img
        src={require("../../components/layout/images/adults-analyzing-brainstorming-1385633.jpg")}
        alt="..."
      />
      <p className="text-secondary">Version 1.0.0</p>
      {/* <!-- footer --> */}
      <footer>
        <hr />
        <p>KNOCK KNOCK SERVICES &copy; 2019</p>
      </footer>
    </div>
  );
}
