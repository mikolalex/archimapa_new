import "./SignUpSecondStep.less";
import React from "react";
import { useState, useRef } from "react";

const SignUpSecondStep = () => {
  const [warning, setWarning] = useState({
    usernameLength: {
      error: false,
      text: "Username must be no shorter than 6 characters",
    },
    usernameSymbols: {
      error: false,
      text: "Username must consist only of letters, numbers and _.",
    },
    passwordLength: {
      error: false,
      text: "Password must be no shorter than 6 characters",
    },
    passwordMatch: {
      error: false,
      text: "Passwords do not match",
    },
  });

  const clearAllWarnings = () => {
    setWarning((prev) => ({
      ...prev,
      usernameLength: { ...prev.usernameLength, error: false },
      usernameSymbols: { ...prev.usernameSymbols, error: false },
      passwordLength: { ...prev.passwordLength, error: false },
      passwordMatch: { ...prev.passwordMatch, error: false },
    }));
  };

  const usernameValue = useRef(null);
  const passwordValue = useRef(null);
  const passwordCheckValue = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    clearAllWarnings();

    const regExp = /^[0-9a-zа-я_]+$/i;

    // username symbols check
    if (!regExp.test(usernameValue.current.value)) {
      setWarning((prev) => ({
        ...prev,
        usernameSymbols: { ...prev.usernameSymbols, error: true },
      }));
    }
    // username length check
    else if (
      usernameValue.current.value.length < 6 ||
      !usernameValue.current.value
    ) {
      setWarning((prev) => ({
        ...prev,
        usernameLength: { ...prev.usernameLength, error: true },
      }));
    }
    // password length check
    else if (
      passwordValue.current.value.length < 6 ||
      !passwordValue.current.value
    ) {
      setWarning((prev) => ({
        ...prev,
        passwordLength: { ...prev.passwordLength, error: true },
      }));
    }
    // password match check
    else if (passwordValue.current.value !== passwordCheckValue.current.value) {
      setWarning((prev) => ({
        ...prev,
        passwordMatch: { ...prev.passwordMatch, error: true },
      }));
    }
    //all good
    else {
      clearAllWarnings();
      usernameValue.current.value = "";
      passwordValue.current.value = "";
      passwordCheckValue.current.value = "";
    }
  };

  return (
    <div className="SignUpSecondRoot">
      <div className="form-head">
        <h2 className="form-title">Sign Up</h2>
        <img src="icons/close.png" alt="" />
      </div>

      <form action="submit">
        <div className="email-input-block">
          <input type="text" placeholder="Username" ref={usernameValue} />
          <div className={warning.usernameLength.error ? "warning" : "none"}>
            {warning.usernameLength.text}
          </div>
          <div className={warning.usernameSymbols.error ? "warning" : "none"}>
            {warning.usernameSymbols.text}
          </div>
        </div>
        <div className="password-input-block">
          <input type="text" placeholder="Password" ref={passwordValue} />
          <img src="icons/eye.png" alt="" />
        </div>
        <div className="password-input-block">
          <input
            type="text"
            placeholder="Repeat password"
            ref={passwordCheckValue}
          />
          <img src="icons/eye.png" alt="" />
        </div>
        <div className={warning.passwordLength.error ? "warning" : "none"}>
          {warning.passwordLength.text}
        </div>
        <div className={warning.passwordMatch.error ? "warning" : "none"}>
          {warning.passwordMatch.text}
        </div>
        <button
          type="submit"
          className="form-submit-button"
          onClick={(e) => submitHandler(e)}
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
