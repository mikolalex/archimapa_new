import React from "react";

const TextItems = ({ setRequestedFilters, filter }) => {
  return (
    <div className="year-filter-input-block">
      <p>enter the date</p>
      <input
        type="number"
        onChange={(e) =>
          setRequestedFilters(
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
