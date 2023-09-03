import "./AddObject.less";
import React from "react";
import useValidation from "../../hooks/useValidation";

const AddObject = ({
  objToFormData,
  setIsAddObjectOpen,
  setIsWindowBlured,
  isWindowBlured,
  latitude,
  setLatitude,
  validateLatitude,
  latitudeError,
  longitude,
  setLongitude,
  validateLongitude,
  longitudeError,
  getConfig,
  fieldData,
}) => {
  const [title, setTitle, validateTitle, titleError] = useValidation(
    "",
    (value) => (value ? false : "Please enter the name")
  );
  const [description, setDescription, validateDescription, descriptionError] =
    useValidation("", (value) =>
      value ? false : "Please enter the description"
    );

  const onSubmit = (e) => {
    e.preventDefault();
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
    });
  }

  const findCoordinatesOnMap = (e) => {
    e.preventDefault();
    setIsWindowBlured((prev) => ({ map: true, popup: false }));
  };

  const categories = getConfig("objectCustomFields");

  return (
    <div
      className={
        isWindowBlured.popup ? "AddObjectRoot non-blured" : "AddObjectRoot"
      }
    >
      <div className="form-head">
        <h2 className="form-title">Add Object</h2>
        <img
          src="/icons/close.png"
          alt=""
          onClick={() => (
            setIsAddObjectOpen(false),
            setIsWindowBlured({ map: false, popup: false })
          )}
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
          {categories.map((category) => {
            switch (category.type) {
              case "text":
                return (
                  <input
                    type={category.type}
                    placeholder={category.title}
                    key={category.key}
                  />
                );

              case "select":
                return (
                  <select name="" id="" key={category.key}>
                    <option value="">{category.title}</option>
                    {fieldData[
                      Object.values(category.field_data.category_id)
                    ].map((option) => (
                      <option value="" key={option.id}>
                        {option.title}
                      </option>
                    ))}
                  </select>
                );
            }
          })}
        </div>

        <button type="submit" className="form-submit-button" onClick={onSubmit}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default AddObject;
