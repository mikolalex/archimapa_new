import "./SignUpSecondStep.less";
import React from "react";
import useValidation from "../../hooks/useValidation";

const SignUpSecondStep = () => {
  const regExp = /^[0-9a-zа-я_]+$/i;

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
    passwordCheck,
    setPasswordCheck,
  ] = useValidation("", (value, value2) => {
    if (value.length < 6 || !value) {
      return "Password must be no shorter than 6 characters";
    }
    if (value !== value2) {
      return "Passwords do not match";
    }
    return false;
  });

  const onSubmit = (e) => {
    e.preventDefault();
    validateUsername();
    validatePassword();
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <div className="warning">{usernameError}</div>}
        </div>
        <div className="password-input-block">
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img src="icons/eye.png" alt="" />
        </div>
        <div className="password-input-block">
          <input
            type="text"
            placeholder="Repeat password"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
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
