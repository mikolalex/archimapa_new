import "./MapBlock.less";
import React from "react";
import Map from "./Map";

const MapBlock = ({ openPopup, setObjects, objects, filteredObjects, setFilteredObjects }) => {
  return (
    <div className="mapRoot">
      <div className="map-block">
        <Map
          center={[49.089980204600856, 31.437540444932036]}
          zoom={6}
          openPopup={openPopup}
          previewCardPosition={"topPreviewCardPosition"}
          setObjects={setObjects}
          objects={objects}
          filteredObjects={filteredObjects} setFilteredObjects={setFilteredObjects} 
        />
      </div>
    </div>
  );
};

export default MapBlock;
