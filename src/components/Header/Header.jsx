import React from "react";
import "./Header.less";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="headerRoot">
      <div className="header-logo-block">
        <img src="/logo/logo.png" alt="logo_img" className="logo-img" />

        <p className="logo-text">Мапа архітектурних об'єктів України</p>
      </div>
      <div className="header-buttons-block ">
        <Button type="outlined">Add Object</Button>
        <Button type="contained">Sign Up</Button>
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
    </div>
  );
};

export default Header;
