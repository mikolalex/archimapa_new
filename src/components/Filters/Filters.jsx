import "./Filters.less";
import React, { useState, useEffect } from "react";
import FilterItem from "./FilterItem";
import { getConfig, getObjects } from "../../utils";
import { defaultBounds } from "../../constance";

const Filters = ({ setRequestedFilters, requestedFilters }) => {
  const filtersConfig = getConfig("filtersConfig");
  const [clearFiltersButton, setClearFiltersButton] = useState(false);

  const [objects, setObjects] = useState([]);

  useEffect(() => {
    getObjects(requestedFilters, defaultBounds, setObjects);
  }, [requestedFilters]);

  return (
    <div className="filtersRoot">
      <div className="objects">
        <p className="total-objects">
          Всього
          <span className="objects-number accent">
            {objects && objects.length}
          </span>
          об'єктів
        </p>
        <p className="navigation-search-block">
          <input type="text" placeholder="Введіть назву" />
          <img src="/icons/vector.png" alt="vector_img" />
        </p>
      </div>
      <div className="all-filters">
        <div className="filters-title-block">
          <p className="filters-title">Фільтри</p>
          <button
            className={clearFiltersButton ? "clear-filters-button" : "none"}
            onClick={() => setClearFiltersButton(false)}
          >
            Очистити
          </button>
        </div>
        <div className="filters-list">
          {filtersConfig.map((filter) => (
            <FilterItem
              filter={filter}
              key={filter.category_id}
              setRequestedFilters={setRequestedFilters}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
