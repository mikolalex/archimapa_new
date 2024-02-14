import React, { useState, useEffect } from "react";
import "./Map.less";
import { mainUrl } from "../../module";
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

const Map = ({ center, zoom, openPopup, previewCardPosition }) => {
  const [bounds, setBounds] = useState({
    east: 39.46289062500001,
    north: 52.89564866211353,
    south: 44.98034238084973,
    west: 23.4228515625,
  });
  const [objects, setObjects] = useState([]);

  async function getObjects(link) {
    fetch(link)
      .then((response) => response.json())
      .then((json) => setObjects(json));
  }

  function GetBounds() {
    const map = useMap();
    useMapEvents({
      moveend() {
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
      `${mainUrl}/objects?north=${bounds.north}&south=${bounds.south}&east=${bounds.east}&west=${bounds.west}`
    );
  }, [bounds]);

  return (
    <div className="map-block">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} bounds>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GetBounds />
        <MarkerClusterGroup>
          {objects.map((marker) => (
            <Marker
              position={[marker.latitude, marker.longitude]}
              key={marker.id}
              eventHandlers={{
                click: () => {
                  openPopup("PreviewCard", { marker, previewCardPosition });
                },
              }}
            >
              <Popup closeButton={false}></Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
