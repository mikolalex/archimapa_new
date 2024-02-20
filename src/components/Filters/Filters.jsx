import "./Filters.less";
import React, { useState, useEffect } from "react";
import FilterItem from "./FilterItem";
import { mainUrl, getConfig, isArrayEmpty } from "../../module";

const Filters = () => {
  const filtersConfig = getConfig("filtersConfig");
  const [clearFiltersButton, setClearFiltersButton] = useState(false);
  const [requiredFilters, setRequiredFilters] = useState({});
  const [objects, setObjects] = useState([]);

  const getFiltersURL = () => {
    let filtersString = "";

    for (let key in requiredFilters) {
      Array.isArray(requiredFilters[key])
        ? isArrayEmpty(requiredFilters[key])
          ? null
          : (filtersString += `${key}=${requiredFilters[key]}&`)
        : (filtersString += `${key}=${requiredFilters[key]}&`);
    }

    const fullUrl = `${mainUrl}/objects?north=52.89564866211353&south=44.98034238084973&east=39.46289062500001&west=23.4228515625/${filtersString.slice(
      0,
      -1
    )}`;
    return fullUrl;
  };

  useEffect(() => {
    console.log(getFiltersURL());
  }, [requiredFilters]);

  useEffect(() => {
    async function getObjects() {
      fetch(
        `${mainUrl}/objects?north=52.89564866211353&south=44.98034238084973&east=39.46289062500001&west=23.4228515625`
      )
        .then((response) => response.json())
        .then((json) => {
          setObjects(json);
        });
    }
    getObjects();
  }, []);

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
              setRequiredFilters={setRequiredFilters}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
