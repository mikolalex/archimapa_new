import React from "react";
import "./AddObjectWarning.less";
import Button from "../Button/Button";

const AddObjectWarning = () => {
  return (
    <div className="AddObjectWarningRoot">
      <div className="form-head">
        <h2 className="form-title">Add Object</h2>
        <img src="icons/close.png" alt="" />
      </div>

      <div className="notice">
        Щоб додати новий об’єкт увійдіть <br /> або зареєструйтесь!
      </div>
      <div className="buttons">
        <Button type="contained">Sign Up</Button>
        <Button type="outlined">Sign In</Button>
      </div>
    </div>
  );
};

export default AddObjectWarning;
