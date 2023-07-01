import React from "react";
import { useState } from "react";
import "./ArchitectFilter.less"

const ArchitectFilter = () => {
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
        Тип Будівлі
        <img src={isArchitectFilterOpen ? "-.png" : "+.png"} alt="add_img" />
      </div>
      <div
        className={
          isArchitectFilterOpen ? "filter-architect-selector-block" : "none"
        }
      >
        <select name="" id="">
          <option value="">Франческо Растреллі</option>
          <option value="">Йосип Каракіс</option>
        </select>
      </div>
    </div>
  );
};

export default ArchitectFilter;
