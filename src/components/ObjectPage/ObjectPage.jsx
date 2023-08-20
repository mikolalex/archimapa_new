import React from "react";
import "./ObjectPage.less";
import Header from "../Header/Header";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

const ObjectPage = ({ objects }) => {
  const location = useLocation();

  const [currentObject, setCurrentObject] = useState({});
  useEffect(() => {
    objects.forEach((obj) => {
      if (obj.id == location.pathname[location.pathname.length - 1]) {
        console.log(obj.id);
        setCurrentObject(obj);
      }
    });
  }, []);
  console.log(currentObject);

  return (
    <div className="objectPageRoot">
      <Header />
      <main className="object-page-main">
        <div className="object-card">
          <div className="object-style">Модернізм</div>
          <div className="object-title">Садиба Барбана</div>
          <div className="object-img">
            <img src="/img/obj_page_img.png" alt="object_img" />
          </div>
          <div className="object-address">
            <img src="/icons/address.png" alt="address_icon" />
            вулиця Обсерваторна, 6, Київ, 02000
          </div>
          <div className="object-description">
            Садиба Барбана є зразком одноповерхового житла середнього класу із
            цегляним декором. 2015 року Науково-дослідний інститут
            пам'яткоохоронних досліджень пропонував внести будівлю до переліку
            щойно виявлених об'єктів культурної спадщини[1]. В обґрунтуванні
            було зазначено, що це «рідкісний взірець одноповерхового садибного
            будинку. Прикрашений вишуканим неокласичним декором — русти, лиштви,
            складний карниз. Цінна пам'ятка культурного надбання міста Києва».
            Міністерство культури та інформаційної політики України не включило
            садибу до реєстру нерухомих пам'яток України[5].{" "}
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
        {/* <MapContainer
          center={[currentObject.latitude, currentObject.longitude]}
          zoom={11}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[currentObject.latitude, currentObject.longitude]}>
            <Popup>d</Popup>
          </Marker>
        </MapContainer> */}
      </div>
    </div>
  );
};

export default ObjectPage;
