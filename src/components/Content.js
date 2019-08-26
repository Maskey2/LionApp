import React from "react";
import Welcome from "../images/welcome.jpg";

function Content() {
  return (
    <div className="content">
      <div className="home-title">Campus Events</div>
      <img src={Welcome} className="responsive" alt="Selu Welcome" />
      <div className="content-title">Welcome Week</div>
      <div className="content-subtitle">August 16 2019</div>
    </div>
  );
}
export default Content;
