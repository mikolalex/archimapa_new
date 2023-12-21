import React from "react";
import "./PreviewCard.less";
import { Link } from "react-router-dom";
import { mainUrl } from "../../../module";

const PreviewCard = ({ marker, closePopup, previewCardPosition }) => {
  return (
    <div className={previewCardPosition + " previewCardRoot"}>
      <div className="preview-card-img">
        {marker.images[0] && (
          <img
            src={mainUrl + marker.images[0].preview_url}
            alt="preview-img"
            className="preview-img"
          />
        )}

        <img
          src="/icons/close.png"
          alt=""
          className="close-icon"
          onClick={() => closePopup()}
        />
      </div>

      <div className="preview-card-info">
        <Link
          to={`/object/${marker.id}`}
          style={{ textDecoration: "none" }}
          onClick={() => closePopup()}
        >
          <h2 className="preview-card-title">{marker.title}</h2>
        </Link>
        <p className="preview-card-address">
          <img src="/icons/address.png" alt="address_icon" /> вулиця
          Обсерваторна, 6, Київ, 02000
        </p>
        <p className="preview-card-year">
          <span className="preview-card-bold-title">Роки побудови</span> 1891
        </p>
        <p className="preview-card-decline-term">
          <span className="preview-card-bold-title">Термін занепаду</span> 25
        </p>
        <p className="preview-card-state">
          <span className="preview-card-bold-title">Стан</span> частково
          зруйновано
        </p>
        <p className="preview-card-description">{marker.description}</p>
      </div>
    </div>
  );
};

export default PreviewCard;
