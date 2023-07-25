import "./Map.less";
import React from "react";
import PreviewCard from "../PreviewCard/PreviewCard";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const markers = [
    {
      id: 1,
      geocode: [50.43064609085728, 30.48826272549254],
      popup: "marker1",
    },
    {
      id: 2,
      geocode: [47.951618726638536, 33.357941298473676],
      popup: "marker2",
    },
    {
      id: 3,
      geocode: [48.155339589696794, 24.28114418795262],
      popup: "marker3",
    },
  ];

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
            {markers.map((marker) => (
              <Marker position={marker.geocode} key={marker.id}>
                <Popup closeButton={false}>
                  <PreviewCard id={marker.id} />
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
