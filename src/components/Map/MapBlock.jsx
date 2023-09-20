import "./MapBlock.less";
import React from "react";
import Map from "./Map";

const MapBlock = ({ openPopup }) => {
  return (
    <div className="mapRoot">
      <div className="map-list-switch">
        <button className="navigation-button-map button">Карта</button>
        <button className="navigation-button-list button">Список</button>
      </div>
      <div className="map-block">
        <Map
          center={[49.089980204600856, 31.437540444932036]}
          zoom={6}
          openPopup={openPopup}
          previewCardPosition={"topPreviewCardPosition"}
        />
      </div>
    </div>
  );
};

export default MapBlock;
