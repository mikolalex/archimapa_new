import "./Filters.less";
import React from "react";
import YearFilter from "./YearFilter";
import TypeFilter from "./TypeFilter";
import StyleFilter from "./StyleFilter";
import ArchitectFilter from "./ArchitectFilter";
import { useState } from "react";

const Filters = () => {

  const [clearFiltersButton, setClearFiltersButton] = useState(false)

const filterOnChangeHandler = () => {
  clearFiltersButton?null:setClearFiltersButton(true);
}

  return (
    <div className="filtersRoot">
      <div className="objects">
        <p className="total-objects">
          Всього <span className="objects-number accent">120</span> об'єктів
        </p>
        <p className="navigation-search-block">
          <input type="text" placeholder="Введіть назву" />
          <img src="vector.png" alt="vector_img" />
        </p>
      </div>
      <div className="all-filters">
        <div className="filters-title-block">
          <p className="filters-title">Фільтри</p>
          <button className={clearFiltersButton?"clear-filters-button":"none"} onClick={()=>setClearFiltersButton(false)}>Очистити</button>
        </div>
        <div className="filters-list">
          <YearFilter filterOnChangeHandler={filterOnChangeHandler} />
          <TypeFilter />
          <StyleFilter />
          <ArchitectFilter />
        </div>
      </div>
    </div>
  );
};

export default Filters;
