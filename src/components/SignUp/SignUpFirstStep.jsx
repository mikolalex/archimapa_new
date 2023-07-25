import "./SignUpFirstStep.less";
import React from "react";
import { useState, useRef } from "react";
import useValidation from "../../hooks/useValidation";

const SignUpFirstStep = () => {
  const emailRegExp =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  const [email, setEmail, validateEmail, emailError] = useValidation(
    "",
    (value) => (emailRegExp.test(value) ? false : "Email is not valid")
  );

  const onSubmit = (e) => {
    e.preventDefault();
    validateEmail() ? setEmail("") : null;
  };

  return (
    <div className="SignUpFirstRoot">
      <div className="form-head">
        <h2 className="form-title">Sign Up</h2>
        <img src="/icons/close.png" alt="" />
      </div>

      <button className="google-button">
        <img src="/icons/google.png" alt="" /> Sign up with Google
      </button>
      <div className="or-block">
        <img src="/img/line.png" alt="" />
        <p>OR</p>
        <img src="/img/line.png" alt="" />
      </div>
      <form action="submit">
        <div className="email-input-block">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {emailError && <div className="warning">{emailError}</div>}
        <button type="submit" className="form-submit-button" onClick={onSubmit}>
          Continue
        </button>
      </form>
      <div className="form-details-block">
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

export default SignUpFirstStep;
