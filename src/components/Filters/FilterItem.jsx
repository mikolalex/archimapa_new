import "./FilterItem.less";
import React, { useState, useEffect } from "react";
import { mainUrl } from "../../module";

const FilterItem = ({ filter, setRequiredFilters }) => {
  const [fieldData, setFieldData] = useState([]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
          <div className="select-items-list">
            <select
              name=""
              id=""
              onChange={(e) =>
                setRequiredFilters(
                  (prev) =>
                    (prev = { ...prev, [filter.title]: Number(e.target.value) })
                )
              }
              defaultValue={0}
            >
              <option value="0" disabled>
                Обрати
              </option>
              {fieldData.map((item) => (
                <option
                  className="select-filter-item"
                  key={item.id}
                  value={item.id}
                >
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        );
      case "checkboxList":
        return (
          <ul className="checkbox-items-list">
            {fieldData.map((item) => (
              <li key={item.id} className="checkbox-filter-item">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={(e) => {
                    e.target.checked
                      ? setRequiredFilters(
                          (prev) =>
                            (prev = {
                              ...prev,
                              [filter.title]: prev[filter.title]
                                ? [...prev[filter.title], item.id]
                                : [item.id],
                            })
                        )
                      : setRequiredFilters(
                          (prev) =>
                            (prev = {
                              ...prev,
                              [filter.title]: prev[filter.title].filter(
                                (id) => id !== item.id
                              ),
                            })
                        );
                  }}
                />
                {item.title}
              </li>
            ))}
          </ul>
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
