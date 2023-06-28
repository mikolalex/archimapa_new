import React from "react";
import "./Header.less";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="headerRoot">
      <div className="header-logo-block">
        <img src="logo.png" alt="logo_img" className="logo-img" />
        <p className="logo-text">Мапа архітектурних об'єктів України</p>
      </div>
      <div className="header-buttons-block ">
        <Button style="add-object-button button" text="Add Object" />
        <Button style="sign-up-button button" text="Sign Up" />
        <Button
          style="sign-in-button button"
          text="Sign In"
          icon={
            <img src="log-in.png" alt="login_icon" className="login-icon" />
          }
        />
 
      </div>
    </div>
  );
};

export default Header;
