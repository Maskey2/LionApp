import React from "react";
import Header from "../components/Header";
import QuickLinks from "../components/QuickLinks";

function Classes() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 b">
            <QuickLinks />
          </div>
          <div className="col-md-10 b">
            <div className="classes-title">Classes</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Classes;
