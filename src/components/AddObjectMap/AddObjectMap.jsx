import React from "react";
import "./AddObjectMap.less";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AddObjectMap = ({ setLatitude, setLongitude, closePopup }) => {
  function LocationMarker() {
    useMapEvents({
      click(e) {
        setLatitude(e.latlng.lat);
        setLongitude(e.latlng.lng);
        closePopup();
      },
    });
  }
  return (
    <div className="add-object-map-block">
      <img
        src="/icons/close.png"
        alt=""
        className="close-icon"
        onClick={() => closePopup()}
      />
      <div className="notice">please select the location of the object</div>
      <MapContainer
        center={[49.089980204600856, 31.437540444932036]}
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default AddObjectMap;
