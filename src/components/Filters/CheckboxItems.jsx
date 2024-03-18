import React from "react";

const CheckboxItems = ({ setRequestedFilters, filter, fieldData }) => {
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
                ? setRequestedFilters(
                    (prev) =>
                      (prev = {
                        ...prev,
                        [filter.title]: prev[filter.title]
                          ? [...prev[filter.title], item.id]
                          : [item.id],
                      })
                  )
                : setRequestedFilters(
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
};

export default CheckboxItems;
