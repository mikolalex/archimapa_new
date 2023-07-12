import React from "react";
import "./SignIn.less";
import { useState, useRef } from "react";

const SignIn = () => {
  const [warning, setWarning] = useState(false);

  const email = useRef(null);
  const password = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!(email.current.value && password.current.value)) {
      setWarning(true);
    } else {
      setWarning(false);
      email.current.value = "";
      password.current.value = "";
    }
  };

  return (
    <div className="SignInRoot">
      <div className="form-head">
        <h2 className="form-title">Sign In</h2>
        <img src="icons/close.png" alt="" />
      </div>

      <button className="google-button">
        <img src="icons/google.png" alt="" /> Sign in with Google
      </button>
      <div className="or-block">
        <img src="img/line.png" alt="" />
        <p>OR</p>
        <img src="img/line.png" alt="" />
      </div>
      <form action="submit">
        <div className="email-input-block">
          <input type="text" placeholder="Email" ref={email} />
        </div>
        <div className="password-input-block">
          <input type="text" placeholder="Password" ref={password} />
          <img src="icons/eye.png" alt="" />
        </div>
        <div className={warning ? "warning" : "none"}>
          Please fill in all fields
        </div>
        <button
          type="submit"
          className="form-submit-button"
          onClick={(e) => {
            submitHandler(e);
          }}
        >
          Continue
        </button>
      </form>

      <div className="form-details-block">
        <div className="notice">
          <input type="checkbox" name="" id="" />
          Remember me
        </div>
        <div className="forgot-password-block">Forgot password?</div>
      </div>
      <div className="redirect">
        <p>
          Not a member yet? <span className="redirect-link">Join now </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignIn;
