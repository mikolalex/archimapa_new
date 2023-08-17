import React from "react";
import "./SignIn.less";
import useValidation from "../../hooks/useValidation";
import { useState } from "react";
import Loading from "../Loading/Loading";

const SignIn = ({
  setIsSignInOpen,
  objToFormData, 
  setInfoText,
  isLoading,
  setIsLoading,
}) => {
  const [email, setEmail, validateEmail, emailError] = useValidation(
    "",
    (value) => (value ? false : "Please enter the email")
  );

  const [
    password,
    setPassword,
    validatePassword,
    passwordError,
    setPasswordError,
  ] = useValidation("", (value) =>
    value ? false : "Please enter the password"
  );

  async function postData(url, data) {
    setIsDisabled(true);
    setIsLoading(true);
    fetch(url, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((json) =>
        json.token
          ? (sessionStorage.setItem("signInToken", json.token),
            setInfoText("you are successfully logged in"),
            setIsSignInOpen(false),
            setIsLoading(false))
          : (setPasswordError("Incorrect username or password"),
            setIsDisabled(false),
            setIsLoading(false))
      );
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (validateEmail() && validatePassword()) {
      postData(
        "https://map.transsearch.net/auth/login",
        objToFormData({
          username: email,
          password: password,
        })
      );
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="SignInRoot">
      <div className="form-head">
        <h2 className="form-title">Sign In</h2>
        <img
          src="/icons/close.png"
          alt=""
          onClick={() => {
            setIsSignInOpen(false);
          }}
        />
      </div>

      <button className="google-button">
        <img src="/icons/google.png" alt="" /> Sign in with Google
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
            placeholder="Login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="warning">{emailError}</div>}
        </div>
        <div className="password-input-block">
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            src="/icons/eye.png"
            alt=""
            onClick={() => setIsPasswordVisible((prev) => !prev)}
          />
          {passwordError && <div className="warning">{passwordError}</div>}
        </div>
        <div className="loading-block">
          {isLoading && <Loading type={"bubbles"} color={"#ae7743"} />}
        </div>

        <button
          type="submit"
          className={
            isDisabled ? "form-submit-button disabled" : "form-submit-button"
          }
          onClick={onSubmit}
          disabled={isDisabled}
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
          Not a member yet? <span className="redirect-link">Join now </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
