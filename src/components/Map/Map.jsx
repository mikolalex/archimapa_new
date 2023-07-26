import "./Map.less";
import React from "react";
import PreviewCard from "../PreviewCard/PreviewCard";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";

const Map = ({ objects }) => {
  return (
    <div className="mapRoot">
      <div className="map-list-switch">
        <button className="navigation-button-map button">Карта</button>
        <button className="navigation-button-list button">Список</button>
      </div>
      <div className="map-block">
        <MapContainer
          center={[49.089980204600856, 31.437540444932036]}
          zoom={6}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup>
            {objects.map((marker) => (
              <Marker position={marker.geocode} key={marker.id}>
                <Popup closeButton={false}>
                  <PreviewCard id={marker.id} geocode={marker.geocode} />
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
