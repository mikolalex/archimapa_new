import React from "react";
import "./AddObjectWarning.less";
import Button from "../../Button/Button";

const AddObjectWarning = ({ closePopup, openPopup }) => {
  return (
    <div className="AddObjectWarningRoot">
      <div className="overlay" onClick={() => closePopup()}></div>
      <div className="warning-block-content">
        <div className="form-head">
          <h2 className="form-title">Add Object</h2>
          <img src="/icons/close.png" alt="" onClick={() => closePopup()} />
        </div>

        <div className="notice">
          Щоб додати новий об’єкт увійдіть <br /> або зареєструйтесь!
        </div>
        <div className="buttons">
          <div
            className="button-content"
            onClick={() => {
              closePopup(), openPopup("SignUpFirstStep", { openPopup });
            }}
          >
            <Button type="contained">Sign Up</Button>
          </div>
          <div
            className="button-content"
            onClick={() => {
              closePopup(), openPopup("SignIn", { openPopup });
            }}
          >
            <Button type="outlined">Sign In</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddObjectWarning;
