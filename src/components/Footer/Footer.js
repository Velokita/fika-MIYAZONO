import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
class Footer extends Component {
  render() {
    return (
      <Navbar bg='white' fixed="bottom" className="justify-content-center" expand="lg">
        <span className="text-muted">
          <p>
            &copy; {new Date().getFullYear()} FiKa Delicatessen @
            CoderHouse-React-13205{" "}
          </p>
        </span>
      </Navbar>
    );
  }
}
export default Footer;
