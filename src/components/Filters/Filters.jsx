import "./Filters.less";
import React, { useState, useEffect } from "react";
// import YearFilter from "./YearFilter";
import FilterItem from "./FilterItem";
import { mainUrl, getConfig } from "../../module";

const Filters = ({
  objects,
  setObjects,
  filteredObjects,
  setFilteredObjects,
}) => {
  const filtersConfig = getConfig("filtersConfig");

  const [clearFiltersButton, setClearFiltersButton] = useState(false);

  // const [filteredObjects, setFilteredObjects] = useState(objects)
  const [requiredFilters, setRequiredFilters] = useState({});

  const filterOnChangeHandler = () => {
    clearFiltersButton ? null : setClearFiltersButton(true);

    console.log(objects);
    console.log(requiredFilters);

    const getElementFromArray = (arr) => {
      let result;
      arr.forEach((el) => {
        result = el;
      });

      return result;
    };

    const newArr = objects.filter((object) => {
      const objItems = JSON.parse(object.custom_fields);
      // console.log(
      //   lol(requiredFilters["building_type"], objItems["building_type"])
      // );

      for (let key in requiredFilters) {
        console.log(key);
        console.log(objItems[key]);
        return (
          Number(objItems[key]) ===
          (Array.isArray(requiredFilters[key])
            ? getElementFromArray(requiredFilters[key])
            : requiredFilters[key])
        );
      }

      // return objItems[item] === id;
    });
    console.log(newArr);
    // setFilteredObjects(newArr);
    console.log(filteredObjects);
  };

  useEffect(() => {
    filterOnChangeHandler();
  }, [requiredFilters]);

  // const [objects, setObjects] = useState([]);

  // useEffect(() => {
  //   async function getObjects() {
  //     fetch(
  //       `${mainUrl}/objects?north=52.89564866211353&south=44.98034238084973&east=39.46289062500001&west=23.4228515625`
  //     )
  //       .then((response) => response.json())
  //       .then((json) => setObjects(json));
  //   }
  //   getObjects();
  // }, []);

  return (
    <div className="filtersRoot">
      <div className="objects">
        <p className="total-objects">
          Всього{" "}
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
              filterOnChangeHandler={filterOnChangeHandler}
              key={filter.category_id}
              setRequiredFilters={setRequiredFilters}
              requiredFilters={requiredFilters}
            />
          ))}
          {/* <YearFilter filterOnChangeHandler={filterOnChangeHandler} /> */}
        </div>
      </div>
    </div>
  );
};

export default Filters;
