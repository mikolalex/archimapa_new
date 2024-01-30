import React, { useState } from "react";
import { mainUrl } from "../../module";

const FilterItem = ({ filterOnChangeHandler, filter }) => {
  const [fieldData, setFieldData] = useState([]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  async function getFieldData() {
    fetch(`${mainUrl}/items/category/${filter.category_id}`)
      .then((response) => response.json())
      .then((json) => setFieldData(json));
  }
  getFieldData();
  //   console.log(fieldData);

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
    </div>
  );
};

export default FilterItem;
