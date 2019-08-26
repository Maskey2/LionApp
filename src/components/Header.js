import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="jumbotron title">LionApp</div>

      <div className="nav">
        <div className="nav-items">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </div>

        <div className="nav-items">
          <NavLink to="/Classes" exact>
            Classes
          </NavLink>
        </div>

        <div className="nav-items">
          <NavLink to="/Contact" exact>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Header;
