import "./SignUpSecondStep.less";
import React from "react";
import useValidation from "../../hooks/useValidation";

const SignUpSecondStep = () => {
  const [username, setUsername, validateUsername, usernameError] =
    useValidation("");

  const [
    password,
    setPassword,
    validatePassword,
    passwordError,
    passwordCheck,
    setPasswordCheck,
  ] = useValidation("");

  const onSubmit = (e) => {
    e.preventDefault();
    const regExp = /^[0-9a-zа-я_]+$/i;

    !validateUsername(
      !regExp.test(username),
      "Username must consist only of letters, numbers and _."
    )
      ? !validateUsername(
          username.length < 6 || !username,
          "Username must be no shorter than 6 characters"
        )
      : null;
    !validatePassword(
      password.length < 6 || !password,
      "Password must be no shorter than 6 characters"
    )
      ? !validatePassword(password !== passwordCheck, "Passwords do not match")
      : null;
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
