import "./Map.less";
import React from "react";
import PreviewCard from "../PreviewCard/PreviewCard";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { useEffect } from "react";

const Map = ({
  isWindowBlured,
  setIsWindowBlured,
  setLatitude,
  setLongitude,
  bounds,
  setBounds,
}) => {
  const [objects, setObjects] = useState([]);

  async function getObjects(link) {
    fetch(link)
      .then((response) => response.json())
      .then((json) => setObjects(json));
  }

  function LocationMarker() {
    if (isWindowBlured) {
      useMapEvents({
        click(e) {
          setLatitude(e.latlng.lat);
          setLongitude(e.latlng.lng);
          setIsWindowBlured((prev) => ({ popup: true, map: false }));
        },
      });
    }
  }
  function GetBounds() {
    const map = useMap();
    useMapEvents({
      move() {
        const data = map.getBounds();
        setBounds({
          north: data._northEast.lat,
          south: data._southWest.lat,
          east: data._northEast.lng,
          west: data._southWest.lng,
        });
      },
    });
    return null;
  }

  useEffect(() => {
    getObjects(
      `https://map.transsearch.net/objects?north=${bounds.north}&south=${bounds.south}&east=${bounds.east}&west=${bounds.west}`
    );
  }, [bounds]);

  return (
    <div className="mapRoot">
      <div className="map-list-switch">
        <button className="navigation-button-map button">Карта</button>
        <button className="navigation-button-list button">Список</button>
      </div>
      <div
        className={isWindowBlured.map ? "map-block non-blured" : "map-block"}
      >
        <MapContainer
          center={[49.089980204600856, 31.437540444932036]}
          zoom={6}
          scrollWheelZoom={true}
          bounds
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
          <GetBounds />
          <MarkerClusterGroup>
            {objects.map((marker) => (
              <Marker
                position={[marker.latitude, marker.longitude]}
                key={marker.id}
              >
                <Popup closeButton={false}>
                  <PreviewCard
                    geocode={[marker.latitude, marker.longitude]}
                    marker={marker}
                  />
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
