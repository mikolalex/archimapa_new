import "./SignUpSecondStep.less";

import React from "react";

const SignUpSecondStep = () => {
  return (
    <div className="SignUpSecondRoot">
      <div className="sign-up-head">
        <h2 className="sign-up-title">Sign Up</h2>
        <img src="icons/close.png" alt="" />
      </div>

      <form action="submit">
        <div className="email-input-block">
          <input type="text" placeholder="Username" />
        </div>
        <div className="password-input-block">
          <input type="text" placeholder="Password" />
          <img src="icons/eye.png" alt="" />
        </div>
        <div className="password-input-block">
          <input type="text" placeholder="Repeat password" />
          <img src="icons/eye.png" alt="" />
        </div>
        <button type="submit" className="sign-up-submit-button">
          Continue
        </button>
      </form>
      <div className="sign-up-details-block">
        <div className="notice">
          By joining I agree to receive emails from Arhimapa
        </div>
      </div>
      <div className="redirect">
        <p>
          Already a member? <span className="redirect-link"> Sign in </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpSecondStep;
