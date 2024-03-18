import "./Map.less";
import React, { useState, useEffect } from "react";
import { getObjects } from "../../utils";
import { defaultBounds } from "../../constance";

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

const Map = ({
  center,
  zoom,
  openPopup,
  previewCardPosition,
  requestedFilters,
}) => {
  const [bounds, setBounds] = useState(defaultBounds);

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
  }

  const [objects, setObjects] = useState([]);

  useEffect(() => {
    getObjects(requestedFilters, bounds, setObjects);
  }, [bounds, requestedFilters]);

  return (
    <div className="map-block">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} bounds>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GetBounds />
        <MarkerClusterGroup>
          {objects &&
            objects.map((marker) => (
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
