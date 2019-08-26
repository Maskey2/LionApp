import React from "react";
import Welcome from "../images/welcome.jpg";

function Content() {
  return (
    <div className="content">
      <img src={Welcome} className="responsive" alt="Selu Welcome" />
      <div className="content-title">Welcome Week</div>
    </div>
  );
}
export default Content;
