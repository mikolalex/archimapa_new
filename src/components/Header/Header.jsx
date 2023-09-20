import React from "react";
import "./Header.less";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Header = ({ openPopup }) => {
  const isUserSignedIn = () => {
    return sessionStorage.getItem("signInToken") ? true : false;
  };

  return (
    <div className="headerRoot">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="header-logo-block">
          <img src="/logo/logo.png" alt="logo_img" className="logo-img" />

          <p className="logo-text">Мапа архітектурних об'єктів України</p>
        </div>
      </Link>
      <div className="header-buttons-block ">
        <Button type="outlined">
          <div
            className="button-content"
            onClick={() => {
              openPopup("AddObject", { openPopup });
            }}
          >
            Add Object
          </div>
        </Button>
        {isUserSignedIn() ? null : (
          <Button type="contained">
            <div
              className="button-content"
              onClick={() => {
                openPopup("SignUpFirstStep", {
                  openPopup,
                });
              }}
            >
              Sign Up
            </div>
          </Button>
        )}
        {isUserSignedIn() ? (
          <Button type="text">
            <div
              className="button-content"
              onClick={() => {
                sessionStorage.clear("signInToken");
                location.reload();
              }}
            >
              {
                <img
                  src="/icons/log-in.png"
                  alt="login_icon"
                  className="login-icon"
                />
              }
              Log Out
            </div>
          </Button>
        ) : (
          <Button type="text">
            <div
              className="button-content"
              onClick={() => {
                openPopup("SignIn", { openPopup });
              }}
            >
              {
                <img
                  src="/icons/log-in.png"
                  alt="login_icon"
                  className="login-icon"
                />
              }
              Sign In
            </div>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
