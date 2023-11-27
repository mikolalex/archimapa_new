import React from "react";
import "./ObjectPage.less";
import Header from "../Header/Header";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import Map from "../Map/Map";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const ObjectPage = ({ openPopup }) => {
  const location = useLocation();
  const [currentObject, setCurrentObject] = useState({});

  async function getObject(id) {
    fetch(`
https://map.transsearch.net/objects/${id}`)
      .then((response) => response.json())
      .then((json) => setCurrentObject(json));
  }
  useEffect(() => {
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
              <button className="edit-object-button">Редагувати</button>
            )}
          </div>
          <div className="object-title">{currentObject.title}</div>
          <div className="object-img">
            <img src="/img/obj_page_img.png" alt="object_img" />
          </div>
          <div className="object-address">
            <img src="/icons/address.png" alt="address_icon" />
            вулиця Обсерваторна, 6, Київ, 02000
          </div>
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
            <li>
              Рік побудови <span className="accent">1891</span>
            </li>
            <li>
              Тип будівлі <span className="accent">Маєток</span>
            </li>
            <li>
              Стиль
              <Link to={"/category"} style={{ textDecoration: "none" }}>
                <span className="accent">Модернізм</span>
              </Link>
            </li>
            <li>
              Термін занепаду <span className="accent">25</span>
            </li>
            <li>
              Стан <span className="accent">Частково Зруйновано</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ObjectPage;
