import React from "react";
import { useState } from "react";
import "./StyleFilter.less";

const StyleFilter = () => {
  const [isStyleFilterOpen, setIsStyleFilterOpen] = useState(false);

  return (
    <div className="style-filterRoot">
      <div
        className={
          isStyleFilterOpen
            ? "filter-button filter-button-opened"
            : "filter-button"
        }
        onClick={() => setIsStyleFilterOpen((prev) => !prev)}
      >
        Стиль <img src={isStyleFilterOpen ? "-.png" : "+.png"} alt="add_img" />
      </div>

      <div
        className={isStyleFilterOpen ? "filter-style-checkbox-block" : "none"}
      >
        <div className="style-checkbox">
          <input type="checkbox" name="" id="" /> Соцмодернізм
        </div>
        <div className="style-checkbox">
          <input type="checkbox" name="" id="" /> Модерн
        </div>
      </div>
    </div>
  );
};

export default StyleFilter;
