import React from "react";

const MapListSwitcher = ({ setIsListOpen, isListOpen }) => {
  return (
    <div className="map-list-switch">
      <button
        className={
          isListOpen
            ? "navigation-button-map button"
            : "navigation-button-map button active"
        }
        onClick={() => setIsListOpen(false)}
      >
        Карта
      </button>
      <button
        className={
          isListOpen
            ? "navigation-button-list button active"
            : "navigation-button-list button"
        }
        onClick={() => setIsListOpen(true)}
      >
        Список
      </button>
    </div>
  );
};

export default MapListSwitcher;
