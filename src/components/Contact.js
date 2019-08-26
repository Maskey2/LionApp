import React from "react";
import Header from "../components/Header";
import QuickLinks from "../components/QuickLinks";

function Contact() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 b">
            <QuickLinks />
          </div>
          <div className="col-md-10 b">
            <div className="contact-title">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
