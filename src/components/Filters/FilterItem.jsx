import "./FilterItem.less";
import React, { useState, useEffect } from "react";
import { mainUrl } from "../../constance";
import CheckboxItems from "./CheckboxItems";
import SelectItems from "./SelectItems";
import TextItems from "./TextItems";

const FilterItem = ({ filter, setRequestedFilters }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [fieldData, setFieldData] = useState([]);

  async function getFieldData() {
    fetch(`${mainUrl}/items/category/${filter.category_id}`)
      .then((response) => response.json())
      .then((json) => setFieldData(json));
  }
  useEffect(() => {
    getFieldData();
  }, []);

  const item = () => {
    switch (filter.type) {
      case "select":
        return (
          <SelectItems
            filter={filter}
            setRequestedFilters={setRequestedFilters}
            fieldData={fieldData}
          />
        );
      case "checkboxList":
        return (
          <CheckboxItems
            filter={filter}
            setRequestedFilters={setRequestedFilters}
            fieldData={fieldData}
          />
        );
      case "text":
        return (
          <TextItems
            filter={filter}
            setRequestedFilters={setRequestedFilters}
          />
        );
    }
  };

  return (
    <div className="filterRoot">
      <div
        className={
          isFilterOpen ? "filter-button filter-button-opened" : "filter-button"
        }
        onClick={() => setIsFilterOpen((prev) => !prev)}
      >
        {filter.title}
        <img src={isFilterOpen ? "icons/-.png" : "icons/+.png"} alt="add_img" />
      </div>
      {isFilterOpen && <div className="filter-field-data">{item()}</div>}
    </div>
  );
};

export default FilterItem;
