import React from "react";

const SelectItems = ({ setRequestedFilters, filter, fieldData }) => {
  return (
    <div className="select-items-list">
      <select
        name=""
        id=""
        onChange={(e) =>
          setRequestedFilters(
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
          <option className="select-filter-item" key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectItems;
