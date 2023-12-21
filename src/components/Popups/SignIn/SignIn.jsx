import React, { useState } from "react";
import "./SignIn.less";
import useValidation from "../../../hooks/useValidation";
import Loading from "../../Loading/Loading";
import { mainUrl } from "../../../module";

const SignIn = ({ closePopup, openPopup }) => {
  const [email, setEmail, validateEmail, emailError] = useValidation(
    "",
    (value) => (value ? false : "Please enter the email")
  );

  const [isLoading, setIsLoading] = useState(false);

  const objToFormData = (obj) => {
    const fd = new FormData();
    for (let i in obj) {
      fd.append(i, obj[i]);
    }
    return fd;
  };

  const [
    password,
    setPassword,
    validatePassword,
    passwordError,
    setPasswordError,
  ] = useValidation("", (value) =>
    value ? false : "Please enter the password"
  );

  const infoText = "you have successfully logged in.";

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
            setIsLoading(false),
            closePopup(),
            openPopup("InfoPopup", { infoText, closePopup }))
          : (setPasswordError("Incorrect username or password"),
            setIsDisabled(false),
            setIsLoading(false))
      );
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (validateEmail() && validatePassword()) {
      postData(
        `${mainUrl}/auth/login`,
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
      <div className="overlay" onClick={() => closePopup()}></div>
      <div className="sign-in-block-content">
        <div className="form-head">
          <h2 className="form-title">Sign In</h2>
          <img src="/icons/close.png" alt="" onClick={() => closePopup()} />
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
            Not a member yet?
            <span
              className="redirect-link"
              onClick={() => (
                closePopup(), openPopup("SignUpFirstStep", { openPopup })
              )}
            >
              Join now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
