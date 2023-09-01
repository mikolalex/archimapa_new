import React from "react";
import "./ObjectPage.less";
import Header from "../Header/Header";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

const ObjectPage = ({ bounds,   openAddObjectPopup,
  openSignInPopup,
  openSigUpnPopup, }) => {
  const location = useLocation();

  // const [isSignInOpen, setIsSignInOpen] = useState(false);
  // const [isSignUpFirstStepOpen, setIsSignUpFirstStepOpen] = useState(false);
  // const [isSignUpSecondStepOpen, setIsSignUpSecondStepOpen] = useState(false);
  // const [isAddObjectOpen, setIsAddObjectOpen] = useState(false);

  // const closeAllPopups = () => {
  //   setIsAddObjectOpen(false);
  //   setIsSignInOpen(false);
  //   setIsSignUpFirstStepOpen(false);
  //   setIsSignUpSecondStepOpen(false);
  // };

  // const openAddObjectPopup = () => {
  //   closeAllPopups();
  //   setIsAddObjectOpen(true);
  // };
  // const openSignInPopup = () => {
  //   closeAllPopups();
  //   setIsSignInOpen(true);
  // };
  // const openSigUpnPopup = () => {
  //   closeAllPopups();
  //   setIsSignUpFirstStepOpen(true);
  // };

  const [objects, setObjects] = useState([]);

  async function getObjects(link) {
    fetch(link)
      .then((response) => response.json())
      .then((json) => setObjects(json));
  }

  const [currentObject, setCurrentObject] = useState({});
  useEffect(() => {
    getObjects(
      `https://map.transsearch.net/objects?north=${bounds.north}&south=${bounds.south}&east=${bounds.east}&west=${bounds.west}`
    );
  }, []);

  useEffect(() => {
    objects.forEach((obj) => {
      if (obj.id === location.pathname.split("/")[2]) {
        setCurrentObject(obj);
      }
    });
  }, [objects]);

  return (
    <div className="objectPageRoot">
      <Header
        openAddObjectPopup={openAddObjectPopup}
        openSignInPopup={openSignInPopup}
        openSigUpnPopup={openSigUpnPopup}
      />
      <main className="object-page-main">
        <div className="object-card">
          <div className="object-style">Модернізм</div>
          <div className="object-title">{currentObject.title}</div>
          <div className="object-img">
            <img src="/img/obj_page_img.png" alt="object_img" />
          </div>
          <div className="object-address">
            <img src="/icons/address.png" alt="address_icon" />
            вулиця Обсерваторна, 6, Київ, 02000
          </div>
          <div className="object-description">{currentObject.description}</div>
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
              Стиль <span className="accent">Модернізм</span>
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
      <div className="map-block">
        {currentObject.latitude && (
          <MapContainer
            center={[currentObject.latitude, currentObject.longitude]}
            zoom={11}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[currentObject.latitude, currentObject.longitude]}
            >
              {/* <Popup>d</Popup> */}
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default ObjectPage;
