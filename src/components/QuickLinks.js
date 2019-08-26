import React from "react";
import Leonet from "../images/leonet.png";
import Moodle from "../images/moodle.png";
import Time from "../images/timeandlabor.png";
import Webmail from "../images/webmail.png";

function QuickLinks() {
  return (
    <div className="center">
      <div className="label-quick-link">Quick Links</div>
      <a href="https://www.southeastern.edu/leonet/">
        <img src={Leonet} className="quick-link-image" alt="Selu Leonet" />
      </a>
      <a href="https://moodle.selu.edu/moodle/">
        <img src={Moodle} className="quick-link-image" alt="Selu Moodle" />
      </a>
      <a href="https://www2.southeastern.edu/external/google_login/">
        <img src={Webmail} className="quick-link-image" alt="Selu Webmail" />
      </a>
      <a href="https://psrv8.selu.edu/psp/hrprd/EMPLOYEE/HRMS/h/?tab=DEFAULT&cmd=login&languageCd=ENG&">
        <img src={Time} className="quick-link-image" alt="Selu Time" />
      </a>
    </div>
  );
}
export default QuickLinks;
