import React from "react";
import { useState } from "react";
import "./TypeFilter.less";

const TypeFilter = () => {
  const [isTypeFilterOpen, setIsTypeFilterOpen] = useState(false);

  return (
    <div className="type-filterRoot">
      <div
        className={
          isTypeFilterOpen
            ? "filter-button filter-button-opened"
            : "filter-button"
        }
        onClick={() => setIsTypeFilterOpen((prev) => !prev)}
      >
        Тип Будівлі{" "}
        <img src={isTypeFilterOpen ? "-.png" : "+.png"} alt="add_img" />
      </div>
      <div className={isTypeFilterOpen ? "filter-type-checkbox-block" : "none"}>
        <div className="type-checkbox">
          <input type="checkbox" name="" id="" /> Житлова
        </div>
        <div className="type-checkbox">
          <input type="checkbox" name="" id="" /> Промислова
        </div>
        <div className="type-checkbox">
          <input type="checkbox" name="" id="" /> Громадська
        </div>
        <div className="type-checkbox">
          <input type="checkbox" name="" id="" /> Інше
        </div>
      </div>
    </div>
  );
};

export default TypeFilter;
