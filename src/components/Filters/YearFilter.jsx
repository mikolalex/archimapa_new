import React from "react";
import { useState } from "react";
import "./YearFilter.less";
// import Nouislider from "nouislider-react";
// import '../../../node_modules/nouislider-react/node_modules/nouislider/distribute/nouislider.css'

const YearFilter = ({ filterOnChangeHandler }) => {
  const [rangeYearFrom, setRangeYearFrom] = useState(1650);
  const [rangeYearTill, setRangeYearTill] = useState(1650);

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
        Рік Побудови{" "}
        <img src={isYearFilterOpen ? "-.png" : "+.png"} alt="add_img" />
      </div>
      <div className={isYearFilterOpen ? "filter-year-range-block" : "none"}>
        <div className="filter-range-from-year">
          <p>Від: </p>
          <input
            type="range"
            min={1650}
            max={2023}
            onChange={(e) => (
              setRangeYearFrom(e.target.value), filterOnChangeHandler()
            )}
          />
          <p>{rangeYearFrom}</p>
        </div>
        <div className="filter-range-till-year">
          <p>До: </p>
          <input
            type="range"
            min={1650}
            max={2023}
            onChange={(e) => setRangeYearTill(e.target.value)}
          />
          <p>{rangeYearTill}</p>
        </div>
      </div>
    </div>
  );
};

export default YearFilter;
