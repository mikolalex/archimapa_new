import React from "react";
import "./InfoPopup.less";

const InfoPopup = ({ infoText, closePopup }) => {
  return (
    <div className="InfoPopupRoot">
      <div className="info-popup-block-content">
        <div className="info">{infoText}</div>
        <button className="info-close-button" onClick={() => closePopup()}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default InfoPopup;
