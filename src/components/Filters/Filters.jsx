import "./Filters.less"
import React from "react";

const Filters = () => {
  return (
    <div className="filtersRoot">
      <div className="objects">
        <p className="total-objects">
          Всього <span className="objects-number accent">120</span> об'єктів
        </p>
        <p className="navigation-search-block">
          <input type="text" placeholder="Введіть назву" />
          <img src="vector.png" alt="vector_img" />
        </p>
      </div>
      <div className="all-filters">
        <div className="filters-title-block">
          <p className="filters-title">Фільтри</p>
        </div>
        <div className="filters-list">
          <div className="year-filter">
            <button className="filter-button button">
              Рік Побудови <img src="+.png" alt="add_img" />
            </button>
          </div>
          <div className="type-filter">
            <button className="filter-button button">
              Тип Будівлі <img src="+.png" alt="add_img" />
            </button>
          </div>
          <div className="style-filter">
            <button className="filter-button button">
              Стиль <img src="+.png" alt="add_img" />
            </button>
          </div>
          <div className="architect-filter">
            <button className="filter-button button">
              Архітектор <img src="+.png" alt="add_img" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
