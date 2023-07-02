import React from "react";
import "./SignIn.less";

const SignIn = () => {
  return (
    <div className="SignInRoot">
      <div className="sign-in-head">
        <h2 className="sign-in-title">Sign In</h2>
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
          <input type="text" placeholder="Email" />
        </div>
        <div className="password-input-block">
          <input type="text" placeholder="Password" />
          <img src="icons/eye.png" alt="" />
        </div>
        <button type="submit" className="sign-in-submit-button">
          Continue
        </button>
      </form>
      <div className="sign-in-details-block">
        <div className="remember-me-block">
          <input type="checkbox" name="" id="" />
          Remember me
        </div>
        <div className="forgot-password-block">Forgot password?</div>
      </div>
      <div className="join-now-block">
        <p>
          Not a member yet? <span className="join-now">Join now </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignIn;
