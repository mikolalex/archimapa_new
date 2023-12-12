import React from "react";
import { useState } from "react";
import InputNumber from "./InputNumber";
import "./YearFilter.less";

const YearFilter = ({ filterOnChangeHandler }) => {
  const [yearFilterFrom, setYearFilterFrom] = useState("");
  const [yearFilterTill, setYearFilterTill] = useState("");
  const [isYearFilterOpen, setIsYearFilterOpen] = useState(false);

  return (
    <div className="year-filterRoot">
      <div
        className={
          isYearFilterOpen
            ? "filter-button filter-button-opened"
            : "filter-button"
        }
        onClick={() => setIsYearFilterOpen((prev) => !prev)}
      >
        Рік Побудови
        <img
          src={isYearFilterOpen ? "icons/-.png" : "icons/+.png"}
          alt="add_img"
        />
      </div>

      <div className={isYearFilterOpen ? "filter-year-range-block" : "none"}>
        <div className="years-form">
          <InputNumber
            title={"Від:"}
            value={yearFilterFrom}
            onInput={(e) => setYearFilterFrom(e.target.value)}
          />
          <InputNumber
            title={"До:"}
            value={yearFilterTill}
            onInput={(e) => setYearFilterTill(e.target.value)}
          />
        </div>
        {(yearFilterFrom || yearFilterTill) && (
          <button
            className="submit-years-button"
            onClick={() => filterOnChangeHandler()}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default YearFilter;
