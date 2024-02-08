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
  const [result, setResult] = useState([]);
  //  objects.filter((object) => {

  // console.log(objItems);

  const filterOnChangeHandler = () => {
    clearFiltersButton ? null : setClearFiltersButton(true);

    // console.log(objects);
    // console.log(requiredFilters);

    const getElementFromArray = (arr) => {
      let result;
      arr.forEach((el) => {
        result = el;
      });

      return result;
    };

    const lol = (arr) => {
      const filteredRes = arr.filter((objCustomFields) => {
        for (let y = 0; y < Object.keys(requiredFilters).length; y++) {
          // console.log(Number(objItems[Object.keys(requiredFilters)[i]]))
          // console.log(Number(requiredFilters[Object.keys(requiredFilters)[i]]))

          return (
            Number(objCustomFields[Object.keys(requiredFilters)[y]]) ===
            (Array.isArray(requiredFilters[Object.keys(requiredFilters)[y]])
              ? getElementFromArray(
                  requiredFilters[Object.keys(requiredFilters)[y]]
                )
              : Number(requiredFilters[Object.keys(requiredFilters)[y]]))
          );
        }
      });
      setResult([...filteredRes]);
    };
    result[0] && lol(result);

    const newArr = [];

    // console.log(result);

    //   const lol = (filterKey, elementId) => {

    // }
    // lol(Object.keys(requiredFilters), objItems[key])

    // for (let key in requiredFilters) {
    //   console.log(key);
    //   console.log(objItems[key]);

    //   if (Array.isArray(requiredFilters[key])) {
    //     Number(objItems[key]) === getElementFromArray(requiredFilters[key])
    //       ? newArr.push(objects[i])
    //       : null;
    //   } else {
    //     Number(objItems[key]) === requiredFilters[key]
    //       ? newArr.push(objects[i])
    //       : null;
    //   }
    // }

    // if (
    //   Number(objItems[key]) ===
    //   (Array.isArray(requiredFilters[key])
    //     ? getElementFromArray(requiredFilters[key])
    //     : requiredFilters[key])
    // ) {
    //   newArr.push(objects[i]);
    // }

    // });

    // newArr[0] ? setFilteredObjects([...newArr]) : null;
  };
  console.log(result);

  useEffect(() => {
    setResult([]);
    objects.forEach((obj) => {
      const ObjItems = JSON.parse(obj.custom_fields);
      setResult((prev) => (prev = [...prev, ObjItems]));
    });
  }, [objects]);

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
