import "./Filters.less";
import React, { useState, useEffect } from "react";
import YearFilter from "./YearFilter";
import TypeFilter from "./TypeFilter";
import StyleFilter from "./StyleFilter";
import ArchitectFilter from "./ArchitectFilter";
import { mainUrl } from "../../module";

const Filters = () => {
  const [clearFiltersButton, setClearFiltersButton] = useState(false);

  const filterOnChangeHandler = () => {
    clearFiltersButton ? null : setClearFiltersButton(true);
  };

  const [objects, setObjects] = useState([]);

  useEffect(() => {
    async function getObjects() {
      fetch(
        `${mainUrl}/objects?north=52.89564866211353&south=44.98034238084973&east=39.46289062500001&west=23.4228515625`
      )
        .then((response) => response.json())
        .then((json) => setObjects(json));
    }
    getObjects();
  }, []);

  return (
    <div className="filtersRoot">
      <div className="objects">
        <p className="total-objects">
          Всього <span className="objects-number accent">{objects.length}</span>{" "}
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
          <YearFilter filterOnChangeHandler={filterOnChangeHandler} />
          <TypeFilter filterOnChangeHandler={filterOnChangeHandler} />
          <StyleFilter filterOnChangeHandler={filterOnChangeHandler} />
          <ArchitectFilter filterOnChangeHandler={filterOnChangeHandler} />
        </div>
      </div>
    </div>
  );
};

export default Filters;
