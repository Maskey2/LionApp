import React from "react";
import QuickLinks from "../components/QuickLinks";
import Content from "../components/Content";
import Signup from "../components/Signup";

import { FaEnvelope, FaLocationArrow } from "react-icons/fa/index";

function MainContent() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 b">
            <QuickLinks />
          </div>
          <div className="col-md-8 b">
            <Content />
          </div>
          <div className="col-md-2 b">
            <Signup />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainContent;
