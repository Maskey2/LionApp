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
            <table className="contact-table">
              <tr>
                <td>Nishma Maskey</td>
                <td>nishma.maskey@selu.edu</td>
              </tr>
              <tr>
                <td>Sijan Tiwari</td>
                <td>sijan.tiwari@selu.edu</td>
              </tr>
              <tr>
                <td>Saugat Thapa</td>
                <td>saugat.thapa-2@selu.edu</td>
              </tr>
              <tr>
                <td>Birat Lamichhane</td>
                <td>birat.lamichhane@selu.edu</td>
              </tr>
              <tr></tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
