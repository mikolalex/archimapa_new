import React from "react";
import { useState } from "react";
import "./StyleFilter.less";

const StyleFilter = ({ filterOnChangeHandler }) => {
  const [isStyleFilterOpen, setIsStyleFilterOpen] = useState(false);

  return (
    <div className="style-filterRoot">
      <div
        className={
          isStyleFilterOpen
            ? "filter-button filter-button-opened"
            : "filter-button"
        }
        onClick={() => setIsStyleFilterOpen((prev) => !prev)}
      >
        Стиль{" "}
        <img
          src={isStyleFilterOpen ? "icons/-.png" : "icons/+.png"}
          alt="add_img"
        />
      </div>

      <div
        className={isStyleFilterOpen ? "filter-style-checkbox-block" : "none"}
      >
        <div className="style-checkbox">
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => filterOnChangeHandler()}
          />
          Соцмодернізм
        </div>
        <div className="style-checkbox">
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => filterOnChangeHandler()}
          />
          Модерн
        </div>
      </div>
    </div>
  );
};

export default StyleFilter;
