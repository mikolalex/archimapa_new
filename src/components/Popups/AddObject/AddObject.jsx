import "./AddObject.less";
import React from "react";
import useValidation from "../../../hooks/useValidation";
import { useState, useEffect } from "react";
import { getConfig } from "../../../module";
import AddObjectWarning from "./AddObjectWarning";

const AddObject = ({ closePopup, openPopup, isUserSignedIn }) => {
  const [title, setTitle, validateTitle, titleError] = useValidation(
    "",
    (value) => (value ? false : "Please enter the name")
  );
  const [description, setDescription, validateDescription, descriptionError] =
    useValidation("", (value) =>
      value ? false : "Please enter the description"
    );

  const [latitude, setLatitude, validateLatitude, latitudeError] =
    useValidation("", (value) => (value ? false : "Please enter the latitude"));
  const [longitude, setLongitude, validateLongitude, longitudeError] =
    useValidation("", (value) =>
      value ? false : "Please enter the longitude"
    );

  const objToFormData = (obj) => {
    const fd = new FormData();
    for (let i in obj) {
      fd.append(i, obj[i]);
    }
    return fd;
  };

  const infoText = "object successfully added.";

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      validateTitle() &&
      validateDescription() &&
      validateLatitude() &&
      validateLongitude()
    ) {
      let items = "";
      for (let key in selectedFieldDataItemsID) {
        items += `${selectedFieldData[key]},`;
      }
      postData(
        "https://map.transsearch.net/objects/add",
        objToFormData({
          title: title,
          description: description,
          latitude: latitude,
          longitude: longitude,
          customFields: JSON.stringify(selectedFieldData),
          items: items,
        })
      );
      setLatitude("");
      setLongitude("");
      closePopup();
      openPopup("InfoPopup", { infoText, closePopup });
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
        Accept: "application/json, text/plain, */*",
      },
    });
  }

  const findCoordinatesOnMap = (e) => {
    e.preventDefault();
    openPopup("AddObjectMap", { setLatitude, setLongitude });
  };

  const categories = getConfig("objectCustomFields");

  const [fieldData, setFieldData] = useState({});

  const categoriesId = () => {
    const ids = [];
    categories.forEach((category) =>
      category.type === "select"
        ? ids.push(Object.values(category.field_data).join())
        : null
    );
    return ids;
  };

  async function getFieldData(id) {
    fetch(`https://map.transsearch.net/items/category/${id}`)
      .then((response) => response.json())
      .then((json) => setFieldData((prev) => ({ ...prev, [id]: json })));
  }
  useEffect(() => {
    categoriesId().forEach((id) => {
      getFieldData(id);
    });
  }, [categories]);

  const [isFieldDataReady, setIsFieldDataReady] = useState(false);
  useEffect(() => {
    Object.keys(fieldData).length === categories.length - 1
      ? setIsFieldDataReady(true)
      : null;
  }, [fieldData]);

  const [selectedFieldData, setSelectedFieldData] = useState({});
  const [selectedFieldDataItemsID, setSelectedFieldDataItemsID] = useState({});
  const [isExitWarningOpen, setIsExitWarningOpen] = useState(false);

  return (
    <div className="AddObjectRoot">
      {isUserSignedIn() ? (
        <>
          <div
            className="overlay"
            onClick={() => setIsExitWarningOpen(true)}
          ></div>
          <div className="add-object-block-content">
            <div className="form-head">
              <h2 className="form-title">Add Object</h2>
              <img
                src="/icons/close.png"
                alt=""
                onClick={() => setIsExitWarningOpen(true)}
              />
            </div>
            {isExitWarningOpen && (
              <div className="exit-warning">
                <p>
                  are you sure you want to close the form? <br /> all entered
                  data will be lost.
                </p>
                <div className="options">
                  <button onClick={() => setIsExitWarningOpen(false)}>
                    cancel
                  </button>
                  <button onClick={() => closePopup()}>yes</button>
                </div>
              </div>
            )}

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
              {descriptionError && (
                <div className="warning">{descriptionError}</div>
              )}
              <div className="notice">
                <p> Задайте координати</p>
                <button
                  className="find-on-map-button"
                  onClick={findCoordinatesOnMap}
                >
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
              {longitudeError && (
                <div className="warning">{longitudeError}</div>
              )}

              <div className="items-form-block">
                {categories.map((category) => {
                  switch (category.type) {
                    case "text":
                      return (
                        <input
                          type={category.type}
                          placeholder={category.title}
                          key={category.key}
                          onInput={(e) => {
                            setSelectedFieldData(
                              (prev) =>
                                (prev = {
                                  ...prev,
                                  [category.key]: e.target.value,
                                })
                            );
                          }}
                        />
                      );

                    case "select":
                      return (
                        <select
                          name=""
                          id=""
                          key={category.key}
                          defaultValue={category.title}
                          onChange={(e) => {
                            setSelectedFieldData(
                              (prev) =>
                                (prev = {
                                  ...prev,
                                  [category.key]:
                                    e.target.selectedOptions[0].id,
                                })
                            );
                            setSelectedFieldDataItemsID(
                              (prev) =>
                                (prev = {
                                  ...prev,
                                  [category.key]:
                                    e.target.selectedOptions[0].id,
                                })
                            );
                          }}
                        >
                          <option disabled>{category.title}</option>
                          {isFieldDataReady &&
                            fieldData[
                              Object.values(category.field_data.category_id)
                            ].map((option) => (
                              <option key={option.id} id={option.id}>
                                {option.title}
                              </option>
                            ))}
                        </select>
                      );
                  }
                })}
              </div>

              <button
                type="submit"
                className="form-submit-button"
                onClick={onSubmit}
              >
                Continue
              </button>
            </form>
          </div>
        </>
      ) : (
        <AddObjectWarning closePopup={closePopup} openPopup={openPopup} />
      )}
    </div>
  );
};

export default AddObject;
