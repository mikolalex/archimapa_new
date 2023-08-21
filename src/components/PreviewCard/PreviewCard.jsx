import React from "react";
import "./PreviewCard.less";
import { Link } from "react-router-dom";

const PreviewCard = ({ marker }) => {
  return (
    <div className="previewCardRoot">
      <div className="preview-card-img">
        <img src="/img/example_img.png" alt="object-img" />
        <img src="/icons/close.png" alt="" className="close-icon" />
      </div>

      <div className="preview-card-info">
        <Link to={`/object/${marker.id}`} >
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
