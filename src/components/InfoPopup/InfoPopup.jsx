import React from "react";
import "./InfoPopup.less";

const InfoPopup = ({
  infoText,
  setInfoText,
  setIsWindowBlured,
  isWindowBlured,
}) => {
  return (
    <div
      className={
        isWindowBlured.popup ? "InfoPopupRoot non-blured" : "InfoPopupRoot"
      }
    >
      <div className="info">{infoText}</div>
      <button
        className="info-close-button"
        onClick={() => (
          setInfoText(""), setIsWindowBlured({ map: false, popup: false })
        )}
      >
        Continue
      </button>
    </div>
  );
};

export default InfoPopup;
