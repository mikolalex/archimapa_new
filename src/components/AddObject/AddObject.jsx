import "./AddObject.less";

import React from "react";

const AddObject = () => {
  return (
    <div className="AddObjectRoot">
      <div className="form-head">
        <h2 className="form-title">Add Object</h2>
        <img src="/icons/close.png" alt="" />
      </div>

      <form action="submit">
        <div className="name-input-block">
          <input type="text" placeholder="Name" />
        </div>
        <div className="description-input-block">
          <textarea
            placeholder="Description"
            className="description-textarea"
          />
        </div>

        <div className="notice">Задайте координати</div>
        <div className="coordinates-input-block">
          <input type="number" placeholder="Широта" />
          <input type="number" placeholder="Довгота" />
        </div>

        <div className="or-block">
          <img src="/img/line.png" alt="" />
          <p>OR</p>
          <img src="/img/line.png" alt="" />
        </div>

        <button className="google-button">
          <img src="/icons/google.png" alt="" /> Знайти на карті
        </button>

        <div className="details-form-block">
          <select name="" id="">
            <option value="">Рік побудови</option>
            <option value="">1999</option>
            <option value="">1995</option>
          </select>
          <select name="" id="">
            <option value="">Тип будівлі</option>
            <option value="">тип 1</option>
            <option value="">тип 2</option>
          </select>
          <select name="" id="">
            <option value="">Стиль</option>
            <option value="">Соцмодернізм</option>
            <option value="">Модерн</option>
          </select>
          <select name="" id="">
            <option value="">Архітектор</option>
            <option value="">Растреллі</option>
            <option value="">Каракіс</option>
          </select>
        </div>

        <button type="submit" className="form-submit-button">
          Continue
        </button>
      </form>
    </div>
  );
};

export default AddObject;
