import React, { useState, useEffect } from "react";
import "./ObjectPage.less";
import Header from "../Header/Header";
import { useLocation } from "react-router";
import Map from "../Map/Map";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Item from "../Item";
import { getConfig, mainUrl, adminkaUrl } from "../../module";
import { Link } from "react-router-dom";

const ObjectPage = ({ openPopup }) => {
  const location = useLocation();
  const [currentObject, setCurrentObject] = useState({});
  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  const categories = getConfig("objectCustomFields");

  useEffect(() => {
    const currentObjectCustomFields = currentObject.custom_fields
      ? JSON.parse(currentObject.custom_fields)
      : null;

    for (let key in currentObjectCustomFields) {
      categories.forEach((item) => {
        key === item.key
          ? setItemsToDisplay(
              (prev) =>
                (prev = [
                  ...prev,
                  {
                    type: item.type === "text" ? "text" : "other",
                    title: item.title,
                    value: currentObjectCustomFields[key],
                  },
                ])
            )
          : null;
      });
    }
  }, [currentObject]);

  async function getObject(id) {
    fetch(`${mainUrl}/objects/${id}`)
      .then((response) => response.json())
      .then((json) => setCurrentObject(json));
  }
  useEffect(() => {
    setItemsToDisplay([]);
    getObject(location.pathname.split("/")[2]);
  }, [location]);

  const [isAuthorised, setIsAuthorised] = useState(false);

  useEffect(() => {
    sessionStorage.getItem("signInToken")
      ? setIsAuthorised(true)
      : setIsAuthorised(false);
  }, [sessionStorage.getItem("signInToken")]);

  return (
    <div className="objectPageRoot">
      <Header openPopup={openPopup} />
      <main className="object-page-main">
        <div className="object-card">
          <div className="head">
            <Breadcrumbs currentObject={currentObject} />
            {isAuthorised && (
              <Link
                to={`${adminkaUrl}/objects/update/${currentObject.id}`}
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <button className="edit-object-button">Редагувати</button>
              </Link>
            )}
          </div>
          <div className="object-title">{currentObject.title}</div>
          <div className="object-img">
            {currentObject.images &&
              currentObject.images.map((img) => (
                <img
                  src={mainUrl + img.full_url}
                  alt="object_img"
                  key={img.id}
                  className={
                    currentObject.images.length > 1
                      ? "multiple-imgs"
                      : "single-img"
                  }
                />
              ))}
          </div>
          {/* <div className="object-address">
            <img src="/icons/address.png" alt="address_icon" />
            вулиця Обсерваторна, 6, Київ, 02000
          </div> */}
          <div className="object-description">{currentObject.description}</div>
          <div className="map-block">
            {currentObject.latitude && (
              <Map
                center={[currentObject.latitude, currentObject.longitude]}
                zoom={11}
                openPopup={openPopup}
                previewCardPosition={"bottomPreviewCardPosition"}
              />
            )}
          </div>
        </div>
        <div className="object-details">
          <ul>
            <h3>Відомості</h3>

            {itemsToDisplay.map((item) => (
              <Item
                currentObject={currentObject}
                item={item}
                key={item.title}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ObjectPage;
