import "./SignUpSecondStep.less";
import React from "react";
import { useUsernameFormError } from "../../hooks/useUsernameFormError";
import { usePasswordFormError } from "../../hooks/usePasswordFormError";

const SignUpSecondStep = () => {
  const [usernameValue, setUsernameValue, validateUsername, usernameError] =
    useUsernameFormError("");
  const [
    passwordValue,
    setPasswordValue,
    passwordCheckValue,
    setPasswordCheckValue,
    validatePassword,
    passwordError,
  ] = usePasswordFormError("", "");

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateUsername() && validatePassword()) {
      setUsernameValue("");
      setPasswordValue("");
      setPasswordCheckValue("");
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
          <input
            type="text"
            placeholder="Username"
            value={usernameValue}
            onChange={(e) => setUsernameValue(e.target.value)}
          />
          {usernameError && <div className="warning">{usernameError}</div>}
        </div>
        <div className="password-input-block">
          <input
            type="text"
            placeholder="Password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <img src="icons/eye.png" alt="" />
        </div>
        <div className="password-input-block">
          <input
            type="text"
            placeholder="Repeat password"
            value={passwordCheckValue}
            onChange={(e) => setPasswordCheckValue(e.target.value)}
          />
          <img src="icons/eye.png" alt="" />
          {passwordError && <div className="warning">{passwordError}</div>}
        </div>

        <button
          type="submit"
          className="form-submit-button"
          onClick={(e) => onSubmit(e)}
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
