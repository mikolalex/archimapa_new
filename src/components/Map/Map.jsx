import "./Map.less";
import React from "react";
import PreviewCard from "../PreviewCard/PreviewCard";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";

const Map = ({
  objects,
  isWindowBlured,
  setIsWindowBlured,
  setLatitude,
  setLongitude,
}) => {
  function LocationMarker() {
    if (isWindowBlured) {
      useMapEvents({
        click(e) {
          // setSelectedPosition({
          //   latitude: e.latlng.lat,
          //   longitude: e.latlng.lng,
          // });
          setLatitude(e.latlng.lat);
          setLongitude(e.latlng.lng);
          setIsWindowBlured(false);
        },
      });
    }
  }

  return (
    <div className="mapRoot">
      <div className="map-list-switch">
        <button className="navigation-button-map button">Карта</button>
        <button className="navigation-button-list button">Список</button>
      </div>
      <div className={isWindowBlured ? "map-block active" : "map-block"}>
        <MapContainer
          center={[49.089980204600856, 31.437540444932036]}
          zoom={6}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
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
