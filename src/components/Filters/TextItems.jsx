import React from "react";

const TextItems = ({ setRequiredFilters, filter }) => {
  return (
    <div className="year-filter-input-block">
      <p>enter the date</p>
      <input
        type="number"
        onChange={(e) =>
          setRequiredFilters(
            (prev) =>
              (prev = {
                ...prev,
                [filter.title]: e.target.value,
              })
          )
        }
      />
    </div>
  );
};

export default TextItems;
