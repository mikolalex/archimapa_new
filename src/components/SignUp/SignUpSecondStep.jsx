import "./SignUpSecondStep.less";
import React from "react";
import useValidation from "../../hooks/useValidation";
import { useState } from "react";
import Loading from "../Loading/Loading";

const SignUpSecondStep = ({
  setIsSignUpSecondStepOpen,
  emailToSend,
  setInfoText,
  isLoading,
  setIsLoading,
}) => {
  const regExp = /^[0-9a-zа-я_]+$/i;

  const [passwordCheck, setPasswordCheck] = useState("");

  const [username, setUsername, validateUsername, usernameError] =
    useValidation("", (value) => {
      if (!regExp.test(username)) {
        return "Username must consist only of letters, numbers and _.";
      }
      if (value.length < 6 || !value) {
        return "Username must be no shorter than 6 characters";
      }
      return false;
    });

  const [
    password,
    setPassword,
    validatePassword,
    passwordError,
    setPasswordError,
  ] = useValidation("", (value) => {
    if (value.length < 6 || !value) {
      return "Password must be no shorter than 6 characters";
    }
    if (value !== passwordCheck) {
      return "Passwords do not match";
    }
    return false;
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (validateUsername() && validatePassword()) {
      postData("https://map.transsearch.net/auth/register", {
        email: emailToSend,
        username: username,
        password: password,
      });
    }
  };

  async function postData(url, data) {
    setIsDisabled(true);
    setIsLoading(true);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response) =>
      response
        ? (setIsSignUpSecondStepOpen(false),
          setIsLoading(false),
          setInfoText("you are successfully registered"))
        : (setPasswordError("user already exist"),
          setIsDisabled(false),
          setIsLoading(false))
    );
  }

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="SignUpSecondRoot">
      <div className="form-head">
        <h2 className="form-title">Sign Up</h2>
        <img
          src="/icons/close.png"
          alt=""
          onClick={() => setIsSignUpSecondStepOpen(false)}
        />
      </div>

      <form action="submit">
        <div className="email-input-block">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <div className="warning">{usernameError}</div>}
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
        </div>
        <div className="password-input-block">
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Repeat password"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
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
