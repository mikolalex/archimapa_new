import React from "react";
import "./InputNumber.less";

const InputNumber = ({ title, value, onInput }) => {
  return (
    <div className="input-block">
      <p>{title}</p>
      <input value={value} type="number" onInput={onInput} />
    </div>
  );
};

export default InputNumber;
