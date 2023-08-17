import "./AddObject.less";

import React from "react";
import useValidation from "../../hooks/useValidation";

const AddObject = ({
  objToFormData,
  setIsAddObjectOpen,
  setIsWindowBlured,
  latitude,
  setLatitude,
  validateLatitude,
  latitudeError,
  longitude,
  setLongitude,
  validateLongitude,
  longitudeError,
}) => {
  const [title, setTitle, validateTitle, titleError] = useValidation(
    "",
    (value) => (value ? false : "Please enter the name")
  );
  const [description, setDescription, validateDescription, descriptionError] =
    useValidation("", (value) =>
      value ? false : "Please enter the description"
    );

  //  const [latitude, setLatitude, validateLatitude, latitudeError] =
  //   useValidation('', (value) => (value ? false : "Please enter the latitude"));
  // const [longitude, setLongitude, validateLongitude, longitudeError] =
  //   useValidation("", (value) =>
  //     value ? false : "Please enter the longitude"
  //   );

  const onSubmit = (e) => {
    e.preventDefault();
    // setLatitude(selectedPosition.latitude);
    // setLongitude(selectedPosition.longitude);
    if (
      validateTitle() &&
      validateDescription() &&
      validateLatitude() &&
      validateLongitude()
    ) {
      postData(
        "https://map.transsearch.net/objects/add",
        objToFormData({
          title: title,
          description: description,
          latitude: latitude,
          longitude: longitude,
        })
      );
      setLatitude("");
      setLongitude("");
      setIsAddObjectOpen(false);
    }
  };

  async function postData(url, data) {
    // setIsDisabled(true);
    // setIsLoading(true);
    fetch(url, {
      method: "POST",
      body: data,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("signInToken"),
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const findCoordinatesOnMap = (e) => {
    e.preventDefault();
    setIsWindowBlured(true);
  };

  return (
    <div className="AddObjectRoot">
      <div className="form-head">
        <h2 className="form-title">Add Object</h2>
        <img
          src="/icons/close.png"
          alt=""
          onClick={() => setIsAddObjectOpen(false)}
        />
      </div>

      <form action="submit">
        <div className="name-input-block">
          <input
            type="text"
            placeholder="Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {titleError && <div className="warning">{titleError}</div>}
        <div className="description-input-block">
          <textarea
            placeholder="Description"
            className="description-textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {descriptionError && <div className="warning">{descriptionError}</div>}
        <div className="notice">
          <p> Задайте координати</p>
          <button className="find-on-map-button" onClick={findCoordinatesOnMap}>
            Знайти на карті
          </button>
        </div>
        <div className="coordinates-input-block">
          <input
            type="number"
            placeholder="Широта"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
          <input
            type="number"
            placeholder="Довгота"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
        {latitudeError && <div className="warning">{latitudeError}</div>}
        {longitudeError && <div className="warning">{longitudeError}</div>}

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

        <button type="submit" className="form-submit-button" onClick={onSubmit}>
          Continue
        </button>
      </form>
    </div>
  );
};


export default AddObject;
