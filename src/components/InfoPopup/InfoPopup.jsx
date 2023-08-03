import React from "react";
import "./InfoPopup.less";

const InfoPopup = ({ infoText, setInfoText }) => {
  return (
    <div className="InfoPopupRoot">
      <div className="info">{infoText}</div>
      <button className="info-close-button" onClick={() => setInfoText("")}>
        Continue
      </button>
    </div>
  );
};

export default InfoPopup;
