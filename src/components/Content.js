import React from "react";
import Welcome from "../images/welcome.jpg";
import Lionup from "../images/lionup.jpg";

function Content() {
  return (
    <div className="content">
      <div className="home-title">Campus Events</div>
      <img src={Welcome} className="responsive" alt="Selu Welcome" />
      <div className="content-title">Welcome Week</div>
      <div className="content-subtitle">August 16 2019</div>
      <hr></hr>
      <img src={Lionup} className="responsive" alt="Selu Lion up" />
      <div className="content-title">LION UP TUESDAYS</div>
      <div className="content-subtitle">
        Get caught with Lion Pride on Tuesdays! Southeastern encourages everyone
        on campus to promote pride in Southeastern by proudly wearing green and
        gold every Tuesday. Share your photos with all of Lion Nation using
        #LionUpTuesday and #TeamSoutheastern.
      </div>
    </div>
  );
}
export default Content;
