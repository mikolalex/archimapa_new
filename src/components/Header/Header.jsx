import React from "react";
import "./Header.less";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Header = ({ openPopup, setIsListOpen }) => {
  const isUserSignedIn = () => {
    return sessionStorage.getItem("signInToken") ? true : false;
  };

  return (
    <div className="headerRoot">
      <Link
        to={"/"}
        style={{ textDecoration: "none" }}
        onClick={() => setIsListOpen(false)}
      >
        <div className="header-logo-block">
          <img src="/logo/logo.png" alt="logo_img" className="logo-img" />

          <p className="logo-text">Мапа архітектурних об'єктів України</p>
        </div>
      </Link>
      <div className="header-buttons-block ">
        <div
          className="button-content"
          onClick={() => {
            openPopup("AddObject", { openPopup, isUserSignedIn });
          }}
        >
          <Button type="outlined"> Add Object </Button>
        </div>

        {!isUserSignedIn() && (
          <div
            className="button-content"
            onClick={() => {
              openPopup("SignUpFirstStep", {
                openPopup,
              });
            }}
          >
            <Button type="contained">Sign Up</Button>
          </div>
        )}
        {isUserSignedIn() ? (
          <div
            className="button-content"
            onClick={() => {
              sessionStorage.clear("signInToken");
              location.reload();
            }}
          >
            <Button type="text">
              {
                <img
                  src="/icons/log-in.png"
                  alt="login_icon"
                  className="login-icon"
                />
              }
              Log Out
            </Button>
          </div>
        ) : (
          <div
            className="button-content"
            onClick={() => {
              openPopup("SignIn", { openPopup });
            }}
          >
            <Button type="text">
              {
                <img
                  src="/icons/log-in.png"
                  alt="login_icon"
                  className="login-icon"
                />
              }
              Sign In
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
