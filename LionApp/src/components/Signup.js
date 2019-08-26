import React from "react";
import { Button, ButtonToolbar } from "react-bootstrap/Button";

function Signup() {
  return (
    <div>
      <div className="label center">
        <ul className="nav nav-tabs">
          <li className="active">
            <a data-toggle="tab" href="#home" className="label-signup">
              Login
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#menu1" className="label-signup">
              Signup
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div id="home" class="tab-pane fade in active">
            a
          </div>

          <div id="menu1" className="tab-pane fade">
            b
          </div>
        </div>
      </div>
      <form className="form">
        <label className="form-text">Email:</label>
        <div>
          <input type="text" className="text" name="email" />
        </div>
        <label className="form-text">Password:</label>
        <div>
          <input type="password" className="password" name="Password" />
        </div>
        <button className="btn">Login</button>
      </form>
    </div>
  );
}
export default Signup;
