import React, { useState, useEffect } from "react";
import { mainUrl } from "../../module";

const Item = ({ filter, setRequiredFilters }) => {
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

  return <div className="filter-field-data">{item()}</div>;
};

export default Item;
