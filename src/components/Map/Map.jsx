import "./Map.less";
import React from "react";
import PreviewCard from "../PreviewCard/PreviewCard";

const Map = () => {
  return (
    <div className="mapRoot">
      <div className="map-list-switch">
        <button className="navigation-button-map button">Карта</button>
        <button className="navigation-button-list button">Список</button>
      </div>
      <div className="map-block">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.5678344241364!2d30.48567707635903!3d50.430523071588354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cee9c6ab905b%3A0x226e12153cabed24!2z0LLRg9C70LjRhtGPINCa0YPQtNGA0Y_RiNC-0LLQsCwgNywg0JrQuNGX0LIsIDAzMDM1!5e0!3m2!1suk!2sua!4v1687613227227!5m2!1suk!2sua"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>
      </div>

      {/* <PreviewCard/> */}
    </div>
  );
};

export default Map;
