import React from "react";
import "./PreviewCard.less";

const PreviewCard = () => {
  return (
    <div className="previewCardRoot">
      <div className="preview-card-img">
        <img src="img/example_img.png" alt="" />
        <img src="icons/close.png" alt="" className="close-icon" />
      </div>

      <div className="preview-card-info">
        <h2 className="preview-card-title">Садиба Барбана</h2>
        <p className="preview-card-address">
          <img src="icons/address.png" alt="" /> вулиця Обсерваторна, 6, Київ,
          02000
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
        <p className="preview-card-description">
          Історичний одноповерховий будинок, що розташований у Києві за адресою
          Обсерваторна, 6. Садибу було зведено наприкінці XIX століття для
          Олександра Барбана[3] та неправомірно частково знесено 2021 року[4]
        </p>
      </div>
    </div>
  );
};

export default PreviewCard;
