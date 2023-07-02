import React from "react";
import { useState } from "react";
import "./ArchitectFilter.less";

const ArchitectFilter = ({ filterOnChangeHandler }) => {
  const [isArchitectFilterOpen, setIsArchitectFilterOpen] = useState(false);

  return (
    <div className="architect-filterRoot">
      <div
        className={
          isArchitectFilterOpen
            ? "filter-button filter-button-opened"
            : "filter-button"
        }
        onClick={() => setIsArchitectFilterOpen((prev) => !prev)}
      >
        Архітектор
        <img
          src={isArchitectFilterOpen ? "icons/-.png" : "icons/+.png"}
          alt="add_img"
        />
      </div>
      <div
        className={
          isArchitectFilterOpen ? "filter-architect-selector-block" : "none"
        }
      >
        <select name="" id="" onChange={() => filterOnChangeHandler()}>
          <option value="">Обрати</option>
          <option value="">Франческо Растреллі</option>
          <option value="">Йосип Каракіс</option>
        </select>
      </div>
    </div>
  );
};

export default ArchitectFilter;
