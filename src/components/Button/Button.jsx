import React from "react";

const Button = ({ type, children }) => {
  const buttonClassMapping = {
    outlined: "outlined",
    contained: "contained",
    text: "text",
    default: "",
  };

  const style = buttonClassMapping[type];
  if (!style) {
    throw Error("Wrong Button type!");
  }

  return (
    <div>
      <button className={style}>{children}</button>
    </div>
  );
};

export default Button;
