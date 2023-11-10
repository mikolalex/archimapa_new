import React from "react";
import "./InfoPopup.less";

const InfoPopup = ({ infoText, closePopup }) => {
  setTimeout(() => closePopup(), 2000);

  return (
    <div className="InfoPopupRoot">
      <div className="info-popup-block-content">
        <div className="info">{infoText}</div>
      </div>
    </div>
  );
};

export default InfoPopup;
