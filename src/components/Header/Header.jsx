import React from "react";
import "./Header.less";
import Button from "../Button/Button";

const Header = ({ setIsSignInOpen }) => {
  return (
    <div className="headerRoot">
      <div className="header-logo-block">
        <img src="/logo/logo.png" alt="logo_img" className="logo-img" />

        <p className="logo-text">Мапа архітектурних об'єктів України</p>
      </div>
      <div className="header-buttons-block ">
        <Button type="outlined">
          <div className="button-content">Add Object</div>
        </Button>
        <Button type="contained">
          <div className="button-content">Sign Up</div>
        </Button>
        <Button type="text">
          <div
            className="button-content"
            onClick={() => {
              setIsSignInOpen((prev) => !prev);
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
      </div>
    </div>
  );
};

export default Header;
