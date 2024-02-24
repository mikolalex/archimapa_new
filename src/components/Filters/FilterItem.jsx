import "./FilterItem.less";
import React, { useState } from "react";
import Item from "./Item";

const FilterItem = ({ filter, setRequiredFilters }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
      {isFilterOpen && (
        <Item filter={filter} setRequiredFilters={setRequiredFilters} />
      )}
    </div>
  );
};

export default FilterItem;
