import React from "react";

function Signup() {
  return (
    <div>
      <div className="label center">
        <div className="signup-title">Login</div>

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
    </div>
  );
}
export default Signup;
