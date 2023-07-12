import "./SignUpSecondStep.less";
import React from "react";
import { useState, useRef } from "react";

const SignUpSecondStep = () => {
  const [warning, setWarning] = useState(false);

  const username = useRef(null);
  const password = useRef(null);
  const passwordCheck = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const regExp = /^[0-9a-zа-я_]+$/i;

    if (
      username.current.value.length < 6 ||
      !username.current.value ||
      !regExp.test(username.current.value) ||
      password.current.value.length < 6 ||
      !password.current.value ||
      password.current.value !== passwordCheck.current.value
    ) {
      setWarning(true);
    } else {
      setWarning(false);
      username.current.value = "";
      password.current.value = "";
      passwordCheck.current.value = "";
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
          <input type="text" placeholder="Username" ref={username} />
        </div>
        <div className="password-input-block">
          <input type="text" placeholder="Password" ref={password} />
          <img src="icons/eye.png" alt="" />
        </div>
        <div className="password-input-block">
          <input
            type="text"
            placeholder="Repeat password"
            ref={passwordCheck}
          />
          <img src="icons/eye.png" alt="" />
        </div>
        <div className={warning ? "warning" : "none"}>
          Please check your data
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
