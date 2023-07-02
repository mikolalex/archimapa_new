import React from "react";
import { useState } from "react";
import "./TypeFilter.less";

const TypeFilter = ({ filterOnChangeHandler }) => {
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
        Тип Будівлі
        <img
          src={isTypeFilterOpen ? "icons/-.png" : "icons/+.png"}
          alt="add_img"
        />
      </div>
      <div className={isTypeFilterOpen ? "filter-type-checkbox-block" : "none"}>
        <div className="type-checkbox">
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => filterOnChangeHandler()}
          />
          Житлова
        </div>
        <div className="type-checkbox">
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => filterOnChangeHandler()}
          />
          Промислова
        </div>
        <div className="type-checkbox">
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => filterOnChangeHandler()}
          />
          Громадська
        </div>
        <div className="type-checkbox">
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => filterOnChangeHandler()}
          />
          Інше
        </div>
      </div>
    </div>
  );
};

export default TypeFilter;
